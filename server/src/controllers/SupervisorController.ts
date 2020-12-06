import { NextFunction, Request, Response } from 'express';
import { SupervisorModel, SupervisorKeys, OrganisationModel } from '../models';
import { Utils } from '../services';

class SupervisorController {
    constructor() {

    }

    // CREATE

    public new = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // get props
            const { first_name, last_name, verifiedOrganisationId, organisation_id, auth } = req.body;

            // filter props to existing keys
            const filteredProps = Utils.filterKeysAgainstModelKeys({ 
                first_name,
                last_name,
                organisation: verifiedOrganisationId || organisation_id,
                auth,
            }, SupervisorKeys);

            // create new model
            const newSupervisor = new SupervisorModel(filteredProps);

            // add supervisor to organisation
            await OrganisationModel.findOneAndUpdate({ _id: verifiedOrganisationId || organisation_id }, { '$push': { 'supervisors': newSupervisor._id} }, { new: true, useFindAndModify: false })
                .catch((error) => {
                    throw { status: 500, msg: "Could not save data" };
                });

            // save model
            const savedSupervisor = await newSupervisor.save()
                .catch((error) => {
                    if (error.code == 11000) throw { status: 412, msg: "Duplicate supervisor name" };
                    throw { status: 500, msg: "Could not save data." };
                });
            
            // delete password from return model
            savedSupervisor.auth.password = undefined

            res.send(savedSupervisor);
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    public getSelf = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const id = req.body.verifiedSupervisorId;
            
            // get model
            const supervisor = await SupervisorModel.findOne({'_id': id})
                .catch((error) => {
                    throw { status: 404, msg: "Could not find data" };
                });
            
            if (supervisor == null) throw { status: 404, msg: "Could not find data" };

            res.send({supervisor: Utils.obscureAuthOfModel(supervisor)});
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    // READ
    
    public getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const organisationId = req.body.verifiedOrganisationId;
            const supervisorId = req.params.id;
            
            // get model
            const organisation = await OrganisationModel.findOne({'_id': organisationId})
                .catch((error) => {
                    throw { status: 404, msg: "Could not find data" };
                });

            const populatedOrganisation = await organisation.populate('supervisors').execPopulate();

            // filter by id
            const supervisors = populatedOrganisation.supervisors.filter((supervisor) => supervisor._id == supervisorId && supervisor._soft_deleted == false);
            if (supervisors.length == 0) throw { status: 404, msg: "Could not find data" };
            const supervisor = supervisors[0];

            res.send({supervisor: Utils.obscureAuthOfModel(supervisor)});
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const id = req.body.verifiedOrganisationId;
            
            // get model
            const organisation = await OrganisationModel.findOne({'_id': id})
                .catch((error) => {
                    throw { status: 404, msg: "Could not find data" };
                });

            if (organisation == null) throw { status: 404, msg: "Could not find organization" };

            const populatedOrganisation = await organisation.populate('supervisors').execPopulate();

            const filteredDeleted = populatedOrganisation.supervisors.filter((supervisor) => supervisor._soft_deleted == false)

            const supervisors = filteredDeleted.map((supervisor) => {
                return Utils.obscureAuthOfModel(supervisor)
            });
            res.send({organisation_id: id, supervisors});
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }
    
    public getAllAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            
            // get model
            const supervisors = await SupervisorModel.find()
                .catch((error) => {
                    throw { status: 404, msg: "Could not find data" };
                });


            const populatedOrganisation = supervisors.supervisors.map((supervisor) => {
                const populatedSupervisor = supervisor.populate('supervisors').execPopulate()
                return Utils.obscureAuthOfModel(populatedSupervisor)
            });
            res.send({supervisors: populatedOrganisation});
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    // UPDATE
    public update = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { verifiedOrganisationId, id, changes } = req.body;

            if (!changes || !id) throw { status: 412, msg: "Given data does not meet requirements" }

            // filter props to existing keys
            const filteredProps = Utils.filterKeysAgainstModelKeys(changes, SupervisorKeys);

            // find organisation
            const organisation = await OrganisationModel.findOne({'_id': verifiedOrganisationId});

            if (organisation.supervisors.includes(id)) {
                const update = await SupervisorModel.findOneAndUpdate({'_id': id}, filteredProps, {new: true})
                    .catch((error) => {
                        if (error.code == 11000) throw { status: 412, msg: "Duplicate supervisor name" };
                        throw { status: 500, msg: "Could not save data" };
                    });
                
                if (!update) throw { status: 404, msg: "Could not find data" };

                res.send({supervisorUpdated: Utils.obscureAuthOfModel(update)});
            } else { 
                throw { status: 404, msg: "Could not find supervisor in organization." }; 
            }
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    public authUpdate = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { verifiedOrganisationId, id, authUpdate } = req.body;

            if (!authUpdate || !id) throw { status: 412, msg: "Given data does not meet requirements" }

            if (authUpdate.newPassword != authUpdate.confirmNewPassword) throw { status: 412, msg: "Passwords do not match" }

            // find organisation
            const organisation = await OrganisationModel.findOne({'_id': verifiedOrganisationId});

            if (organisation.supervisors.includes(id)) {
                const update = await SupervisorModel.findOneAndUpdate({'_id': id}, {'auth.password': authUpdate.newPassword}, {new: true})
                    .catch((error) => {
                        console.log(error)
                        if (error.code == 11000) throw { status: 412, msg: "Duplicate supervisor name" };
                        throw { status: 500, msg: "Could not save data" };
                    });
                
                if (!update) throw { status: 404, msg: "Could not find data" };

                res.send({supervisorUpdated: Utils.obscureAuthOfModel(update)});
            } else { 
                throw { status: 404, msg: "Could not find supervisor in organization." }; 
            }
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    //  DELETE
    public softDelete = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { verifiedOrganisationId, id } = req.body;

            // find organisation
            const organisation = await OrganisationModel.findOne({'_id': verifiedOrganisationId});

            if (organisation.supervisors.includes(id)) {
                const update = await SupervisorModel.findOneAndUpdate({'_id': id}, {'_soft_deleted': true}, {new:true})
                    .catch((error) => {
                        throw { status: 500, msg: "Could not delete data" };
                    });

                res.send({deletionCompleted: true});
            } else { 
                throw { status: 404, msg: "Could not find supervisor in organization." }; 
            }
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

}

export default SupervisorController;
import { NextFunction, Request, Response } from 'express';
import { OrganisationModel, OrganisationKeys } from '../models';
import { Utils } from '../services';

class OrganisationController {
    constructor() {

    }

    public new = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // get props
            const { name, auth } = req.body;

            // filter props to existing keys
            const filteredProps = Utils.filterKeysAgainstModelKeys({
                name,
                auth,
            }, OrganisationKeys);

            // create new model
            const newOrganisation = new OrganisationModel(filteredProps);

            // save model
            const savedOrganisation = await newOrganisation.save()
                .catch((error) => {
                    if (error.code == 11000) throw { status: 412, msg: "Duplicate organisation name" };
                    throw { status: 500, msg: "Could not save data" };
                });
            
            res.send(Utils.obscureAuthOfModel(savedOrganisation));
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    public getById = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {

            const id = req.body.verifiedOrganisationId || req.params.id;
            
            // get model
            const organisation = await OrganisationModel.findOne({ _id: id })
                .catch((error) => {
                    throw { status: 404, msg: "Could not find data" };
                });
            
            if (!organisation) throw { status: 404, msg: "Could not find data" };

            // populate organisation
            let populatedOrganisation = await organisation.populate('supervisors').execPopulate()
            populatedOrganisation = await organisation.populate('kids').execPopulate()

            res.send(Utils.obscureAuthOfModel(organisation));
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }

    public getAll = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // get model
            const organisations = await OrganisationModel.find()
                .catch((error) => {
                    throw { status: 404, msg: "Could not find data" };
                });

            const populatedOrganisation = await Promise.all(organisations.map(async (organisation) => {
                let populatedOrganisation = await organisation.populate('supervisors').execPopulate()
                populatedOrganisation = await organisation.populate('kids').execPopulate()
                return Utils.obscureAuthOfModel(populatedOrganisation)
            }));
            res.send({organisations: populatedOrganisation});
        } catch (error) {
            const log = (error.msg) ? `!!! ERROR ${error.msg}` : error;
            console.log(log) 
            res.status(error.status).send({message: error.msg});
        }
    }
    
}

export default OrganisationController;
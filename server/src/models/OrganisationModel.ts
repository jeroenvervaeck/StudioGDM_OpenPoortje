import * as mongoose from 'mongoose';
import { Document, Schema, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { IAuth } from './d.types';
import { ISupervisor, IKid } from './';

interface IOrganisation extends Document {
    auth: IAuth;
    name: string;
    supervisors: ISupervisor;
    kids: IKid[];
}

const organisationSchema: Schema = new Schema({
    auth: {
        username: { type: String, required: true,  unique: true },
        password: { type: String, required: true }
    },
    name: { type: String, maxLength: 100, required: true, trim: true},
    supervisors: [{ type: Schema.Types.ObjectId, ref: 'supervisor', required: true}],
    kids: [{ type: Schema.Types.ObjectId, ref: 'kid', required: true}],
    _soft_deleted: { type: Boolean }
}); 

const OrganisationKeys = Object.keys(organisationSchema);

organisationSchema.pre('save', function(next) {
    if (this._soft_deleted === undefined) this._soft_deleted = false;
    const schema = this;
    // generate a salt
    bcrypt.genSalt(12, function(err, salt) {
        if (err) return next(err);

        // hash the password using our new salt
        bcrypt.hash(schema.auth.password, salt, function(err, hash) {
            if (err) return next(err);
            // override the cleartext password with the hashed one
            schema.auth.password = hash;
            next();
        })
    });
});


const OrganisationModel : Model<IOrganisation> = mongoose.model<IOrganisation>('organisation', organisationSchema);

export {
    OrganisationKeys,
    OrganisationModel, 
    organisationSchema,
    IOrganisation,
}
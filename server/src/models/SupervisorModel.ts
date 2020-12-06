import * as mongoose from 'mongoose';
import { Document, Schema, Model } from 'mongoose';
import * as bcrypt from 'bcrypt';

import { IAuth } from './d.types';
import { IOrganisation } from './OrganisationModel';


interface ISupervisor extends Document {
    auth: IAuth;
    first_name: string;
    last_name: string;
    organisation: IOrganisation;
    _softDeleted: boolean;
}

const supervisorSchema: Schema = new Schema({
    auth: {
        username: { type: String, required: true,  unique: true },
        password: { type: String, required: true }
    },
    first_name: { type: String, maxLength: 100, required: true, trim: true},
    last_name: { type: String, maxLength: 100, required: true, trim: true},
    organisation: { type: Schema.Types.ObjectId, ref: 'organisation', required: true},
    _soft_deleted: { type: Boolean }
}); 

const SupervisorKeys = Object.keys(supervisorSchema);

supervisorSchema.pre('save', function(next) {
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
        });
    });
});

const SupervisorModel : Model<ISupervisor> = mongoose.model<ISupervisor>('supervisor', supervisorSchema);

export {
    SupervisorKeys,
    SupervisorModel, 
    supervisorSchema,
    ISupervisor,
}
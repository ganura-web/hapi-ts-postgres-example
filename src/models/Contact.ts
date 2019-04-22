import * as joi from '@hapi/joi';
import { AllowNull, Column, Model, Table, Unique } from 'sequelize-typescript';

export const joiValidationRules = joi
    .object({
        company: joi.string().empty(),
        email: joi
            .string()
            .email()
            .required(),
        firstName: joi.string().min(1),
        lastName: joi.string().min(1),
        phone: joi
            .number()
            .min(10)
            .required()
            .default(1234567890)
    })
    .label('Contact');
@Table
class Contact extends Model<Contact> {
    @Column
    public firstName!: string;

    @Column
    public lastName!: string;

    @AllowNull(false)
    @Unique
    @Column
    public email!: string;

    @Column
    public company!: string;

    @Column
    public phone!: number;
}

export default Contact;

import { Column, Model, Table } from 'sequelize-typescript';

@Table
class Contact extends Model<Contact> {
    @Column
    public firstName!: string;

    @Column
    public lastName!: string;

    @Column
    public email!: string;

    @Column
    public company!: string;

    @Column
    public phone!: number;
}

export default Contact;

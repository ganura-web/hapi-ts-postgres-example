import { Sequelize } from 'sequelize-typescript';
import Contact from '../models/Contact';

export default function({
    database,
    username,
    password
}: {
    database: string;
    username: string;
    password: string;
}) {
    const sequelize = new Sequelize({
        database,
        password,
        username,
        dialect: 'postgres',
        host: 'localhost',
        port: 5432
    });
    sequelize.addModels([Contact]);

    return sequelize;
}

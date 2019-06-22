import { Sequelize } from 'sequelize-typescript';
import Contact from '../models/Contact';
import { Config } from '../config';

export default function({
    database,
    username,
    password
}: Config): Sequelize {
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

import { DataSource } from 'typeorm';

export const AppDataSource = new DataSource({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root', // змініть на вашого користувача, якщо потрібно
    password: 'password',     // або ваш пароль
    database: 'mydb', // назва бази даних
    entities: ["dist/**/*.entity.js"],
    synchronize: true, // автоматичне створення таблиць
    logging: true,     // корисно для дебагу
});




// import {DestinationEntity} from "./destinations/destination.entity";
// import {DataSource, DataSourceOptions} from "typeorm";
// import {DestinationMigration1729717350861} from "./migrations/1729717350861-DestinationMigration";

// export const AppDataSource = new DataSource({
//     type: "postgres",
//     host: "localhost",
//     port: 5432,
//     username: "postgres",
//     password: "0723",
//     database: "weblabdb",
//     synchronize: false,
//     logging: true,
//     entities: [DestinationEntity],
//     migrations: [DestinationMigration1729717350861]
// })
import dotenv from 'dotenv';

dotenv.config();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;
const DB_URI = process.env.DB_URI;

export { DB_USER, DB_PASSWORD, DB_URI }
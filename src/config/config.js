import dotenv from 'dotenv';
dotenv.config();

export const config ={
    port: process.env.PORT || 3000,
    apiKey: process.env.APY_KEY,
    clave_token: process.env.CLAVE_TOKEN
};

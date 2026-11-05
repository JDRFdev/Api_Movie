import { config } from "../config/config.js";
import Usuarios from '../data/usuarios.json' with {type:'json'};
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const postAuthLogin= async (req,res,next)=>{
    try {
        const username=req.body.username ;
        const password=req.body.password;

        if( !username || !password){
            const error=new Error(`Se requieren las credenciales para acceder`);
            error.status=400;
            throw error;
        }
        const usuario= Usuarios.find(usuario => usuario.username===username);
        if(!usuario){
            const error=new Error(`Credenciales incorrectas`);
            error.status=401;
            throw error; 
        }
        const passwordValida= await bcrypt.compare(password,usuario.password);
         if(!passwordValida){
             const error=new Error(`Credenciales incorrectas`);
             error.status=401;
             throw error; 
        }
        const token =jwt.sign({username:usuario.username},config.clave_token,{ expiresIn: '2m' })
        return res.status(200).json({token});
    } catch (error) {
        next(error)
    }
}



export default postAuthLogin;
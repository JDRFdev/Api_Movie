import { config } from "../config/config.js";
import jwt from 'jsonwebtoken';

const authVerifyToken=(req,res,next)=>{
try {
    const header = req.header("Authorization") || "";
    const token = header.split(" ")[1];
    if (!token) {
            const error=new Error(`Token no proporcionado`);
            error.status=401;
            throw error;
    }
    try{
    jwt.verify(token, config.clave_token);
    }catch(err){
        const error =new Error(
                    err.name === "TokenExpiredError" ? "Sesión expirada" : "Token inválido"
        )
        error.status = 401;
      throw error;
    }
    next();
} catch (error) {
    next(error);
}
  
}

export default authVerifyToken;
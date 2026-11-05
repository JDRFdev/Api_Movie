


const errorhandler=(err,req,res,next)=>{
    if(res.headersSent){
        return next(err);
    }
    const status=err.status || 500;
    const message= status===500 ? "Error en el servidor" : err.message;
    if(status===500){
        console.log(err);
    }
    res.status(status).json({mensaje:message,status: status})
}

export default errorhandler;
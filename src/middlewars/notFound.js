const notFound =(req, res,next)=>{
    const error = new Error ('Servicio no encontrado');
    error.status=404;
    return next(error);
}

export default notFound;
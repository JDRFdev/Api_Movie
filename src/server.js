import  express from 'express';
import cors from 'cors';
import movieRouter from './routes/movie.routes.js'
import { config } from './config/config.js';
import errorhandler from './middlewars/errorhandler.js';
import notFound from './middlewars/notFound.js';
import helmet from 'helmet';
import morgan from 'morgan';
import authRouter from './routes/auth.routes.js'
import authVerifyToken from './middlewars/authVerifyToken.js';
class Server{
    #app;
    #port;
    #appiPaths={
        movies:'/api/movie',
        auth:'/auth'
    };

    constructor(){
        this.#app=express();
        this.#port= config.port;
        this.middlewares();
        this.authRoutes();
        this.authmiddlewar();
        this.routes();
        this.notFoundhandler();
        this.errorhandler();
    }
    listen(){
        this.#app.listen(this.#port,()=>{
            console.log(`Server is running on port ${this.#port}`)
        })
    }
    middlewares(){
        const coreOptions={
            "methods" : 'GET'
        }
        this.#app.use(helmet());
        this.#app.use(cors(coreOptions));
        this.#app.use(morgan('dev'));
        this.#app.use(express.json());
    }
    authmiddlewar(){
        this.#app.use(authVerifyToken);
    }
    routes(){
        this.#app.use(this.#appiPaths.movies,movieRouter);
    }
    authRoutes(){
        this.#app.use(this.#appiPaths.auth,authRouter);
    }
    notFoundhandler(){
        this.#app.use(notFound);
    }
    errorhandler(){
        this.#app.use(errorhandler);
    }
}
export default Server;
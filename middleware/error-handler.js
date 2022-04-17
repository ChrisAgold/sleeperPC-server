import {StatusCodes} from 'http-status-codes'
import {log} from "nodemon/lib/utils";

const errorHandlerMiddleware = (err,req,res,next) => {
    console.log(err);
    const defaultError = {
        StatusCode:StatusCodes.INTERNAL_SERVER_ERROR,
        msg:'Something went wrong, try again later',
    }
    res.status(defaultError.StatusCode).json({msg:err})
}

export default errorHandlerMiddleware

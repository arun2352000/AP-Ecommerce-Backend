//handle error 
// if (err) {
//     console.error(err);
//     return res.status(500).send({ message: "Error updating user" });
//     }

class ErrorHandler extends Error{
    constructor(message, statusCode){
        super(message);
        this.statusCode = statusCode;
        Error.captureStackTrace(this, this.constructor)
}
}
export default ErrorHandler;
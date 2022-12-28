import {StatusCodes} from "http-status-codes";
import CustomAPIError from "./CustomAPIError.js";

class BadRequestsError extends CustomAPIError {
    constructor(message) {
        super(message);
        this.statusCode = StatusCodes.NOT_FOUND
    }
}

export default BadRequestsError

export class AppError extends Error {
    constructor(
        public statusCode: number,
        public message: string,
        public isOperational = true
    ) {
        super(message);
        Object.setPrototypeOf(this, AppError.prototype);
        Error.captureStackTrace(this, this.constructor);
    }
}

export class ValidationError extends AppError {
    constructor(message: string) {
        super(400, message);
    }
}

export class AuthenticationError extends AppError {
    constructor(message: string = "Authentication failed") {
        super(401, message);
    }
}

export class NotFoundError extends AppError {
    constructor(message: string = "Resource not found") {
        super(404, message);
    }
}

export class DatabaseError extends AppError {
    constructor(message: string = "Database operation failed") {
        super(500, message);
    }
}

export class ConflictError extends AppError {
    constructor(message: string = "Resource already exists") {
        super(409, message);
    }
}

export class ConnectionError extends AppError {
    constructor(message: string = "Connection Failed") {
        super(500, message);
    }
}
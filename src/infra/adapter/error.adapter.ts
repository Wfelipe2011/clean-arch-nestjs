import { logger } from "./logger.adapter";

export interface IError extends Omit<Error, 'stack'> {
	code: number
}

class ErrorHandlerAdapter {

	badRequest(message: string): IError {
		const error = new Error(message);
		error.name = 'BadRequest';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 400,
		};
	};

	notFound(message = 'Usuário não encontrado'): IError {
		const error = new Error(message);
		error.name = 'NotFound';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 404,
		};
	};

	unauthorized(message = 'Não autorizado'): IError {
		const error = new Error(message);
		error.name = 'Unauthorized';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 401,
		};
	};

	forbidden(message: string): IError {
		const error = new Error(message);
		error.name = 'Forbidden';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 403,
		};
	};

	conflict(message: string): IError {
		const error = new Error(message);
		error.name = 'Conflict';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 409,
		};
	};

	internalServerError(message = 'Internal Server Error'): IError {
		const error = new Error(message);
		error.name = 'InternalServerError';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 500,
		};
	};

	serviceUnavailable(message = 'Serviço indisponível'): IError {
		const error = new Error(message);
		error.name = 'ServiceUnavailable';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 503,
		};
	};

	notImplemented(message: string): IError {
		const error = new Error(message);
		error.name = 'NotImplemented';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 501,
		};
	};

	badGateway(message: string): IError {
		const error = new Error(message);
		error.name = 'BadGateway';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 502,
		};
	};

	gatewayTimeout(message: string): IError {
		const error = new Error(message);
		error.name = 'GatewayTimeout';
		logger.error(message);
		throw {
			message: error.message,
			name: error.name,
			code: 504,
		};
	};

}


export const ErrorHandler = new ErrorHandlerAdapter();
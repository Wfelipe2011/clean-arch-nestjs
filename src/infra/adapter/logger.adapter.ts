import pino from 'pino';

const LoggerPino = pino({
	level: 'debug',
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
		},
	},
});

class Logger {
	info(message: string) {
		LoggerPino.info(message)
	}
	error(message: string | any) {
		LoggerPino.error(JSON.stringify(message, null, 2))
	}
	debug(message: string) {
		LoggerPino.debug(message)
	}
};

class FakeLogger {
	info(message: string) {
		console.log(message)
	}
	error(message: string | any) {
		console.log(JSON.stringify(message, null, 2))
	}
	debug(message: string) {
		console.log(message)
	}
};

export const logger = process.env.NODE_ENV === 'test' ? new FakeLogger() : new Logger();
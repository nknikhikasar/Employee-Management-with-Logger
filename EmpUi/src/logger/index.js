const { createLogger, format, transports } = require('winston');
const { combine, timestamp, printf } = format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} ${level}: ${message}`;
});
const logger = createLogger({
    //level: 'info',
    format: combine(
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        myFormat
    ),

    transports: [
        new transports.File({ filename: 'combined.log' }),
        new transports.File({ filename: 'combined.txt' }),
    ],
});
module.exports = logger; 
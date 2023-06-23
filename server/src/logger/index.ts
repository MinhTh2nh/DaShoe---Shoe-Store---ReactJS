import path from "node:path";
import winston from "winston";
import "winston-daily-rotate-file";

export default winston.createLogger({
    format: winston.format.combine(
        winston.format.splat(),
        winston.format.timestamp({
            format: "YYYY-MM-DD HH:mm:ss.SSS",
        }),
        winston.format.colorize(),
        winston.format.printf((log) => {
            if (log.stack) {
                return `[${log.timestamp}] [${log.level}] ${log.stack}`;
            }

            return `[${log.timestamp}] [${log.level}] ${log.message}`;
        })
    ),
    transports: [
        new winston.transports.Console({ level: "silly" }),
        new winston.transports.DailyRotateFile({
            filename: path.join(__dirname, "../..", "/logs", "%DATE%.log"),
            datePattern: "YYYY-MM-DD",
        }),
        new winston.transports.File({
            level: "error",
            filename: path.join(__dirname, "../..", "/logs", "errors.log"),
        }),
    ],
});

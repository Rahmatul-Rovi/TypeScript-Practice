// logger.ts
type LogType = "Success" | "Error" | "Warning";

function logMessage(msg: string, type: LogType): void {
    const timestamp = new Date().toLocaleTimeString();
    console.log(`[${timestamp}] ${type.toUpperCase()}: ${msg}`);
}

logMessage("Data saved successfully", "Success");
logMessage("File not found", "Error");
logMessage("Battery low", "Warning");
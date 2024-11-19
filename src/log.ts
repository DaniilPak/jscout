
export function log(message: string): void {
    const callerInfo = getCallerInfo();
    console.log(`[${callerInfo}] ${message}`);
}
  
function getCallerInfo(): string {
    const stack = new Error().stack || '';
    const stackLines = stack.split('\n');
    const callerLine = stackLines[3] || ''; // Adjust index for desired caller info

    const match = callerLine.match(/at (\S+)/);
    return match ? match[1] : 'Unknown';
}
  
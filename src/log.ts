// Expanded ANSI color codes
const COLORS = [
  '\x1b[31m', // Red
  '\x1b[32m', // Green
  '\x1b[34m', // Blue
  '\x1b[33m', // Yellow
  '\x1b[35m', // Magenta
  '\x1b[36m', // Cyan
  '\x1b[91m', // Bright Red
  '\x1b[92m', // Bright Green
  '\x1b[94m', // Bright Blue
  '\x1b[93m', // Bright Yellow
  '\x1b[95m', // Bright Magenta
  '\x1b[96m', // Bright Cyan
];
const RESET = '\x1b[0m'; // Reset color

// Map to store colors for each log source
const sourceColorMap = new Map<string, string>();

// Function to hash a source string into a consistent color index
function getColorForSource(source: string): string {
  if (!sourceColorMap.has(source)) {
    const colorIndex = Math.abs(hashString(source)) % COLORS.length;
    sourceColorMap.set(source, COLORS[colorIndex]);
  }
  return sourceColorMap.get(source) || RESET;
}

// Simple hash function for consistent color assignment
function hashString(str: string): number {
  return str
    .split('')
    .reduce((hash, char) => char.charCodeAt(0) + ((hash << 5) - hash), 0);
}

// Get caller information
function getCallerInfo(): string {
  const stack = new Error().stack || '';
  const stackLines = stack.split('\n');
  for (let i = 3; i < stackLines.length; i++) {
    const match = stackLines[i].match(/at (\S+) \(([^)]+)\)/);
    if (match) {
      const methodName = match[1];
      const fileInfo = match[2].replace(/^.*[\/]/, ''); // Remove file path, keep only filename:line:column
      return `${methodName}:${fileInfo}`;
    }
  }
  return 'Unknown';
}

// Main log function
export function log(...args: any[]): void {
  const callerInfo = getCallerInfo();
  const color = getColorForSource(callerInfo);
  console.log(`${color}[${callerInfo}]${RESET}`, ...args);
}

import { JSONValue } from "./jscout.interface";

export function fix(jsonString: string): JSONValue {
  // Step 1: Trim whitespace
  jsonString = jsonString.trim();

  // Step 2: Replace double double quotes with single double quotes
  // This targets values that have extra quotes, e.g., ""Alice"" -> "Alice"
  jsonString = jsonString.replace(/""([^"]+)""/g, '"$1"');

  // Step 3: Ensure all keys are quoted
  // This handles keys that might not be quoted, e.g., {name: "Alice"} -> {"name": "Alice"}
  jsonString = jsonString.replace(/([{,]\s*)([A-Za-z0-9_]+)\s*:/g, '$1"$2":');

  // Step 4: Add missing commas between key-value pairs
  // This handles cases where a key-value pair is directly followed by another without a comma
  // For example: "Alice" "age":25 -> "Alice", "age":25
  jsonString = jsonString.replace(/}(\s*"[^"]+":)/g, "},$1");

  // Step 5: Ensure the string starts with '{' and ends with '}'
  if (!jsonString.startsWith("{")) {
    jsonString = "{" + jsonString;
  }

  // Step 6: Balance the number of opening and closing braces
  const openingBraces = (jsonString.match(/{/g) || []).length;
  const closingBraces = (jsonString.match(/}/g) || []).length;
  const missingBraces = openingBraces - closingBraces;
  for (let i = 0; i < missingBraces; i++) {
    jsonString += "}";
  }

  // Step 7: Remove any trailing commas before closing braces or brackets
  jsonString = jsonString.replace(/,\s*([}\]])/g, "$1");

  return JSON.parse(jsonString);
}

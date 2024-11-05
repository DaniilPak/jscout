/**
 * Represents any valid JSON value.
 * A JSON value can be one of the following types:
 * - string
 * - number
 * - boolean
 * - null
 * - JSONObject: an object with string keys and values of type JSONValue
 * - JSONArray: an array of JSONValue elements
 */
export type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONObject
  | JSONArray;

/**
 * Represents a JSON object.
 * This interface defines an object where each key is a string and
 * each value is of type JSONValue, allowing for nested structures.
 */
export interface JSONObject {
  [key: string]: JSONValue;
}

/**
 * Represents an array of JSON values.
 * This interface extends the Array type, but restricts each element
 * to be of type JSONValue, ensuring all array elements are valid JSON types.
 */
export interface JSONArray extends Array<JSONValue> {}

/**
 * IJscout Interface
 * Defines a set of methods for working with JSON data, including searching
 * for field values, updating fields, and validating JSON strings.
 */
export interface IJscout {
  /**
   * Finds the first value for a given field name within a JSON object.
   * @param json - The JSON object to search within.
   * @param fieldName - The field name to search for.
   * @returns The value associated with the field if found; otherwise, returns undefined.
   */
  find(json: JSONObject, fieldName: string): JSONValue | undefined;

  /**
   * Updates the first occurrence of a field with a specified name in a JSON object.
   * If the field is found, its value is updated to the specified new value.
   * @param json - The JSON object to search and update.
   * @param fieldName - The name of the field to update.
   * @param newValue - The new value to assign to the field.
   */
  update(json: JSONObject, fieldName: string, newValue: JSONValue): void;

  /**
   * Checks if a given string is a valid JSON string.
   * @param jsonString - The string to validate as JSON.
   * @returns true if the string is valid JSON; otherwise, false.
   */
  isValid(jsonString: string): boolean;

  /**
   * Attempts to correct and parse a malformed JSON string.
   * This method applies basic fixes to common JSON format issues, such as:
   * - Adding missing outer braces
   * - Removing extra double quotes around values
   * - Adding missing commas between key-value pairs
   * After applying these fixes, the method parses the corrected string
   * and returns the resulting JSON object or array.
   *
   * Note: This method may not handle all complex cases of malformed JSON
   * and is intended for common, simple fixes. For highly complex issues,
   * manual correction may still be required.
   *
   * @param jsonString - The string to attempt to correct and parse as JSON.
   * @returns The corrected JSON object or array if successful; otherwise, throws an error.
   * @throws Will throw an error if the string cannot be parsed as valid JSON after attempted fixes.
   */
  fix(jsonString: string): JSONValue;
}

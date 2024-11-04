type JSONValue = string | number | boolean | null | JSONObject | JSONArray;
interface JSONObject {
  [key: string]: JSONValue;
}
interface JSONArray extends Array<JSONValue> {}

/**
 * jscout class for finding values in a JSON object.
 */
class jscout {
  /**
   * Finds the first value for a given field name in a JSON object.
   * This method is static, meaning you can call it without creating an instance of jscout.
   * @param json - The JSON object to search within.
   * @param fieldName - The field name to search for.
   * @returns The value of the field if found, otherwise undefined.
   */
  public static find(
    json: JSONObject,
    fieldName: string
  ): JSONValue | undefined {
    function recursiveSearch(obj: JSONValue): JSONValue | undefined {
      if (obj && typeof obj === "object") {
        if (Array.isArray(obj)) {
          // If the object is an array, iterate over each element
          for (const item of obj) {
            const result = recursiveSearch(item);
            if (result !== undefined) {
              return result;
            }
          }
        } else {
          // If the object is a standard JSON object
          const jsonObject = obj as JSONObject;
          if (fieldName in jsonObject) {
            return jsonObject[fieldName];
          }
          // Iterate over each key in the object
          for (const key in jsonObject) {
            if (jsonObject.hasOwnProperty(key)) {
              const result = recursiveSearch(jsonObject[key]);
              if (result !== undefined) {
                return result;
              }
            }
          }
        }
      }
      return undefined;
    }

    return recursiveSearch(json);
  }
}

// Export the jscout class
export { jscout };
export default jscout;

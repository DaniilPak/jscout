import { JSONValue, JSONObject } from "./jscout.interface";

export function find(
  json: JSONObject,
  fieldName: string
): JSONValue | undefined {
  function recursiveSearch(obj: JSONValue): JSONValue | undefined {
    if (obj && typeof obj === "object") {
      if (Array.isArray(obj)) {
        for (const item of obj) {
          const result = recursiveSearch(item);
          if (result !== undefined) {
            return result;
          }
        }
      } else {
        const jsonObject = obj as JSONObject;
        if (fieldName in jsonObject) {
          return jsonObject[fieldName];
        }
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

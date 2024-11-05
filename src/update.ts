import { JSONValue, JSONObject } from "./jscout.interface";

export function update(
  json: JSONObject,
  fieldName: string,
  newValue: JSONValue
): void {
  function recursiveUpdate(obj: JSONValue): boolean {
    if (obj && typeof obj === "object") {
      if (Array.isArray(obj)) {
        for (let i = 0; i < obj.length; i++) {
          if (recursiveUpdate(obj[i])) {
            return true;
          }
        }
      } else {
        const jsonObject = obj as JSONObject;
        if (fieldName in jsonObject) {
          jsonObject[fieldName] = newValue;
          return true;
        }
        for (const key in jsonObject) {
          if (jsonObject.hasOwnProperty(key)) {
            if (recursiveUpdate(jsonObject[key])) {
              return true;
            }
          }
        }
      }
    }
    return false;
  }

  recursiveUpdate(json);
}

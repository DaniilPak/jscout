# jscout

Jscout is a lightweight utility designed to help you traverse JSON structures to find the first matching key and return its value. With its simple API, you can easily search deeply nested JSON objects or arrays for the data you need.

## Installation

To install jscout, use npm or yarn:

```bash
npm install jscout
```

or

```bash
yarn add jscout
```

## Usage

Jscout provides a simple method to search through complex JSON objects to find a value by key. Below are some examples that demonstrate how you can use the utility.

### Importing jscout

You can import jscout using ES Modules:

```javascript
import jscout from "jscout";
```

Make sure your package.json have

```javascript
"type": "module"
```

Or if you are using CommonJS:

```javascript
const jscout = require("jscout").default;
```

### Example Usage

Here is an example of how you can use `jscout` to find a value in a JSON object:

```javascript
import jscout from "jscout";

const sampleJson = {
  name: "Alice",
  address: {
    city: "Wonderland",
    zip: "12345",
    details: {
      state: "Fantasy",
      country: "Magicland",
    },
  },
  hobbies: [
    { name: "Reading", level: "Advanced" },
    { name: "Exploring", location: "Wonderland" },
  ],
};

// Finding the first occurrence of 'city'
const city = jscout.find(sampleJson, "city");
console.log("City:", city); // Output: 'Wonderland'

// Finding the first occurrence of 'name'
const hobbyName = jscout.find(sampleJson, "name");
console.log("First name occurrence:", hobbyName); // Output: 'Alice'
```

### API

#### `jscout.find(json: JSONObject, fieldName: string): JSONValue | undefined`

- **`json`**: The JSON object or array you want to search.
- **`fieldName`**: The key you are searching for.

**Returns**: The value of the key if found, otherwise `undefined`.

### Example with Nested Arrays

```javascript
const data = {
  users: [
    {
      id: 1,
      profile: {
        name: "Bob",
        location: {
          city: "Atlantis",
        },
      },
    },
    {
      id: 2,
      profile: {
        name: "Carol",
        location: {
          city: "El Dorado",
        },
      },
    },
  ],
};

const city = jscout.find(data, "city");
console.log("City:", city); // Output: 'Atlantis'
```

### Handling Complex Structures

`jscout` is designed to recursively traverse both **objects** and **arrays** to find the first occurrence of the specified key. It works with deeply nested structures and supports searching through mixed arrays of objects and other data types.

## License

Jscout is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request on [GitHub](https://github.com/DaniilPak/jscout).

## Contact

If you have any questions or suggestions, please open an issue on [GitHub](https://github.com/DaniilPak/jscout/issues).

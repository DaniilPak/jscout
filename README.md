# jscout

Jscout is a utility designed to make everyday JSON work easier. It allows you to traverse JSON structures, update values effortlessly, check JSON validity, and even correct invalid JSON formats. With its straightforward API, it simplifies searching and manipulating deeply nested JSON objects or arrays for specific data.

## Contributing

If you have ideas for making JSON operations even easier, feel free to submit a pull request on GitHub. Contributions are always welcome!

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

// Example 1: Finding the first occurrence of 'city'
const city = jscout.find(sampleJson, "city");
console.log("City:", city); // Output: 'Wonderland'

// Example 2: Finding the first occurrence of 'name'
const hobbyName = jscout.find(sampleJson, "name");
console.log("First name occurrence:", hobbyName); // Output: 'Alice'

// Example 3: Updating the 'city' field
jscout.update(sampleJson, "city", "New Wonderland");
console.log("Updated city:", sampleJson.address.city); // Output: 'New Wonderland'

// Example 4: Validating a JSON string
const validJsonString = '{"name": "Alice", "age": 25}';
const invalidJsonString = '{name: "Alice", age: 25}';

console.log(
  "Is valid JSON (validJsonString):",
  jscout.isValid(validJsonString)
); // Output: true
console.log(
  "Is valid JSON (invalidJsonString):",
  jscout.isValid(invalidJsonString)
); // Output: false

// Example 5: Fixing a malformed JSON string
const brokenJsonString = `
"name": ""Alice"", 
"age": 25, 
"address": {
    "street": ""123 Main St"",
    "city": "Wonderland",
    "zipcode": "12345"
,
"contact": {
    "email": ""alice@example.com"",
    "phone": ""555-1234""
}
`;

try {
  const fixedJson = jscout.fix(brokenJsonString);
  console.log("Fixed JSON:", fixedJson);
  // Output: Corrected JSON object
} catch (error) {
  console.error("Could not fix JSON:", error.message);
}
```

### Handling Complex Structures

`jscout` is designed to recursively traverse both **objects** and **arrays** to find the first occurrence of the specified key. It works with deeply nested structures and supports searching through mixed arrays of objects and other data types.

## License

Jscout is licensed under the **MIT License**. See the [LICENSE](./LICENSE) file for more details.

## Contact

If you have any questions or suggestions, please open an issue on [GitHub](https://github.com/DaniilPak/jscout/issues).

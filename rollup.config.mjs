import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts", // Entry file for the library
  output: [
    {
      file: "dist/index.cjs", // CommonJS file extension updated to .cjs
      format: "cjs", // CommonJS output
      exports: "auto", // Automatically determine export type
      sourcemap: true,
    },
    {
      file: "dist/index.mjs", // ES Module file extension updated to .mjs
      format: "esm", // ES Module output
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(), // Resolves node_modules dependencies
    commonjs(), // Converts CommonJS to ES Modules
    typescript({
      tsconfig: "./tsconfig.json", // Use TypeScript configuration
      declaration: false, // Type declarations handled separately by tsc
    }),
  ],
  external: ["tslib"], // Exclude tslib from the bundle
};

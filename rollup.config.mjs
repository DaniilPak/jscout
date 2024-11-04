// rollup.config.js

import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";

export default {
  input: "src/index.ts",
  output: [
    {
      file: "dist/index.cjs.js",
      format: "cjs", // CommonJS output
      exports: "auto", // Automatically determine export type
      sourcemap: true,
    },
    {
      file: "dist/index.esm.js",
      format: "esm", // ES Module output
      sourcemap: true,
    },
  ],
  plugins: [
    resolve(),
    commonjs(),
    typescript({
      tsconfig: "./tsconfig.json",
      declaration: false, // Declaration files are handled by tsc
    }),
  ],
  external: ["tslib"], // Exclude tslib from the bundle
};

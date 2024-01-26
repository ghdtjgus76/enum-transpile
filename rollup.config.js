import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import { terser } from "rollup-plugin-terser";

export default [
  {
    input: "src/index1.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
      entryFileNames: "bundle1.js",
    },
    plugins: [resolve(), commonjs(), typescript(), terser()],
  },
  {
    input: "src/index2.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
      entryFileNames: "bundle2.js",
    },
    plugins: [resolve(), commonjs(), typescript(), terser()],
  },
  {
    input: "src/index3.ts",
    output: {
      dir: "dist",
      format: "es",
      sourcemap: true,
      entryFileNames: "bundle3.js",
    },
    plugins: [resolve(), commonjs(), typescript(), terser()],
  },
];

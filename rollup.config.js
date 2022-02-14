import typescript from "rollup-plugin-typescript2";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
	input: "components/index.tsx",
	output: {
		file: "lib/index.js",
		format: "es",
	},
	plugins: [resolve(), commonjs(), typescript()],
};

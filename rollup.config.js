import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from "rollup-plugin-postcss";
import babel from "@rollup/plugin-babel";

export default {
	input: "./components/index.tsx",
	output: { dir: "./lib", format: "cjs" },
	external: ["rechart"],
	plugins: [
		peerDepsExternal(),
		resolve(),
		babel({
			exclude: "node_modules/**",
			presets: ["@babel/env", "@babel/preset-react"],
		}),
		,
		commonjs(),
		typescript(),
		postcss({
			extensions: [".css"],
		}),
	],
};

import resolve from "@rollup/plugin-node-resolve";
import { terser } from "rollup-plugin-terser";
import sizes from "@atomico/rollup-plugin-sizes";

export default {
    input: ["src/core/core.js", "src/html.js"],
    output: [
        {
            dir: "./",
            format: "es",
            sourcemap: true,
        },
        // {
        //     dir: "./cjs",
        //     format: "cjs",
        //     sourcemap: true,
        // },
    ],
    plugins: [
        {
            name: "local",
            /**
             * prevents html from generating an additional chunk
             * that separates shared elements, thus depending
             * only on the core
             * @param {string} id
             */
            resolveId(id) {
                if ("./core/core" == id) {
                    return {
                        id: "./core.js",
                        external: true,
                    };
                }
            },
        },
        resolve(),
        //terser(),
        sizes(),
    ],
};

import { ESLint } from "eslint";
let args = minimist(process.argv.slice(2), {
    alias: {
      n: "name",
      a: "age",
    },
   });
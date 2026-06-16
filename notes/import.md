1. Without Braces {} → Default Export

If a file exports one main thing using export default, import it without braces.

links.js
const links = [
{ text: "add job", path: "." },
{ text: "all jobs", path: "all-jobs" },
];

export default links;
Import
import links from "../utils/links";

You can even rename it:

import myLinks from "../utils/links";

because default exports don't require the same name.

2. With Braces {} → Named Export

If a file exports something using export, import it with braces.

DashboardLayout.jsx
export const useDashboardContext = () => {
return useContext(DashboardContext);
};
Import
import { useDashboardContext } from "../pages/DashboardLayout";

The name must match exactly.

❌ Wrong:

import { myContext } from "../pages/DashboardLayout";

unless myContext was exported with that name.

3. Multiple Named Exports
   utils.js
   export const name = "John";
   export const age = 25;
   export const city = "Delhi";
   Import
   import { name, age, city } from "./utils";

or

import { name, city } from "./utils";

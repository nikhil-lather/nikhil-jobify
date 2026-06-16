This code is implementing Dark Mode (Theme Switching) in a React application and also persisting the user's choice in localStorage so the theme remains the same even after refreshing the page.

1. toggleDarkTheme Function
   const toggleDarkTheme = () => {
   const newDarkTheme = !isDarkTheme;
   setIsDarkTheme(newDarkTheme);
   document.body.classList.toggle("dark-theme", newDarkTheme);
   localStorage.setItem("darkTheme", newDarkTheme);
   };
   Step 1: Invert Current Theme
   const newDarkTheme = !isDarkTheme;

Suppose:

isDarkTheme = false

Then:

newDarkTheme = !false

becomes:

newDarkTheme = true

If current theme is dark:

isDarkTheme = true

Then:

newDarkTheme = false

This simply flips the current theme.

Step 2: Update React State
setIsDarkTheme(newDarkTheme);

This updates the component state.

Before:

isDarkTheme = false

After:

isDarkTheme = true

React re-renders the component because state changed.

Step 3: Add/Remove CSS Class
document.body.classList.toggle(
"dark-theme",
newDarkTheme
);
What is classList?

Every HTML element has a list of classes.

Example:

<body class="dark-theme">

or

<body>
What does toggle() do?

Syntax:

element.classList.toggle(className, condition)

If condition is true:

document.body.classList.toggle(
"dark-theme",
true
);

Result:

<body class="dark-theme">

If condition is false:

document.body.classList.toggle(
"dark-theme",
false
);

Result:

<body>

So:

newDarkTheme = true

adds:

<body class="dark-theme">
Why add class to body?

Because CSS can then target everything.

Example:

.dark-theme {
background: black;
color: white;
}

When body gets this class:

<body class="dark-theme">

Entire application becomes dark.

Step 4: Save Theme in Local Storage
localStorage.setItem(
"darkTheme",
newDarkTheme
);

Stores value in browser storage.

Example:

localStorage.setItem(
"darkTheme",
true
);

Browser stores:

darkTheme : "true"

Notice:

Everything in localStorage is stored as a string.

Actually stored:

"true"

not

true
Why Local Storage?

Without localStorage:

User enables dark mode
Refresh page
Theme resets to light mode

Because React state disappears on refresh.

localStorage keeps data even after:

Refresh
Browser restart
System restart 2. Problem Before Using localStorage

Suppose Dashboard loads:

const [isDarkTheme, setIsDarkTheme] =
useState(false);

After refresh:

false

again.

User loses preference.

3. checkDefaultTheme Function
   const checkDefaultTheme = () => {
   const isDarkTheme =
   localStorage.getItem("darkTheme") === "true";

document.body.classList.toggle(
"dark-theme",
isDarkTheme
);

return isDarkTheme;
};

This function runs when app starts.

Its job:

✅ Read theme from localStorage

✅ Apply CSS class

✅ Return theme value

Step 1: Read Local Storage
localStorage.getItem("darkTheme")

Suppose localStorage contains:

darkTheme : "true"

Then:

localStorage.getItem("darkTheme")

returns:

"true"

(string)

Step 2: Convert String to Boolean
localStorage.getItem("darkTheme") === "true"

Case 1:

"true" === "true"

returns:

true

Case 2:

"false" === "true"

returns:

false

Now:

const isDarkTheme = true

or

const isDarkTheme = false
Step 3: Apply Theme Immediately
document.body.classList.toggle(
"dark-theme",
isDarkTheme
);

If:

isDarkTheme = true

Body becomes:

<body class="dark-theme">

before React renders.

This prevents theme flickering.

Step 4: Return Value
return isDarkTheme;

Returns:

true

or

false 4. Store Returned Value
const isDarkThemeEnabled =
checkDefaultTheme();

Suppose localStorage contains:

darkTheme : "true"

Then:

isDarkThemeEnabled = true 5. Pass Value as Prop
{
path: "dashboard",
element: (
<DashboardLayout
      isDarkThemeEnabled={isDarkThemeEnabled}
    />
),
}

This sends the value to DashboardLayout.

Equivalent to:

<DashboardLayout
  isDarkThemeEnabled={true}
/> 6. Receive Prop in DashboardLayout
const Dashboard = ({
isDarkThemeEnabled,
}) => {

Now:

isDarkThemeEnabled

contains the value passed from App.

Example:

true 7. Initialize State from Prop
const [isDarkTheme, setIsDarkTheme] =
useState(isDarkThemeEnabled);

Instead of:

useState(false)

we do:

useState(isDarkThemeEnabled)

If localStorage said:

darkTheme = true

Then:

useState(true)

State starts as:

isDarkTheme = true

Immediately after loading.

Complete Flow
User clicks Dark Mode
↓
toggleDarkTheme()
↓
State updated
↓
Body gets dark-theme class
↓
Theme stored in localStorage
↓
Page refresh
↓
checkDefaultTheme()
↓
Read localStorage
↓
Get "true"
↓
Convert to boolean true
↓
Apply dark-theme class
↓
Pass value to Dashboard
↓
useState(true)
↓
Dark theme remains enabled
Visual Example
Initial Load

---

localStorage = "false"

Theme = Light

## User Clicks Button

localStorage = "true"

Theme = Dark

## Refresh Page

checkDefaultTheme()

reads "true"

returns true

useState(true)

Theme = Dark Again

This is a very common React pattern:

State (useState) → Controls UI during runtime

localStorage → Remembers state after page refresh

Together they create a persistent dark mode feature.

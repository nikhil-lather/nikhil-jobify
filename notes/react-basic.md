expain the working of React Context, React State, Custom Hooks, and React Router's Outlet

These are four very important React concepts. I'll explain what they are, why they are used, and how they work internally with examples.

1. React State (useState)
   What is State?

State is data that belongs to a component and can change over time.

When state changes, React automatically re-renders the component.

Example
import { useState } from "react";

function Counter() {
const [count, setCount] = useState(0);

return (
<>

<h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </>

);
}
How it works
Step 1
const [count, setCount] = useState(0);

React creates a state variable:

count = 0

and a function:

setCount()
Step 2

User clicks button.

setCount(count + 1);

becomes

setCount(1);
Step 3

React updates state:

count = 1
Step 4

React re-renders component.

Now:

<h1>{count}</h1>

shows

1
Why use State?

Without state:

let count = 0;

React won't know it changed.

With state:

const [count, setCount] = useState(0);

React tracks changes automatically.

2. React Context
   Problem Without Context

Suppose you have:

App
└── Dashboard
└── Navbar
└── UserProfile

User data is stored in App:

const user = {
name: "John"
};

To send user to UserProfile:

App
↓
Dashboard
↓
Navbar
↓
UserProfile

This is called:

Prop Drilling

Passing props through many components.

Solution: Context

Context allows sharing data globally.

Context
↓
Any Component

without passing props.

Creating Context
Step 1
import { createContext } from "react";

const UserContext = createContext();

Creates a container.

Step 2

Provide data

<UserContext.Provider value={{ user }}>
<Dashboard />
</UserContext.Provider>

Provider shares data.

Step 3

Consume data

import { useContext } from "react";

const user = useContext(UserContext);

Now any child component can access it.

Internal Working

Think of Context as:

Global React Store

When Provider value changes:

value={{ user }}

React notifies all components using:

useContext(UserContext)

and re-renders them.

3. Custom Hooks
   What is a Custom Hook?

A custom hook is simply a reusable function that uses React hooks.

4. React Router Outlet
   What is Outlet?

Outlet is a placeholder where child routes are rendered.

Route Structure
Dashboard
├── AddJob
├── AllJobs
└── Stats
Routes
createBrowserRouter([
{
path: "/dashboard",
element: <Dashboard />,
children: [
{
path: "add-job",
element: <AddJob />,
},
{
path: "all-jobs",
element: <AllJobs />,
},
],
},
]);
Dashboard Component
function Dashboard() {
return (
<>
<Navbar />
<Sidebar />

      <Outlet />
    </>

);
}
How it works

When URL is:

/dashboard/add-job

React Router loads:

<Dashboard />

and inside Outlet:

<AddJob />

So rendered page becomes:

<>
<Navbar />
<Sidebar />
<AddJob />
</>

When URL changes:

/dashboard/all-jobs

Outlet renders:

<AllJobs />

Result:

<>
<Navbar />
<Sidebar />
<AllJobs />
</>

Navbar and Sidebar stay the same.

Only Outlet content changes.

How All Four Work Together in Jobify
function Dashboard() {
const [showSidebar, setShowSidebar] =
useState(false);

const [user, setUser] =
useState({ name: "John" });

return (
<DashboardContext.Provider
value={{
        user,
        showSidebar,
      }} >
<Navbar />
<Sidebar />

      <Outlet />
    </DashboardContext.Provider>

);
}
State

Stores:

user
showSidebar
Context

Shares:

user
showSidebar

to all dashboard pages.

Custom Hook
export const useDashboardContext = () =>
useContext(DashboardContext);

makes accessing context easier.

Outlet

Displays:

<AddJob />
<AllJobs />
<Stats />

depending on current route.

Complete Flow
useState
↓
Stores data

Context
↓
Shares data globally

Custom Hook
↓
Accesses context easily

Outlet
↓
Shows nested page

This pattern (useState + Context + Custom Hook + Outlet) is exactly the architecture used in many modern React applications, including Jobify and many production MERN applications.

When we say "Context values are accessible in all other components", it does not mean every component in the entire React application.

It means:

Any component that is a child (descendant) of the Context Provider can access those values.

For example:

<DashboardContext.Provider value={{ user }}>
<Navbar />
<Sidebar />
<Outlet />
</DashboardContext.Provider>

Tree:

DashboardContext.Provider
│
├── Navbar
├── Sidebar
└── Outlet
├── AddJob
├── AllJobs
└── Stats

All of these can access:

const { user } = useDashboardContext();

because they are inside the Provider.

But a component outside the Provider cannot access it.

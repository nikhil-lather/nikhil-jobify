#### Complete App

[Jobify](https://jobify.live/)

#### Create React APP

[VITE](https://vitejs.dev/guide/)

```sh
npm create vite@latest projectName -- --template react
```

#### Vite - Folder and File Structure

```sh
npm i
```

```sh
npm run dev
```

- APP running on http://localhost:5173/
- .jsx extension

#### Remove Boilerplate

- remove App.css
- remove all code in index.css

  App.jsx

```jsx
const App = () => {
  return <h1>Jobify App</h1>;
};
export default App;
```

#### Project Assets

- get assets folder from complete project
- copy index.css
- copy/move README.md (steps)
  - work independently
  - reference
  - troubleshoot
  - copy

#### Global Styles

- saves times on the setup
- less lines of css
- speeds up the development

- if any questions about specific styles
- Coding Addict - [Default Starter Video](https://youtu.be/UDdyGNlQK5w)
- Repo - [Default Starter Repo](https://github.com/john-smilga/default-starter)

#### Title and Favicon

- add favicon.ico in public
- change title and favicon in index.html

```html
<head>
  <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
  <title>Jobify</title>
</head>
```

- resource [Generate Favicons](https://favicon.io/)

#### Install Packages (Optional)

- yes, specific package versions
- specific commands will be provided later
- won't need to stop/start server

```sh
npm install @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6 axios@1.3.6 dayjs@1.11.7 react-icons@4.8.0 react-router-dom@6.10.0 react-toastify@9.1.2 recharts@2.5.0 styled-components@5.3.10

```

#### Router

[React Router](https://reactrouter.com/en/main)

- version 6.4 brought significant changes (loader and action)
- pages as independent entities
- less need for global state
- more pages

#### Setup Router

- all my examples will include version !!!

```sh
npm i react-router-dom@6.10.0
```

App.jsx

```jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>home</h1>,
  },
  {
    path: "/about",
    element: (
      <div>
        <h2>about page</h2>
      </div>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};
export default App;
```

#### Create Pages

- create src/pages directory
- setup index.js and following pages :

  AddJob.jsx
  Admin.jsx
  AllJobs.jsx
  DashboardLayout.jsx
  DeleteJob.jsx
  EditJob.jsx
  Error.jsx
  HomeLayout.jsx
  Landing.jsx
  Login.jsx
  Profile.jsx
  Register.jsx
  Stats.jsx

```jsx
const AddJob = () => {
  return <h1>AddJob</h1>;
};
export default AddJob;
```

#### Index

App.jsx

```jsx
import HomeLayout from "../ pages/HomeLayout";
```

pages/index.js

```js
export { default as DashboardLayout } from "./DashboardLayout";
export { default as Landing } from "./Landing";
export { default as HomeLayout } from "./HomeLayout";
export { default as Register } from "./Register";
export { default as Login } from "./Login";
export { default as Error } from "./Error";
export { default as Stats } from "./Stats";
export { default as AllJobs } from "./AllJobs";
export { default as AddJob } from "./AddJob";
export { default as EditJob } from "./EditJob";
export { default as Profile } from "./Profile";
export { default as Admin } from "./Admin";
```

App.jsx

```jsx
import {
  HomeLayout,
  Landing,
  Register,
  Login,
  DashboardLayout,
  Error,
} from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
  },
]);
```

#### Link Component

- navigate around project
- client side routing

Register.jsx

```jsx
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <div>
      <h1>Register</h1>
      <Link to="/login">Login Page</Link>
    </div>
  );
};
export default Register;
```

Login.jsx

```jsx
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1>Login</h1>
      <Link to="/register">Register Page</Link>
    </div>
  );
};
export default Login;
```

#### Nested Routes

- what about Navbar?
- decide on root (parent route)
- make path relative
- for time being only home layout will be visible

App.jsx

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "dashboard",
        element: <DashboardLayout />,
      },
    ],
  },
]);
```

HomeLayout.jsx

```jsx
import { Outlet } from "react-router-dom";

const HomeLayout = () => {
  return (
    <>
      {/* add things like Navbar */}
      {/* <h1>home layout</h1> */}
      // outlet shows all the things on this page in all pages like we could add
      navbar here
      <Outlet />
    </>
  );
};
export default HomeLayout;
```

#### Index (Home) Page

App.jsx

```jsx
{
    path: '/',
    element: <HomeLayout />,
    children: [
      {
        // index true means we gonna see this on parent page in this csae we gonna see landing page on homeLayout page
        index: true,
        element: <Landing />,
      },
...
      ]
}
```

#### Error Page

- bubbles up

App.jsx

```jsx
{
    path: '/',
    element: <HomeLayout />,
    errorElement: <Error />,
    ...
}
```

Error.jsx

```jsx
import { Link, useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div>
      <h1>Error Page !!!</h1>
      <Link to="/dashboard">back home</Link>
    </div>
  );
};
export default Error;
```

#### Styled Components

- CSS in JS
- Styled Components
- have logic and styles in component
- no name collisions
- apply javascript logic
- [Styled Components Docs](https://styled-components.com/)
- [Styled Components Course](https://www.udemy.com/course/styled-components-tutorial-and-project-course/?referralCode=9DABB172FCB2625B663F)

```sh
npm install styled-components@5.3.10
```

```js
import styled from "styled-components";

const El = styled.el`
  // styles go here
`;
```

- no name collisions, since unique class
- vscode-styled-components extension
- colors and bugs

Landing.jsx

```jsx
import styled from "styled-components";

const Landing = () => {
  return (
    <div>
      <h1>Landing</h1>
      <StyledButton>Click Me</StyledButton>
    </div>
  );
};

const StyledButton = styled.button`
  background-color: red;
  color: white;
`;
export default Landing;
```

#### Style Entire React Component

```js
const Wrapper = styled.el``;

const Component = () => {
  return (
    <Wrapper>
      <h1> Component</h1>
    </Wrapper>
  );
};
```

- only responsible for styling
- wrappers folder in assets

Landing.jsx

```jsx
import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing</h1>
      <div className="content">some content</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: red;
  h1 {
    color: white;
  }
  .content {
    background-color: blue;
    color: yellow;
  }
`;
export default Landing;
```

#### Landing Page

```jsx
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import styled from "styled-components";
const Landing = () => {
  return (
    <StyledWrapper>
      <nav>
        <img src={logo} alt="jobify" className="logo" />
      </nav>
      <div className="container page">
        {/* info */}
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.section`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }
  .page {
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items: center;
    margin-top: -3rem;
  }
  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
    margin-bottom: 1.5rem;
  }
  p {
    line-height: 2;
    color: var(--text-secondary-color);
    margin-bottom: 1.5rem;
    max-width: 35em;
  }
  .register-link {
    margin-right: 1rem;
  }
  .main-img {
    display: none;
  }
  .btn {
    padding: 0.75rem 1rem;
  }
  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 400px;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;

export default Landing;
```

#### Assets/Wrappers

- css optional

  Landing.jsx

```jsx
import Wrapper from "../assets/wrappers/LandingPage";
```

#### Logo Component

- create src/components/Logo.jsx
- import logo and setup component
- in components setup index.js import/export (just like pages)
- replace in Landing

  Logo.jsx

```jsx
import logo from "../assets/images/logo.svg";

const Logo = () => {
  return <img src={logo} alt="jobify" className="logo" />;
};

export default Logo;
```

#### Logo and Images

- logo built in Figma
- [Cool Images](https://undraw.co/)

#### Error Page

Error.jsx

```jsx
import { Link, useRouteError } from "react-router-dom";
import img from "../assets/images/not-found.svg";
import Wrapper from "../assets/wrappers/ErrorPage";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  if (error.status === 404) {
    return (
      <Wrapper>
        <div>
          <img src={img} alt="not found" />
          <h3>Ohh! page not found</h3>
          <p>We can't seem to find the page you're looking for</p>
          <Link to="/dashboard">back home</Link>
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrapper>
  );
};

export default Error;
```

#### Error Page CSS (optional)

assets/wrappers/Error.js

```js
import styled from "styled-components";

const Wrapper = styled.main`
  min-height: 100vh;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 90vw;
    max-width: 600px;
    display: block;
    margin-bottom: 2rem;
    margin-top: -3rem;
  }
  h3 {
    margin-bottom: 0.5rem;
  }
  p {
    line-height: 1.5;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: var(--text-secondary-color);
  }
  a {
    color: var(--primary-500);
    text-transform: capitalize;
  }
`;

export default Wrapper;
```

#### Register Page

Register.jsx

```jsx
import { Logo } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            id="name"
            // id must match with htmlFor
            name="name"
            className="form-input"
            defaultValue="john"
            required
          />
        </div>

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
```

- required attribute

  In HTML, the "required" attribute is used to indicate that a form input field must be filled out before the form can be submitted. It is typically applied to input elements such as text fields, checkboxes, and radio buttons. When the "required" attribute is added to an input element, the browser will prevent form submission if the field is left empty, providing a validation message to prompt the user to enter the required information.

- default value

In React, the defaultValue prop is used to set the initial or default value of an input component. It is similar to the value attribute in HTML, but with a slightly different behavior.

#### FormRow Component

- create components/FormRow.jsx (export/import)

FormRow.jsx

```jsx
const FormRow = ({ type, name, labelText, defaultValue = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className="form-input"
        defaultValue={defaultValue}
        required
      />
    </div>
  );
};

export default FormRow;
```

Register.jsx

```jsx
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Register</h4>
        <FormRow type="text" name="name" />
        <FormRow type="text" name="lastName" labelText="last name" />
        <FormRow type="text" name="location" />
        <FormRow type="email" name="email" />

        <FormRow type="password" name="password" />

        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          Already a member?
          <Link to="/login" className="member-btn">
            Login
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
```

#### Login Page

Login Page

```jsx
import { Logo, FormRow } from "../components";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";

import { Link } from "react-router-dom";

const Login = () => {
  return (
    <Wrapper>
      <form className="form">
        <Logo />
        <h4>Login</h4>
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </form>
    </Wrapper>
  );
};
export default Login;
```

#### Register and Login CSS (optional)

assets/wrappers/RegisterAndLoginPage.js

```js
import styled from "styled-components";

const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  align-items: center;
  .logo {
    display: block;
    margin: 0 auto;
    margin-bottom: 1.38rem;
  }
  .form {
    max-width: 400px;
    border-top: 5px solid var(--primary-500);
  }

  h4 {
    text-align: center;
    margin-bottom: 1.38rem;
  }
  p {
    margin-top: 1rem;
    text-align: center;
    line-height: 1.5;
  }
  .btn {
    margin-top: 1rem;
  }
  .member-btn {
    color: var(--primary-500);
    letter-spacing: var(--letter-spacing);
    margin-left: 0.25rem;
  }
`;
export default Wrapper;
```

#### Dashboard Pages

App.jsx

```jsx
 {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <AddJob />,
          },
          {
            path: 'stats',
            element: <Stats />
          },
          {
            path: 'all-jobs',
            element: <AllJobs />,
          },

          {
            path: 'profile',
            element: <Profile />,
          },
          {
            path: 'admin',
            element: <Admin />,
          },
        ],
      },
```

Dashboard.jsx

```jsx
import { Outlet } from "react-router-dom";

const DashboardLayout = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};
export default DashboardLayout;
```

#### Navbar, BigSidebar and SmallSidebar

- in components create :
  Navbar.jsx
  BigSidebar.jsx
  SmallSidebar.jsx

DashboardLayout.jsx

```jsx
import { Outlet } from "react-router-dom";

import Wrapper from "../assets/wrappers/Dashboard";
import { Navbar, BigSidebar, SmallSidebar } from "../components";

const Dashboard = () => {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallSidebar />
        <BigSidebar />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
            // In React Router DOM, an Outlet is a special component used in
            nested routes to render the child routes defined in a parent route.
            It acts as a placeholder where the child routes' components are
            injected when the URL matches the nested route structure. // Nested
            routes enables you to have multiple components render on the same
            page with route parity.
          </div>
        </div>
      </main>
    </Wrapper>
  );
};

export default Dashboard;
```

#### Dashboard Layout - CSS (optional)

assets/wrappers/DashboardLayout.jsx

```js
import styled from "styled-components";

const Wrapper = styled.section`
  .dashboard {
    display: grid;
    grid-template-columns: 1fr;
  }
  .dashboard-page {
    width: 90vw;
    margin: 0 auto;
    padding: 2rem 0;
  }
  @media (min-width: 992px) {
    .dashboard {
      grid-template-columns: auto 1fr;
    }
    .dashboard-page {
      width: 90%;
    }
  }
`;
export default Wrapper;
```

#### Dashboard Context

```jsx
import { Outlet } from 'react-router-dom';

import Wrapper from '../assets/wrappers/Dashboard';
import { Navbar, BigSidebar, SmallSidebar } from '../components';

import { useState, createContext, useContext } from 'react';
const DashboardContext = createContext();
// Creates a React Context to share state and functions
const Dashboard = () => {
  // temp
  const user = { name: 'john' };

  const [showSidebar, setShowSidebar] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleDarkTheme = () => {
    console.log('toggle dark theme');
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
    // This function toggles the sidebar's visibility by updating showSidebar.
  };

  const logoutUser = async () => {
    console.log('logout user');
  };
  return (
    <DashboardContext.Provider
    // The DashboardContext.Provider makes the user, showSidebar, isDarkTheme, and related functions available to all child components.
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
      // Uses React's Context API (DashboardContext.Provider) to make state and functions accessible throughout the component tree.
    >
      <Wrapper>
        <main className='dashboard'>
          <SmallSidebar />
          <BigSidebar />
          <div>
            <Navbar />
            <div className='dashboard-page'>
              <Outlet />
              // A placeholder for rendering child routes (e.g., different dashboard pages like "Home," "Settings," etc.)
              //  Placeholder for dynamically loaded components (e.g., different dashboard pages).
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};

export const useDashboardContext = () => useContext(DashboardContext);\
// This custom hook provides easy access to DashboardContext values in child components.


export default Dashboard;
```

#### React Icons

[React Icons](https://react-icons.github.io/react-icons/)

```sh
npm install react-icons@4.8.0
```

Navbar.jsx

```jsx

import {FaHome} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div>
      <h2>navbar</h2>
      <FaHome>
    </div>
  )
}

```

#### Navbar - Initial Setup

```jsx
import Wrapper from "../assets/wrappers/Navbar";
import { FaAlignLeft } from "react-icons/fa";
import Logo from "./Logo";

import { useDashboardContext } from "../pages/DashboardLayout";
const Navbar = () => {
  const { toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className="toggle-btn" onClick={toggleSidebar}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h4 className="logo-text">dashboard</h4>
        </div>
        <div className="btn-container">toggle/logout</div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
```

#### Navbar CSS (optional)

assets/wrappers/Navbar.js

```js
import styled from "styled-components";

const Wrapper = styled.nav`
  height: var(--nav-height);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 0px 0px rgba(0, 0, 0, 0.1);
  background: var(--background-secondary-color);
  .logo {
    display: flex;
    align-items: center;
    width: 100px;
  }
  .nav-center {
    display: flex;
    width: 90vw;
    align-items: center;
    justify-content: space-between;
  }
  .toggle-btn {
    background: transparent;
    border-color: transparent;
    font-size: 1.75rem;
    color: var(--primary-500);
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  .btn-container {
    display: flex;
    align-items: center;
  }

  .logo-text {
    display: none;
  }
  @media (min-width: 992px) {
    position: sticky;
    top: 0;

    .nav-center {
      width: 90%;
    }
    .logo {
      display: none;
    }
    .logo-text {
      display: block;
    }
  }
`;
export default Wrapper;
```

#### Links

- create src/utils/links.jsx

```jsx
import React from "react";

import { IoBarChartSharp } from "react-icons/io5";
import { MdQueryStats } from "react-icons/md";
import { FaWpforms } from "react-icons/fa";
import { ImProfile } from "react-icons/im";
import { MdAdminPanelSettings } from "react-icons/md";

// an array of objects
const links = [
  { text: "add job", path: ".", icon: <FaWpforms /> },
  { text: "all jobs", path: "all-jobs", icon: <MdQueryStats /> },
  { text: "stats", path: "stats", icon: <IoBarChartSharp /> },
  { text: "profile", path: "profile", icon: <ImProfile /> },
  { text: "admin", path: "admin", icon: <MdAdminPanelSettings /> },
];

export default links;
```

- in a second, we will discuss why '.' in "add job"

#### SmallSidebar

SmallSidebar

```jsx
import Wrapper from "../assets/wrappers/SmallSidebar";
import { FaTimes } from "react-icons/fa";

import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import links from "../utils/links";
import { useDashboardContext } from "../pages/DashboardLayout";

const SmallSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      // Wrapper // Purpose: // Applies the styles for the SmallSidebar
      component. // Likely defined using styled-components or CSS modules.
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
          // this will show the big sidebar always by default
        }
        // div with Dynamic Class
        // Purpose:
        // The className is dynamically set based on the showSidebar state.
        // If showSidebar is true, the class "sidebar-container show-sidebar" is applied.
        // If showSidebar is false, only the class "sidebar-container" is applied.
        // This controls the visibility of the sidebar.
      >
        <div className="content">
          <button type="button" className="close-btn" onClick={toggleSidebar}>
            <FaTimes />
            // closes the sidebar when clicked.
          </button>
          <header>
            <Logo />
          </header>
          <div className="nav-links">
            {links.map((link) => {
              const { text, path, icon } = link;

              return (
                <NavLink
                  to={path}
                  key={text}
                  className="nav-link"
                  onClick={toggleSidebar}
                  // will close sidebar after clicking on any path
                  end
                  // Maps over the links array to render navigation links.
                  // Each link is rendered as a NavLink component from react-router-dom.
                  // The to prop specifies the route path.
                  // to: The path to navigate to when the link is clicked.
                  // The key prop ensures each link has a unique identifier.(required when mapping over an array).
                  // The className prop applies styles to the link.
                  // The onClick handler closes the sidebar when a link is clicked.
                  // The end prop ensures the link is only active when the route matches exactly. if we dont add this add job will get active class always by default
                >
                  <span className="icon">{icon}</span>
                  {text}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SmallSidebar;
```

- cover '.' path ,active class and 'end' prop

#### Small Sidebar CSS (optional)

assets/wrappers/SmallSidebar.js

```js
import styled from "styled-components";

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
    visibility: hidden;
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
    visibility: visible;
  }
  .content {
    background: var(--background-secondary-color);
    width: var(--fluid-width);
    height: 95vh;
    border-radius: var(--border-radius);
    padding: 4rem 2rem;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  .close-btn {
    position: absolute;
    top: 10px;
    left: 10px;
    background: transparent;
    border-color: transparent;
    font-size: 2rem;
    color: var(--red-dark);
    cursor: pointer;
  }
  .nav-links {
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
  }
  .nav-link {
    display: flex;
    align-items: center;
    color: var(--text-secondary-color);
    padding: 1rem 0;
    text-transform: capitalize;
    transition: var(--transition);
  }
  .nav-link:hover {
    color: var(--primary-500);
  }

  .icon {
    font-size: 1.5rem;
    margin-right: 1rem;
    display: grid;
    place-items: center;
  }
  .active {
    color: var(--primary-500);
  }
`;
export default Wrapper;
```

#### NavLinks

- components/NavLinks.jsx

```jsx
import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const { user, toggleSidebar } = useDashboardContext();

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // admin user
        return (
          <NavLink
            to={path}
            key={text}
            onClick={toggleSidebar}
            // Closes the sidebar when a link is clicked
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
```

#### Big Sidebar

```jsx
import NavLinks from "./NavLinks";
import Logo from "../components/Logo";
import Wrapper from "../assets/wrappers/BigSidebar";
import { useDashboardContext } from "../pages/DashboardLayout";

const BigSidebar = () => {
  const { showSidebar } = useDashboardContext();
  // useDashboardContext() retrieves showSidebar, which determines whether the sidebar is visible or hidden.
  return (
    <Wrapper>
      // Applies the styles for the BigSidebar component.
      <div
        className={
          showSidebar ? "sidebar-container " : "sidebar-container show-sidebar"
          // this will show the big sidebar always by default
          // If showSidebar is true, it applies 'sidebar-container' (default, likely hidden in small screens).
          // If showSidebar is false, it applies 'sidebar-container show-sidebar' (likely visible in large screens).
        }
      >
        <div className="content">
          <header>
            <Logo />
            // Logo Component – Displays the app’s logo at the top.
          </header>
          <NavLinks isBigSidebar />
          // Renders the navigation links for the sidebar. // The isBigSidebar
          prop is passed to customize the appearance of the links for the big
          sidebar. // By passing the isBigSidebar prop, the same NavLinks
          component can be reused in both the big and small sidebars without
          duplicating code.
        </div>
      </div>
    </Wrapper>
  );
};

export default BigSidebar;
```

```jsx
const NavLinks = ({ isBigSidebar }) => {
  const { user, toggleSidebar } = useDashboardContext();
  // user: Might be used for role-based access (e.g., show extra links for admin users).
  // toggleSidebar: Function that closes the sidebar when a link is clicked.

  return (
    <div className="nav-links">
      {links.map((link) => {
        const { text, path, icon } = link;
        // admin user
        return (
          <NavLink
            to={path}
            key={text}
            onClick={isBigSidebar ? null : toggleSidebar}
            // If inside BigSidebar (isBigSidebar: true) → onClick={null} → Does nothing (because BigSidebar is always visible).
            // If inside SmallSidebar (isBigSidebar: false) → onClick={toggleSidebar} → Closes the sidebar after clicking a link.
            className="nav-link"
            end
          >
            <span className="icon">{icon}</span>
            {text}
            // Shows the icon and link text.
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
```

#### BigSidebar CSS (optional)

assets/wrappers/BigSidebar.js

```js
import styled from "styled-components";

const Wrapper = styled.aside`
  display: none;
  @media (min-width: 992px) {
    display: block;
    box-shadow: 1px 0px 0px 0px rgba(0, 0, 0, 0.1);
    .sidebar-container {
      background: var(--background-secondary-color);
      min-height: 100vh;
      height: 100%;
      width: 250px;
      margin-left: -250px;
      transition: margin-left 0.3s ease-in-out;
    }
    .content {
      position: sticky;
      top: 0;
    }
    .show-sidebar {
      margin-left: 0;
    }
    header {
      height: 6rem;
      display: flex;
      align-items: center;
      padding-left: 2.5rem;
    }
    .nav-links {
      padding-top: 2rem;
      display: flex;
      flex-direction: column;
    }
    .nav-link {
      display: flex;
      align-items: center;
      color: var(--text-secondary-color);
      padding: 1rem 0;
      padding-left: 2.5rem;
      text-transform: capitalize;
      transition: padding-left 0.3s ease-in-out;
    }
    .nav-link:hover {
      padding-left: 3rem;
      color: var(--primary-500);
      transition: var(--transition);
    }

    .icon {
      font-size: 1.5rem;
      margin-right: 1rem;
      display: grid;
      place-items: center;
    }
    .active {
      color: var(--primary-500);
    }
  }
`;
export default Wrapper;
```

#### LogoutContainer

components/LogoutContainer.jsx

```jsx
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import Wrapper from "../assets/wrappers/LogoutContainer";
import { useState } from "react";
import { useDashboardContext } from "../pages/DashboardLayout";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
        {user.avatar ? (
          <img src={user.avatar} alt="avatar" className="img" />
        ) : (
          <FaUserCircle />
        )}

        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
```

#### LogoutContainer CSS (optional)

assets/wrappers/LogoutContainer.js

```js
import styled from "styled-components";

const Wrapper = styled.div`
  position: relative;

  .logout-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0 0.5rem;
  }
  .img {
    width: 25px;
    height: 25px;
    border-radius: 50%;
  }
  .dropdown {
    position: absolute;
    top: 45px;
    left: 0;
    width: 100%;
    box-shadow: var(--shadow-2);
    text-align: center;
    visibility: hidden;
    border-radius: var(--border-radius);
    background: var(--primary-500);
  }
  .show-dropdown {
    visibility: visible;
  }
  .dropdown-btn {
    border-radius: var(--border-radius);
    padding: 0.5rem;
    background: transparent;
    border-color: transparent;
    color: var(--white);
    letter-spacing: var(--letter-spacing);
    text-transform: capitalize;
    cursor: pointer;
    width: 100%;
    height: 100%;
  }
`;

export default Wrapper;
```

#### ThemeToggle

components/ThemeToggle.jsx

```jsx
import { BsFillSunFill, BsFillMoonFill } from "react-icons/bs";
import Wrapper from "../assets/wrappers/ThemeToggle";
import { useDashboardContext } from "../pages/DashboardLayout";

const ThemeToggle = () => {
  const { isDarkTheme, toggleDarkTheme } = useDashboardContext();
  return (
    <Wrapper onClick={toggleDarkTheme}>
      {isDarkTheme ? (
        <BsFillSunFill className="toggle-icon" />
      ) : (
        <BsFillMoonFill className="toggle-icon" />
      )}
    </Wrapper>
  );
};

export default ThemeToggle;
```

Navbar.jsx

```jsx
<div className="btn-container">
  <ThemeToggle />
</div>
```

#### ThemeToggle CSS (optional)

assets/wrappers/ThemeToggle.js

```js
import styled from "styled-components";

const Wrapper = styled.div`
  background: transparent;
  border-color: transparent;
  width: 3.5rem;
  height: 2rem;
  display: grid;
  place-items: center;
  cursor: pointer;

  .toggle-icon {
    font-size: 1.15rem;
    color: var(--text-color);
  }
`;
export default Wrapper;
```

#### Dark Theme - Logic

DashboardLayout.jsx

```jsx
const toggleDarkTheme = () => {
  const newDarkTheme = !isDarkTheme;
  setIsDarkTheme(newDarkTheme);
  document.body.classList.toggle("dark-theme", newDarkTheme);
  localStorage.setItem("darkTheme", newDarkTheme);
};
```

#### Access Theme

App.jsx

```jsx
const checkDefaultTheme = () => {
  const newDarkTheme = !isDarkTheme;
  setIsDarkTheme(newDarkTheme);
  document.body.classList.toggle('dark-theme', newDarkTheme);
  // when we gonna refresh theme will be set to default again
  // so we will use local storage to store last theme value
};

const checkDefaultTheme = () => {
  const isDarkTheme =
    localStorage.getItem('darkTheme') === 'true'
  document.body.classList.toggle('dark-theme', isDarkTheme);
  return isDarkTheme;
};

const isDarkThemeEnabled = checkDefaultTheme();

{
path: 'dashboard',
element: <DashboardLayout isDarkThemeEnabled={isDarkThemeEnabled} />,
}
```

DashboardLayout.jsx

```jsx
const Dashboard = ({ isDarkThemeEnabled }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(isDarkThemeEnabled);
};
```

#### Dark Theme CSS

index.css

```css
:root {
  /* DARK MODE */

  --dark-mode-bg-color: #333;
  --dark-mode-text-color: #f0f0f0;
  --dark-mode-bg-secondary-color: #3f3f3f;
  --dark-mode-text-secondary-color: var(--grey-300);

  --background-color: var(--grey-50);
  --text-color: var(--grey-900);
  --background-secondary-color: var(--white);
  --text-secondary-color: var(--grey-500);
}

.dark-theme {
  --text-color: var(--dark-mode-text-color);
  --background-color: var(--dark-mode-bg-color);
  --text-secondary-color: var(--dark-mode-text-secondary-color);
  --background-secondary-color: var(--dark-mode-bg-secondary-color);
}

body {
  background: var(--background-color);
  color: var(--text-color);
}
```

#### Folder Setup

- IMPORTANT !!!!
- remove existing .git folder (if any) from client

Mac

```sh
rm -rf .git
```

Windows

```sh
rmdir -Force -Recurse .git
```

```sh
rd /s /q .git
```

- Windows commands were shared by students and I have not personally tested them.
- git status should return :
  "fatal: Not a git repository (or any of the parent directories): .git"
- create jobify directory
- copy/paste client
- move README to root

#### Setup Server

- create package.json

```sh
npm init -y
```

- create and test server.js

```sh
node server
```

#### ES6 Modules

package.json

```json
  "type": "module",
```

Create test.js and implement named import

test.js

```js
export const value = 42;
```

server.js

```js
import { value } from "./test.js";
console.log(value);
```

- don't forget about .js extension
- for named imports, names must match

#### Source Control

- create .gitignore
- copy values from client/.gitignore
- create Github Repo (optional)

#### Install Packages and Setup Install Script

```sh
npm install bcryptjs@2.4.3 concurrently@8.0.1 cookie-parser@1.4.6 dayjs@1.11.7 dotenv@16.0.3 express@4.18.2 express-async-errors@3.1.1 express-validator@7.0.1 http-status-codes@2.2.0 jsonwebtoken@9.0.0 mongoose@7.0.5 morgan@1.10.0 multer@1.4.5-lts.1 nanoid@4.0.2 nodemon@2.0.22 cloudinary@1.37.3 dayjs@1.11.9 datauri@4.1.0 helmet@7.0.0 express-rate-limit@6.8.0 express-mongo-sanitize@2.2.0

```

package.json

```json
"scripts": {
    "setup-project": "npm i && cd client && npm i"
  },
```

- install packages in root and client

```sh
npm run setup-project
```

#### Setup Basic Express

- install express and nodemon.
- setup a basic server which listening on PORT=5100
- create a basic home route which sends back "hello world"
- setup a script with nodemon package.

[Express Docs](https://expressjs.com/)

Express is a fast and minimalist web application framework for Node.js. It simplifies the process of building web applications by providing a robust set of features for handling HTTP requests, routing, middleware, and more. Express allows you to create server-side applications and APIs easily, with a focus on simplicity and flexibility.

[Nodemon Docs](https://nodemon.io/)

Nodemon is a development tool that improves the developer experience. It monitors your Node.js application for any changes in the code and automatically restarts the server whenever a change is detected. This eliminates the need to manually restart the server after every code modification, making the development process more efficient and productive. Nodemon is commonly used during development to save time and avoid the hassle of manual server restarts.

```sh
npm i express@4.18.2 nodemon@2.0.22
```

server.js

```js
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(5100, () => {
  console.log("server running....");
});
```

package.json

```json
"scripts": {
    "dev": "nodemon server.js"
  },
```

#### Thunder Client

Thunder Client is a popular Visual Studio Code extension that facilitates API testing and debugging. It provides a user-friendly interface for making HTTP requests and viewing the responses, allowing developers to easily test APIs, examine headers, and inspect JSON/XML payloads. Thunder Client offers features such as environment variables, request history, and the ability to save and organize requests for efficient development workflows.

[Thunder Client](https://www.thunderclient.com/)

- install and test home route

#### Accept JSON

Setup express middleware to accept json

server

```js
app.use(express.json());

app.post("/", (req, res) => {
  console.log(req);

  res.json({ message: "Data received", data: req.body });
});
```

#### Morgan and Dotenv

[Morgan](https://www.npmjs.com/package/morgan)

HTTP request logger middleware for node.js

[Dotenv](https://www.npmjs.com/package/dotenv)

Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.

```sh
npm i morgan@1.10.0 dotenv@16.0.3
```

```js
import morgan from "morgan";

app.use(morgan("dev"));
// A logging middleware for Express that logs HTTP requests to the console.
// The "dev" format provides concise, colored logs for development purposes.
// GET /api/users 200 12.345 ms - 123
// POST /api/login 401 5.678 ms - 45
```

- create .env file in the root
- add PORT and NODE_ENV
- add .env to .gitignore

server.js

```js
import * as dotenv from "dotenv";
// This is useful for managing configuration settings (e.g., database credentials, API keys) without hardcoding them in the application.
dotenv.config();
// Reads the .env file (if it exists) and loads the variables into process.env.

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

const port = process.env.PORT || 5100;
// The port number specified in the .env file or environment variables.
// This allows you to configure the port dynamically (e.g., for deployment on platforms like Heroku).
app.listen(port, () => {
  // Starts the Express server and listens for incoming requests on the specified port.
  console.log(`server running on PORT ${port}....`);
});
```

#### New Features

- fetch API
- global await (top-level await)
- watch mode

```js
try {
  const response = await fetch(
    "https://www.course-api.com/react-useReducer-cart-project",
  );
  const cartData = await response.json();
  console.log(cartData);
} catch (error) {
  console.log(error);
}
```

package.json

```json
 "scripts": {
    "watch": "node --watch server.js "
  },
```

#### Basic CRUD

- create jobs array where each item is an object with following properties
  id, company, position
- create routes to handle - create, read, update and delete functionalities

#### Get All Jobs

[Nanoid](https://www.npmjs.com/package/nanoid)

The nanoid package is a software library used for generating unique and compact identifiers in web applications or databases. It creates short and URL-safe IDs by combining random characters from a set of 64 characters. Nanoid is a popular choice due to its simplicity, efficiency, and collision-resistant nature.

```sh
npm i nanoid@4.0.2
```

server.js

```js
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end" },
  { id: nanoid(), company: "google", position: "back-end" },
];

app.get("/api/v1/jobs", (req, res) => {
  res.status(200).json({ jobs });
});
```

#### Create, FindOne, Modify and Delete

```js
// CREATE JOB

app.post("/api/v1/jobs", (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "please provide company and position" });
  }
  const id = nanoid(10);
  // console.log(id);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
});

// GET SINGLE JOB

app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  // 🔍 What’s really going on under the hood
  // jobs → an array of objects (likely something like job listings)
  // .find() → a higher-order array method that:
  // Iterates over the array one element at a time
  // Executes the callback for each element
  // Stops immediately when it finds the first match
  // ⚙️ Callback function breakdown
  // (job) => job.id === id
  // This is a predicate function (returns true/false)
  // For each element:
  // job = current item in the array
  // job.id === id → condition check

  // 👉 The moment this becomes true, .find():

  // returns that object
  // stops looping (important for performance)
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
    // Searches the jobs array for a job whose id matches the id from the request.
  }
  res.status(200).json({ job });
  // Sends a JSON response containing the job object.
});

// EDIT JOB

app.patch(
  "/api/v1/jobs/:id",
  // id name is irrelevant we could name this banana if we want
  (req, res) => {
    const { company, position } = req.body;
    if (!company || !position) {
      return res
        .status(400)
        .json({ msg: "please provide company and position" });
    }
    const { id } = req.params;
    // req.params.id is a string
    // const job = jobs.find((job) => job.id === id);

    // Convert id to a number if job.id is stored as a number
    const job = jobs.find((job) => job.id === Number(id));

    if (!job) {
      return res.status(404).json({ msg: `no job with id ${id}` });
    }

    // job.company = company;
    // job.position = position;

    // Update only provided fields
    if (company) job.company = company;
    if (position) job.position = position;
    res.status(200).json({ msg: "job modified", job });
  },
);

// DELETE JOB

app.delete("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: "job deleted" });
});
```

#### Not Found Middleware

```js
app.use("*", (req, res) => {
  res.status(404).json({ msg: "not found" });
});
```

#### Error Middleware

```js
app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ msg: "something went wrong" });
});
```

#### Not Found and Error Middleware

The "not found" middleware in Express.js is used when a request is made to a route that does not exist. It catches these requests and responds with a 404 status code, indicating that the requested resource was not found.

On the other hand, the "error" middleware in Express.js is used to handle any errors that occur during the processing of a request. It is typically used to catch unexpected errors or exceptions that are not explicitly handled in the application code. It logs the error and sends a 500 status code, indicating an internal server error.

In summary, the "not found" middleware is specifically designed to handle requests for non-existent routes, while the "error" middleware is a catch-all for handling unexpected errors that occur during request processing.

- make a request to "/jobss"

```js
// GET ALL JOBS
app.get("/api/v1/jobs", (req, res) => {
  // console.log(jobss);
  res.status(200).json({ jobs });
});

// GET SINGLE JOB
app.get("/api/v1/jobs/:id", (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    throw new Error("no job with that id");
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
});
```

#### Controller and Router

setup controllers and router

controllers/jobController.js

```js
import { nanoid } from "nanoid";

let jobs = [
  { id: nanoid(), company: "apple", position: "front-end developer" },
  { id: nanoid(), company: "google", position: "back-end developer" },
];

export const getAllJobs = async (req, res) => {
  res.status(200).json({ jobs });
};

export const createJob = async (req, res) => {
  const { company, position } = req.body;

  if (!company || !position) {
    return res.status(400).json({ msg: "please provide company and position" });
  }
  const id = nanoid(10);
  const job = { id, company, position };
  jobs.push(job);
  res.status(200).json({ job });
};

export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    // throw new Error('no job with that id');
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
};

export const updateJob = async (req, res) => {
  const { company, position } = req.body;
  if (!company || !position) {
    return res.status(400).json({ msg: "please provide company and position" });
  }
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  job.company = company;
  job.position = position;
  res.status(200).json({ msg: "job modified", job });
};

export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const job = jobs.find((job) => job.id === id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  const newJobs = jobs.filter((job) => job.id !== id);
  jobs = newJobs;

  res.status(200).json({ msg: "job deleted" });
};
```

routes/jobRouter.js

```js
import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
} from "../controllers/jobController.js";

// router.get('/', getAllJobs);
// router.post('/', createJob);

router.route("/").get(getAllJobs).post(createJob);
router.route("/:id").get(getJob).patch(updateJob).delete(deleteJob);

export default router;
```

server.js

```js
import jobRouter from "./routers/jobRouter.js";
app.use("/api/v1/jobs", jobRouter);
```

#### MongoDB

[MongoDb](https://www.mongodb.com/)

MongoDB is a popular NoSQL database that provides a flexible and scalable approach to storing and retrieving data. It uses a document-oriented model, where data is organized into collections of JSON-like documents. MongoDB offers high performance, horizontal scalability, and easy integration with modern development frameworks, making it suitable for handling diverse data types and handling large-scale applications.

MongoDB Atlas is a fully managed cloud database service provided by MongoDB, offering automated deployment, scaling, and monitoring of MongoDB clusters, allowing developers to focus on building their applications without worrying about infrastructure management.

#### Mongoosejs

[Mongoose](https://mongoosejs.com/)

Mongoose is an Object Data Modeling (ODM) library for Node.js that provides a straightforward and elegant way to interact with MongoDB. It allows developers to define schemas and models for their data, providing structure and validation. Mongoose also offers features like data querying, middleware, and support for data relationships, making it a powerful tool for building MongoDB-based applications.

```sh
npm i mongoose@7.0.5
```

server.js

```js
// Connects to a MongoDB database using Mongoose and starts an Express server. It uses a try-catch block to handle potential errors during the database connection or server startup.
import mongoose from "mongoose";

try {
  await mongoose.connect(process.env.MONGO_URL);
  // mongoose.connect: A method provided by Mongoose to establish a connection to a MongoDB database.
  // process.env.MONGO_URL: The connection string for the MongoDB database, typically stored in an environment variable (e.g., in a .env file).
  // await: Ensures the connection is established before proceeding to the next line of code.
  app.listen(port, () => {
    console.log(`server running on PORT ${port}....`);
  });
} catch (error) {
  console.log(error);
  process.exit(1);
  // Purpose: Terminates the Node.js process with an exit code of 1.
  // Exit Code 1:Indicates that the process exited due to an error.
  // Why Exit?
  // If the database connection fails, the application cannot function properly, so it’s better to stop the process.
}
```

#### Job Model

models/JobModel.js

enum - data type represents a field with a predefined set of values

```js
import mongoose from "mongoose";

const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: ["interview", "declined", "pending"],
      default: "pending",
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "internship"],
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true },
);

export default mongoose.model("Job", JobSchema);
```

#### Create Job

jobController.js

```js
import Job from "../models/JobModel.js";

export const createJob = async (req, res) => {
  const { company, position } = req.body;
  const job = await Job.create({ company, position });
  res.status(201).json({ job });
};
```

#### Try / Catch

jobController.js

```js
export const createJob = async (req, res) => {
  const { company, position } = req.body;
  try {
    const job = await Job.create("something");
    res.status(201).json({ job });
  } catch (error) {
    res.status(500).json({ msg: "server error" });
  }
};
// since we dont wanna use try and catch for every controller
// so we will use express-async-error which will do the work of try and catch block
```

#### express-async-errors

The "express-async-errors" package is an Express.js middleware that helps handle errors that occur within asynchronous functions. It catches unhandled errors inside async/await functions and forwards them to Express.js's error handling middleware, preventing the Node.js process from crashing. It simplifies error handling in Express.js applications by allowing you to write asynchronous code without worrying about manually catching and forwarding errors.

[Express Async Errors](https://www.npmjs.com/package/express-async-errors)

```sh
npm i express-async-errors@3.1.1
```

- setup import at the top !!!

  server.js

```js
import "express-async-errors";
```

jobController.js

```js
export const createJob = async (req, res) => {
  const { company, position } = req.body;

  const job = await Job.create({ company, position });
  res.status(201).json({ job });
};
```

#### Get All Jobs

jobController.js

```js
export const getAllJobs = async (req, res) => {
  const jobs = await Job.find({});
  res.status(200).json({ jobs });
};
```

#### Get Single Job

```js
export const getJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findById(id);
  if (!job) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job });
};
```

#### Delete Job

jobController.js

```js
export const deleteJob = async (req, res) => {
  const { id } = req.params;
  const removedJob = await Job.findByIdAndDelete(id);

  if (!removedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }
  res.status(200).json({ job: removedJob });
};
```

#### Update Job

```js
export const updateJob = async (req, res) => {
  const { id } = req.params;

  const updatedJob = await Job.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedJob) {
    return res.status(404).json({ msg: `no job with id ${id}` });
  }

  res.status(200).json({ job: updatedJob });
};
```

#### Status Codes

A library for HTTP status codes is useful because it provides a comprehensive and standardized set of codes that represent the outcome of HTTP requests. It allows developers to easily understand and handle different scenarios during web development, such as successful responses, client or server errors, redirects, and more. By using a status code library, developers can ensure consistent and reliable communication between servers and clients, leading to better error handling and improved user experience.

[Http Status Codes](https://www.npmjs.com/package/http-status-codes)

```sh
npm i http-status-codes@2.2.0

```

200 OK OK
201 CREATED Created

400 BAD_REQUEST Bad Request
401 UNAUTHORIZED Unauthorized

403 FORBIDDEN Forbidden
404 NOT_FOUND Not Found

500 INTERNAL_SERVER_ERROR Internal Server Error

- refactor 200 response in all controllers

jobController.js

```js
res.status(StatusCodes.OK).json({ jobs });
```

createJob

```js
res.status(StatusCodes.CREATED).json({ job });
```

#### Custom Error Class

jobController

```js
export const getJob = async (req, res) => {
  ....
  if (!job) {
    throw new Error('no job with that id');
    // return res.status(404).json({ msg: `no job with id ${id}` });
    // By throwing an error, you can centralize error handling and keep your code clean and modular.
    // Alternatively, you can directly send a response if you prefer a simpler approach. Choose the method that best fits your application’s architecture and requirements.
  }
  ...
};

```

errors/customErrors.js

```js
import { StatusCodes } from "http-status-codes";
export class NotFoundError extends Error {
  constructor(message) {
    super(message);
    this.name = "NotFoundError";
    this.statusCode = StatusCodes.NOT_FOUND;
  }
}
```

This code defines a custom error class NotFoundError that extends the built-in Error class in JavaScript. The NotFoundError class is designed to be used when a requested resource is not found, and it includes a status code of 404 to indicate this.

Here's a breakdown of the code:

class NotFoundError extends Error: This line defines a new class NotFoundError that extends the built-in Error class. This means that NotFoundError inherits all of the properties and methods of the Error class, and can also define its own properties and methods.

constructor(message): This is the constructor method for the NotFoundError class, which is called when a new instance of the class is created. The message parameter is the error message that will be displayed when the error is thrown.

super(message): This line calls the constructor of the Error class and passes the message parameter to it. This sets the error message for the NotFoundError instance.

this.name = "NotFoundError": This line sets the name property of the NotFoundError instance to "NotFoundError". This is a built-in property of the Error class that specifies the name of the error.

this.statusCode = 404: This line sets the statusCode property of the NotFoundError instance to 404. This is a custom property that is specific to the NotFoundError class and indicates the HTTP status code that should be returned when this error occurs.

By creating a custom error class like NotFoundError, you can provide more specific error messages and properties to help with debugging and error handling in your application.

#### Custom Error

jobController.js

```js
import { NotFoundError } from "../customErrors.js";

if (!job) throw new NotFoundError(`no job with id : ${id}`);
```

middleware/errorHandlerMiddleware.js

```js
import { StatusCodes } from "http-status-codes";
const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong, try again later";

  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;
```

server.js

```js
import errorHandlerMiddleware from "./middleware/errorHandlerMiddleware.js";

app.use(errorHandlerMiddleware);
```

#### Bad Request Error

400 BAD_REQUEST Bad Request
401 UNAUTHORIZED Unauthorized
403 FORBIDDEN Forbidden
404 NOT_FOUND Not Found

customErrors.js

```js
// This code defines a custom error class called BadRequestError that extends the built-in Error class in JavaScript.
// This custom error class is specifically designed to handle bad request errors (HTTP status code 400) in a structured and consistent way.
export class BadRequestError extends Error {
  constructor(message) {
    // Calls the constructor of the parent class (Error) and sets the error message.
    // The message parameter is passed to the Error constructor.
    super(message);
    this.name = "BadRequestError";
    // Sets the name property of the error to "BadRequestError".
    this.statusCode = StatusCodes.BAD_REQUEST;
    // Adds a statusCode property to the error object.
    // StatusCodes.BAD_REQUEST is typically imported from a library like http-status-codes and represents the HTTP status code 400.
  }
}
export class UnauthenticatedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthenticatedError";
    this.statusCode = StatusCodes.UNAUTHORIZED;
  }
}
export class UnauthorizedError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnauthorizedError";
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
```

#### Validation Layer

[Express Validator](https://express-validator.github.io/docs/)

```sh
npm i express-validator@7.0.1
```

#### Test Route

server.js

```js
app.post("/api/v1/test", (req, res) => {
  const { name } = req.body;
  res.json({ msg: `hello ${name}` });
});

// if we send an empty request req with only name property , a default job will be created
// we could avoid do that in schema but that will pretty hectic
// so to avoid that we need validator
```

#### Express Validator

```js
import { body, validationResult } from "express-validator";

app.post(
  "/api/v1/test",
  // express validator
  [body("name").notEmpty().withMessage("name is required")],
  // we will have two middleware fn this is first middleware fn where we will set the rules
  // body("name"): Specifies that the validation rule applies to the name field in the request body.
  // This middleware checks if the name field is present and not empty in the request body. If the validation fails, it adds an error to the validationResult.
  (req, res) => {
    // this is second middleware fn where we will check for the errors if they exist or not
    // in here we will check for the three things req res next
    // if everything is succcessful we will pass it to the next middleware
    const errors = validationResult(req);
    // console.log(errors.isEmpty())
    // if isEmpty is true we dont have any error
    if (!errors.isEmpty()) {
      // if isEmpty is false means we have errors
      const errorMessages = errors.array().map((error) => error.msg);
      // msg : that we have set in first middleware
      //  Maps the errors to their custom error messages.
      return res.status(400).json({ errors: errorMessages });
    }
    next();
  },
  (req, res) => {
    const { name } = req.body;
    res.json({ msg: `hello ${name}` });
  },
);
```

#### Validation Middleware

middleware/validationMiddleware.js

```js
import { body, validationResult } from "express-validator";
import { BadRequestError } from "../errors/customErrors";
// body: A function from express-validator used to define validation rules for specific fields in the request body.
// validationResult: A function from express-validator that extracts the validation errors from the request object.
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    // This is an array of validation rules (e.g., body("name").notEmpty()) passed to the function.
    // we could use other names too instead of validateValues
    // by using this we are accessing the first array basically the rules that we set in or first middlware
    (req, res, next) => {
      const errors = validationResult(req);
      // It extracts the validation errors from the request object (req) after the validation rules have been applied.
      // It returns an object containing all the validation errors.
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        // errors.array()
        // The errors.array() method is called on the validationResult object.
        // It converts the validation errors into an array of error objects.
        // Each error object contains details about the validation error, such as:
        // msg: The error message (e.g., "name is required").
        // param: The field that failed validation (e.g., "name").
        // location: Where the error occurred (e.g., body, query, params).
        // value: The actual value that caused the validation to fail.
        // The .map() function is used to transform the array of error objects into an array of error messages.
        // It iterates over each error object in the array and extracts the msg property (the error message).
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
  // we could reuse this code from project to project
};

export const validateTest = withValidationErrors([
  body("name")
    .notEmpty()
    .withMessage("name is required")
    .isLength({ min: 3, max: 50 })
    .withMessage("name must be between 3 and 50 characters long")
    .trim(),
]);
```

#### Remove Test Case From Server

#### Setup Constants

utils/constants.js
// we have some hardcoded values in our schema , to avoid those hard coded values
// so we are going to set them up as objects

```js
export const JOB_STATUS = {
  PENDING: "pending",
  INTERVIEW: "interview",
  DECLINED: "declined",
};

export const JOB_TYPE = {
  FULL_TIME: "full-time",
  PART_TIME: "part-time",
  INTERNSHIP: "internship",
};

export const JOB_SORT_BY = {
  NEWEST_FIRST: "newest",
  OLDEST_FIRST: "oldest",
  ASCENDING: "a-z",
  DESCENDING: "z-a",
};
```

models/JobModel.js

```js
import mongoose from "mongoose";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants";
const JobSchema = new mongoose.Schema(
  {
    company: String,
    position: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      // this is how we access the values in obj in js
      default: JOB_STATUS.PENDING,
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: JOB_TYPE.FULL_TIME,
    },
    jobLocation: {
      type: String,
      default: "my city",
    },
  },
  { timestamps: true },
);
```

#### Validate Create Job

validationMiddleware.js

```js
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";

export const validateJobInput = withValidationErrors([
  // we will use this(validateJobInput) in the controllers which are expecting some values
  // which are createJob and updateJob
  body("company").notEmpty().withMessage("company is required"),
  body("position").notEmpty().withMessage("position is required"),
  body("jobLocation").notEmpty().withMessage("job location is required"),
  body("jobStatus")
    .isIn(Object.values(JOB_STATUS))
    .withMessage("invalid status value"),
  // The .isIn() method is a validator provided by express-validator.
  // It checks if the value of the jobStatus field is one of the values in the array passed to it.
  // Object.values(JOB_STATUS) extracts the values from the JOB_STATUS object and returns them as an array.
  body("jobType").isIn(Object.values(JOB_TYPE)).withMessage("invalid job type"),
]);
```

```js
import { validateJobInput } from "../middleware/validationMiddleware.js";

router.route("/").get(getAllJobs).post(validateJobInput, createJob);
router
  .route("/:id")
  .get(getJob)
  .patch(validateJobInput, updateJob)
  .delete(deleteJob);
```

- create job request

```json
{
  "company": "coding addict",
  "position": "backend-end",
  "jobStatus": "pending",
  "jobType": "full-time",
  "jobLocation": "florida"
}
```

#### Validate ID Parameter

validationMiddleware.js

```js
import mongoose from "mongoose";

import { param } from "express-validator";

export const validateIdParam = withValidationErrors([
  param("id")
    .custom((value) => mongoose.Types.ObjectId.isValid(value))
    //if the result of this is false this will return the following msg
    // and if this is true then this will move onto next middleware
    .withMessage("invalid MongoDB id"),
]);
```

```js
export const validateIdParam = withValidationErrors([
  param("id").custom(async (value) => {
    const isValidId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidId) throw new BadRequestError("invalid MongoDB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with id : ${value}`);
  }),
]);
```

```js
import { body, param, validationResult } from "express-validator";
import { BadRequestError, NotFoundError } from "../errors/customErrors.js";
import { JOB_STATUS, JOB_TYPE } from "../utils/constants.js";
import mongoose from "mongoose";
import Job from "../models/JobModel.js";

const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        const errorMessages = errors.array().map((error) => error.msg);
        if (errorMessages[0].startsWith("no job")) {
          throw new NotFoundError(errorMessages);
          // we added these two lines to convert 400(bad req) to 404(not found
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};
```

- remove NotFoundError from getJob, updateJob, deleteJob controllers

#### Clean DB

#### User Model

models/UserModel.js

```js
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  lastName: {
    type: String,
    default: "lastName",
  },
  location: {
    type: String,
    default: "my city",
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
});

export default mongoose.model("User", UserSchema);
```

#### User Controller and Router

controllers/authController.js

```js
export const register = async (req, res) => {
  res.send("register");
};
export const login = async (req, res) => {
  res.send("register");
};
```

routers/authRouter.js

```js
import { Router } from "express";
import { register, login } from "../controllers/authController.js";
const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
```

server.js

```js
import authRouter from "./routers/authRouter.js";

app.use("/api/v1/auth", authRouter);
```

#### Create User - Initial Setup

authController.js

```js
import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";

export const register = async (req, res) => {
  const user = await User.create(req.body);
  //User.create(req.body) is an asynchronous operation that creates a new user in the database.
  // User is likely a Mongoose model (if using MongoDB) or a Sequelize model (if using SQL).
  // req.body contains the data sent in the request body (e.g., { name: "John", email: "john@example.com", password: "123456" }).
  // The await keyword pauses the execution of the function until the User.create operation completes. This ensures that the code waits for the database operation to finish before proceeding.
  res.status(StatusCodes.CREATED).json({ user });
};
```

- register user request

```json
{
  "name": "john",
  "email": "john@gmail.com",
  "password": "secret123",
  "lastName": "smith",
  "location": "my city"
}
```

#### Validate User

validationMiddleware.js

```js
import User from "../models/UserModel.js";

export const validateRegisterInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email) => {
      const user = await User.findOne({ email });
      // User.findOne({ email }) queries the database to find a user with the given email.
      if (user) {
        throw new BadRequestError("email already exists");
      }
    }),
  body("password")
    .notEmpty()
    .withMessage("password is required")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters long"),
  body("location").notEmpty().withMessage("location is required"),
  body("lastName").notEmpty().withMessage("last name is required"),
]);
```

authRouter.js

```js
import { validateRegisterInput } from "../middleware/validationMiddleware.js";

router.post("/register", validateRegisterInput, register);
```

#### Admin Role

authController.js

```js
// first registered user is an admin
export const register = async (req, res) => {
  const isFirstAccount = (await User.countDocuments()) === 0;
  req.body.role = isFirstAccount ? "admin" : "user";
  const user = await User.create(req.body);
  res.status(StatusCodes.CREATED).json({ user });
};
```

#### Hash Passwords

[bcryptjs](https://www.npmjs.com/package/bcryptjs)

```sh
npm i bcryptjs@2.4.3

```

authController.js

```js
import bcrypt from "bcryptjs";

const register = async (req, res) => {
  const salt = await bcrypt.genSalt(10);
  // Generates a salt (a random string) to be used in hashing the password.
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // Hashes the user's password using the generated salt.
  req.body.password = hashedPassword;
  // Hashes the user's password using the generated salt.
  const user = await User.create(req.body);
  // Saves the user data (including the hashed password) to the database.
};
```

const salt = await bcrypt.genSalt(10);
This line generates a random "salt" value that will be used to hash the password. A salt is a random value that is added to the password before hashing, which helps to make the resulting hash more resistant to attacks like dictionary attacks and rainbow table attacks. The genSalt() function in bcrypt generates a random salt value using a specified "cost" value. The cost value determines how much CPU time is needed to calculate the hash, and higher cost values result in stronger hashes that are more resistant to attacks.

In this example, a cost value of 10 is used to generate the salt. This is a good default value that provides a good balance between security and performance. However, you may need to adjust the cost value based on the specific needs of your application.

const hashedPassword = await bcrypt.hash(password, salt);
This line uses the generated salt value to hash the password. The hash() function in bcrypt takes two arguments: the password to be hashed, and the salt value to use for the hash. It then calculates the hash value using a one-way hash function and the specified salt value.

The resulting hash value is a string that represents the hashed password. This string can then be stored in a database or other storage mechanism to be compared against the user's password when they log in.

By using a salt value and a one-way hash function, bcrypt helps to ensure that user passwords are stored securely and are resistant to attacks like password cracking and brute-force attacks.

##### BCRYPT VS BCRYPTJS

bcrypt and bcryptjs are both popular libraries for hashing passwords in Node.js applications. However, bcryptjs is considered to be a better choice for a few reasons:

Cross-platform compatibility: bcrypt is a native Node.js module that uses C++ bindings, which can make it difficult to install and use on some platforms. bcryptjs, on the other hand, is a pure JavaScript implementation that works on any platform.

Security: While both bcrypt and bcryptjs use the same underlying algorithm for hashing passwords, bcryptjs is designed to be more resistant to certain types of attacks, such as side-channel attacks.

Ease of use: bcryptjs has a simpler and more intuitive API than bcrypt, which can make it easier to use and integrate into your application.

Overall, while bcrypt and bcryptjs are both good choices for hashing passwords in Node.js applications, bcryptjs is considered to be a better choice for its cross-platform compatibility, improved security, ease of use, and ongoing maintenance.

#### Setup Password Utils

utils/passwordUtils.js

```js
import bcrypt from "bcryptjs";

export async function hashPassword(password) {
  const salt = await bcrypt.genSalt(10);
  // Generates a salt (a random string) to be used in the hashing process.
  const hashedPassword = await bcrypt.hash(password, salt);
  // Hashes the plain-text password using the generated salt.
  return hashedPassword;
}
```

authController.js

```js
import { hashPassword } from "../utils/passwordUtils.js";

const register = async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  // Calls the hashPassword utility function to hash the plain-text password provided in the request body.
  req.body.password = hashedPassword;
  // Updates the password field in the request body with the hashed password.
  const user = await User.create(req.body);
  // Creates a new user in the database using the updated request body (which now contains the hashed password).
  res.status(StatusCodes.CREATED).json({ msg: "user created" });
};
```

#### Login User

- login user request

```json
{
  "email": "john@gmail.com",
  "password": "secret123"
}
```

validationMiddleware.js

```js
export const validateLoginInput = withValidationErrors([
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format"),
  body("password").notEmpty().withMessage("password is required"),
]);
```

authRouter.js

```js
import { validateLoginInput } from "../middleware/validationMiddleware.js";

router.post("/login", validateLoginInput, login);
```

#### Unauthenticated Error

authController.js

```js
import { UnauthenticatedError } from "../errors/customErrors.js";

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new UnauthenticatedError("invalid credentials");
  // It checks if a user with the provided email exists in the database.
  // If the user does not exist, it throws an UnauthenticatedError with the message "invalid credentials".
  // If the user exists, it sends a response with the message "login route".
  res.send("login route");
};
```

#### Compare Password

passwordUtils.js

```js
export async function comparePassword(password, hashedPassword) {
  const isMatch = await bcrypt.compare(password, hashedPassword);
  return isMatch;
  // Compares the plain-text password (password) with the hashed password (hashedPassword).
  // Returns true if they match, otherwise false.
  // The function returns a boolean indicating whether the passwords match.
}
```

authController.js

```js
import { hashPassword, comparePassword } from "../utils/passwordUtils.js";

const login = async (req, res) => {
  const user = await User.findOne({ email: req.body.email });

  if (!user) throw new UnauthenticatedError("invalid credentials");

  const isPasswordCorrect = await comparePassword(
    req.body.password,
    user.password,
  );

  if (!isPasswordCorrect) throw new UnauthenticatedError("invalid credentials");
  res.send("login route");
  // Checks if a user with the provided email exists in the database.
  // Compares the provided password with the hashed password stored in the database.
  // Throws an UnauthenticatedError if the email or password is invalid.
  // Sends a response if the login is successful.
};
```

Refactor

```js
// well you could ignore this
const isValidUser = user && (await comparePassword(password, user.password));
if (!isValidUser) throw new UnauthenticatedError("invalid credentials");
```

#### JSON Web Token

A JSON Web Token (JWT) is a compact and secure way of transmitting data between parties. It is often used to authenticate and authorize users in web applications and APIs. JWTs contain information about the user and additional metadata, and can be used to securely transmit this information

[Useful Resource](https://jwt.io/introduction)

```sh
npm i jsonwebtoken@9.0.0
```

<!--
The login function checks if a user with the email test@example.com exists in the database.
If the user exists, it compares the provided password with the hashed password stored in the database.
If the passwords match, it generates a JWT token using the createJWT function.
The token is set in an HTTP-only cookie and sent in the response.
utils/tokenUtils.js -->

// Authentication is the process of verifying a user's identity, while authorization is the process of granting that user access to certain resources

```js
import jwt from "jsonwebtoken";
export const createJWT = (payload) => {
  const token = jwt.sign(payload, "secret", {
    expiresIn: "1d",
  });
  return token;
};

import jwt from "jsonwebtoken";
export const createJWT = (payload) => {
  // The payload typically contains user-specific data (e.g., user ID, roles) that can be used for authorization.
  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    // A secret key used to sign the token.
    expiresIn: process.env.JWT_EXPIRES_IN,
    // Specifies how long the token is valid.
  });
  return token;
};
```

JWT_SECRET represents the secret key used to sign the JWT. When creating a JWT, the payload (data) is signed with this secret key to generate a unique token. The secret key should be kept secure and should not be disclosed to unauthorized parties.

JWT_EXPIRES_IN specifies the expiration time for the JWT. It determines how long the token remains valid before it expires. The value of JWT_EXPIRES_IN is typically provided as a duration, such as "1h" for one hour or "7d" for seven days. Once the token expires, it is no longer considered valid and can't be used for authentication or authorization purposes.

These environment variables (JWT_SECRET and JWT_EXPIRES_IN) are read from the system environment during runtime, allowing for flexibility in configuration without modifying the code.

authController.js

```js
import { createJWT } from "../utils/tokenUtils.js";

const token = createJWT({ userId: user._id, role: user.role });
console.log(token);
```

#### Test JWT (optional)

[JWT](https://jwt.io/)

#### ENV Variables

- RESTART SERVER!!!!

.env

```js
JWT_SECRET=
JWT_EXPIRES_IN=
```

#### HTTP Only Cookie

An HTTP-only cookie is a cookie that can't be accessed by JavaScript running in the browser. It is designed to help prevent cross-site scripting (XSS) attacks, which can be used to steal cookies and other sensitive information.

##### HTTP Only Cookie VS Local Storage

An HTTP-only cookie is a type of cookie that is designed to be inaccessible to JavaScript running in the browser. It is primarily used for authentication purposes and is a more secure way of storing sensitive information like user tokens. Local storage, on the other hand, is a browser-based storage mechanism that is accessible to JavaScript, and is used to store application data like preferences or user-generated content. While local storage is convenient, it is not a secure way of storing sensitive information as it can be accessed and modified by JavaScript running in the browser.

authControllers.js

```js
const oneDay = 1000 * 60 * 60 * 24;

res.cookie("token", token, {
  httpOnly: true,
  // Prevents client-side JavaScript from accessing the cookie (XSS protection)
  expires: new Date(Date.now() + oneDay),
  secure: process.env.NODE_ENV === "production",
  // Only sends cookie over HTTPS in production
});

res.status(StatusCodes.CREATED).json({ msg: "user logged in" });
```

```js
const oneDay = 1000 * 60 * 60 * 24;
```

This line defines a constant oneDay that represents the number of milliseconds in a day. This value is used later to set the expiration time for the cookie.

```js
res.cookie('token', token, {...});:
```

This line sets a cookie with the name "token" and a value of token, which is the JWT that was generated for the user. The ... represents an object containing additional options for the cookie.

httpOnly: true: This option makes the cookie inaccessible to JavaScript running in the browser. This helps to prevent cross-site scripting (XSS) attacks, which can be used to steal cookies and other sensitive information.

expires: new Date(Date.now() + oneDay): This option sets the expiration time for the cookie. In this case, the cookie will expire one day from the current time (as represented by Date.now() + oneDay).

secure: process.env.NODE_ENV === 'production': This option determines whether the cookie should be marked as secure or not. If the NODE_ENV environment variable is set to "production", then the cookie is marked as secure, which means it can only be transmitted over HTTPS. This helps to prevent man-in-the-middle (MITM) attacks, which can intercept and modify cookies that are transmitted over unsecured connections.

jobsController.js

```js
export const getAllJobs = async (req, res) => {
  console.log(req);
  const jobs = await Job.find({});
  res.status(StatusCodes.OK).json({ jobs });
};
```

#### Clean DB

#### Connect User and Job

models/User.js

```js
const JobSchema = new mongoose.Schema(
  {
    ....
    createdBy: {
      type: mongoose.Types.ObjectId,
// The createdBy field:
// Stores a reference (ObjectId) to a document in the User collection.
// This means each job is linked to a specific user who created it.
// The ref: 'User' allows Mongoose's population feature to retrieve full user details when needed.
    },
  },
  { timestamps: true }
// { timestamps: true } automatically adds:
// createdAt: Timestamp of when the job was created.
// updatedAt: Timestamp of when the job was last updated.
);
```

#### Auth Middleware

middleware/authMiddleware.js

```js
export const authenticateUser = async (req, res, next) => {
  // every req we make we need to go through this middlware
  // we have authenticate middleware in front of all our job routes
  // This is an Express middleware function.
  // It runs before any request reaches job-related routes (/api/v1/jobs).
  // It currently just logs "auth middleware" and calls next(), meaning:
  // The request proceeds to the next middleware or route handler.
  // In a real-world scenario, this function would:
  // Check if the request contains a valid authentication token (e.g., JWT).
  // Verify if the user is authorized to access the requested resource.
  // Attach user details to req.user for use in route handlers.
  console.log("auth middleware");
  next();
};
```

server.js

````js
import { authenticateUser } from "./middleware/authMiddleware.js";

app.use("/api/v1/jobs", authenticateUser, jobRouter);
// This applies authenticateUser middleware to all /api/v1/jobs routes.
// Any request to /api/v1/jobs/... must first pass through authenticateUser.
// Once authentication is handled, the request moves to jobRouter, which contains actual job-related route handlers.
// How It Works Together
// A user sends a request to an endpoint like GET /api/v1/jobs.
// The request is first processed by authenticateUser.
// If authentication is successful (currently just logging), the request proceeds to jobRouter.
// jobRouter handles the request and fetches jobs from the database.
// The response is sent back to the client.
// Next Steps
// Modify authenticateUser to:
// Extract and verify a JWT token from request headers.
// Decode the token and attach user details to req.user.
// Reject unauthorized requests.
// ```

##### Cookie Parser
// cookie-parser is a middleware for Express.js that allows you to read, parse, and access cookies in an incoming HTTP request.

[Cookie Parser](https:www.npmjs.com/package/cookie-parser)

```sh
npm i cookie-parser@1.4.6
````

server.js

````js
import cookieParser from "cookie-parser";
app.use(cookieParser());
// cookie-parser extracts cookies from incoming HTTP requests.
// It makes the cookies available in req.cookies (for regular cookies) and req.signedCookies (for signed cookies).
// Without cookie-parser, cookies would appear as raw header strings, making them difficult to work with.

#### Access Token

authMiddleware.js

```js
import { UnauthenticatedError } from "../customErrors.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }
  next();
};
````

#### Verify Token

utils/tokenUtils.js

```js
// This code ensures that only authenticated users can access certain routes by verifying a JWT (JSON Web Token) stored in cookies.
export const verifyJWT = (token) => {
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return decoded;
};
// Verifies a JWT using a secret key (JWT_SECRET) from environment variables.
// If valid, it returns the decoded token (which usually contains user details like userId and role).
// If invalid, jwt.verify() throws an error.
```

authMiddleware.js

```js
import { UnauthenticatedError } from "../customErrors.js";
import { verifyJWT } from "../utils/tokenUtils.js";

export const authenticateUser = async (req, res, next) => {
  const { token } = req.cookies;
  // extracts token from cookies
  // It checks if a token is present in req.cookies.
  // If no token is found, it throws an UnauthenticatedError.
  if (!token) {
    throw new UnauthenticatedError("authentication invalid");
  }

  try {
    const { userId, role } = verifyJWT(token);
    // Calls verifyJWT(token) to decode the JWT.
    // If verification fails (e.g., expired or invalid token), an error is thrown.
    req.user = { userId, role }; // Attaching user info to request
    // Stores userId and role in req.user so it can be accessed in later route handlers. making req.user.userId available
    next();
  } catch (error) {
    throw new UnauthenticatedError("authentication invalid");
  }
};
```

jobController.js

```js
// Fetches Jobs Created by the Logged-in User
export const getAllJobs = async (req, res) => {
  console.log(req.user);
  const jobs = await Job.find({ createdBy: req.user.userId });
  // now when the user makes a request with a cookie with the token we only provide job that belong to that specific user
  res.status(StatusCodes.OK).json({ jobs });
};
// Uses Mongoose to find all jobs where createdBy matches the authenticated user's userId.
// createdBy is stored as an ObjectId in the Job schema.
//  { createdBy: req.user.userId } acts as a filter, meaning:
// Only jobs where createdBy matches the logged-in user’s _id will be returned.
```

#### Refactor Create Job

jobController.js

```js
export const createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;
  // “Attach this job to the currently logged-in user.”
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};

// req.body.createdBy = req.user.userId;

// 👉 Means:

// “Attach this job to the currently logged-in user.”

// 🔥 Connect it with what you asked before

// Earlier you had:

// Job.find({ createdBy: req.user.userId })

// 👉 That only works if each job actually has a createdBy field

// 🔹 What happens during job creation
// Step 1: User sends request
// {
//   "company": "Google",
//   "position": "SDE"
// }

// 👉 Notice: no createdBy

// Step 2: You add it manually
// req.body.createdBy = req.user.userId;

// Now data becomes:

// {
//   "company": "Google",
//   "position": "SDE",
//   "createdBy": "USER_ID_123"
// }
// Step 3: Save to DB
// await Job.create(req.body);
```

#### Check Permissions

validationMiddleware.js

```js
const withValidationErrors = (validateValues) => {
  return [
    validateValues,
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
       ...
        if (errorMessages[0].startsWith('not authorized')) {
          throw new UnauthorizedError('not authorized to access this route');
        }
        throw new BadRequestError(errorMessages);
      }
      next();
    },
  ];
};
```

```js
import {
  BadRequestError,
  NotFoundError,
  UnauthorizedError,
} from "../errors/customErrors.js";

export const validateIdParam = withValidationErrors([
  param("id").custom(async (value, { req }) => {
    const isValidMongoId = mongoose.Types.ObjectId.isValid(value);
    if (!isValidMongoId) throw new BadRequestError("invalid MongoDB id");
    const job = await Job.findById(value);
    if (!job) throw new NotFoundError(`no job with id ${value}`);
    const isAdmin = req.user.role === "admin";
    const isOwner = req.user.userId === job.createdBy.toString();
    if (!isAdmin && !isOwner)
      throw UnauthorizedError("not authorized to access this route");
  }),
]);
```

#### Logout User

controllers/authController.js

```js
// Invalidates the JWT cookie immediately
const logout = (req, res) => {
  res.cookie("token", "logout", {
    // Sets a cookie named "token" with the value "logout".
    httpOnly: true,
    // This prevents JavaScript from accessing the cookie, increasing security.
    expires: new Date(Date.now()),
    // The expires option makes the cookie expire immediately, so the browser removes it.
  });
  res.status(StatusCodes.OK).json({ msg: "user logged out!" });
};
```

routes/authRouter.js

```js
import { Router } from "express";
const router = Router();
import { logout } from "../controllers/authController.js";

router.get("/logout", logout);

export default router;
```

#### User Routes

controllers/userController.js

```js
import { StatusCodes } from "http-status-codes";
import User from "../models/User.js";
import Job from "../models/Job.js";

export const getCurrentUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "get current user" });
};

export const getApplicationStats = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "application stats" });
};

export const updateUser = async (req, res) => {
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
```

routes/userRouter.js

```js
import { Router } from "express";
const router = Router();

import {
  getCurrentUser,
  getApplicationStats,
  updateUser,
} from "../controllers/userController.js";

router.get("/current-user", getCurrentUser);
router.get("/admin/app-stats", getApplicationStats);
router.patch("/update-user", updateUser);
export default router;
```

server.js

```js
import userRouter from "./routers/userRouter.js";

app.use("/api/v1/users", authenticateUser, userRouter);
```

#### Get Current User

```js
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  res.status(StatusCodes.OK).json({ user });
};
```

#### Remove Password

models/UserModel.js

```js
UserSchema.methods.toJSON = function () {
  var obj = this.toObject();
  //   Mongoose documents contain a lot of extra properties like __v and functions.
  // .toObject() removes all Mongoose-specific properties and converts the document into a regular JavaScript object.
  delete obj.password;
  //   Deletes the password field from the object.
  // This ensures the user's hashed password is not exposed in API responses.
  return obj;
};
```

```js
export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  // Converts the User Document to a Plain Object
  // Calls the custom toJSON() method in UserSchema to remove the password field.
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
  // Returns user details without exposing sensitive data.
};
```

#### Update User

middleware/validationMiddleware.js

```js
const validateUpdateUserInput = withValidationErrors([
  body("name").notEmpty().withMessage("name is required"),
  body("email")
    .notEmpty()
    .withMessage("email is required")
    .isEmail()
    .withMessage("invalid email format")
    .custom(async (email, { req }) => {
      const user = await User.findOne({ email });
      if (user && user._id.toString() !== req.user.userId) {
        throw new Error("email already exists");
      }
    }),
  body("lastName").notEmpty().withMessage("last name is required"),
  body("location").notEmpty().withMessage("location is required"),
]);
```

```js
export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, req.body);
  res.status(StatusCodes.OK).json({ msg: "user updated" });
};
```

```json
{
  "name": "john",
  "email": "john@gmail.com",
  "lastName": "smith",
  "location": "florida"
}
```

#### Application Stats

```js
export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const jobs = await Job.countDocuments();
  res.status(StatusCodes.OK).json({ users, jobs });
};
```

```js
export const authorizePermissions = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      throw new UnauthorizedError("Unauthorized to access this route");
    }
    next();
  };
};
```

```js
import { authorizePermissions } from "../middleware/authMiddleware.js";

router.get("/admin/app-stats", [
  authorizePermissions("admin"),
  getApplicationStats,
]);
```

#### Setup Proxy

- only in dev env
- a must since cookies are sent back to the same server
- spin up both servers (our own and vite dev)

- server

```sh
npm run dev
```

- vite dev server

```sh
cd client && npm run dev
```

server.js

```js
app.get("/api/v1/test", (req, res) => {
  res.json({ msg: "test route" });
});
```

client/src/main.jsx

```js
fetch("http://localhost:5100/api/v1/test")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

client/vite.config.js

```js
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5100/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
```

main.jsx

```js
fetch("/api/v1/test")
  .then((res) => res.json())
  .then((data) => console.log(data));
```

This code configures a proxy rule for the development server, specifically for requests that start with /api. Let's go through each property:

'/api': This is the path to match. If a request is made to the development server with a path that starts with /api, the proxy rule will be applied.
target: 'http://localhost:5100/api': This specifies the target URL where the requests will be redirected. In this case, any request that matches the /api path will be forwarded to http://localhost:5100/api.

changeOrigin: true: When set to true, this property changes the origin of the request to match the target URL. This can be useful when working with CORS (Cross-Origin Resource Sharing) restrictions.

rewrite: (path) => path.replace(/^\/api/, ''): This property allows you to modify the path of the request before it is forwarded to the target. In this case, the rewrite function uses a regular expression (/^\/api/) to remove the /api prefix from the path. For example, if a request is made to /api/users, the rewritten path will be /users.

To summarize, these lines of code configure a proxy rule for requests starting with /api on the development server. The requests will be redirected to http://localhost:5100/api, with the /api prefix removed from the path.

#### Concurrently

The concurrently npm package is a utility that allows you to run multiple commands concurrently in the same terminal window. It provides a convenient way to execute multiple tasks or processes simultaneously.

```sh
npm i concurrently@8.0.1
```

```json
"scripts": {
    "setup-project": "npm i && cd client && npm i",
    "server": "nodemon server",
    "client": "cd client && npm run dev",
    "dev": "concurrently --kill-others-on-fail \" npm run server\" \" npm run client\""
  },
```

By default, when a command fails, concurrently continues running the remaining commands. However, when --kill-others-on-fail is specified, if any of the commands fail, concurrently will immediately terminate all the other running commands.

#### Axios

Axios is a popular JavaScript library that simplifies the process of making HTTP requests from web browsers or Node.js. It provides a simple and elegant API for performing asynchronous HTTP requests, supporting features such as making GET, POST, PUT, and DELETE requests, handling request and response headers, handling request cancellation, and more.

[Axios Docs](https://axios-http.com/docs/intro)

```sh
npm i axios@1.3.6
```

main.jsx

```js
import axios from "axios";

const data = await axios.get("/api/v1/test");
console.log(data);
```

#### Custom Instance

utils/customFetch.js

```js
import axios from "axios";
const customFetch = axios.create({
  baseURL: "/api/v1",
});

export default customFetch;
```

main.jsx

```js
import customFetch from "./utils/customFetch.js";

const data = await customFetch.get("/test");
console.log(data);
```

#### Typical Form Submission

```js
import { useState } from "react";
import axios from "axios";
const MyForm = () => {
  const [value, setValue] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await axios.post("url", { value });
  };

  return <form onSubmit={handleSubmit}>.....</form>;
};

export default MyForm;
```

#### React Router - Action

Route actions are the "writes" to route loader "reads". They provide a way for apps to perform data mutations with simple HTML and HTTP semantics while React Router abstracts away the complexity of asynchronous UI and revalidation. This gives you the simple mental model of HTML + HTTP (where the browser handles the asynchrony and revalidation) with the behavior and UX capabilities of modern SPAs.

Register.jsx

```js
import { Form, redirect, useNavigation, Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";

const Register = () => {
  return (
    <Wrapper>
      <Form method="post" className="form">
        ...
      </Form>
    </Wrapper>
  );
};
export default Register;
```

App.jsx

```jsx
{
  path: 'register',
  element: <Register />,
  action: () => {
   console.log('hello there');
   return null;
   // you must return something in action or else you will get error
    },
},
```

#### Register User

- FormData API

[FormData API - JS Nuggets](https://youtu.be/5-x4OUM-SP8)
[FormData API - React ](https://youtu.be/WrX5RndZIzw)

Register.jsx

```js
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // we have grabbed all the values
  try {
    await customFetch.post("/auth/register", data);
    // now we have made an req
    return redirect("/login");
  } catch (error) {
    return { error: error.response?.data?.message || "Registration failed" };
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  // console.log(data) this will get the registered data
  // Gets Form Data from the Request
  // request.formData() retrieves the submitted form data.
  // Object.fromEntries(formData) converts it into a JavaScript object.
  try {
    await customFetch.post("/auth/register", data);

    //  customFetch.post() is likely an Axios instance used to make API requests.
    // It sends a POST request to /auth/register with the form data.
    return redirect("/login");
    // If the request succeeds, the user is redirected to /login.
  } catch (error) {
    // return error;
    return { error: error.response?.data?.message || "Registration failed" };
    //     error → The error object thrown by Axios.
    // error.response → The HTTP response returned by the server (if available).
    // error.response.data → The response body, which often contains error details.
    // error.response.data.msg → The actual error message sent by the API.
  }
};
```

App.jsx

```jsx
// actions allows us to handle form submission in an more elegant way. It is a part of react-router-dom
// action is a kinda fn which smoothly handles form submissions
import { action as registerAction } from './pages/Register';
// as we r gonna import action multiple time from diff files so the name wont collapse we use alias , this import tech is said something like that

{
  path: 'register',
  element: <Register />,
  action:registerAction
},
// When a form is submitted on the Register page, registerAction will handle it.

```

#### useNavigation() and navigation.state

This hook tells you everything you need to know about a page navigation to build pending navigation indicators and optimistic UI on data mutations. Things like:

- Global loading indicators
- Adding busy indicators to submit buttons

Navigation State

idle - There is no navigation pending.
submitting - A route action is being called due to a form submission using POST, PUT, PATCH, or DELETE
loading - The loaders for the next routes are being called to render the next page

Register.jsx

```js
const Register = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        // essentially for the method patch delete post we use post mthd ....
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        ...
      </Form>
    </Wrapper>
  );
};
export default Register;
```

#### React-Toastify

// provides some nice alerts
Import and set up the react-toastify library.

[React Toastify](https://fkhadra.github.io/react-toastify/introduction)

```sh
npm i react-toastify@9.1.2
```

main.jsx

```js
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
    <ToastContainer position="top-center" />
  </React.StrictMode>,
);
```

Register.jsx

```js
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/register", data);
    toast.success("Registration successful");
    return redirect("/login");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
```

#### Login User

```js
import { Link, Form, redirect, useNavigation } from "react-router-dom";
import Wrapper from "../assets/wrappers/RegisterAndLoginPage";
import { FormRow, Logo } from "../components";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Login = () => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>login</h4>
        <FormRow type="email" name="email" defaultValue="john@gmail.com" />
        <FormRow type="password" name="password" defaultValue="secret123" />
        <button type="submit" className="btn btn-block" disabled={isSubmitting}>
          {isSubmitting ? "submitting..." : "submit"}
        </button>
        <button type="button" className="btn btn-block">
          explore the app
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};
export default Login;
```

#### Access Action Data (optional)

```js
import { useActionData } from "react-router-dom";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  const errors = { msg: "" };
  if (data.password.length < 3) {
    errors.msg = "password too short";
    return errors;
  }
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    errors.msg = error.response.data.msg;
    return errors;
  }
};

const Login = () => {
  const errors = useActionData();

  return (
    <Wrapper>
      <Form method="post" className="form">
        ...
        {errors && <p style={{ color: "red" }}>{errors.msg}</p>}
        ...
      </Form>
    </Wrapper>
  );
};
export default Login;
```

#### Get Current User

Each route can define a "loader" function to provide data to the route element before it renders.

- must return a value

DashboardLayout.jsx

```jsx
import { Outlet, redirect, useLoaderData } from 'react-router-dom';
import customFetch from '../utils/customFetch';

export const loader = async () => {
  try {
    const { data } = await customFetch('/users/current-user');
    return data;
  } catch (error) {
    return redirect('/');
  }
};


const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const { user } = useLoaderData();

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        isDarkTheme,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
      }}
    >
      <Wrapper>
        <main className='dashboard'>
         ...
            <div className='dashboard-page'>
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;

```

#### Logout User

DashboardLayout.jsx

```js
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const DashboardLayout = () => {
  const navigate = useNavigate();

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logging out...");
  };
};
```

#### AddJob - Structure

pages/AddJob.jsx

```js
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

const AddJob = () => {
  const { user } = useOutletContext();
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">add job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" />
          <FormRow type="text" name="company" />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={user.location}
          />

          <button
            type="submit"
            className="btn btn-block form-btn "
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddJob;
```

#### Select Input

```js
<div className="form-row">
  <label htmlFor="jobStatus" className="form-label">
    job status
  </label>
  <select
    name="jobStatus"
    id="jobStatus"
    className="form-select"
    defaultValue={JOB_TYPE.FULL_TIME}
  >
    {Object.values(JOB_TYPE).map((itemValue) => {
      return (
        <option key={itemValue} value={itemValue}>
          {itemValue}
        </option>
      );
    })}
  </select>
</div>
```

#### FormRowSelect Component

components/FormRowSelect.jsx

```js
const FormRowSelect = ({ name, labelText, list, defaultValue = "" }) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <select
        name={name}
        id={name}
        className="form-select"
        defaultValue={defaultValue}
      >
        {list.map((itemValue) => {
          return (
            <option key={itemValue} value={itemValue}>
              {itemValue}
            </option>
          );
        })}
      </select>
    </div>
  );
};
export default FormRowSelect;
```

pages/AddJob.jsx

```js
<FormRowSelect
  labelText='job status'
  name='jobStatus'
  defaultValue={JOB_STATUS.PENDING}
  list={Object.values(JOB_STATUS)}
  />
<FormRowSelect
  name='jobType'
  labelText='job type'
  defaultValue={JOB_TYPE.FULL_TIME}
  list={Object.values(JOB_TYPE)}
  />
```

#### Create Job

AddJob.jsx

```js
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
```

#### Pending Class and Redirect

wrappers/BigSidebar.js

```css
.pending {
  background: var(--background-color);
}
```

AddJob.jsx

```js
export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post("/jobs", data);
    toast.success("Job added successfully");
    return redirect("all-jobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};
```

#### Add Job - CSS(optional)

wrappers/DashboardFormPage.js

```js
import styled from "styled-components";

const Wrapper = styled.section`
  border-radius: var(--border-radius);
  width: 100%;
  background: var(--background-secondary-color);
  padding: 3rem 2rem 4rem;
  box-shadow: var(--shadow-2);
  .form-title {
    margin-bottom: 2rem;
  }

  .form {
    margin: 0;
    border-radius: 0;
    box-shadow: none;
    padding: 0;
    max-width: 100%;
    width: 100%;
  }
  .form-row {
    margin-bottom: 0;
  }
  .form-center {
    display: grid;
    row-gap: 1rem;
  }
  .form-btn {
    align-self: end;
    margin-top: 1rem;
    display: grid;
    place-items: center;
  }

  @media (min-width: 992px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
      column-gap: 1rem;
    }
  }
  @media (min-width: 1120px) {
    .form-center {
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`;

export default Wrapper;
```

#### All Jobs - Structure

- create JobsContainer and SearchContainer (export)
- handle loader in App.jsx

```js
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch.get("/jobs");
    //   customFetch.get("/jobs") makes a GET request to the /jobs API endpoint.
    // The response (data) contains all available job listings.
    return {
      data,
    };
  } catch (error) {
    // toast.error(error?.response?.data?.msg);
    return { error: error.response?.data?.msg || "Failed to load jobs" };
    return error;
  }
};

const AllJobs = () => {
  const { data } = useLoaderData();
  // useLoaderData() accesses data returned by the loader function.
  return (
    <>
      <SearchContainer />
      <JobsContainer />
    </>
  );
};
export default AllJobs;
```

#### Setup All Jobs Context

```js
const AllJobsContext = createContext();

const AllJobs = () => {
  const { data } = useLoaderData();
  return (
    <AllJobsContext.Provider value={{ data }}>
      // value={{ data }} means all child components inside
      AllJobsContext.Provider can access data.
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
```

#### Render Jobs

- create Job.jsx

JobsContainer.jsx

```js
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";

import { useAllJobsContext } from "../pages/AllJobs";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs } = data;
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
    </Wrapper>
  );
};

export default JobsContainer;
```

#### JobsContainer - CSS (optional)

wrappers/JobsContainer.js

```js
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  h2 {
    text-transform: none;
  }
  & > h5 {
    font-weight: 700;
    margin-bottom: 1.5rem;
  }
  .jobs {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
  @media (min-width: 1120px) {
    .jobs {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }
  }
`;
export default Wrapper;
```

#### Dayjs

```sh
npm i dayjs@1.11.7
```

[Dayjs Docs](https://day.js.org/docs/en/installation/installation)

#### Job Component

- create JobInfo component

```js
import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/Job";
import JobInfo from "./JobInfo";
import { Form } from "react-router-dom";
import day from "dayjs";
// dayjs: Used to format the created date (MMM Do, YYYY → e.g., "Feb 28th, 2024").
import advancedFormat from "dayjs/plugin/advancedFormat";
day.extend(advancedFormat);

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  jobStatus,
  // Props: The component receives job details as props.
}) => {
  const date = day(createdAt).format("MMM Do, YYYY");
  // Converts a date like "2024-02-28T12:34:56Z" → "Feb 28th, 2024".
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h5>{position}</h5>
          <p>{company}</p>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={date} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <div className={`status ${jobStatus}`}>{jobStatus}</div>
        </div>

        <footer className="actions">
          <Link className="btn edit-btn">Edit</Link>
          <Form>
            <button type="submit" className="btn delete-btn">
              Delete
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
```

#### JobInfo Component

```js
import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className="job-icon">{icon}</span>
      <span className="job-text">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
```

#### JobInfo - CSS (optional)

wrappers/JobInfo.js

```js
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;

  .job-icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--text-secondary-color);
    }
  }
  .job-text {
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
  }
`;
export default Wrapper;
```

#### Job - CSS (optional)

```js
import styled from "styled-components";

const Wrapper = styled.article`
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  display: grid;
  grid-template-rows: 1fr auto;
  box-shadow: var(--shadow-2);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid var(--grey-100);
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    display: grid;
    place-items: center;
    background: var(--primary-500);
    border-radius: var(--border-radius);
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    color: var(--white);
    margin-right: 2rem;
  }
  .info {
    h5 {
      margin-bottom: 0.5rem;
    }
    p {
      margin: 0;
      text-transform: capitalize;
      color: var(--text-secondary-color);
      letter-spacing: var(--letter-spacing);
    }
  }

  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    margin-top: 1rem;
    margin-bottom: 1.5rem;
    grid-template-columns: 1fr;
    row-gap: 1.5rem;
    align-items: center;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
  }

  .status {
    border-radius: var(--border-radius);
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: center;
    width: 100px;
    height: 30px;
    display: grid;
    align-items: center;
  }
  .actions {
    margin-top: 1rem;
    display: flex;
    align-items: center;
  }
  .edit-btn,
  .delete-btn {
    height: 30px;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
  }
  .edit-btn {
    margin-right: 0.5rem;
  }
`;

export default Wrapper;
```

#### Edit Job - Setup

Job.jsx

```js
<Link to={`../edit-job/${_id}`} className="btn edit-btn">
  Edit
</Link>
```

pages/EditJob.jsx

```js
import { FormRow, FormRowSelect } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, useNavigation, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";

export const loader = async () => {
  return null;
};
export const action = async () => {
  return null;
};

const EditJob = () => {
  return <h1>EditJob Page</h1>;
};
export default EditJob;
```

- import EditJob page
  App.jsx

```js
import { loader as editJobLoader } from './pages/EditJob';
import { action as editJobAction } from './pages/EditJob';


{
  path: 'edit-job/:id',
  // we could use the name banana too instead of id , this represent the id which we have used here {`../edit-job/${_id}`}
  element: <EditJob />,
  loader: editJobLoader,
  action: editJobAction,
},
```

pages/EditJob.jsx

```js
// 1️⃣ loader: Fetch Job Data Before Rendering
export const loader = async ({ params }) => {
  // loader gets the info about that specific job which we r gonna edit
  try {
    const { data } = await customFetch.get(`/jobs/${params.id}`);
    // The loader function in this code is used with React Router's data loading API. It fetches job details before rendering the EditJob page.
    return data;
  } catch (error) {
    toast.error(error.response.data.msg);
    return redirect("/dashboard/all-jobs");
  }
};
export const action = async () => {
  return null;
};

const EditJob = () => {
  const params = useParams();
  console.log(params);
  const { job } = useLoaderData();

  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return <h1>EditJob Page</h1>;
};
export default EditJob;
```

#### Edit Job - Complete

```js
// 2️⃣ action: Handle Form Submission (Update Job)
export const action = async ({ request, params }) => {
  const formData = await request.formData(); // Get form data
  const data = Object.fromEntries(formData); // Convert to object
  try {
    await customFetch.patch(`/jobs/${params.id}`, data); // Update job
    toast.success("Job edited successfully");
    return redirect("/dashboard/all-jobs");
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const EditJob = () => {
  const { job } = useLoaderData();
  // const { job } = useLoaderData();  // Gets job details from loader
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            labelText="job location"
            name="jobLocation"
            defaultValue={job.jobLocation}
          />

          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <button
            type="submit"
            className="btn btn-block form-btn "
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditJob;
```

#### Delete Job

Job.jsx

```js
<Form method="post" action={`../delete-job/${_id}`}>
  <button type="submit" className="btn delete-btn">
    Delete
  </button>
</Form>
```

pages/DeleteJob.jsx

```js
import { redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

export async function action({ params }) {
  try {
    await customFetch.delete(`/jobs/${params.id}`);
    toast.success("Job deleted successfully");
  } catch (error) {
    toast.error(error.response.data.msg);
  }
  return redirect("/dashboard/all-jobs");
}
```

App.jsx

```js
import { action as deleteJobAction } from './pages/DeleteJob';

 { path: 'delete-job/:id', action: deleteJobAction },
```

#### Admin Page

pages/Admin.jsx

```js
import { FaSuitcaseRolling, FaCalendarCheck } from "react-icons/fa";

import { useLoaderData, redirect } from "react-router-dom";
import customFetch from "../utils/customFetch";
import Wrapper from "../assets/wrappers/StatsContainer";
import { toast } from "react-toastify";
export const loader = async () => {
  try {
    const response = await customFetch.get("/users/admin/app-stats");
    // It sends a GET request to /users/admin/app-stats using customFetch.get().
    // This is likely an Axios instance configured for API calls.
    return response.data;
    // If the request is successful, it returns response.data, which contains users and jobs
  } catch (error) {
    toast.error("You are not authorized to view this page");
    return redirect("/dashboard");
  }
};

const Admin = () => {
  const { users, jobs } = useLoaderData();
  return (
    <Wrapper>
      <h2>admin page</h2>
    </Wrapper>
  );
};
export default Admin;
```

App.jsx

```js
import { loader as adminLoader } from './pages/Admin';

{
  path: 'admin',
  element: <Admin />,
  loader: adminLoader,
},

```

NavLinks.jsx

```js
{
  links.map((link) => {
    const { text, path, icon } = link;
    const { role } = user;
    if (role !== "admin" && path === "admin") return null;
    // If role is not "admin" (role !== "admin") AND
    // If path is "admin" (meaning it's the admin link),
    // Then exit early using return;, so the link isn't rendered.
  });
}
```

#### StatItem Component

- create StatItem.jsx
- import/export

  StatItem.jsx

```js
import Wrapper from "../assets/wrappers/StatItem";
const StatItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h5 className="title">{title}</h5>
    </Wrapper>
  );
};
export default StatItem;
```

Admin.jsx

```js
import { StatItem } from "../components";

const Admin = () => {
  const { users, jobs } = useLoaderData();
  // ✅ useLoaderData() retrieves the users and jobs data from the loader function.

  return (
    <Wrapper>
      <StatItem
        // Receives props to customize each statistic:
        title="current users"
        count={users}
        color="#e9b949"
        bcg="#fcefc7"
        icon={<FaSuitcaseRolling />}
      />
      <StatItem
        title="total jobs"
        count={jobs}
        color="#647acb"
        bcg="#e0e8f9"
        icon={<FaCalendarCheck />}
      />
    </Wrapper>
  );
};
export default Admin;
```

#### Admin - CSS (optional)

wrappers/StatsContainer.js

```js
import styled from "styled-components";

const Wrapper = styled.section`
  display: grid;
  row-gap: 2rem;
  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    column-gap: 1rem;
  }
  @media (min-width: 1120px) {
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }
`;
export default Wrapper;
```

wrappers/StatItem.js

```js
import styled from "styled-components";

const Wrapper = styled.article`
  padding: 2rem;
  background: var(--background-secondary-color);
  border-radius: var(--border-radius);
  border-bottom: 5px solid ${(props) => props.color};
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .count {
    display: block;
    font-weight: 700;
    font-size: 50px;
    color: ${(props) => props.color};
    line-height: 2;
  }
  .title {
    margin: 0;
    text-transform: capitalize;
    letter-spacing: var(--letter-spacing);
    text-align: left;
    margin-top: 0.5rem;
    font-size: 1.25rem;
  }
  .icon {
    width: 70px;
    height: 60px;
    background: ${(props) => props.bcg};
    border-radius: var(--border-radius);
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      font-size: 2rem;
      color: ${(props) => props.color};
    }
  }
`;

export default Wrapper;
```

#### Avatar Image

- get two images from pexels

[pexels](https://www.pexels.com/search/person/)

#### Setup Public Folder

server.js

```js
import { dirname } from "path";
// This imports the dirname function from Node’s built-in path module.
// dirname() is used to get the directory name of a file path.
import { fileURLToPath } from "url";
// fileURLToPath() is a function from Node’s built-in url module.
// It's used to convert a file URL (like file:///home/user/file.js) into a regular file system path.
import path from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
// Since ES modules don’t support __dirname, this line manually creates it.
// import.meta.url gives you the URL of the current file.
// fileURLToPath() converts that URL to a file path.
// dirname() then extracts the directory name from that path.
// ✅ Now you can use __dirname just like in CommonJS!
app.use(express.static(path.resolve(__dirname, "./public")));
// express.static() serves static files (HTML, CSS, images, JS, etc.).
// path.resolve(__dirname, "./public") builds an absolute path to the public folder.
// Example: if your current file is in /myapp/server/, this resolves to /myapp/server/public
// So now, Express will serve all files from the public folder at the root URL:
// /public/style.css → http://localhost:5000/style.css

// ✅ In Summary
// Line	                        What It Does
// import { dirname }	          To get a file's directory
// import { fileURLToPath }	    Converts module URL to file path
// const __dirname = ...	      Manually define __dirname in ES modules
// app.use(express.static(...))	Serves static files from the public folder
```

- http://localhost:5100/imageName

#### Profile Page - Initial Setup

- remove jobs,users from DB
- add avatar property in the user model

models/UserModel.js

```js
const UserSchema = new mongoose.Schema({
  avatar: String,
  avatarPublicId: String,
});
```

#### Profile Page - Structure

pages/Profile.jsx

```js
import { FormRow } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { useNavigation, Form } from "react-router-dom";
import customFetch from "../utils/customFetch";
import { toast } from "react-toastify";

const Profile = () => {
  const { user } = useOutletContext();
  const { name, lastName, email, location } = user;
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <Wrapper>
      <Form method="post" className="form" encType="multipart/form-data">
// 1️⃣ <Form> (from React Router)
// This replaces the regular HTML <form> tag.
// It automatically integrates with React Router’s loader and action functions.
// When you submit this form, it will call the associated action function in your route
// 2️⃣ method="post"
// Specifies the HTTP method to use when the form is submitted.
// post means form data will be sent in the request body, not the URL (which is what get does).
// Used when you want to create or update data.
// 💡 React Router will direct the form submission to the route’s action() handler.
// 4️⃣ encType="multipart/form-data"
// Encoding type for the form data.
// Required when you're uploading files (like images, PDFs, etc.).
// This allows the form to send binary file data along with text inputs.
// Without this, file uploads won’t work properly!
        <h4 className="form-title">profile</h4>

        <div className="form-center">
          <div className="form-row">
            <label htmlFor="avatar" className="form-label">
              Select an image file (max 0.5 MB):
            </label>
// ✅ htmlFor="avatar": Connects the <label> to the <input> by referencing the input’s id.
// name="avatar" is the key used when submitting the form. On the server side, this is how you access the uploaded file.
Example: in a backend (Node.js), you might access it as req.body.avatar or req.files.avatar.
            <input
              type="file"
// Specifies that this is a file upload input.
// It shows a button like “Choose File” or “Browse” depending on the browser
              id="avatar"
              name="avatar"
              className="form-input"
              accept="image/*"
// Restricts the file picker to only show image files (e.g., .jpg, .png, .gif).
// The * is a wildcard, so image/* means "any image type".
// This is just a suggestion to the browser — it doesn’t guarantee that only images will be uploaded (you should still validate on the backend!).
            />
          </div>
          <FormRow type="text" name="name" defaultValue={name} />
          <FormRow
            type="text"
            labelText="last name"
            name="lastName"
            defaultValue={lastName}
          />
          <FormRow type="email" name="email" defaultValue={email} />
          <FormRow type="text" name="location" defaultValue={location} />
          <button
            className="btn btn-block form-btn"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "submitting..." : "save changes"}
          </button>
        </div>
      </Form>
    </Wrapper>
  );
};

export default Profile;
```

#### Profile Page - Action

- import/export action (App.jsx)

```js
export const action = async ({ request }) => {
  const formData = await request.formData();

  const file = formData.get("avatar");
  if (file && file.size > 500000) {
    toast.error("Image size too large");
    return null;
  }

  try {
    await customFetch.patch("/users/update-user", formData);
    toast.success("Profile updated successfully");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
  }
  return null;
};
```

#### Update User - Server

```sh
npm i multer@1.4.5
```

Multer is a popular middleware package for handling multipart/form-data in Node.js web applications. It is commonly used for handling file uploads. Multer simplifies the process of accepting and storing files submitted through HTTP requests by providing an easy-to-use API. It integrates seamlessly with Express.js and allows developers to define upload destinations, file size limits, and other configurations.

- create middleware/multerMiddleware.js
- setup multer

```js
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // set the directory where uploaded files will be stored
    cb(null, "public/uploads");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname;
    // set the name of the uploaded file
    cb(null, fileName);
  },
});
const upload = multer({ storage });

export default upload;
```

routes/userRouter.js

```js
import upload from "../middleware/multerMiddleware.js";

router.patch(
  "/update-user",
  // Creates a route that listens for HTTP PATCH requests to /update-user.
  upload.single("avatar"),
  // This is middleware from Multer, a Node.js library for handling file uploads.
  // upload is an instance of Multer (usually set up like const upload = multer({ ...options })).
  // .single("avatar") tells Multer to:
  // Accept only one file.
  // Look for the file in the form field with the name="avatar".
  // After this middleware runs:
  // req.file will contain the uploaded file info (filename, path, etc.).
  // The file is now saved (usually to a folder like uploads/ or stored in memory).
  validateUpdateUserInput,
  //   This is your custom middleware that likely checks:
  // Are required fields present?
  // Are they the right format? (e.g., email is valid, name isn't empty)
  // File size/type maybe?
  // If the input is invalid, it likely sends back an error and doesn’t proceed to updateUser.
  updateUser,
  //   This is your controller function — the main logic to:
  // Save the updated user info to the database.
  // Possibly update the user’s avatar filename or URL.
  // Send a response (e.g., res.json({ user })).
);
```

First, the multer package is imported.

Then, a storage object is created using multer.diskStorage(). This object specifies the configuration for storing uploaded files. In this case, the destination function determines the directory where the uploaded files will be saved, which is set to 'public/uploads'. The filename function defines the name of the uploaded file, which is set to the original filename.

Next, a multer middleware is created by passing the storage object as a configuration option. This multer middleware will be used to handle file uploads in the application.

In this case, upload is an instance of the Multer middleware that was created earlier. The .single() method is called on this instance to indicate that only one file will be uploaded. The argument 'avatar' specifies the name of the field in the HTTP request that corresponds to the uploaded file.

When this middleware is used in an HTTP route handler, it will process the incoming request and extract the file attached to the 'avatar' field. Multer will then save the file according to the specified storage configuration, which includes the destination directory and filename logic defined earlier. The uploaded file can be accessed in the route handler using req.file.

#### Cloudinary - Create Account/Get API Keys

[Cloudinary](https://cloudinary.com/)

Cloudinary is a cloud-based media management platform that helps businesses store, optimize, and deliver images and videos across the web. It provides developers with an easy way to upload, manipulate, and serve media assets, enabling faster and more efficient delivery of visual content on websites and applications. Cloudinary also offers features like automatic resizing, format conversion, and responsive delivery to ensure optimal user experiences across different devices and network conditions.

.env

```sh
CLOUD_NAME=
CLOUD_API_KEY=
CLOUD_API_SECRET=
```

#### Cloudinary - Setup Instance

```sh
npm i cloudinary@1.37.3

```

server

```js
import cloudinary from "cloudinary";
cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});
// image is not gonna disappear if we store this in cloudinary
```

#### Update User Controller

controllers/userController.js

```js
import cloudinary from "cloudinary";
import { promises as fs } from "fs";

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  // Takes everything submitted in the form (like name, email, etc.)
  //Creates a new object with that data
  delete newUser.password;
  // Just a safety measure: prevents someone from updating the password this way (probably handled elsewhere)
  if (req.file) {
    // Only runs this block if an image was uploaded (from upload.single("avatar") middleware)
    const response = await cloudinary.v2.uploader.upload(req.file.path);
    // Uploads the image from local disk (where Multer saved it) to Cloudinary
    // Returns metadata: secure_url (for viewing), public_id (for deletion)
    await fs.unlink(req.file.path);
    // Deletes the image from your local file system (you don’t need it after upload)
    newUser.avatar = response.secure_url;
    // Saves the image URL (hosted on Cloudinary) to the user object
    newUser.avatarPublicId = response.public_id;
    // Saves the public ID so it can be deleted later if needed
  }
  // we only want to update the image only if the user is sending the image , this if statement checks that
  // and remember we could update the user without updating the image

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);
  //   Updates the user's document in MongoDB using their userId
  // newUser may include name, email, avatar, etc.

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
    // If a new file was uploaded (req.file) and the old user had a Cloudinary image (avatarPublicId), delete the old one from Cloudinary to avoid clutter or wasted storage.
  }
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
```

#### Logout Container

```js
{
  user.avatar ? (
    <img src={user.avatar} alt="avatar" className="img" />
  ) : (
    <FaUserCircle />
    // It checks whether the user object has an avatar property (typically a URL to the image).
    // If user.avatar exists and is not null/undefined/empty, it shows the image.
    // Otherwise, it shows a fallback icon.
  );
}
```

#### Submit Btn Component

- create component SubmitBtn (export/import)
- add all classes, including'.form-btn'
- setup in Register,Login, AddJob, EditJob, Profile
- make sure to add formBtn prop

```js
import { useNavigation } from "react-router-dom";
const SubmitBtn = ({ formBtn }) => {
  const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";
  return (
    <button
      type="submit"
      className={`btn btn-block ${formBtn && "form-btn"}`}
      // - `className` adds base styles (`btn btn-block`) and, if `formBtn` is true, adds `"form-btn"` as well.
      disabled={isSubmitting}
    >
      {isSubmitting ? "submitting..." : "submit"}
    </button>
  );
};
export default SubmitBtn;
```

#### Test User

- create test user
- feel free to use one of the chatGPT options

```json
{
  "name": "Zippy",
  "email": "test@test.com",
  "password": "secret123",
  "lastName": "ShakeAndBake",
  "location": "Codeville"
}
{
  "name": "Chuckleberry",
  "email": "test@test.com",
  "password": "secret123",
  "lastName": "Gigglepants",
  "location": "Laughterland"
}

{
  "name": "Bubbles McLaughster",
  "email": "test@test.com",
  "password": "secret123",
  "lastName": "Ticklebottom",
  "location": "Giggle City"
}


{
  "name": "Gigglesworth",
  "email": "test@test.com",
  "password": "secret123",
  "lastName": "Snickerdoodle",
  "location": "Chuckleburg"
}
```

#### Test User - Login Page

```js
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const loginDemoUser = async () => {
    const data = {
      email: 'test@test.com',
      password: 'secret123',
    };
    // This is the demo user’s login info (hardcoded for testing).
    try {
      await customFetch.post('/auth/login', data);
      // customFetch.post(...): Sends a POST request to the server to log in the demo user.
      toast.success('take a test drive');
      navigate('/dashboard');
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
  };
  return (
    <Wrapper>
      ...
        <button type='button' className='btn btn-block' onClick={loginDemoUser}>
          explore the app
        </button>
        // type="button" means it won't accidentally submit a form if inside one.
        ...
      </Form>
    </Wrapper>
  );
};
export default Login;
```

#### Test User - Restrict Access

authMiddleware

```js
import {
  BadRequestError,
} from '../errors/customErrors.js';

export const authenticateUser = (req, res, next) => {
  ...
  try {
    const { userId, role } = verifyJWT(token);
//  It tries to verify the JWT token using a function called verifyJWT.
// That function extracts the userId and role from the token.
// If the token is invalid, it will throw an error (which is caught in the catch block).
    const testUser = userId === 'testUserId';
    // This line checks:
// 🔹 Is this the test/demo account?
// If the userId is 'testUserId', it means this user is using a demo account.
    req.user = { userId, role, testUser };
    // This adds a new user object to the request (so later middleware or route handlers can access it).
    next();
  }
  ....
};

export const checkForTestUser = (req, res, next) => {
  if (req.user.testUser) {
    throw new BadRequestError('Demo User. Read Only!');
  }
  next();
};

```

- add to updateUser, createJob, updateJob, deleteJob
<!-- router.patch('/update-profile', authenticateUser, checkForTestUser, updateUser);
authenticateUser: Checks that the request is from a logged-in user.
checkForTestUser: If it’s a demo user, block the action.
updateUser: The final controller that updates the profile. -->

#### Mock Data

[Mockaroo ](https://www.mockaroo.com/)

```json
{
  "company": "Cogidoo",
  "position": "Help Desk Technician",
  "jobLocation": "Vyksa",
  "jobStatus": "pending",
  "jobType": "part-time",
  "createdAt": "2022-07-25T21:26:23Z"
}
```

- rename and save json in utils

#### Populate DB

- create populate.js
- setup for test user and admin

```js
import { readFile } from "fs/promises";
// This imports readFile from Node's fs module, but in a way that allows Promises (so you can use await).
import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
// Loads environment variables from a .env file (like MONGO_URL).
// Makes them accessible via process.env.MONGO_URL.

import Job from "./models/JobModel.js";
import User from "./models/UserModel.js";
try {
  await mongoose.connect(process.env.MONGO_URL);
  // const user = await User.findOne({ email: 'john@gmail.com' });
  const user = await User.findOne({ email: "test@test.com" });

  const jsonJobs = JSON.parse(
    // Takes that text string and converts it into a JavaScript object/array.
    // In this case, the file contains an array of job objects
    await readFile(new URL("./utils/mockData.json", import.meta.url)),
    // Reads the contents of the mockData.json file as a text string.
    // readFile comes from fs/promises, so it uses await and returns a Promise.
  );
  const jobs = jsonJobs.map((job) => {
    return { ...job, createdBy: user._id };
    // will spread all of the existing properties and createdBy property will be added
    //     You're looping through each job object using .map().
    // For each job:
    //        --> ...job keeps all existing fields like position,  company, status, etc.
    //        --> createdBy: user._id adds a new field, which     links the job to the demo user in the DB.
  });
  await Job.deleteMany({ createdBy: user._id });
  // Clean up old jobs (optional but smart)
  // This removes any existing jobs created by the demo user.
  // It prevents duplicate entries every time you run this script.
  // ✅ Good for keeping your DB clean during testing or development.
  await Job.create(jobs);
  // Inserts the entire array of jobs into your MongoDB jobs collection.
  // ✅ Now your demo user has fresh job entries in the database.
  console.log("Success!!!");
  process.exit(0);
} catch (error) {
  console.log(error);
  process.exit(1);
}
```

#### Stats - Setup

- create controller
- setup route and thunder client
- install/setup dayjs on the server

jobController.js

```js
import mongoose from "mongoose";
import day from "dayjs";

export const showStats = async (req, res) => {
  const defaultStats = {
    pending: 22,
    interview: 11,
    declined: 4,
  };

  let monthlyApplications = [
    {
      date: "May 23",
      count: 12,
    },
    {
      date: "Jun 23",
      count: 9,
    },
    {
      date: "Jul 23",
      count: 3,
    },
  ];
  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
};
```

#### Stats - Complete Server Functionality

[MongoDB Docs](https://www.mongodb.com/docs/manual/core/aggregation-pipeline/)

The MongoDB aggregation pipeline is like a factory line for data. Data enters, it goes through different stages like cleaning, sorting, or grouping, and comes out at the end changed in some way. It's a way to process data inside MongoDB.

jobController.js

```js
export const showStats = async (req, res) => {
  let stats = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
  ]);
//   Job.aggregate([...]) uses MongoDB’s aggregation pipeline to compute data.
// $match: Filters jobs where createdBy matches the current user (converted to a valid MongoDB ObjectId).
// $group: Groups jobs by the jobStatus field (e.g., "pending", "interview", "declined"), and counts how many jobs exist in each group using $sum: 1.
// 👀 Result Example:
// [
//   { _id: "pending", count: 3 },
//   { _id: "interview", count: 2 }
// ]

  stats = stats.reduce((acc, curr) => {
    // This converts the array into an object format for easier access.
    // reduce() iterates over each item, destructures _id to title, and builds the object acc.
    const { _id: title, count } = curr;
    acc[title] = count;
    return acc;
  }, {});
  // 👀 Result Example:
//   {
//   pending: 3,
//   interview: 2
// }


  const defaultStats = {
    // set ddfault stats to 0 in case no stats is present
    pending: stats.pending || 0,
    interview: stats.interview || 0,
    declined: stats.declined || 0,
  };

  let monthlyApplications = await Job.aggregate([
    { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
    {
      $group: {
        _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
        count: { $sum: 1 },
      },
    },
    { $sort: { "_id.year": -1, "_id.month": -1 } },
    { $limit: 6 },
//     This part builds the monthly applications chart for the user.
// $group is used again, this time:
// Groups jobs by the year and month of the createdAt field.
// Counts how many jobs were created in each month.
// $sort: Sorts results from newest to oldest.
// $limit: 6: Only keep the last 6 months.
// Result example :
// [
//   { _id: { year: 2025, month: 3 }, count: 4 },
//   { _id: { year: 2025, month: 2 }, count: 2 }
// ]

  ]);
  monthlyApplications = monthlyApplications
    .map((item) => {
      const {
        _id: { year, month },
        count,
      } = item;

      const date = day()
        .month(month - 1)
        .year(year)
        .format("MMM YY");
      return { date, count };
    })
    .reverse();
// Uses the dayjs (or day) library to format the raw month/year into a pretty string (like "Mar 25").
// month(month - 1) because dayjs is 0-based for months (Jan = 0).
// Finally, .reverse() puts it in chronological order (oldest to newest), good for charting.
👀 Result Example:
// [
//   { date: "Oct 24", count: 1 },
//   { date: "Nov 24", count: 2 },
//   { date: "Dec 24", count: 3 }
// ]

  res.status(StatusCodes.OK).json({ defaultStats, monthlyApplications });
//   Sends back a 200 OK response with both:
// defaultStats: Job status summary.
// monthlyApplications: Data to build the trends chart.
};

// ✅ Final Recap
// Section	What it Does
// 🧮 stats aggregation	Counts jobs by status (pending, etc.)
// 📦 reduce()	Turns array into object
// 🧱 defaultStats	Ensures all statuses have values
// 📅 monthlyApplications	Tracks jobs created per month
// 📤 Response	Sends both stats to the frontend

```

#### Commentary

```js
let stats = await Job.aggregate([
  { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
  { $group: { _id: "$jobStatus", count: { $sum: 1 } } },
]);
```

let stats = await Job.aggregate([ ... ]); This line says we're going to perform an aggregation operation on the Job collection in MongoDB and save the result in a variable called stats. The await keyword is used to wait for the operation to finish before continuing, as the operation is asynchronous (i.e., it runs in the background).

{ $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } } This is the first stage of the pipeline. It filters the jobs so that only the ones created by the user specified by req.user.userId are passed to the next stage. The new mongoose.Types.ObjectId(req.user.userId) part converts req.user.userId into an ObjectId (which is the format MongoDB uses for ids).

{ $group: { _id: '$jobStatus', count: { $sum: 1 } } } This is the second stage of the pipeline. It groups the remaining jobs by their status (the jobStatus field). For each group, it calculates the count of jobs by adding 1 for each job ({ $sum: 1 }), and stores this in a field called count.

```js
let monthlyApplications = await Job.aggregate([
  { $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } },
  {
    $group: {
      _id: { year: { $year: "$createdAt" }, month: { $month: "$createdAt" } },
      count: { $sum: 1 },
    },
  },
  { $sort: { "_id.year": -1, "_id.month": -1 } },
  { $limit: 6 },
]);
```

let monthlyApplications = await Job.aggregate([ ... ]); This line indicates that an aggregation operation will be performed on the Job collection in MongoDB. The result will be stored in the variable monthlyApplications. The await keyword ensures that the code waits for this operation to complete before proceeding, as it is an asynchronous operation.

{ $match: { createdBy: new mongoose.Types.ObjectId(req.user.userId) } } This is the first stage of the pipeline. It filters the jobs to only those created by the user identified by req.user.userId.

{ $group: { _id: { year: { $year: '$createdAt' }, month: { $month: '$createdAt' } }, count: { $sum: 1 } } } This is the second stage of the pipeline. It groups the remaining jobs based on the year and month when they were created. For each group, it calculates the count of jobs by adding 1 for each job in the group.

{ $sort: { '\_id.year': -1, '\_id.month': -1 } } This is the third stage of the pipeline. It sorts the groups by year and month in descending order. The -1 indicates descending order. So it starts with the most recent year and month.

{ $limit: 6 } This is the fourth and last stage of the pipeline. It limits the output to the top 6 groups, after sorting. This is effectively getting the job count for the last 6 months.

So, monthlyApplications will be an array with up to 6 elements, each representing the number of jobs created by the user in a specific month and year. The array will be sorted by year and month, starting with the most recent.

#### Stats - Front-End Setup

- create four components
- StatsContainer and ChartsContainer (import/export)
- AreaChart, BarChart (local)

pages/Stats.jsx

```js
import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
export const loader = async () => {
  try {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  } catch (error) {
    return error;
  }
};
// ✅ Purpose:
// This loader is responsible for fetching statistics data from the backend before the Stats component renders. It's part of the React Router loader API, which enables you to pre-fetch data.
// 🔍 Line-by-line:
// customFetch.get("/jobs/stats"): Sends a GET request to your backend API route /jobs/stats using a custom Axios instance.
// await: Since it's asynchronous, it waits for the API response before proceeding.
// return response.data: If the request is successful, it returns the actual data from the response (likely contains defaultStats and monthlyApplications).
// catch block: If there's an error (e.g. network error, unauthorized), it catches and returns the error. (Though in production, you’d probably want to handle this more gracefully.)

const Stats = () => {
  const { defaultStats, monthlyApplications } = useLoaderData();
  //   useLoaderData(): This hook gives you access to the data returned by the loader function above.
  // It destructures two things:
  // defaultStats: Basic count stats (pending, interview, declined).
  // monthlyApplications: Array of job application counts by month (for a chart).
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      // A React component that likely renders 3 stat cards: pending, interview,
      and declined. // Gets passed the defaultStats object.
      {monthlyApplications?.length > 0 && (
        <ChartsContainer data={monthlyApplications} />
      )}
      // conditonal rendering // This checks if monthlyApplications exists and has
      data (length > 0). // If it does, it renders the ChartsContainer with the monthly
      data. // This likely renders a line chart or bar chart of job application trends
    </>
  );
};
export default Stats;
```

#### Stats Container

```js
import { FaSuitcaseRolling, FaCalendarCheck, FaBug } from "react-icons/fa";
import Wrapper from "../assets/wrappers/StatsContainer";
import StatItem from "./StatItem";
const StatsContainer = ({ defaultStats }) => {
//   A React functional component that accepts a prop called defaultStats.
// defaultStats contains the values for: pending, interview, declined
// These stats are usually passed from the Stats page via the loader data.

  const stats = [
    {
      title: "pending applications",
      count: defaultStats?.pending || 0,
      icon: <FaSuitcaseRolling />,
      color: "#f59e0b",
      bcg: "#fef3c7",
    },
    {
      title: "interviews scheduled",
      count: defaultStats?.interview || 0,
      icon: <FaCalendarCheck />,
      color: "#647acb",
      bcg: "#e0e8f9",
    },
    {
      title: "jobs declined",
      count: defaultStats?.declined || 0,
      icon: <FaBug />,
      color: "#d66a6a",
      bcg: "#ffeeee",
    },
  ];
  return (
    <Wrapper>
      {stats.map((item) => {
        return <StatItem key={item.title} {...item} />;
      })}
//       Wrapper: A styled wrapper component (likely a CSS grid/flex container).
// .map((item) => {...}): Loops over the stats array.
// <StatItem ... />: Renders one StatItem for each stat.
// key={item.title}: React key for unique identity.
// {...item}: Spreads the entire object into props. So each stat card gets:
// title, count, icon, color, bcg
    </Wrapper>
  );
};
export default StatsContainer;
```

#### ChartsContainer

```js
import { useState } from "react";

import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import Wrapper from "../assets/wrappers/ChartsContainer";

const ChartsContainer = ({ data }) => {
  const [barChart, setBarChart] = useState(true);
  // This is a functional component called ChartsContainer.
  // It takes in data as a prop — this is likely the monthlyApplications array.
  // useState(true) initializes a piece of state called barChart.
  // true means it will show the Bar Chart by default.
  // setBarChart is the function used to toggle between chart types.

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type="button" onClick={() => setBarChart(!barChart)}>
        {barChart ? "Area Chart" : "Bar Chart"}
      </button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  );
};

export default ChartsContainer;
```

#### Charts

[recharts](https://recharts.org/en-US/)

- in the client

```sh
npm i recharts@2.5.0
```

#### Area Chart

```js
import {
  ResponsiveContainer,
  // Makes your chart responsive — it automatically adjusts its size to the parent container.
  AreaChart,
  //A container for drawing an area chart, where the area under a line is filled with color.
  Area,
  // This actually draws the area on the chart — both the line and the shaded fill below it.
  XAxis,
  // Renders the X-axis (horizontal axis) of the chart.
  YAxis,
  CartesianGrid,
  // Adds grid lines (both vertical and horizontal) to make the chart easier to read.
  Tooltip,
} from "recharts";

const AreaChartComponent = ({ data }) => {
//   A functional React component that accepts data as a prop — an array of objects like:
// [
//   { date: "Jan 24", count: 5 },
//   { date: "Feb 24", count: 8 },
// ]
  return (
    <ResponsiveContainer width="100%" height={300}>
      <AreaChart data={data} margin={{ top: 50 }}>
      // data={data}: Passes in the data to be plotted.
      // data: array of objects like { date: "Jan", count: 10 }
        <CartesianGrid strokeDasharray="3 3" />
        // Adds dashed grid lines for better readability.
        // strokeDasharray="3 3" means the lines are dashed like --- --- ---.
        <XAxis dataKey="date" />
        // Uses the date property from the data for the horizontal axis.
        <YAxis allowDecimals={false} />
        // allowDecimals={false} means the Y-axis shows only whole numbers
        <Tooltip />
        // When you hover over the chart, this shows details like the date and count for that point.
        <Area type="monotone" dataKey="count" stroke="#2cb1bc" fill="#bef8fd" />
// Draws the actual area line and fill under it.
// type="monotone" makes the line smooth.
// dataKey="count" tells the chart to use the count field from each object.
// stroke="#2cb1bc" is the color of the line.
// fill="#bef8fd" is the soft color that fills the area under the line.
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AreaChartComponent;
```

#### Bar Chart

```js
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  // BarChart: Main chart container.
  // Bar: The individual bars (the data visualization).
  // XAxis / YAxis: X and Y axes.
  // CartesianGrid: Grid lines.
  // Tooltip: Info popup when hovering over a bar.
  // ResponsiveContainer: Makes the chart responsive to screen size.
} from "recharts";

// same info as area chart
const BarChartComponent = ({ data }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data} margin={{ top: 50 }}>
        <CartesianGrid strokeDasharray="3 3 " />
        <XAxis dataKey="date" />
        <YAxis allowDecimals={false} />
        <Tooltip />
        <Bar dataKey="count" fill="#2cb1bc" barSize={75} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default BarChartComponent;
```

#### Charts CSS (optional)

wrappers/ChartsContainer.js

```js
import styled from "styled-components";

const Wrapper = styled.section`
  margin-top: 4rem;
  text-align: center;
  button {
    background: transparent;
    border-color: transparent;
    text-transform: capitalize;
    color: var(--primary-500);
    font-size: 1.25rem;
    cursor: pointer;
  }
  h4 {
    text-align: center;
    margin-bottom: 0.75rem;
  }
`;

export default Wrapper;
```

#### Get All Jobs - Server

jobController.js

Query parameters, also known as query strings or URL parameters, are used to pass information to a web server through the URL of a webpage. They are typically appended to the end of a URL after a question mark (?) and separated by ampersands (&). Query parameters consist of a key-value pair, where the key represents the parameter name and the value represents the corresponding data being passed. They are commonly used in web applications to provide additional context or parameters for server-side processing or to filter and sort data.

```js
export const getAllJobs = async (req, res) => {
  const { search, jobStatus, jobType, sort } = req.query;
  // Extracts filtering/sorting parameters from the URL query string (e.g., ?search=engineer&jobStatus=pending).
  const queryObject = {
    createdBy: req.user.userId,
  };
  // Only fetch jobs created by the currently logged-in user.

  if (search) {
    queryObject.$or = [
      { position: { $regex: search, $options: "i" } },
      { company: { $regex: search, $options: "i" } },
    ];
    // $or: Match either the position or company.
    // $regex: Perform partial matching like SQL's LIKE.
    // $options: "i": Case-insensitive search.
  }
  if (jobStatus && jobStatus !== "all") {
    queryObject.jobStatus = jobStatus;
    // If a specific job status is selected (not "all"), add it to the query.
  }
  if (jobType && jobType !== "all") {
    queryObject.jobType = jobType;
  }

  const sortOptions = {
    newest: "-createdAt",
    oldest: "createdAt",
    "a-z": "position",
    "z-a": "-position",
  };
  const sortKey = sortOptions[sort] || sortOptions.newest;
  // If no valid sort option is passed, default to newest.

  // setup pagination
  const page = Number(req.query.page) || 1;
  const limit = Number(req.query.limit) || 10;
  const skip = (page - 1) * limit;
  //  page: current page number.
  // limit: how many jobs per page.
  // skip: how many jobs to skip (for pagination).

  const jobs = await Job.find(queryObject)
    .sort(sortKey)
    .skip(skip)
    .limit(limit);
  // Job.find(queryObject): Find matching jobs.
  // .sort(sortKey): Apply sorting.
  // .skip(skip): Skip records for previous pages.
  // .limit(limit): Limit results to current page size.

  const totalJobs = await Job.countDocuments(queryObject);
  const numOfPages = Math.ceil(totalJobs / limit);
  // Count all jobs matching filter to calculate total pages.
  // Use Math.ceil() to round up to the next full page.

  res
    .status(StatusCodes.OK)
    .json({ totalJobs, numOfPages, currentPage: page, jobs });
  // totalJobs: how many jobs match the filter.
  // numOfPages: how many pages there are.
  // currentPage: the current page number.
  // jobs: the array of job objects for this page.
};
// ✅ Summary Table
// Part	Purpose
// queryObject	: Filters based on user and query params
// .sort(), .skip(), .limit() :	Implements sorting and pagination
// Job.countDocuments() :	Counts how many total jobs match filters
// res.json()	: Sends back data to the frontend
```

#### Search Container

- setup log in AllJobs loader

```js
import { FormRow, FormRowSelect, SubmitBtn } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";

const SearchContainer = () => {
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          {/* search position */}
          <FormRow type="search" name="search" defaultValue="a" />
          // name must be matched with what we have on our server
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            // “I want the dropdown to include all first, then all values from the JOB_TYPE object.”
            defaultValue="all"
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            list={["all", ...Object.values(JOB_TYPE)]}
            defaultValue="all"
          />
          <FormRowSelect
            name="sort"
            defaultValue="newest"
            list={[...Object.values(JOB_SORT_BY)]}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
          // This just navigates back to the /all-jobs page and resets the
          search params. // No JavaScript is needed because Link triggers a
          re-render with default state.
          {/* TEMP!!!! */}
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
```

#### All Jobs Loader

AllJobs.jsx

```js
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
const AllJobsContext = createContext();
// Creates a React Context (AllJobsContext).
// This is used to store and share job-related data across components.
// Likely, it will be used with AllJobsContext.Provider somewhere in your app.

export const loader = async ({ request }) => {
//   This function is a React Router data loader.
// It runs before the component renders and fetches jobs from the backend.
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
//     Gets the current URL: new URL(request.url)
// Extracts query parameters: .searchParams.entries()
// Converts them into an object using Object.fromEntries().
 Example: If the URL is:
// /jobs?search=developer&jobStatus=pending&page=2
 Then:
// params = {
//   search: "developer",
//   jobStatus: "pending",
//   page: "2"
// }
// This allows your API request to send search filters dynamically.
    const { data } = await customFetch.get("/jobs", {
      params,
    });
//     customFetch.get("/jobs", { params }) makes an API request to fetch jobs.
// Backend receives the request with the filters.

    return {
      data,
      searchValues: { ...params },
    };
// data → Holds all the jobs fetched from the backend.
// searchValues → Stores the search parameters (useful for keeping search filters applied).
  } catch (error) {
    toast.error(error.response.data.msg);
    return error;
  }
};

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
// useLoaderData() gets the data returned from the loader function.
// data → Holds jobs.
// searchValues → Holds the filters the user applied.


  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export default AllJobs;

export const useAllJobsContext = () => useContext(AllJobsContext);
//  Why This is Useful?
// Encapsulates useContext(AllJobsContext) inside a function.
// Now, any component can access job data using:
// const { data, searchValues } = useAllJobsContext();
// No need for prop drilling! Any component can consume data and searchValues without passing them manually.

```

```js
const params = Object.fromEntries([
  ...new URL(request.url).searchParams.entries(),
]);
```

new URL(request.url): This creates a new URL object by passing the request.url to the URL constructor. The URL object provides various methods and properties to work with URLs.

.searchParams: The searchParams property of the URL object gives you access to the query parameters in the URL. It is an instance of the URLSearchParams class, which provides methods to manipulate and access the parameters.

.entries(): The entries() method of searchParams returns an iterator containing arrays of key-value pairs for each query parameter. Each array contains two elements: the parameter name and its corresponding value.

([...new URL(request.url).searchParams.entries()]): The spread operator ... is used to convert the iterator obtained from searchParams.entries() into an array. This allows us to pass the array to the Object.fromEntries() method.

Object.fromEntries(): This static method creates an object from an array of key-value pairs. It takes an iterable (in this case, the array of parameter key-value pairs) and returns a new object where the keys and values are derived from the iterable.

Putting it all together, the code retrieves the URL from the request.url property, extracts the search parameters using the searchParams property, converts them into an array of key-value pairs using entries(), and finally uses Object.fromEntries() to create an object with the parameter names as keys and their corresponding values. The resulting object, params, contains all the search parameters from the URL.

#### Submit Form Programmatically

- setup default values from the context
- remove SubmitBtn
- add onChange to FormRow, FormRowSelect and all inputs

SearchContainer.js

```js
import { FormRow, FormRowSelect } from ".";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { Form, useSubmit, Link } from "react-router-dom";
import { JOB_TYPE, JOB_STATUS, JOB_SORT_BY } from "../../../utils/constants";
import { useAllJobsContext } from "../pages/AllJobs";
const SearchContainer = () => {
  const { searchValues } = useAllJobsContext();
  // useAllJobsContext() → Fetches searchValues from AllJobsContext.
  const { search, jobStatus, jobType, sort } = searchValues;

  const submit = useSubmit();
  //   useSubmit() (from react-router-dom) allows form submission without reloading.
  // It automatically sends the form data when inputs change.
  // ✅ Benefit:
  // When the user types in the search field, the form submits automatically → The job list updates dynamically.
  return (
    <Wrapper>
      <Form className="form">
        <h5 className="form-title">search form</h5>
        <div className="form-center">
          {/* search position */}

          <FormRow
            type="search"
            name="search"
            defaultValue={search}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
            // <FormRow /> is a reusable input component.
            // defaultValue={search} → Pre-fills the input with the previous search value.
            // onChange={(e) => submit(e.currentTarget.form)}
            // Whenever the user types, the form submits automatically.
            // e.currentTarget.form → Submits the entire form to update job results.
          />
          <FormRowSelect
            labelText="job status"
            name="jobStatus"
            list={["all", ...Object.values(JOB_STATUS)]}
            defaultValue={jobStatus}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            labelText="job type"
            name="jobType"
            defaultValue={jobType}
            list={["all", ...Object.values(JOB_TYPE)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <FormRowSelect
            name="sort"
            defaultValue={sort}
            list={[...Object.values(JOB_SORT_BY)]}
            onChange={(e) => {
              submit(e.currentTarget.form);
            }}
          />
          <Link to="/dashboard/all-jobs" className="btn form-btn delete-btn">
            Reset Search Values
          </Link>
        </div>
      </Form>
    </Wrapper>
  );
};

export default SearchContainer;
```

#### Debounce

[JS Nuggets - Debounce](https://youtu.be/tYx6pXdvt1s)

In JavaScript, debounce is a way to limit how often a function gets called. It helps prevent rapid or repeated function executions by introducing a delay. This is useful for tasks like handling user input, where you want to wait for a pause before triggering an action to avoid unnecessary processing.

```js
// Debounce:This function delays form submission to improve performance when users type quickly. Instead of submitting on every keystroke, it waits until the user stops typing for 2 seconds before submitting.
const debounce = (onChange) => {
  //   debounce is a higher-order function that takes a function (onChange) as an argument.
  // It returns a new function that will execute onChange after a delay (2s).
  let timeout;
  //   timeout is a variable to store the reference of setTimeout.
  // It ensures that any previous timeout is cleared when the function is called again.
  return (e) => {
    const form = e.currentTarget.form;
    //     e.currentTarget refers to the input field that triggered the event.
    // .form gets the form element that contains the input field.
    // This is important because we need to submit the entire form, not just the input field.
    clearTimeout(timeout);
    //     If the user types another letter before 2 seconds, the previous timeout is canceled.
    // This ensures that only the latest input triggers the API request.
    timeout = setTimeout(() => {
      onChange(form);
    }, 2000);
    //     setTimeout waits 2 seconds before executing the function inside it.
    // onChange(form) is called only if the user stops typing for 2 seconds.
    // If the user types again before 2 seconds, the previous timeout is cleared and restarted.
  };
};
// 📌 Visual Flow of Execution
// User Action	debounce Behavior
// User types "J"	Starts a 2s timer
// User types "Jo" within 2s	Resets timer, starts a new 2s timer
// User types "Job" within 2s	Resets timer, starts a new 2s timer
// User stops typing for 2s	Calls onChange(form), submitting the form

<FormRow
  type="search"
  name="search"
  defaultValue={search}
  onChange={debounce((form) => {
    submit(form);
  })}
/>;
// debounce((form) => {...})	Wraps the function in debouncing logic to prevent excessive form submissions.
// (form) => submit(form)	Calls the submit function with the entire form element, sending the search query to the backend.
// submit(form)	Triggers a form submission to update the job list without requiring a manual button click.
```

#### Pagination - Setup

- create PageBtnContainer

JobsContainer.jsx

```js
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";
import { useAllJobsContext } from "../pages/AllJobs";

const JobsContainer = () => {
  const { data } = useAllJobsContext();
  const { jobs, totalJobs, numOfPages } = data;
  if (jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalJobs} job{jobs.length > 1 && "s"} found
      </h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      // Loops through the jobs array and renders a <Job /> component for each
      job. // Passes job data as props ({...job}) to the <Job /> component. //
      Uses key={job._id} → Each job must have a unique identifier (_id) for
      React to track updates efficiently.
      {numOfPages > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};

export default JobsContainer;
```

#### Basic PageBtnContainer

```js
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();
  const pages = Array.from({ length: numOfPages }, (_, index) => index + 1);
  //    Creating an Array of Page Numbers
  // Array.from({ length: numOfPages }) → Creates an array with numOfPages elements.
  // (_, index) => index + 1 → Generates page numbers starting from 1.
  // Example:
  // If numOfPages = 3, pages = [1, 2, 3].

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };
  //   Creates a new query string (?page=pageNumber) using URLSearchParams.
  // Updates the URL without reloading the page.
  // navigate() → Navigates to the new URL with updated search params.

  return (
    <Wrapper>
      <button
        className="btn prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          // if (prevPage < 1) prevPage = 1;

          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      // Previous Page Button // Decreases currentPage by 1. // If currentPage =
      1, it loops back to numOfPages (last page). // Calls
      handlePageChange(prevPage) to update the URL.
      <div className="btn-container">
        {pages.map((pageNumber) => (
          <button
            className={`btn page-btn ${pageNumber === currentPage && "active"}`}
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
          >
            {pageNumber}
          </button>
        ))}
      </div>
      // Page Number Buttons // Loops through pages array → Creates a button for
      each page. // pageNumber === currentPage && "active" → Highlights the
      active page. // Calls handlePageChange(pageNumber) when clicked.
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
//  Next Page Button
// Increases currentPage by 1.
// If currentPage = numOfPages, it loops back to 1 (first page).
// Calls handlePageChange(nextPage) to navigate to the next page.

export default PageBtnContainer;
// 🔄 How It Works (Step-by-Step)
// Step	What Happens?
// 1️⃣	The component extracts pagination details (numOfPages, currentPage).
// 2️⃣	It generates an array of page numbers (pages = [1, 2, 3, ...]).
// 3️⃣	The Prev/Next buttons adjust the page number and update the URL.
// 4️⃣	Clicking a page button directly updates the current page.
// 5️⃣	The URL updates (?page=2), triggering a re-fetch of jobs for that page.

// 🎯 Visual Representation of Logic
// 1️⃣ Initial URL:
// /dashboard/all-jobs?page=1
// 2️⃣ Clicking "Next" Button (>):
// If currentPage = 1, navigate to ?page=2.
// 3️⃣ Clicking "Previous" Button (<):
// If currentPage = 1, navigate to the last page.
// 4️⃣ Clicking Page 3 Button:
// Updates URL to ?page=3 and highlights it.
```

#### Complex - PageBtnContainer

```js
import { HiChevronDoubleLeft, HiChevronDoubleRight } from "react-icons/hi";
import Wrapper from "../assets/wrappers/PageBtnContainer";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { useAllJobsContext } from "../pages/AllJobs";

const PageBtnContainer = () => {
  const {
    data: { numOfPages, currentPage },
  } = useAllJobsContext();
  const { search, pathname } = useLocation();
  const navigate = useNavigate();

  const handlePageChange = (pageNumber) => {
    const searchParams = new URLSearchParams(search);
    searchParams.set("page", pageNumber);
    navigate(`${pathname}?${searchParams.toString()}`);
  };

  const addPageButton = ({ pageNumber, activeClass }) => {
    return (
      <button
        className={`btn page-btn ${activeClass && "active"}`}
        key={pageNumber}
        onClick={() => handlePageChange(pageNumber)}
      >
        {pageNumber}
      </button>
    );
  };

  const renderPageButtons = () => {
    const pageButtons = [];

    // Add the first page button
    pageButtons.push(
      addPageButton({ pageNumber: 1, activeClass: currentPage === 1 }),
    );
    // Add the dots before the current page if there are more than 3 pages
    if (currentPage > 3) {
      pageButtons.push(
        <span className="page-btn dots" key="dots-1">
          ....
        </span>,
      );
    }
    // one before current page
    if (currentPage !== 1 && currentPage !== 2) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage - 1, activeClass: false }),
      );
    }

    // Add the current page button
    if (currentPage !== 1 && currentPage !== numOfPages) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage, activeClass: true }),
      );
    }

    // one after current page
    if (currentPage !== numOfPages && currentPage !== numOfPages - 1) {
      pageButtons.push(
        addPageButton({ pageNumber: currentPage + 1, activeClass: false }),
      );
    }
    if (currentPage < numOfPages - 2) {
      pageButtons.push(
        <span className=" page-btn dots" key="dots+1">
          ....
        </span>,
      );
    }

    // Add the last page button
    pageButtons.push(
      addPageButton({
        pageNumber: numOfPages,
        activeClass: currentPage === numOfPages,
      }),
    );

    return pageButtons;
  };

  return (
    <Wrapper>
      <button
        className="prev-btn"
        onClick={() => {
          let prevPage = currentPage - 1;
          if (prevPage < 1) prevPage = numOfPages;
          handlePageChange(prevPage);
        }}
      >
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className="btn-container">{renderPageButtons()}</div>
      <button
        className="btn next-btn"
        onClick={() => {
          let nextPage = currentPage + 1;
          if (nextPage > numOfPages) nextPage = 1;
          handlePageChange(nextPage);
        }}
      >
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};

export default PageBtnContainer;
```

#### PageBtnContainer CSS (optional)

wrappers/PageBtnContainer.js

```js
import styled from "styled-components";

const Wrapper = styled.section`
  height: 6rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: end;
  flex-wrap: wrap;
  gap: 1rem;
  .btn-container {
    background: var(--background-secondary-color);
    border-radius: var(--border-radius);
    display: flex;
  }
  .page-btn {
    background: transparent;
    border-color: transparent;
    width: 50px;
    height: 40px;
    font-weight: 700;
    font-size: 1.25rem;
    color: var(--primary-500);
    border-radius: var(--border-radius);
    cursor:pointer:
  }
  .active{
    background:var(--primary-500);
        color: var(--white);

  }
  .prev-btn,.next-btn{
    background: var(--background-secondary-color);
    border-color: transparent;
        border-radius: var(--border-radius);

    width: 100px;
    height: 40px;
        color: var(--primary-500);
text-transform:capitalize;
letter-spacing:var(--letter-spacing);
display:flex;
align-items:center;
justify-content:center;
gap:0.5rem;
cursor:pointer;
  }
  .prev-btn:hover,.next-btn:hover{
    background:var(--primary-500);
        color: var(--white);
        transition:var(--transition);
  }
.dots{
  display:grid;
  place-items:center;
  cursor:text;
}
`;
export default Wrapper;
```

#### Local Build

- remove default values from inputs in Register and Login
- navigate to client and build front-end

```sh
cd client && npm run build
```

- copy/paste all the files/folders
  - from client/dist
  - to server(root)/public

- in server.js point to index.html

```js
app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./public", "index.html"));
});
```

#### Deploy On Render

[Render](https://render.com/)

- sign up of for account
- create git repository

#### Build Front-End on Render

- add script
- change path

package.json

```js
 "scripts": {
    "setup-production-app": "npm i && cd client && npm i && npm run build",
  },
```

server.js

```js
app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "./client/dist", "index.html"));
});
```

#### Test Locally

- remove client/dist and client/node_modules
- remove node_modules and package-lock.json (optional)
- run "npm run setup-production-app", followed by "node server"

#### Test in Production

- change build command on render

```sh
npm run setup-production-app
```

- push up to github

#### Upload Image As Buffer

- remove public folder

```sh
npm i datauri@4.1.0
```

middleware/multerMiddleware.js

```js
import multer from "multer";
import DataParser from "datauri/parser.js";
import path from "path";

const storage = multer.memoryStorage();
const upload = multer({ storage });

const parser = new DataParser();

export const formatImage = (file) => {
  const fileExtension = path.extname(file.originalname).toString();
  return parser.format(fileExtension, file.buffer).content;
};

export default upload;
```

controller/userController.js

```js
import { formatImage } from "../middleware/multerMiddleware.js";

export const updateUser = async (req, res) => {
  const newUser = { ...req.body };
  delete newUser.password;
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newUser.avatar = response.secure_url;
    newUser.avatarPublicId = response.public_id;
  }
  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPublicId) {
    await cloudinary.v2.uploader.destroy(updatedUser.avatarPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: "update user" });
};
```

#### Setup Global Loading

- create loading component (import/export)
- check for loading in DashboardLayout page

components/Loading.jsx

```js
const Loading = () => {
  return <div className="loading"></div>;
};

export default Loading;
```

DashboardLayout.jsx

```js
import { useNavigation } from "react-router-dom";
import { Loading } from "../components";

const DashboardLayout = ({ isDarkThemeEnabled }) => {
  const navigation = useNavigation();
  const isPageLoading = navigation.state === "loading";

  return (
    <Wrapper>
      ...
      <div className="dashboard-page">
        {isPageLoading ? <Loading /> : <Outlet context={{ user }} />}
      </div>
      ...
    </Wrapper>
  );
};
```

#### React Query

React Query is a powerful library that simplifies data fetching, caching, and synchronization in React applications. It provides a declarative and intuitive way to manage remote data by abstracting away the complex logic of fetching and caching data from APIs. React Query offers features like automatic background data refetching, optimistic updates, pagination support, and more, making it easier to build performant and responsive applications that rely on fetching and manipulating data.

[React Query Docs](https://tanstack.com/query/v4/docs/react/overview)

- in the client

```sh
npm i @tanstack/react-query@4.29.5 @tanstack/react-query-devtools@4.29.6
```

App.jsx

```js
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
//  A debugging tool for React Query that helps inspect queries in development.

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
    },
  },
});
// new QueryClient({...}): Initializes a new React Query client.
// defaultOptions.queries.staleTime:
// This sets a stale time of 5 minutes (1000 * 60 * 5 milliseconds).
// Within this period, fetched data is considered fresh and will not be re-fetched unless explicitly invalidated.

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
      );
};

    <QueryClientProvider client={queryClient}>
// This makes React Query available throughout the app.
// All components inside can now use useQuery and useMutation.

// <RouterProvider router={router} />
// This assumes React Router is used to manage navigation.

// <ReactQueryDevtools initialIsOpen={false} />
// This enables the React Query DevTools.
// initialIsOpen={false} means it starts closed (can be toggled manually).

// 💡 Key Benefits
// ✅ Automatic Caching – Stores and reuses query results.
// ✅ Background Refetching – Keeps data fresh without reloading the page.
// ✅ Error Handling – Built-in support for failed requests.
// ✅ Performance Optimization – Avoids unnecessary network requests.
```

#### Page Error Element

- create components/ErrorElement

```js
import { useRouteError } from "react-router-dom";

const Error = () => {
  const error = useRouteError();
  console.log(error);
  return <h4>There was an error...</h4>;
};
export default ErrorElement;
```

Stats.jsx

```js
export const loader = async () => {
  const response = await customFetch.get("/jobs/stats");
  return response.data;
};
```

App.jsx

```js
{
  path: 'stats',
  element: <Stats />,
  loader: statsLoader,
  errorElement: <h4>There was an error...</h4>
},
```

```js
{
  path: 'stats',
  element: <Stats />,
  loader: statsLoader,
  errorElement: <ErrorElement />,
},
```

#### First Query

- navigate to stats

Stats.jsx

```js
import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

export const loader = async () => {
  return null;
};

const Stats = () => {
  const response = useQuery({
    queryKey: ["stats"],
    queryFn: () => customFetch.get("/jobs/stats"),
  });
  console.log(response);
  if (response.isLoading) {
    return <h1>Loading...</h1>;
  }
  return <h1>react query</h1>;
  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
```

```js
const data = useQuery({
  queryKey: ["stats"],
  queryFn: () => customFetch.get("/jobs/stats"),
});
```

const data = useQuery({ ... });: This line declares a constant variable named data and assigns it the result of the useQuery hook. The useQuery hook is provided by React Query and is used to perform data fetching.

queryKey: ['stats'],: The queryKey property is an array that serves as a unique identifier for the query. In this case, the query key is set to ['stats'], indicating that this query is fetching statistics related to jobs.

queryFn: () => customFetch.get('/jobs/stats'),: The queryFn property specifies the function that will be executed when the query is triggered. In this case, it uses an arrow function that calls customFetch.get('/jobs/stats'). The customFetch object is likely a custom wrapper around the fetch function or an external HTTP client library, used to make the actual API request to retrieve job statistics.In React Query, the queryFn property expects a function that returns a promise. The promise should resolve with the data you want to fetch and store in the query cache.

customFetch.get('/jobs/stats'): This line is making an HTTP GET request to the /jobs/stats endpoint, which is the API route that provides the job statistics data.

#### Get Stats with React Query

```js
const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
};

export const loader = async () => {
  return null;
};

const Stats = () => {
  const { isLoading, isError, data } = useQuery(statsQuery);

  if (isLoading) return <h4>Loading...</h4>;
  if (isError) return <h4>Error...</h4>;
  // after loading/error or ?.
  const { defaultStats, monthlyApplications } = data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
```

#### React Query in Stats Loader

App.jsx

```js
{
  path: 'stats',
  element: <Stats />,
  loader: statsLoader(queryClient),
  errorElement: <ErrorElement />,
},
```

Stats.jsx

```js
import { ChartsContainer, StatsContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";
// Imports the useQuery hook from React Query, which handles fetching, caching, and updating server data in your React components.

const statsQuery = {
  queryKey: ["stats"],
  queryFn: async () => {
    const response = await customFetch.get("/jobs/stats");
    return response.data;
  },
  //   statsQuery is a React Query configuration object.
  // queryKey: ["stats"]
  // Unique identifier for caching this specific query.
  // Used internally by React Query for refetching, caching, and updating.
  // queryFn: Function that fetches the data from the API.
  // It calls customFetch.get("/jobs/stats")
  // Returns the data field of the response, typically an object like:
};

export const loader = (queryClient) => async () => {
  const data = await queryClient.ensureQueryData(statsQuery);
  return data;
  //   This is a React Router Data API loader using React Query:
  // loader = (queryClient) => async () => { ... }
  // It's a higher-order function: takes queryClient and returns a loader function.
  // You typically pass this loader to a route in your router config.
  // queryClient.ensureQueryData(statsQuery)
  // Ensures the data for the "stats" query is already available in cache.
  // If it's not cached, it fetches and caches it.
  // Makes data available before the component renders.
};

const Stats = () => {
  const { data } = useQuery(statsQuery);
  //   In the actual component, you use the useQuery hook to get the "stats" data.
  // This automatically handles:
  // Fetching (if not already cached)
  // Caching
  // Refetching on focus
  // Error/loading states (though they're not used here)
  const { defaultStats, monthlyApplications } = data;

  return (
    <>
      <StatsContainer defaultStats={defaultStats} />
      {monthlyApplications?.length > 1 && (
        <ChartsContainer data={monthlyApplications} />
      )}
    </>
  );
};
export default Stats;
// ✅ Summary Flow
// 🔁 statsQuery defines how and what to fetch.
// ⚙️ loader ensures the data is prefetched using queryClient (used in the route).
// 🧠 In the Stats component, useQuery pulls from the cache or fetches.
// 📊 Data is passed to StatsContainer and ChartsContainer for display.
```

#### React Query for Current User

DashboardLayout.jsx

```js
const userQuery = {
  queryKey: ["user"],
  queryFn: async () => {
    const { data } = await customFetch("/users/current-user");
    return data;
  },
  //   ✅ What is this doing?
  // This object configures a React Query that fetches the current user's data.
  // queryKey: ["user"]
  // Acts as a unique cache identifier.
  // React Query will cache, track, and refetch this query when necessary.
  // queryFn (Query Function)
  // This is an async function that:
  // Calls customFetch("/users/current-user").
  // Extracts data from the response and returns it.
  // Caching benefits: If the "user" data is already fetched, React Query can return it from cache instead of making another request.
  // This API call likely returns something like:
  // {
  //   "user": {
  //     "id": "123",
  //     "name": "John Doe",
  //     "email": "john@example.com",
  //     "role": "admin"
  //   }
  // }
};

export const loader = (queryClient) => async () => {
  try {
    return await queryClient.ensureQueryData(userQuery);
  } catch (error) {
    return redirect("/");
  }
  //   ✅ What is this doing?
  // Purpose: This is a React Router loader that ensures user data is prefetched before rendering the page.
  // queryClient.ensureQueryData(userQuery)
  // Ensures "user" data is available in the cache.
  // If the data is already cached, it uses the cached version.
  // If not, it fetches from customFetch("/users/current-user") and stores it in React Query cache.
  // Error Handling:
  // If fetching fails (e.g., user is not authenticated), it redirects to "/", likely the login page.
  // 🔹 When does this run?
  // Runs before the Dashboard page loads in React Router.
  // Helps avoid flickering (prevents a loading state in useQuery since data is already fetched).
};

const Dashboard = ({ prefersDarkMode, queryClient }) => {
  // Extracts user data using useQuery(userQuery).
  // Since loader already fetched the user data, it’s likely cached and doesn’t need to refetch.

  // const { user } = useQuery(userQuery)?.data; OR
  const { data } = useQuery(userQuery);
  const { user } = data || {};
};
```

#### Invalidate Queries

// tells react query to invalidate all the cached queries
Login.jsx

```js
export const action =
  (queryClient) =>
  async ({ request }) => {
    // It receives the request object from the form submission.
    //queryClient is passed in from the router setup, allowing cache management via React Query.
    const formData = await request.formData();
    // request.formData() reads the form data submitted by the user.
    // It's an instance of FormData
    const data = Object.fromEntries(formData);
    // Converts the FormData into a plain JavaScript object.
    // FormData: email=hello@mail.com&password=123
    // becomes:
    // {
    //   email: "hello@mail.com",
    //   password: "123"
    // }

    try {
      await axios.post("/api/v1/auth/login", data);
      //  Sends a POST request to your backend login route (/api/v1/auth/login).
      // The data object (email and password) is sent in the body.
      queryClient.invalidateQueries();
      // Tells React Query to invalidate all cached queries, so anything using useQuery (e.g. user data) will be refetched.
      toast.success("Login successful");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error.response.data.msg);
      return error;
    }
  };
```

DashboardLayout.jsx

```js
const logoutUser = async () => {
  navigate("/");
  await customFetch.get("/auth/logout");
  queryClient.invalidateQueries();
  toast.success("Logging out...");
};
```

Profile.jsx

```js
export const action =
  (queryClient) =>
  async ({ request }) => {
    const formData = await request.formData();
    //     Extracts the form data (including file fields) from the POST request.
    // FormData is a special object used when sending files and text together.
    const file = formData.get("avatar");
    if (file && file.size > 500000) {
      // Checks if a file exists and if its size is greater than 500 KB (500000 bytes).
      toast.error("Image size too large");
      return null;
    }
    try {
      await customFetch.patch("/users/update-user", formData);
      //   Sends a PATCH request to update the user data (including the image).
      // This assumes your backend is set up to handle multipart/form-data uploads (e.g., with Multer in Node.js).
      // 🔁 The formData is sent as-is, including the file and any other fields like name, email, etc.
      queryClient.invalidateQueries(["user"]);
      //       Invalidate the cached "user" query in React Query.
      // This forces any component using useQuery(["user"]) to refetch the latest user data.
      toast.success("Profile updated successfully");
      return redirect("/dashboard");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return null;
    }
  };
```

#### All Jobs Query

AllJobs.jsx

```js
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch from "../utils/customFetch";
import { useLoaderData } from "react-router-dom";
import { useContext, createContext } from "react";
import { useQuery } from "@tanstack/react-query";
const AllJobsContext = createContext();

const allJobsQuery = (params) => {
  const { search, jobStatus, jobType, sort, page } = params;
  return {
    queryKey: [
      "jobs",
      search ?? "",
      jobStatus ?? "all",
      jobType ?? "all",
      sort ?? "newest",
      page ?? 1,
    ],
    //  This makes your cache key dependent on all query values (ensuring uniqueness).
    // If search is not provided, it falls back to "", and similarly for others.
    queryFn: async () => {
      const { data } = await customFetch.get("/jobs", {
        params,
      });
      return data;
      // This is the actual API call to get the filtered job list from your backend using query params.
    },
  };
};

// This is the data loader for React Router, executed before rendering the route.
export const loader =
  (queryClient) =>
  async ({ request }) => {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);
    // Extracts query parameters from the URL (like ?search=dev&sort=newest&page=2).

    await queryClient.ensureQueryData(allJobsQuery(params));
    //  Prefetches and caches the data using React Query before the component renders.
    // ensureQueryData returns cached data if present, or fetches it if not.
    return { searchValues: { ...params } };
    // Passes the search values to the component via useLoaderData().
  };

const AllJobs = () => {
  const { searchValues } = useLoaderData();
  const { data } = useQuery(allJobsQuery(searchValues));
  //   Uses React Query to get the jobs using the same query config.
  // Since it's already prefetched, this pulls from the cache (no loading spinner!).
  return (
    <AllJobsContext.Provider value={{ data, searchValues }}>
      <SearchContainer />
      <JobsContainer />
    </AllJobsContext.Provider>
  );
};
export default AllJobs;

export const useAllJobsContext = () => useContext(AllJobsContext);
// Exports a custom hook to access the job data and search filters from any child component (JobsContainer, SearchContainer).
```

#### Invalidate Jobs

AddJob.jsx

```js
export const action =
  (queryClient) =>
  // ✅ You're exporting a function that takes a queryClient as an argument — this is a React Query client instance that can manipulate cache (like invalidating queries, refetching data, etc.).
  async ({ request }) => {
    // ✅ This returns an async function that React Router will call when the action is triggered (for example, when a user submits a form).
    // request: This is the request object React Router gives you.
    // You can extract form data, headers, etc. from it.
    const formData = await request.formData();
    // ✅ This pulls the submitted data from the form as a FormData object.
    const data = Object.fromEntries(formData);
    // ✅ Converts the FormData into a plain JS object.
    try {
      await customFetch.post("/jobs", data);
      // ✅ Sends a POST request to /jobs using your customFetch instance (usually Axios with auth headers).
      // This is the actual API call that creates a new job on the server.
      queryClient.invalidateQueries(["jobs"]);
      // ✅ Very important: this clears the "jobs" query cache.
      // Why? So that the next time the user views the job list, it refetches from the server with the newly added job.
      // Without this, you'd still be seeing the stale data from before the job was added.
      toast.success("Job added successfully ");
      return redirect("all-jobs");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
```

EditJob.jsx

```js
// Let's break this action function line by line — it's designed to edit an existing job in a MERN stack application using React Router, React Query, and Axios via customFetch.
export const action =
  (queryClient) =>
  //   You are exporting a higher-order function that takes a queryClient (from React Query) and returns the actual action function.
  // Why? So you can invalidate cached data (like the list of jobs) after editing.
  async ({ request, params }) => {
    // This is the function that gets triggered when the form is submitted.
    // request: contains the form data.
    // params: contains route parameters (e.g., job id from /jobs/:id).
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.patch(`/jobs/${params.id}`, data);
      // Sends a PATCH request to update the job with a specific id.
      // params.id comes from the route like /dashboard/edit-job/:id
      // customFetch is likely an Axios instance with auth headers
      queryClient.invalidateQueries(["jobs"]);
      // Invalidates the "jobs" query in React Query's cache.
      // This ensures that next time jobs are fetched, the updated data is retrieved from the backend, not stale cache.
      toast.success("Job edited successfully");
      return redirect("/dashboard/all-jobs");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };
```

DeleteJob.jsx

```js
export const action =
  (queryClient) =>
  async ({ params }) => {
    try {
      await customFetch.delete(`/jobs/${params.id}`);
      // Sends a DELETE request to the server using Axios (customFetch).
      // It targets the job with the specific id passed in the route.
      queryClient.invalidateQueries(["jobs"]);
      // This invalidates the jobs query in React Query cache.
      // It tells React Query:
      // “Hey, the jobs list might have changed — go refetch it next time it's used.”
      // This ensures fresh, updated job listings.
      toast.success("Job deleted successfully");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
    }
    return redirect("/dashboard/all-jobs");
  };
```

#### Edit Job Loader

```js
import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/wrappers/DashboardFormPage";
import { useLoaderData, useParams } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../../../utils/constants";
import { Form, redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import { useQuery } from "@tanstack/react-query";

const singleJobQuery = (id) => {
  return {
    queryKey: ["job", id],
    // queryKey: A unique identifier for this query.
    // "job" is the key category
    // id makes it specific to this job
    // This helps React Query know which job you’re talking about and cache it properly.
    queryFn: async () => {
      const { data } = await customFetch.get(`/jobs/${id}`);
      return data;
      // queryFn: This is the function that actually fetches the data.
      // customFetch.get(...): Makes a GET request to /jobs/:id
      // It returns the job data received from the server.
    },
  };
};

// loader → runs before the component loads to fetch and cache the job.
export const loader =
  (queryClient) =>
  async ({ params }) => {
    //  This is a function that returns another function (higher-order function).
    // It's how loaders work in React Router v6+.
    // queryClient: Passed in from outside, used to manage caching.
    // params: From the route URL (e.g., /jobs/:id).
    try {
      await queryClient.ensureQueryData(singleJobQuery(params.id));
      //  ensureQueryData: Tells React Query:
      // “If this query isn’t cached, fetch it now.”
      // It uses the singleJobQuery(params.id) config to fetch the job data.
      // Ensures data is ready before rendering the page.
      return params.id;
      // If the data was fetched successfully, return the job id.
      // This will be used inside the component with useLoaderData().
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return redirect("/dashboard/all-jobs");
    }
  };

export const action =
  (queryClient) =>
  async ({ request, params }) => {
    const formData = await request.formData();
    const data = Object.fromEntries(formData);
    try {
      await customFetch.patch(`/jobs/${params.id}`, data);
      queryClient.invalidateQueries(["jobs"]);

      toast.success("Job edited successfully");
      return redirect("/dashboard/all-jobs");
    } catch (error) {
      toast.error(error?.response?.data?.msg);
      return error;
    }
  };

const EditJob = () => {
  const id = useLoaderData();

  const {
    data: { job },
  } = useQuery(singleJobQuery(id));

  return (
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">edit job</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} />
          <FormRow type="text" name="company" defaultValue={job.company} />
          <FormRow
            type="text"
            name="jobLocation"
            labelText="job location"
            defaultValue={job.jobLocation}
          />
          <FormRowSelect
            name="jobStatus"
            labelText="job status"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            name="jobType"
            labelText="job type"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};
export default EditJob;
```

#### Axios Interceptors

DashboardLayout.jsx

```js
const DashboardContext = createContext();
// This creates a new React Context object which can be used to share state or logic (like theme toggles, user info, etc.) between components without prop drilling.
const DashboardLayout = ({ isDarkThemeEnabled }) => {
  // Defines the DashboardLayout component, which receives a prop called isDarkThemeEnabled.
  const [isAuthError, setIsAuthError] = useState(false);
  // isAuthError – a flag for when the server returns a 401 Unauthorized response.
  //setIsAuthError – a function to update the flag.
  const logoutUser = async () => {
    await customFetch.get('/auth/logout');
    toast.success('Logging out...');
    navigate('/');
  };

  customFetch.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status === 401) {
        setIsAuthError(true);
      }
      return Promise.reject(error);
// ✅ Success Case:
// The first function just returns the response as-is.
// ❌ Error Case:
// If an error occurs and the HTTP status is 401 (Unauthorized):
// setIsAuthError(true) is called.
// This will trigger the useEffect below.
    }
  );
  useEffect(() => {
    if (!isAuthError) return;
    logoutUser();
// This useEffect watches for changes to isAuthError.
// If it becomes true, it calls logoutUser().
// So, when a 401 is caught by the interceptor, the user is automatically logged out and redirected to the homepage.
  }, [isAuthError]);
  return (
    ...
  )
};

```

#### Security

```sh
npm install helmet express-mongo-sanitize express-rate-limit

```

Package: helmet
Description: helmet is a security package for Express.js applications that helps protect them by setting various HTTP headers to enhance security, prevent common web vulnerabilities, and improve overall application security posture.
Need: The package is needed to safeguard web applications from potential security threats, such as cross-site scripting (XSS) attacks, clickjacking, and other security exploits.

Package: express-mongo-sanitize
Description: express-mongo-sanitize is a middleware for Express.js that sanitizes user-supplied data coming from request parameters, body, and query strings to prevent potential NoSQL injection attacks on MongoDB databases.
Need: The package addresses the need to protect MongoDB databases from malicious attempts to manipulate data and helps ensure the integrity of data storage and retrieval.

Package: express-rate-limit
Description: express-rate-limit is an Express.js middleware that helps control and limit the rate of incoming requests from a specific IP address or a set of IP addresses to protect the server from abuse, brute-force attacks, and potential denial-of-service (DoS) attacks.
Need: This package is necessary to manage and regulate the number of requests made to the server within a given time frame, preventing excessive usage and improving the overall stability and performance of the application.

server.js

```js
import helmet from "helmet";
import mongoSanitize from "express-mongo-sanitize";

app.use(helmet());
app.use(mongoSanitize());
```

routes/authRouter.js

```js
import rateLimiter from "express-rate-limit";

const apiLimiter = rateLimiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 15,
  message: { msg: "IP rate limit exceeded, retry in 15 minutes." },
});
router.post("/register", apiLimiter, validateRegisterInput, register);
router.post("/login", apiLimiter, validateLoginInput, login);
```

// hello updated

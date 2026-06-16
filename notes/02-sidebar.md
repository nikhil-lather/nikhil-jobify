why bigsidebar is used as a prop here <NavLinks isBigSidebar />

This is a React shorthand syntax for passing a boolean prop.

When you write:

<NavLinks isBigSidebar />

React automatically treats it as:

<NavLinks isBigSidebar={true} />
Inside NavLinks
const NavLinks = ({ isBigSidebar }) => {
  console.log(isBigSidebar);
};

Output:

true
Why use it?

Suppose the same component is used in two places:

Big Sidebar
<BigSidebar>
<NavLinks isBigSidebar />
</BigSidebar>
Small Sidebar
<SmallSidebar>
<NavLinks />
</SmallSidebar>

Now inside NavLinks:

const NavLinks = ({ isBigSidebar }) => {
return (
<Wrapper>
{links.map((link) => {
return (
<NavLink
className={
isBigSidebar
? "big-sidebar-link"
: "small-sidebar-link"
} >
{link.text}
</NavLink>
);
})}
</Wrapper>
);
};

When rendered in BigSidebar:

isBigSidebar === true

When rendered in SmallSidebar:

isBigSidebar === undefined

(which React treats as falsy)

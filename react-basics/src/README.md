Creating our React Project

-   npx create-react-app {name_of_your_project}
    - this creates a react project where we will have dummy application of a project. this packages gives bundlers, testing and will be ready to go live
    - Node Modules is the palce where all it contains all the Dependencies which are needed for our project i.e it has JavaScript libraries which is used by our project.

-   npm start
    - this starts our project in local host

- JSX
    - it's a syntax extension to JavaScript. We use it with React to describe how the UI should look like. JSX may remind you of a template language, but it comes with the full power of JavaScript.

- Why JSX
    - It might not be obvious from a tiny example, but as our chunk of markup grows, it becomes increasingly clear that JSX is just easier to read and HTML-like syntax is easier for our brains to process.

- Compiling JSX into JavaScript
    - If run JSX code in the browser, we'll get an error. JavaScript engines don't understand JSX, they only understand JavaScript. And so we need to "compile" our code into plain JS. This is commonly done by using a tool like Babel.

- Expression Slots
    - while writing in jsx its is in string format so if we want any JS variables to work in JSX we use this {}.
        - By using this it gets to know that this is not the string but some JS variable.
        - We will use this expression slots whenever we need the value to be dynamic

- Comments in JSX
    - (/**/).

- In JSX, our attributes need to be “camelCase”.
- if we want to style in JSX then this style takes an object(in html this will be inline style).
    - style={{fontSize:2rem}}. // we write as objects because it's for styling we use {} for js expressions.
    - All the css properties are written in "camelCase" only.

- Components
    - React is a component based framework
    - Component is a bundle of styles and logic that contorls everything about a specific part of interface
    - Components plays a huge role in react.

- Syntax of Components
    - basically 
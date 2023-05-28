React is a Library created for facebook.

## React and the virtual DOM
  - manipulating the real DOM is inefficient
  - react creates a virtual DOM
  - react modifies the virtual DOM
  - notes differences between virtual and real DOM & calculates minimum changes to make them match (this process is called *reconciliation*)
  - then makes only those changes
  - this process repeats as the user interacts with the application

## Using `create-react-app`
  in the terminal run `npx create-react-app [app-name]`
  `npm` is used for managing packages while `npx` actually executes those packages.
  Use `npx` instead of `npm` to automatically execute packages without prior installation.

  The project structure of a create-react-app includes directories like: 
  - node_modules 
  - public
  - src

  The `src` directory contains the main code files, such as `App.js` (root component), `index.js` (entry point), and `index.css` (global stylesheet).

  Other files in the project include `index.html`, `README.md`, `.gitignore`, and `package.json`.

  Use `npm run start` to run the `create-react-app` project, which opens a page at http://localhost:3000/.

  `index.js` uses ReactDOM to insert the React component tree into the DOM.

  webpack and React work together to manage dependencies, bundle files, and render the React application.

## React Components
- Components are the building blocks of React
- We will be working with 2 types of components:
  - function components
  - class components
- React applications have a single root component called `App`
- `App` is a parent to all other components
- It is auto generated with `create-react-app`, though we will always delete it and start from scratch

### Basic structure of a function component:
```js
  import React from "react";

  function ThisIsAFunctionalComponent(){
    return (
      <div>
        // jsx code goes here
      </div>
    );
  }

  export default ThisIsAFunctionalComponent;
```

- it is a function that returns JSX code wrapped in a div
- the React library is imported with an import statement
- components must be exported to make them available to the rest of the application
- function components *cannot change state*
- *always* use function components where possible to minimize state complexity
- best practice: build completely static sites, then refactor with *class components* as needed

### Basic structure of a class component:
```js
  import React, { Component } from 'react';

  class ThisIsAClassComponent extends React.Component {

    constructor(props) {
      super(props);
      this.state = {};
    }

    render() {
      return (
      );
    }
  }

  export default ThisIsAClassComponent;
```
- Class components are used to add state to a component
- this is not a function, but a custom class that extends the base functionality of a Component class that React provides
- Class components have a constructor that takes props as an argument.
- The constructor uses the super keyword to access the parent class' constructor and inherit functionality from the React.Component class.
- State in class components is declared using the syntax this.state = {}; and is defined as a JavaScript object with key-value pairs.
- Class components always have a render() method that returns JSX content to be added to the virtual DOM.
- An import statement is used to import the React library and the Component class for class components.
- Class components must be exported to be available to the rest of the application.


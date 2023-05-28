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

  #### method to update state:
    `this.setState({propertyToUpdate: newValue})`
    *Always use the setState() method to update state in a pure React application*
    `setState()` is an *async* method




# Lesson 33: UUID Library
  - its not best practice to use an array index as a key
  - each ticket should have it's own unique id
  - the UUID ('universally unique identifier') library is available in `create-react-app` to generate unique id's
  - to use UUID: in the applicable file, `import { v4 } from 'uuid';`
  - use v4 to set the ID property of the desired object. i.e. `id: v4()`
  - the `v4()` function will automatically generate a UUID

# Lesson 34: Adding a form
  ### goal of lesson: add a *real* form to *NewTicketForm.js* to replace the placeholder data that was originally there
  - a form is created using the `<form></form>` element
  - the form has an event handler called `onSubmit`
  - `onSubmit` will trigger `{handleNewTicketFormSubmission}`
  - `handleNewTicketFormSubmission` will handle form submissions and will be defined in this same file *NewTicketForm.js*

                "Note that we are calling handleNewTicketFormSubmission a function, not a method. This component isn't a class component so it has functions, not methods that are called on the instance of a class. That also means we'll be using the function keyword, unlike with class components."

        - in the context of this component, `handleNewTicketFormSubmission` is referred to as a function, not a method.
        - Since this component is not a class component, it uses functions instead of methods that are typically used in class instances.
        - Therefore, the `function` keyword is used to define the `handleNewTicketFormSubmission` function 
        - unlike in class components where methods are defined using the arrow function syntax.
  
  - remember, we use the `function` keyword because *NewTicketForm.js* is a function component. Therefore, `handleNewTicketFormSubmission` is *inside* another function 
  - as usual, we need `event.preventDefault()`
  - we use `event.target` to grab the values that just came from the 'submit' event


# Lesson 35: Unidirectional Data Flow
  ### goal of lesson: Although data (in react apps) can only flow *down* from parent to child, we need to somehow need to move data *up* from child to parent
  - we need to pass data from child component (NewTicketForm) to the parent component (TicketControl)
  - this is counter to unidirectional data flow
  - Shared state should be lifted to a common ancestor for accessibility by child components
  - likewise, props can only be passed *down* from parent to child
  
  - the solution: use *callbacks* to pass information *up*. Here's how it works:
    1. Parent component (that has state) defines a method and passes it as a prop to the child component
    2. we add this method to a function in the child component in the form of a callback
    3. since the callback exists in the parent component, the parent has access to it's data when the child executes it.
  
  - Here's how this looks in the help queue app:
    1. create a method called `onNewTicketCreation` in TicketControl (parent)
    2. pass `onNewTicketCreation` to NewTicketForm (child) as a prop
    3. in NewTicketForm (child), add `onNewTicketCreation` as a callback in the function `handleNewTicketFormSubmission`
    4. form data gets passed into the `onNewTicketCreation` callback
    5. TicketControl (parent) will have access  to the form data, which it can then add to as a ticket to `mainTicketList`


# Lesson 36: Passing Data Via Callbacks
  ### Goal
    1. Move mainTicketList into state.
    2. Create a method in TicketControl that will take form data and turn it into an actual ticket.
    3. Pass this method down to NewTicketForm as a prop — and also add PropTypes.
    4. Add our new method as a callback to the existing function in NewTicketForm so that it's triggered when a user submits the form.

  - *FILE:* `TicketControl.js`: 
    - we add and empty array `mainTicketList` to state in the constructor
    - still in TicketControl, we pass `mainTicketList` down to `TicketList` as a prop called `ticketList` (this is the name we'll use to access it as a prop in `TicketList.js`). (this happens in `render()`)
  
  - *FILE:* `TicketList.js`: 
    - we add props as a parameter to the TicketList component
    - add propTypes array for `ticketList`
  
  - *FILE:* `TicketControl.js`: 
    - create method `handleAddingNewTicketToList`, which takes a newTicket as a parameter, adds a ticket to a newMainTicketList, then sets the state with the new list
    - then we pass `handleAddingNewTicketToList` down to `NewTicketForm` component as a prop called `onNewTicketCreation`. (this happens in `render()`)
  
  - *FILE:* `NewTicketForm.js`: 
    - we add props as a parameter to the NewTicketForm component
    - add propTypes function for `onNewTicketCreation`
    - add `import { v4 } from 'uuid';`
    - update `handleNewTicketFormSubmission` to execute `onNewTicketCreation` as a callback. 
    - a ticket object is passed as an argument to `onNewTicketCreation`
      - reminder: `onNewTicketCreation` is really just the "downstream" implementation of `handleAddingNewTicketToList`



  - NOTE: Event handler functions are commonly prefixed with "handle" in their names. Props that contain event handler functions are typically prefixed with "on." The purpose of prefixing is to differentiate between the prop itself and the function that handles the actions triggered by the event. The prop is used when the event occurs, while the function associated with it actually performs the necessary actions. Using consistent naming conventions helps easily identify which props and functions are related. The naming ensures that it's clear whether we are referencing a function or a prop that contains a function.



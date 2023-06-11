

# W5 L1 React with Redux Objectives

# W5 L2 Introduction to Redux
  - Redux enforces a specific structure as well as conventions for state
  - Redux enforces 3 principles:
    - single source of truth
    - state is read-only
    - changes are made with pure functions
  - anatomy of redux
    - stores - the redux store is where all state resides. it is our "single source of truth"
    - reducers - reducers will update (or mutate) state by communicating with the store
    - actions

# W5 L3 Setting up our first project
  - the create-react-app comes with Jest for testing
  - create-resct-app does not come with redux by default
  - similar testing file structure as earlier in the curriculum
    - src
      |__ __tests__
        |__ reducers
          |__ ticket-list-reducer.test.js
      |__ reducers
  - NOTE:
    - we use hyphens, not underscores to separate words
    - the name of the reducer should match the name of the corresponding file, and vice versa
       

# W5 L4 Writing Our First Redux Test
  - goal: write our first test and learn a bit about reducers
  - the test syntax is familiar, standard Jest syntax.
  - Reducers are pure functions, so they don't hold information about an app's current state. BUT, they take the current state, and an action, as an argument to determine how the state should be changed.
  - in this lesson we write an intro test that just returns an empty state, same as the input. 

# W5 L5 Writing Our Second Redux Test
  - goal: write and pass a test for adding a ticket
  - NOTE ON *OBJECT DESTRUCTURING*:
      ```js
        const hero = {
        name: 'Batman',
        realName: 'Bruce Wayne'
        };

        const { name, realName } = hero;

        console.log(name);     // => 'Batman',
        console.log(realName); // => 'Bruce Wayne'
      ```
  - `const { name, realName } = hero` is an object destructuring assignment. This statement defines the variables `name` and `realName`, then assigns to them the values of properties `hero.name` and `hero.realName` correspondingly.

# W5 L7 Anatomy of a reducer
  - The parameters of a reducer are typically defined as `(state = {}, action)`.
  - The first parameter represents the current state, which usually has a default value.
  - The second parameter is an *object* that contains a `type` property indicating the action to be taken.
  - This object may contain other properties that are needed to update the current state.
  - reminder: reducers are always pure functions and should not directly modify the application state.
  - All a reducer cares about is 
    - taking a thing, 
    - applying an action to a copy of that thing,
    - then returning the altered copy. 
    - It doesn't know anything else about our application such as how state will be stored or applied in the UI.
    - _Rephrase_: Instead, reducers create a copy of the state, apply the action to the copy, and return the altered copy.
  - reducers use a switch statement to determine which action should be executed.
  - It's important to include break or return statements within each case to prevent unintended behavior.
  - Action `type`s are strings, and should be all caps and words separated by underscores. e.g. `ACTION_ONE`

# W5 L8 The Redux Store
  - The Redux store has three main functions:
    - It holds the application state.
    - It allows us to access the state using the `getState()` function.
    - It enables us to update the state using the `dispatch()` function, which takes an action as an argument.

  - `createStore()` is used to create a Redux store. Here's the example from the lesson:
  ```js
  const { createStore } = Redux;
  const store = createStore(ticketListReducer);
  ```
  - First, we destructure the `createStore` function from the Redux library using ES6 destructuring. This allows us to directly access the `createStore` function without having to reference `Redux.createStore`.
  - Next, we call `createStore()` and pass in the `ticketListReducer` as an argument. The reducer is responsible for defining how the state should be updated in response to different actions. It receives the current state and an action, and returns a new state based on the action type.
  - Once the store is created, you can use its methods such as getState(), dispatch(), and subscribe() to access and update the state, as well as listen for state changes.
  
  - To track changes in the store's state, we use the `subscribe()` method. 
    - It allows us to provide a callback function that will be called whenever the state changes. 
    - In the example, `store.subscribe(() => console.log(store.getState()))` is used to log the state to the console whenever it changes.

# W5 L10 Introduction to the react redux library

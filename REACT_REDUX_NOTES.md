

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
  - NOTE ON OBJECT DESTRUCTURING:
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
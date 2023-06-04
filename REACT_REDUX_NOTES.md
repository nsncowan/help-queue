

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
  
1. What problem does the context API help solve?

It's designed to reduce the need for prop drilling. It can also be used for global state management, but it is not intended to handle large applications entire state. 

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are basically triggers, when they are called they alert the programme to change the state. Reducers actually implement that change and the store holds the result and makes it available throughout the application. The store's availablity at any area of the application, along with the immutibility of its data, is why it is refered to as a single source of truth. 

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state is state that is available in every component using a solution like redux or context api. A good time to use an application state is when you have a state that is needed by multiple components, particularly if the state needs to pass through several levels or to sibling components. A good time to use component state, which is state that stays within a specific component, is when managing state for something like a form field that no other parts of the application need. The value from the form on submit would be a good example of something to put into an application state. 

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux thunk enables aysync actions like api calls and to combine multiple actions into one by allowing us to return a function that contains dispatches. 

5. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux. The middleware and the process just makes it far more predictable and flexible than context. 

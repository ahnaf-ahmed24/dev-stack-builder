# ⚡ Dev Stack

A modern web application allowing developers to research, compare and build their technology stacks.

## 📝 About The Project
Dev Stack is a platform for developers to browse various technologies, including frontend, backend, databases, languages and DevOps tools. The user can build his own dev stack, select or delete technologies from it with live updates and avoid duplicates. All of this is presented in an aesthetically high-end interface with gradients.

## 🛠️ Tech Stack
- Framework: React.js (Vite)
- Styling: Tailwind CSS, DaisyUI
- Notifications: React-Toastify
- Data: JSON (Local Fetch)

## ✨ Features
1. Interactive Stack Builder: You can build your dev stack with live updates by selecting or removing technologies from your personal panel with no duplicates allowed. Selected technologies have disabled state on their cards.
2. Live Toasts: All user actions such as adding/removing technologies, duplicates attempt, single remove and clear stack have their own toasts shown by `react-toastify`.
3. Async Fetch With Loading: The data fetching from local JSON file is implemented asynchronously with a loading indicator shown while fetching.

## ❓ React Concepts & QA

### What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It is a syntax extension for JavaScript that allows developers to write HTML-like code in React. JSX makes it easier to write components by letting developers describe what the UI should look like in a more intuitive way.

### What is the difference between props and state?
Props (short for properties) are values that are passed to a component from its parent. Props are immutable, meaning that they cannot be changed within the component. State, on the other hand, is information that is internal to a component and can be mutated. State changes can trigger component re-renders.

### What does the `useState` hook do, and where did you use it?
The `useState` hook lets React know that a component needs to have access to state variables. There are three `useState` usages in this project:
1. `techList`: The list of technologies pulled from JSON file.
2. `stack`: The list of technologies selected by the user in the sidebar.
3. `loading`: The boolean value that tells whether the data fetching is in progress or not.

### What does the `useEffect` hook do, and why did you need it to load the JSON data?
The `useEffect` hook allows us to run some imperative code that has some side effects. It is needed to run async `fetch()` call for `techData.json` on initial render.

### Why does every item in a `.map()` list need a unique `key` prop?
When you use the `.map()` function to iterate over an array and return some JSX, each element must have a unique `key` prop. This allows React to identify which items have been added, removed, or changed, enabling it to update the DOM more efficiently.

### What is conditional rendering? Show one place you used it.
Conditional rendering is a technique that lets you render different components or HTML elements based on some condition in your code. Here’s one example of the conditional rendering in the project:
showing an empty message in the sidebar in case there are no items selected by the user
js
{stack.length === 0 ? (
Your stack is empty
) : (
)}
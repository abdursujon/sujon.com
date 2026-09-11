# Sujons.com - Portfolio Project 
# Tools
React, TypeScript, Tailwind, Vite, GitHub GraphQL API

# Project List 
Before Starting To Apply 
- Group Project
- Petwatch 
- Final Year Project 
- Java Data Analysis App with Junit 
- Python Data Visualisation Project with pytest*
- Zorth The Solar Alien Game
- Learn Python With Practical Example

Project in third year 
- Deep learning project
- Andriod App
- iOS App 
# Node.js 
Is a runtime environment to run JS outside the browser which excutes .js files without browser. 
Example: script.js can be run in our computer if we have node.js 
test.js 
node test.js 
How to install node.js 
sudo apt update 
sudo apt install nodejs npm0000

node comes with the package manager npm which help us installing libraries, frameworks using node just liek python pip 

# Vite 
Vite (pronounced "veet") is a modern, next-generation frontend build tool and development server designed to provide a faster and leaner development experience for modern web projects.  Created by Evan You, the creator of Vue.js, its primary purpose is to eliminate the bottlenecks associated with traditional bundlers like Webpack, particularly slow server startup times and slow hot module replacement (HMR). 

Vite achieves this speed by leveraging native ES modules in the browser during development, serving code on-demand rather than bundling the entire application upfront.  For production, it bundles code using Rolldown (or Rollup) to output highly optimized static assets.  It is framework-agnostic, supporting React, Vue, Svelte, and vanilla JavaScript out of the box, and offers features like instant server start, rich plugin support, and built-in TypeScript/JSX handling. 

# React with TypeScript and why 
React is a JavaScript library for building user interfaces using reusable components and a virtual DOM, while TypeScript is a statically typed superset of JavaScript that adds type safety and improves code maintainability. You do not need React on top of TypeScript; rather, you use TypeScript to write React applications, combining React’s rendering capabilities with TypeScript’s compile-time error checking. 

The distinction lies in their functions: React handles the UI logic and component composition, whereas TypeScript ensures code correctness and developer tooling support (like autocompletion and refactoring) before the code runs.  Using TypeScript with React allows you to define strict types for props, state, and context, which catches errors early in development rather than at runtime, leading to more robust and scalable applications

# Tailwind 
A css framwork helps reduce boiler plate css 

# What is NPM and how to set up node.js 
# What is vite and how to set up vite and why i need it 
# How to set up React with TypeScript and tailwind 

# What is a linter: 
A linter is a tool that reads your code and flags potential bugs, bad patterns, and mistakes before you run it.  It doesn't change how your code looks (that's a formatter like Prettier) — it catches things like:
Unused variables
=== vs == mistakes
React hooks called in the wrong order
Missing key props on list items
any types you probably shouldn't be using
we chose oxlint which is buidl with rust and faster than ESLint 
# Development process: 
Step 1: Install node.js
- sudo apt update 
- sudo apt install nodejs npm 

Step 2: Build the project using REACT + TS + Vite in one go
npm create vite@latest sujon.com -- --template react-ts
cd sujon.com
npm install 

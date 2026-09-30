# Sujons.com Development Documentation

# Tools

React, TypeScript, Tailwind, Vite, GitHub GraphQL API


# Node.js 

It is a runtime environment to run JS outside the browser, which executes .js files without a browser. 

Example: script.js can be run on our computer if we have node.js. 

test.js 

node test.js 

How to install node.js 

sudo apt update 

sudo apt install nodejs npm0000




Node comes with the package manager npm, which helps us install libraries and frameworks using Node, just like Python and pip. 




# Vite 

Vite (pronounced "veet") is a modern, next-generation frontend build tool and development server designed to provide a faster and leaner development experience for modern web projects. Created by Evan You, the creator of Vue.js, its primary purpose is to eliminate the bottlenecks associated with traditional bundlers like Webpack, particularly slow server startup times and slow hot module replacement (HMR). 




Vite achieves this speed by leveraging native ES modules in the browser during development, serving code on-demand rather than bundling the entire application upfront. For production, it bundles code using Rolldown (or Rollup) to output highly optimised static assets. It is framework-agnostic, supporting React, Vue, Svelte, and vanilla JavaScript out of the box, and offers features like instant server start, rich plugin support, and built-in TypeScript/JSX handling. 




# React with TypeScript and Why 

React is a JavaScript library for building user interfaces using reusable components and a virtual DOM, while TypeScript is a statically typed superset of JavaScript that adds type safety and improves code maintainability. You do not need React on top of TypeScript; rather, you use TypeScript to write React applications, combining React’s rendering capabilities with TypeScript’s compile-time error checking. 




The distinction lies in their functions: React handles the UI logic and component composition, whereas TypeScript ensures code correctness and developer tooling support (like autocompletion and refactoring) before the code runs. Using TypeScript with React allows you to define strict types for props, state, and context, which catches errors early in development rather than at runtime, leading to more robust and scalable applications




# Tailwind 

A CSS framework helps reduce boilerplate CSS. 

Install: npm install tailwindcss @tailwindcss/vite

Then add the plugin to vite.config.ts

    import { defineConfig } from 'vite'

    import react from '@vitejs/plugin-react'

    import tailwindcss from '@tailwindcss/vite'




    export default defineConfig({

    plugins: [react(), tailwindcss()],

    })   

inside index.css, then we add: @import "tailwindcss"




# What is NPM and how to set up Node.js 

# What is Vite, and how do I set up Vite, and why do I need it? 

# How to set up React with TypeScript and Tailwind 




# What is a linter? 

A linter is a tool that reads your code and flags potential bugs, bad patterns, and mistakes before you run it. It doesn't change how your code looks (that's a formatter like Prettier) — it catches things like:

Unused variables

=== vs == mistakes

React hooks are called in the wrong order.

Missing key props on list items

any types you probably shouldn't be using

We chose OXLint, which is built with Rust and faster than ESLint. 

# Development process: 

Step 1: Install Node.js.

- sudo apt update 

- sudo apt install nodejs npm 




Step 2: Build the project using REACT + TS + Vite in one go.

npm create vite@latest sujon.com -- --template react-ts

cd sujon.com

npm install 





Icon collection: 

phosphoricons.com

Install phosphor: npm install @phosphor-icons/react.

nav: 

1. Home: <HouseLineIcon size={20} />

2. CV: <UserCircleIcon size={20} />

3. Darkmode: <MoonStarsIcon size={20} />

4. Light Mode: <SunDimIcon size={20} />

5. Project: <FolderOpenIcon size={20} />





5. Github: <GithubLogoIcon size={20} />

6. Email: <EnvelopeIcon size={20} />

8. <LinkedinLogoIcon size={20} />




Container: 

1. Enable the class-based dark variant.

In src/index.css, add after the import:

@custom-variant dark (&:where(.dark, .dark *));

Verify: toggle the nav moon icon — .dark styles in nav.css already work (they're plain CSS descendant selectors), so this step is only about unlocking dark: utilities for later. Nothing visibly changes yet.




2. Declare the shared colour tokens.

Still in index.css, add a @theme block with --color-bg-base, --color-bg-base-dark, --color-grid-line, --color-grid-line-dark. Blob colours stay out of @theme — they're hero/page-specific, not reusable tokens.




1. Enable the class-based dark variant.

In src/index.css, add after the import:

@custom-variant dark (&:where(.dark, .dark *));

Verify: toggle the nav moon icon — .dark styles in nav.css CSS descendant selectors — so this step is only about unlocking dark utilities for later. Nothing visibly changes yet.




2. Declare the shared colour tokens.

Still in index.css, add a @theme block with --color-bg-baslor-grid-line, --color-grid-line-dark. Blob colours stay out of @theme — they're hero/page-specific, not reusable tokens.




3. Fix the typo.

container. css:19 — delete the stray 9 after 80px 80px. Verify: the 80px grid lines appear across the page for the first time.




4. Move layout rules out of the class into Container.tsx.

Delete min-height, position, background-colour, and transition from. container-bg. Add to the div: relative min-h-screen bg-bg-base.

dark:bg-bg-base-dark transition-colours duration-300. Verifep 3.




5. Swap the local grid variable for the theme token.

In the two linear gradients, replace var(--grid-colour) with var(--colour-grid-line), and drop --grid-color from both blocks. For dark mode the grid needs a different alpha, so keep one override: .dark .container-bg { --color-grid-line: var(--color-grid-line-dark); }.




Trim the dark block.

.dark .container-bg should end up holding only --blob-1, --blob-2, and the grid-line override. The --bg-base line goes away—step 4 handles it via dark:bg-*.




7. Check both themes.

npm run dev, toggle light/dark. Watch for: grid visible in both, blobs still positioned at 10%/20% and 90%/50%, background transition still smooth

on toggle.





Hero: 

0. Fix first — src/style/container. CSS: 19 has a stray 9 (80px 80px, 9), which invalidates the whole background-size list. Item 2 won't look right until that's gone.




6. Fonts (do this before the rest — everything else depends on the tokens)

1. Add the two families to index.html via Google Fonts <link>: a display serif for the name and a geometric sans for the body. Reference pairing looks like a high-contrast transitional serif + neutral geometric sans — candidates: Instrument Serif / Newsreader / EB Garamond for display, Inter / Jost for body.

2. In index.css, declare reusable tokens inside @theme: --font-display, --font-body, and size/tracking tokens for the name and the small caps labels. Tailwind v4 auto-generates font-display / font-body utilities from those names, so other sections reuse them for free.

3. Set font-family: var(--font-body) on the body as the default.




1. Hero card container

4. Rewrite Hero.tsx markup as Tailwind utilities: the outer section centres the card with page padding. hero-card becomes a grid grid-cols-[1fr_auto] items-center gap-* card with a large radius (~`rounded-[28px]), near-white background, thin hairline border, and generous padding). 5. Keep hero.css `only for what utilities can't express cleanly—the grid background and the image frame rings.




2. Grid background inside the card

6. In hero.css, give .hero-card two linear-gradient line layers at ~60px spacing in a very light grey, the same technique as container-bg.

7. Add a mask-image radial fade so the lines are faint at the card edges, matching the reference.

8. Mirror the dark-mode variables under .dark .hero-card the way the container does. CSS does.




3 + 4. Image frame and smaller image

9. Wrap the img in a frame div: an outer pale translucent ring, a white gap ring inside it, then the photo — concentric border + box-shadow rings, plus rounded-full and object-cover.

10. Size the photo around 150–170 px on desktop (down from whatever it renders now), shrinking at small breakpoints.

plus rounded-full and object-cover.

10. Size the photo around 150–170 px on desktop (down from whatever it renders now), shrinking at small breakpoints.

plus rounded-full and object-cover.

10. Size the photo around 150–170 px on desktop (down from whatever it renders now), shrinking at small breakpoints.




5. Card shadow

11. Layer two shadows on .hero-card: a tight low-opacity one for the edge and a wide soft one for the diffuse lift. Tailwind's shadow-* scale won't match the reference on its own — define a --shadow-hero-card token in @theme so it's reusable for the project/skill cards later.




Responsive pass

12. Collapse the two-column grid to a single centred column below md, with an image above text.





# What is .oxlintrc.json, and what is linting? 

Linter: A linter is a tool that automatically reads your code and flags problems without running it. The name comes from an old Unix program called "lint" that picked out lint-like flaws in C code.




.oxlintrc.json is the configuration file for Oxlint, a fast Rust-based JavaScript/TypeScript linter from the Oxc project. It plays the same role as .eslintrc.json or eslint.config.js in an ESLint setup. It tells Oxlint which rules to run, how strictly to enforce them, and which files to skip. It has nothing to do with React itself; React projects use it for linting JSX, hooks, and accessibility.




# What is package-lock.json? 

project, including all the sub-dependencies your dependencies pull in. It's created automatically by npm when you run npm install, and it lives in your project root next to package. json.




# What is a package? JSON? 

package.json — what we want. Loose ranges (^18.2.0), plus our scripts and metadata. We edit it by hand.

package-lock.json — what we got. The exact versions of every package, including deep sub-dependencies we never named. npm writes it.




Why "lock": package.json is deliberately flexible, so ^18.2.0 could resolve to different versions over time. The lock file freezes it to one answer, so every install is identical across our machines.




Why not just pin exact versions in the package? json? Because it only lists our direct deps—the lock file pins the whole tree, and keeping ranges lets us update easily when we want.




# tsconfig files: 

This split comes from Vite's React + TypeScript template. You actually have three files, and the reason is that your project runs TypeScript in two different environments that need different settings.




tsconfig.json — the root. It barely contains any real settings; it just points to the other two via references. It's the entry file that ties the setup together.

tsconfig.app.json — settings for your app code (everything in src/). This is the browser environment: it uses DOM types, JSX, and bundler-style module resolution.

tsconfig.node.json — settings for your build/config files that run in Node, mainly vite.config.ts. Node doesn't have DOM or JSX; it's a different runtime, so it needs its own config.




# vite.config.ts

vite.config.ts is the configuration file for Vite, the build tool and dev server that runs your React app. It controls how your code gets served during development and bundled for production.




Install the Netlify module. 

npm i -D @netlify/functions




# Run Netlify 

npx 



# Automation Brainstorm 

1. Boilerplate for email 

2. When I start Ubuntu, VS Code, Brave, the PDF reader and Spotify will load automatically. When I start Ubuntu, the clock will start with a 3-hour timer. When I start Ubuntu, one drive will load on the screen with the final year folder open. 

3. My resume details will be auto-completed on my job applications. 

4. On every commit, my final year project, deep learning project and mobile dev project will sync in OneDrive as well as GitHub, even though I work on local files from my PC. 

5. Fix grammar and my spelling mistakes as I type system-wise; in any application, once I hit a full stop, it will apply British-style spelling and grammar instantly. 

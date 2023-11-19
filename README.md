This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

You can access the live demo of the project here: [Agreena Live Demo](https://agreena.vercel.app/)

## Getting Started

First install the packages:

```bash
npm i
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

**I have deliberately, pushed `.env` to the repo so you can run the app easily, after you check the code I will delete `.env` file from the repo**

## Overview

This app is a simple table component of shadcn/ui table which is using radix-ui and tailwind, with the functionality of adding each row to bookmark list and copy to clipboard each unique number.

## Teach Stack

1. **Next.js**: Next.js was chosen for its powerful features, including Server Components and Server Actions, which help reduce the client-side JavaScript bundle size, improving performance. For more information, refer to the Next.js documentation.

2. **Typescript**: Typescript is used for type safety, making the application more robust and maintainable. It enhances the development process with intelligent code completion.

3. **Tailwind CSS + Shadcn UI**: Shadcn UI is a new tool that combines Radix UI with Tailwind CSS, offering customizable components without the need for additional packages. The integration of Tailwind CSS with Next.js makes styling efficient.

4. **Zustand**: Zustand is a state management library. I used it for local state management to add each row to the bookmark list.

5. **Lucide-React Icons Package**: Lucide-React provides a collection of icons for use in the application.

6. **ESLint + Husky + Prettier**: ESLint, Husky, and Prettier are configured to ensure code quality and safety with pre-commit checks.

## Future Improvements

Although the application functions well, there are areas for future enhancements:

1. **Testing**: Expand test coverage by adding unit tests for utility functions and end-to-end tests to ensure complete coverage of UI functionality.

2. **Internationalization**: I wanted to add localization support for the app, but I didn't have enough time to do that.

3. **Refactoring**: Consider refactoring the codebase to make it more maintainable, scalable, and readable.

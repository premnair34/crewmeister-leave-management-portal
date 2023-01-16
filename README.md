
# Crewmeister leave management portal

This is a [Next.js](https://nextjs.org/) project for the leave management.

## Local setup
- Run `npm install` to install all the dependencies (node_modules) needed.
*If you encounter any issues installing the node_modules, run `npm install -f`*
- After the successful installation of node_modules, run `npm run dev`, this should spin up the application on `http://localhost:3000/`
- Redirect to [`http://localhost:3000/`](http://localhost:3000/). This is the homepage of the application.

## Run the build version

To run the build version, follow the below steps
- Run `npm run build`. This command will generate a build folder to the local existing changes.
- Run `npm run start` to spin up the application over the build version on [`http://localhost:3000/`](http://localhost:3000/)

## Files structure

**`src/__tests__`**
> This folder contains all the unit test cases for all the components present in the application code. To run all the test cases: `npm run test` To run a specific file test cases: `npm run <file_name>`
>
> ex: `npm run Services.test.tsx`
>
> Key notes:
> 1. Avoid looking for snapshots, instead find for the text or id.
> 2. Try using data-testid / data-tid for find the element.
> 3. Use only `@testing-library/react` for writing the test cases for any component.
> 4. Follow the exact folder path to create a new test files matching to the files location in src Example: To create a new test file for `/src/components/TestComponent.tsx` create a new file at location `/src/__tests__/components/TestComponent.test.tsx`

**`src/components`**
> This folder contains all the page related components.
> - `types.tsx` - All the types that are used for this component are declared here

**`src/constants.ts`**
> This folder contains all the constants used across the application


**`src/pages`**
> This is kind of a routing folder. All the files declared here acts as a routes to different paths excluding `_app.tsx` and `_document.tsx`. There are next.js config wrappers around the pages.
> All the apis goes into `src/pages/api` which creates an endpoint on the same domain.
> Ex: `http://localhost:3000/api/members` will call the `src/pages/api/members` file and returns the response. The code that is written in members.tsx file here acts as a hosted REST endpoint which accepts REST calls and returns data.

**`src/redux`**
> This folder contains all the redux store logic.

**`src/utils.ts`**
> This folder contains all the reusable logic that will be used across the app.

For any issues / questions, please reach out to premnairr@gmail.com.

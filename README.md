## Developers Register App 

The instructors have so much to do so we develop this app to help keeping track on all developers. 

<img src="/Screenshot Web - Student Register.jpg" alt="Screenshot Web" title="Screenshot Web" width="35%" height="35%"/>

### Frontend

Created using React, Redux and vanilla Bootstrap.

- It is possible to add a new developer.
- There is also be a gallery that displays bootcamp lists.
- When the user submits a new developer from the form the developer appear in the list of developers in the correct bootcamp list.
- You can use the selections list to filters what bootcamp lists you want to see.


### Backend

Created using Node.js and Express.

- GET: (/bootcamps) Gets all the developers in all Bootcamps.
- POST: (/bootcamps/:bootcamp/) Includea a developer in a Bootcamp.
- Delete: (/bootcamps/:bootcamp/developers/:id) Delete a specific developer.

### E2E test - Cypresss

In this repository there's a `e2e`-folder that contains e2e-test using [Cypress.IO](http://cypress.io).

1. Start your `server` and your `frontend`-application and ensure that your client is running on `http://localhost:3000`
2. Run the e2e tests, in a separate terminal window, don't forget to`npm i` before running the tests

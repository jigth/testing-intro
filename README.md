# Testing Practice

Testing practice based in the video [JavaScript Testing Introduction Tutorial - Unit Tests, Integration Tests & e2e Tests](https://www.youtube.com/watch?v=r9HdJ8P6GQI)

It was slightly improved to include a **test report** using "jest-html-reporter" library.

# Note:

For the next commands use your favourite package manager such as pnpm, npm or yarn

## Installing

pnpm i

## Testing

Please configure the constant 'PROJECT_URL' in the file [util.test.js](./util.test.js) with a valid URL or filesystem path that starts this project (usually pointing to this project's index.html or a valid URL with this project deployed).

Notice that for the E2E testing using *Puppeteer library*, the browser options 'headless: false' and 'slowMo: \<numberOfMiliseconds\>' may cause the tests to execute slower than they would if you deactivate both options, but provides visual feedback so I left them as that.

### One time

> pnpm t

### Test watch

> pnpm run test:watch

**OR**

> pnpm run t:w
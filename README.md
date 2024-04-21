![Logo](https://app.normalfinance.io/logo/logo_full_color.png)

# Normal Utils

A Typescript modules for frequently used types, utilities, constants, and more across Normal repositories.

## Installation

`yarn add @normalfinance/utils`

or

`npm install @normalfinance/utils`

## Usage

Using a database table type:

```typescript
import { NewInvestment } from '@normalfinance/utils';

const myNewInvestment: NewInvestment = {
   idempotencyKey: 'xyz',
   userId: '123',
   exchangeId: 1;
   indexId: 2;
   amount: '125',
   currency: "usd",
   feeStatus: "pending"
}
```

Calculating an investment fee:

```typescript
import { calculateIndexFee } from '@normalfinance/utils';

const totalInvestmentsSoFar = 1000;
const newInvestment = 500;

const indexFee = calculateIndexFee(totalInvestmentsSoFar, newInvesment);
```

## Contributing

### Setup

- Install the current LTS version of [Node.js](https://nodejs.org)
  - If you are using [nvm](https://github.com/creationix/nvm#installation) (recommended) running `nvm install` will install the latest version and running `nvm use` will automatically choose the right node version for you.
- Install [Yarn v3](https://yarnpkg.com/getting-started/install)
- Run `yarn install` to install dependencies and run any required post-install scripts

### Testing and Linting

Run `yarn test` to run the tests once. To run tests on file changes, run `yarn test:watch`.

Run `yarn lint` to run the linter, or run `yarn lint:fix` to run the linter and fix any automatically fixable issues.

### Release & Publishing

Coming soon.

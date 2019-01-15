# jest-stub-methods

> Replace all methods on an object with spyable jest mocks.

## Table of Contents

- [jest-stub-methods](#jest-stub-methods)
  - [Table of Contents](#table-of-contents)
  - [Install](#install)
  - [Usage](#usage)
  - [License](#license)

## Install

```sh
npm install jest-stub-methods
```

## Usage

```js
import stubMethods from "jest-stub-methods";

describe('My Suite', () => {
  let stubbedConsole;

  beforeEach(() => {
    stubbedConsole = stubMethods(console);
  });

  afterEach(() => {
    stubbedConsole.restore();
  });

  it('logs a message', () => {
    myFunc();

    expect(stubbedConsole.stub.log).toHaveBeenCalled();
  });
});
```

## License

MIT © 2019 SinnerSchrader Deutschland GmbH

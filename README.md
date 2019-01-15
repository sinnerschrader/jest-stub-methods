# jest-stub-methods

> Replace all methods on an object with spyable jest mocks.

## Install

```sh
npm install jest-stub-methods
```

## Usage

```js
import stubMethods from 'jest-stub-methods';

describe('My Suite', () => {
  let stubbedConsole;

  beforeEach(() => {
    stubbedConsole = stubMethods(console);
  });

  afterEach(() => {
    stubbedConsole.restore();
  });

  it('logs a message', () => {
    console.log('Hello, World!');

    expect(stubbedConsole.stub.log).toHaveBeenCalledWith('Hello, World!');
    expect(console.log).toHaveBeenCalledWith('Hello, World!');
  });

  it('logs a warning', () => {
    console.warn('Attention!');

    expect(stubbedConsole.stub.warn).toHaveBeenCalledWith('Attention!');
    expect(console.warn).toHaveBeenCalledWith('Attention!');
  });
});
```

## License

MIT © 2019 SinnerSchrader Deutschland GmbH

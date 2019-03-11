export interface Stubbed<T extends Stubbable> {
  stub: Stub<T>;
  restore(): void;
}

export interface Stubbable {
  [key: string]: unknown;
}

export type Stub<T extends Stubbable> = {
  // tslint:disable-next-line: ban-types
  [key in keyof T]: T[key] extends Function ? T[key] & jest.Mock : T[key]
};

export function stubMethods<T extends Stubbable>(obj: T): Stubbed<T> {
  const mocks = new Set<jest.Mock<unknown>>();

  for (const key of Object.keys(obj)) {
    if (typeof obj[key] !== 'function') {
      continue;
    }

    const mock = jest.spyOn(obj, key).mockImplementation(jest.fn());

    mocks.add(mock);
  }

  return {
    stub: obj as Stub<T>,
    restore: () => {
      mocks.forEach(mock => {
        mock.mockRestore();
      });
    }
  };
}

export default stubMethods;

import {stubMethods} from '.';

describe('stubMethods', () => {
  describe('#stub', () => {
    it('replaces all method properties with a stub', () => {
      const methodSpy = jest.fn();

      const testObject = {
        method(foo: string): void {
          methodSpy(foo);
        }
      };

      const stubbedTestObject = stubMethods(testObject);

      testObject.method('test');

      expect(methodSpy).not.toHaveBeenCalled();
      expect(testObject.method).toHaveBeenCalledWith('test');
      expect(stubbedTestObject.stub.method.mock.calls).toEqual([['test']]);
    });

    it("doesn't replace non-method properties", () => {
      const testObject = {
        number: 0
      };

      const stubbedTestObject = stubMethods(testObject);

      expect(stubbedTestObject.stub.number).not.toHaveProperty('mock');
    });
  });

  describe('#restore()', () => {
    it('restores the original implementation', () => {
      const methodSpy = jest.fn();

      const testObject = {
        method(foo: string): void {
          methodSpy(foo);
        }
      };

      const stubbedTestObject = stubMethods(testObject);

      stubbedTestObject.restore();

      expect(stubbedTestObject.stub.method).not.toHaveProperty('mock');

      testObject.method('test');

      expect(methodSpy).toHaveBeenCalledWith('test');
    });
  });
});

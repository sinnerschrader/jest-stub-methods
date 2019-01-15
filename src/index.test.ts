import {stubMethods} from '.';

describe('stubMethods', () => {
  describe('#stub', () => {
    it('replaces all method properties with a stub', () => {
      const testObject = {
        method: () => undefined
      };

      const stubbedTestObject = stubMethods(testObject);

      expect(stubbedTestObject.stub.method).toHaveProperty('mock');
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
      const testObject = {
        method: () => 'original'
      };

      const stubbedTestObject = stubMethods(testObject);

      stubbedTestObject.restore();

      expect(stubbedTestObject.stub.method).not.toHaveProperty('mock');
      expect(stubbedTestObject.stub.method()).toEqual('original');
    });
  });
});

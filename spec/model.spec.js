import Model from '../src/models/model';

describe("Model", function () {
    it("correctly creates a greeting", function () {
        const expectation = 'Hello Jane Doe. I heard you are 20 years old.';
        const model = new Model('Jane Doe', 20);
        expect(model.greet()).toBe(expectation);
    });
});
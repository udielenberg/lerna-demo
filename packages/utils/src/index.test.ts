import { sayHello } from "./index";

describe("utils", () => {
	it("should say hello", () => {
		expect(sayHello()).toBe("hello");
	});
});

import { parse } from "../lib/index.js";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("deref operator syntax", function () {
  it("should parse", function () {
    expect(getParser(`deref foo`)()).toMatchSnapshot();
  });
});

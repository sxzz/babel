import { parse } from "../lib/index.js";

function getParser(code) {
  return () => parse(code, { sourceType: "module" });
}

describe("deref operator syntax", function () {
  it("should parse deref", function () {
    expect(getParser(`deref foo`)()).toMatchSnapshot();
  });

  it("should parse asterisk", function () {
    expect(getParser(`*foo`)()).toMatchSnapshot();
  });
});

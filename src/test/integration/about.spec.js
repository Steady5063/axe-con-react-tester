const { assert } = require("chai");
const AxeBuilder = require("@axe-devtools/webdriverjs");
const selenium = require("selenium-webdriver");
const { By } = require("selenium-webdriver");

describe("About page", () => {
  let axeDriver;
  let driver;

  before(async () => {
    driver = await new selenium.Builder()
      .withCapabilities(selenium.Capabilities.chrome())
      .build();
    axeDriver = await new AxeBuilder(driver);
  });

  after(async () => {
    await driver.quit();
  });

  test("is accessible, no modifications", async () => {
    await driver.get("http://abcdcomputech.dequecloud.com/");
    const results = await axeDriver.analyze();
    assert(results.violations.length === 0, "More than zero a11y violations");
  });

});

const AxeBuilder = require("axe-webdriverjs");
const selenium = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/integration/cart-page-a11y.log";
import "babel-polyfill"

describe("Cart page", () => {
  let axeDriver;
  let driver;

  beforeAll(async () => {
    driver = await new selenium.Builder()
      .withCapabilities(selenium.Capabilities.chrome())
      .build();
    axeDriver = await new AxeBuilder(driver);
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("is accessible", async () => {
    await driver.get("http://localhost:3000/cart");
    const results = await axeDriver.analyze();
    reportViolations(result, reportPath);
    expect(results.violations.length).toBe(0);
  });

});

const AxeBuilder = require("axe-webdriverjs");
const selenium = require("selenium-webdriver");
const { By } = require("selenium-webdriver");
const reportViolations = require("../utils/axe-logger");
const reportPath = process.cwd()+ "/src/test/a11y-reports/integration/shop-page-a11y.log";
import "babel-polyfill"

describe("Shop page", () => {
  let axeDriver;
  let driver;

  beforeAll(async () => {
    driver = await new selenium.Builder()
      .withCapabilities(selenium.Capabilities.chrome())
      .build();
    axeDriver = await new AxeBuilder(driver);
    await driver.get("http://localhost:3000/shop");
  });

  afterAll(async () => {
    await driver.quit();
  });

  test("page load", async () => {
     const load = await driver.findElement(By.className("glow")).getText();
     expect(load).toBe("Shop");
  });

  test("total listings", async () => {
    const listLength = await driver.findElements(By.className("listing")).then(function(elems) {
         return elems.length;
    });
    expect(listLength).toBe(4);
  });

  test("listing buttons render", async () => {
    const details = await driver.findElement(By.id("moreDets")).getText();
    const cart = await driver.findElement(By.id("addCart")).getText();

    expect(details).toBe("More Details");
    expect(cart).toBe("Add to Cart");
  });


  test("is accessible", async () => {
    const results = await axeDriver.analyze();
    reportViolations(results, reportPath);
    expect(results.violations.length).toBe(0);
  });

});

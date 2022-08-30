import assert from "assert";
import "chromedriver";
import { Builder, By, Key, until } from "selenium-webdriver";

async function index() {
  const url = "https://www.google.com";
  const search = "Automation testing with selenium webdriver and javascript";

  const driver = new Builder().forBrowser("chrome").build();

  await driver.get(url);

  await driver.findElement(By.className("QS5gu sy4vM")).click();

  await driver.findElement(By.name("q")).sendKeys(search, Key.RETURN);

  const h3 = await driver.wait(until.elementLocated(By.css("h3")));
  h3.click();
  const title = await driver.getTitle();

  assert(
    title.includes("Selenium Webdriver"),
    "the title includes Selenium Webdriver"
  );

  assert(title.includes("JavaScript"), "the title includes JavaScript");

  driver.quit();
}

index();

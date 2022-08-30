import assert from "assert";
import "chromedriver";
import { Builder, By } from "selenium-webdriver";

async function index() {
  const driver = await new Builder().forBrowser("chrome").build();

  // Open the Google homepage
  await driver.get("https://www.google.com/");

  // search text box and submit
  const textBox = await driver.findElement(By.name("my-text"));
  const submitButton = await driver.findElement(By.css("button"));

  // Type javascript and submit
  await textBox.sendKeys(
    "Test Automation with selenium webdriver and javascript"
  );
  await submitButton.click();

  // click first link
  const link = await driver.findElement(By.text("javascript"));
  await link.click();

  // search title for "Javascript"
  const value = await message.getText();
  assert.toString("javascriptnode v", value);
  driver.quit();
}

index();

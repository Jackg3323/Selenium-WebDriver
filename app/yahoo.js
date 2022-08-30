import assert from "assert";
import "chromedriver";
import { Builder, By } from "selenium-webdriver";

async function index() {
  const driver = await new Builder().forBrowser("chrome").build();

  // Open the Yahoo homepage
  await driver.get("https://www.yahoo.com/");

  // Click the 'Sign In' link
  await driver.findElement(By.linkText("Sign in")).click();

  // Type in the username
  await driver.findElement(By.name("username")).sendKeys("tester");

  // If the 'Stay signed in' checkbox is checked, uncheck it
  if (await driver.findElement(By.name("persistent")).isSelected()) {
    console.info("Unchecking 'Stay signed in' checkbox");
    await driver.findElement(By.css("label[for='persistent']")).click();
  }

  assert(
    (await driver.findElement(By.name("persistent")).isSelected()) === false,
    "The 'Stay signed in' checkbox is unchecked"
  );

  driver.quit();
}

index();

import { Builder } from "selenium-webdriver";
import "geckodriver";

async function test() {
  // Wait for the browser to get built and launched 🚀
  const driver = new Builder().forBrowser("firefox").build();

  await driver.get("https://www.google.com");

  driver.quit();
}

test();

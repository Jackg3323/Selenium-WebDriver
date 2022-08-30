import "chromedriver";
import { Builder, By, until } from "selenium-webdriver";

const url = "https://s3t-products.netlify.app";

let checkbox;
let driver;
let input;

beforeEach(async () => {
  driver = new Builder().forBrowser("chrome").build();
  await driver.get(url);

  checkbox = await driver.findElement(By.css("input[type=checkbox]"));
  input = await driver.findElement(By.id("search"));
  try {
    await driver.wait(
      until.elementLocated(By.css("tr[data-testid='product-row'"))
    );
  } catch {
    console.error("No data is loading");
    driver.quit();
  }
});

afterEach(() => {
  driver.quit();
});

describe("Category Rows", () => {
  it("should display categories in bold", async () => {
    const categoryRowFontWeight = await driver
      .findElement(By.css("tr[data-testid='cat-row'] th"))
      .getCssValue("font-weight");

    expect(categoryRowFontWeight).toBe("700");
  });
});

describe("Out of stock", () => {
  it("hides out of stock products", async () => {
    try {
      await driver.findElement(By.className("out-of-stock"));
    } catch {
      console.error("No out of stock products");
    }

    await checkbox.click();
    const oos = await driver.findElements(By.className("out-of-stock"));
    expect(oos).toHaveLength(0);
  });
});

describe("Search", () => {
  it("only shows products ending with 'fruit' when searching 'fruit'", async () => {
    await input.sendKeys("fruit");
    const products = await driver.findElements(
      By.css("tr[data-testid='product-row']")
    );
    const textOfFirstProduct = await products[0].getText();
  });
});

require("chromedriver");
const { Builder, By, Key, until } = require("selenium-webdriver");
const { expect } = require("chai");

describe("selenium tests", function () {
  this.timeout(30_000); 
  
  it("should find turtles", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      await driver.get("https://www.bbc.co.uk/search");
      const search = await driver.findElement(By.id("search-input"));
      await search.sendKeys("value", Key.ENTER);
      await driver.findElement(By.css("#main-content > form > div > div > div > button")).click();
      const result = await driver.findElement(By.css("#main-content > div.ssrcss-1v7bxtk-StyledContainer.enjd40x0 > div > div > ul > li:nth-child(1) > div > div > div.ssrcss-tq7xfh-PromoContent.e1f5wbog7 > div.ssrcss-1f3bvyz-Stack.e1y4nx260 > a > span > p > span"));
      expect(await result.getText()).to.equal("The Man Who Made Mock Turtle Soup");
    } finally {
      await driver.quit();
    }
  })

  it.skip("should find a surprise", async () => {
    const driver = await new Builder().forBrowser("chrome").build();
    try {
      driver.get("https://christophperrins.github.io/TestingSite/");
      const surprise = await driver.wait(until.elementLocated(By.css("#quote > h1")));
      expect(await surprise.getText()).to.equal("Surprise!")
    } finally{
      driver.quit();
    }
    return;
  });
 });
package config;


import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.FindBy;

public class WebDriverSetup {
    private static ChromeDriver driver;





    protected WebDriverSetup() {
    }

    public static WebDriver getDriver() {

        if (null == driver) {

            System.setProperty("webdriver.chrome.driver",
                    "chrome_driver/chromedriver");
            driver = new ChromeDriver();
        }

        return driver;
    }

    public void navigateToURL(String url) {
        getDriver().navigate().to(url);
    }

}

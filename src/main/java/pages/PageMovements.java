package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

public class PageMovements {

    private WebDriver driver;

    public PageMovements(WebDriver driver) {
        this.driver = driver;
    }

    public void maximizePage() {
        driver.manage().window().maximize();
    }

    public void scrollUpAndDown() {
        JavascriptExecutor jse = (JavascriptExecutor) driver;
        jse.executeScript("window.scrollBy(0,100)", "");


    }

}

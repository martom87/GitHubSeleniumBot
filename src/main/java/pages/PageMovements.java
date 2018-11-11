package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;

import java.awt.*;
import java.awt.event.KeyEvent;

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

    public void scrollToBegining() {
        try {
            Robot robot = new Robot();
            robot.keyRelease(KeyEvent.VK_PAGE_UP);
        } catch (AWTException e) {
            e.printStackTrace();
        }
    }
}

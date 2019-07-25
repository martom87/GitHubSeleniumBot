package validations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class PresenceValidator {

    private WebDriver driver;

    public PresenceValidator(WebDriver driver) {
        this.driver = driver;
    }


    public void validateElementPresence2(List<WebElement> webElements) {
        for (WebElement webElement : webElements) {
            existsElement(webElement);
        }
    }


    public void existsElement(WebElement webElement) {
        try {
            driver.findElement(By.id(webElement.getAttribute("id")));

        } catch (Exception e) {
            System.out.println("check the xpaths of elements and login data");
            System.exit(0);
        }

    }

}

package utilis.validations;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public class ElementsValidatorHelper {

    private WebDriver driver;

    ElementsValidatorHelper(WebDriver driver) {
        this.driver = driver;
    }


    void validateElementPresence(List<WebElement> webElements) {
        for (WebElement webElement : webElements) {
            existsElement(webElement);
        }
    }


    void existsElement(WebElement webElement) {
        try {
            driver.findElement(By.id(webElement.getAttribute("id")));

        } catch (Exception e) {
            System.out.println("check the xpaths of elements and login data");
            System.exit(0);
        }

    }

}

package utilis.validations;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

import java.util.List;

public abstract class ElementsValidator {
    private WebDriver driver;


    public ElementsValidator(WebDriver driver) {
        this.driver = driver;
    }

    public void performValidationOn(List<WebElement> webElements) {
        ElementsValidatorHelper elementsValidatorHelper = new ElementsValidatorHelper(driver);
        elementsValidatorHelper.validateElementPresence(webElements);
    }

}

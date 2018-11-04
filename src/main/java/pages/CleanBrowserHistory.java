package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilis.CommonMethods;

public class CleanBrowserHistory implements CommonMethods {

    private WebDriver driver;
    private String cleanBtnLocator = "//*[@id=\"clearBrowsingDataConfirm\"]";

    @FindBy(xpath = "//*[@id=\"clearBrowsingDataConfirm\"]")
    private WebElement cleanBtn;

    public CleanBrowserHistory(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }


    @Override
    public boolean checkIfElementExists(String xpath) {

        try {
            driver.findElement(By.xpath(xpath));
            cleanBtn.click();

        } catch (NoSuchElementException e) {
            return false;
        }
        return true;
    }

    public void cleanHistoryBtnClick() {
        checkIfElementExists(cleanBtnLocator);
    }


}

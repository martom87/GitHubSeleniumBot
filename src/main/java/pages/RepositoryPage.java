package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class RepositoryPage {

    WebDriver driver;
    @FindBy(xpath = "//*[@id=\"js-pjax-container\"]/div/div[3]/div[3]/div[1]/form/div[2]/a")
    private WebElement newRepositoryButton;

    public RepositoryPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    public void createNewRepository() {
        newRepositoryButton.click();
    }
}

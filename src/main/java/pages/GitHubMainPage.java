package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilis.validations.ElementsValidator;

public class GitHubMainPage extends ElementsValidator {

    private WebDriver driver;

    @FindBy(xpath = "/html/body/div[1]/header/div[8]/details/summary/span")
    private WebElement spanButton;

    @FindBy(xpath = "/html/body/div[1]/header/div[6]/details/summary/span")
    private WebElement logoutSpanButton;

    @FindBy(xpath = "/html/body/div[1]/header/div[8]/details/details-menu/a[2]")
    private WebElement repositoriesButton;


    @FindBy(xpath = "/html/body/div[1]/header/div[6]/details/details-menu/form/button")
    private WebElement logoutButton;


    public GitHubMainPage(WebDriver driver) {
        super(driver);
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void goToRepositories() {
        spanButton.click();
        repositoriesButton.click();
    }

    public void logOut() {
        logoutSpanButton.click();
        logoutButton.click();
    }


}

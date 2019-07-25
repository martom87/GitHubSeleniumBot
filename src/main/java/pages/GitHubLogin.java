package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilis.validations.ElementsValidator;

import java.util.Arrays;

public class GitHubLogin extends ElementsValidator {

    private WebDriver driver;
    private ElementsValidator elementsValidator;

    public static final String BASE_URL = "https://github.com/login";

    @FindBy(xpath = "//*[@id=\"login_field\"]")
    private WebElement userGitHubLogin;

    @FindBy(xpath = "//*[@id=\"password\"]")
    private WebElement userGitHubPassword;

    @FindBy(xpath = "//*[@id=\"login\"]/form/div[3]/input[4]")
    private WebElement loginButton;

    @FindBy(xpath = "//*[@id=\"user-links\"]/li[3]/details/summary/span")
    private WebElement spanButton;

    @FindBy(xpath = "//*[@id=\"user-links\"]/li[3]/details/details-menu/ul/li[10]/form/button")
    private WebElement logoutButton;


    public GitHubLogin(WebDriver driver) {
        super(driver);
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    public void logIn(String login, String password) {
        this.performValidationOn(Arrays.asList(userGitHubLogin, userGitHubPassword));
        userGitHubLogin.sendKeys(login);
        userGitHubPassword.sendKeys(password);
        loginButton.click();
    }
}

package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import validations.PresenceValidator;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

public class GitHubLogin {

    private WebDriver driver;
    private PresenceValidator presenceValidator;
    private List<WebElement> webElements;

    public static final String BASE_URL = "https://github.com/login";

    @FindBy(xpath = "//*[@id=\"login_field\"]")
    private WebElement userGitHubLogin;

    @FindBy(xpath = "//*[@id=\"password1\"]")
    private WebElement userGitHubPassword;

    @FindBy(xpath = "//*[@id=\"login\"]/form/div[3]/input[4]")
    private WebElement loginButton;

    @FindBy(xpath = "//*[@id=\"user-links\"]/li[3]/details/summary/span")
    private WebElement spanButton;

    @FindBy(xpath = "//*[@id=\"user-links\"]/li[3]/details/details-menu/ul/li[10]/form/button")
    private WebElement logoutButton;


    public GitHubLogin(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }

    public void logIn(String login, String password) {
        webElements = Arrays.asList(userGitHubLogin, userGitHubPassword);
        presenceValidator = new PresenceValidator(driver);
        presenceValidator.validateElementPresence2(webElements);
        userGitHubLogin.sendKeys(login);
        userGitHubPassword.sendKeys(password);
        loginButton.click();
    }
}

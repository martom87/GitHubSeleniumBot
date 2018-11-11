package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GitHubLogin {

    private WebDriver driver;

    public static final String BASE_URL = "https://github.com/login";

    @FindBy(xpath = "//*[@id=\"login_field\"]")
    private WebElement userGitHubLogin;

    @FindBy(xpath = "//*[@id=\"password\"]")
    private WebElement userGitHubPassword;

    @FindBy(xpath = "//*[@id=\"login\"]/form/div[3]/input[3]")
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
        userGitHubLogin.sendKeys(login);
        userGitHubPassword.sendKeys(password);
        loginButton.click();
        //  spanButton.click();
        //   logoutButton.click();

    }
}

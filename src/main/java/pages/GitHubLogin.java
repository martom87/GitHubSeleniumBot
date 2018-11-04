package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class GitHubLogin {

    private WebDriver driver;

    public static final String BASE_URL = "https://github.com/login";

    public GitHubLogin(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);

    }
}

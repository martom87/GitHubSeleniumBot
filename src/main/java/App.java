import config.WebDriverSetup;
import org.openqa.selenium.WebDriver;
import pages.CleanBrowserHistory;
import pages.GitHubLogin;

import static pages.GitHubLogin.BASE_URL;

public class App extends WebDriverSetup {

    private App() {
        super();
    }

    WebDriver driver = WebDriverSetup.getDriver();
    private CleanBrowserHistory cleanBrowserHistory;

    public void cleanBrowserHistory() {
        cleanBrowserHistory = new CleanBrowserHistory(driver);
        navigateToURL("chrome://settings/clearBrowserData");
        cleanBrowserHistory.cleanHistoryBtnClick();
    }

    public void logIn() {
        GitHubLogin loginGithub = new GitHubLogin(driver);
        navigateToURL(BASE_URL);
    }


    public static void main(String args[]) {
        App app = new App();
        app.cleanBrowserHistory();
        app.logIn();

    }

}

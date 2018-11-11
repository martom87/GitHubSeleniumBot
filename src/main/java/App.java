import config.WebDriverSetup;
import model.User;
import org.openqa.selenium.WebDriver;
import pages.CleanBrowserHistory;
import pages.GitHubLogin;
import pages.GitHubMainPage;
import pages.PageMovements;

import static pages.GitHubLogin.BASE_URL;

public class App extends WebDriverSetup {

    private App() {
        super();
    }

    WebDriver driver = WebDriverSetup.getDriver();
    private CleanBrowserHistory cleanBrowserHistory;
    PageMovements pageMovements = new PageMovements(driver);

    public void cleanBrowserHistory() {
        cleanBrowserHistory = new CleanBrowserHistory(driver);
        navigateToURL("chrome://settings/clearBrowserData");
        cleanBrowserHistory.cleanHistoryBtnClick();
    }

    public void logIn() {
        User user = new User();

        GitHubLogin loginGithub = new GitHubLogin(driver);
        navigateToURL(BASE_URL);
        loginGithub.logIn(user.getUsername(), user.getPassword());

    }

    public void showRepositories() {
        GitHubMainPage gitHubMainPage = new GitHubMainPage(driver);
        gitHubMainPage.goToRepositories();


    }

    public void movePage() {
        pageMovements.scrollUpAndDown();
    }

    public void maximizePage() {
        pageMovements.maximizePage();
    }


    public static void main(String args[]) {
        App app = new App();
        app.cleanBrowserHistory();
        app.maximizePage();
        app.logIn();
        app.showRepositories();
        app.movePage();


    }

}

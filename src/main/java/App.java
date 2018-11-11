import config.WebDriverSetup;
import model.User;
import org.openqa.selenium.WebDriver;
import pages.*;
import ui.Logger;

import static pages.GitHubLogin.BASE_URL;

public class App extends WebDriverSetup {
    User user = new User();


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

    public void setUserData() {
        Logger logger = new Logger();
        user.setUsername(logger.getUserName());
        user.setPassword(logger.getUserPassword());

    }

    public void logIn() {


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

    public void makeNewRepository() {
        RepositoryPage repositoryPage = new RepositoryPage(driver);
        repositoryPage.createNewRepository();
    }

    public void goBackToMainPage() {
        NewRepository newRepository = new NewRepository(driver);
        newRepository.goToRepositoriesPage();
    }

    public void logOut() {
        GitHubMainPage gitHubMainPage = new GitHubMainPage(driver);
        gitHubMainPage.logOut();
    }


    public static void main(String args[]) {
        App app = new App();
        app.setUserData();
        app.cleanBrowserHistory();
        app.maximizePage();
        app.logIn();
        app.showRepositories();
        app.movePage();
        app.makeNewRepository();
        app.goBackToMainPage();
        app.logOut();

    }

}

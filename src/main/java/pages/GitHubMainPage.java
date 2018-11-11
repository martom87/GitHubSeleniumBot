package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class GitHubMainPage {

    private WebDriver driver;

    @FindBy(xpath = "//*[@id=\"user-links\"]/li[3]/details/summary/span")
    private WebElement spanButton;

    @FindBy(xpath = "//*[@id=\"user-links\"]/li[3]/details/details-menu/ul/li[4]")
    private WebElement repositoriesButton;


    public GitHubMainPage(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void goToRepositories() {
        spanButton.click();
        repositoriesButton.click();
    }


}

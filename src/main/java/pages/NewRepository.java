package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class NewRepository {

    WebDriver driver;


    @FindBy(xpath = "/html/body/div[1]/header/div/div[1]")
    private WebElement spanButton;

    public NewRepository(WebDriver driver) {
        this.driver = driver;
        PageFactory.initElements(driver, this);
    }

    public void goToRepositoriesPage() {
        try {
            Thread.sleep(3000);
        } catch (InterruptedException e) {
            e.printStackTrace();
        }
        spanButton.click();
    }


}

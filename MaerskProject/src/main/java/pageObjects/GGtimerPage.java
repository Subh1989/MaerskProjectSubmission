package pageObjects;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

public class GGtimerPage extends TestPage{

	private boolean bElementsInitiated = false;
	public WebDriver driver;
	public GGtimerPage(WebDriver driver) {
		
	   this.driver = driver;
	   this.wait = new WebDriverWait(driver,60);

	}
	
	@FindBy(css = "[id='content'] h2")
	private WebElement validPage;
	
	@FindBy(id = "start_a_timer")
	private WebElement startTimerEditBox;
	
	@FindBy(id = "timergo")
	private WebElement goButton;
	
	@FindBy(id = "progressText")
	private WebElement progressText;
	
	By progress = By.id("progressText");
	
	public void validatePage()
	{
		initPageElements();
		String validPageText = validPage.getText();
		Assert.assertEquals(validPageText, "A simple countdown timer.");
	}
	
	public void enterRequiredTime(String requiredTimer)
	{
		initPageElements();
		startTimerEditBox.clear();
		startTimerEditBox.sendKeys(requiredTimer);
	}
	
	public void clickGoButton()
	{
		initPageElements();
		goButton.click();
	}
	
	public void validateCountdownWithSpecificTimer(String expectedTime)
	{
		initPageElements();
		wait.until(ExpectedConditions.visibilityOfElementLocated(progress));
		while(true)
		{
			String time = driver.findElement(By.id("progressText")).getText();
            if(time.equalsIgnoreCase(expectedTime))
            {
            	Assert.assertTrue(true);
            	break;
            }
            
		}
	}
	
	public void validateCountdownTillEnd()
	{
		initPageElements();
		wait.until(ExpectedConditions.visibilityOfElementLocated(progress));
		while(true)
		{
			String time = driver.findElement(By.id("progressText")).getText();
            if(time.equalsIgnoreCase("1 second"))
            {
            	Assert.assertTrue(true);            	
            	break;
            }
            
		}
		wait.until(ExpectedConditions.alertIsPresent());
		driver.switchTo().alert().accept();
		driver.switchTo().defaultContent();
	}
	
	
	
	protected void initPageElements() {
		if (!bElementsInitiated) {
			PageFactory.initElements(driver, this);
			bElementsInitiated = true;
		}
	}
}

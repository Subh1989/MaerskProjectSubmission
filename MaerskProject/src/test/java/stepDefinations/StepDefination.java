package stepDefinations;

import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriverException;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import pageObjects.GGtimerPage;
import resources.Base;

public class StepDefination extends Base{

	GGtimerPage gp;
	@Given("^user invokes the browser$")
	public void user_invokes_the_browser() throws Throwable {
	   
	    driver = invokeBrowser();
	}

	@Given("^user navigates to the ggtimer home page$")
	public void user_navigates_to_the_ggtimer_home_page() throws Throwable {
	    
	    driver.get(prop.getProperty("url"));
	    gp = new GGtimerPage(driver);
	    gp.validatePage();
	}

	@When("^user enters \"([^\"]*)\"$")
	public void user_enters(String requiredTimer) throws Throwable {
	  
		gp.enterRequiredTime(requiredTimer);
	}

	@When("^clicks on Go button$")
	public void clicks_on_Go_button() throws Throwable {
	    
	    gp.clickGoButton();
	}

	@Then("^the countdown should begin in descending order and user exits after \"([^\"]*)\"$")
	public void the_countdown_should_begin_in_descending_order_and_user_exits_after(String expectedTime) throws Throwable {
	  
		gp.validateCountdownWithSpecificTimer(expectedTime);
	}

	@Then("^the countdown should begin in descending order and user exits after the countdown ends$")
	public void the_countdown_should_begin_in_descending_order_and_user_exits_after_the_countdown_ends() throws Throwable {
	   
	    gp.validateCountdownTillEnd();
	}
	
	@After
	public void endTest(Scenario scenario) {
	     
	    try {
	    if (scenario.isFailed()) {
	         final byte[] screenshot = ((TakesScreenshot) driver).getScreenshotAs(OutputType.BYTES);
	         scenario.embed(screenshot, "image/png");
	       }
	    } catch (WebDriverException e) {
	    e.printStackTrace();
	    }
	    driver.manage().deleteAllCookies();
	    driver.quit();
	    }
}

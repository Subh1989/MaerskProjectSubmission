Run the code:
-> I have used Maven as build management tool here.
-> To run the code using eclipse editor, we can simply run it throught testng.xml.
-> To run the code using command prompt, use the below commands:
	mvn compile
	mvn test verify (verify is used to generate cucumber reports using cucumber maven dependency).
	
Platform used:
-> I am running the test in testng platform

Dependencies used:
-> Selenium dependency, Testng dependency, cucumber-java dependency, cucumber-testng dependency, maven cucumber reporting dependency.

Highlights:
->Under src/main/java, I have created two packages named pageObjects and resources.
	1. Under resources package: 
		-> I have defined Base class where I have created a reusable method for invoking the browser.
		-> I have added a property file to declare global variable.
		-> I have added chromedriver.exe
	
	2. Under pageObject package, I have created GGtimerPage.java file where I have used page object concept to declare the webelements as private and 
	   methods as public. By this we are achieving encapsulation concept.

-> Under src/test/java, I have created three packages names features, stepDefinations, cucumber.Options.
	1. Under features:
		-> I have created a feature file which consists of the test cases.
	
	2. Under stepDefinations:
		-> I have created a java file to map the steps mentioned in the feature file and created object of the class created under pageObject to call
		the respective methods.
		
	3. Under cucumber.Options:
		-> I have created a TestRunner.java file where I provided the path of the feature file and step defination and here I have extended 
			AbstractTestNGCucumberTests class to run my scripts in testng platform.

Feature: Validation of Countdown timer

Scenario Outline: Validate the countdown begins in descending order with user exiting at specific time
Given user invokes the browser
And user navigates to the ggtimer home page
When user enters <requiredTimer> 
And clicks on Go button
Then the countdown should begin in descending order and user exits after <expectedTime>

Examples:
|requiredTimer		|expectedTime		|
|"25 seconds"		|"16 seconds"		|

Scenario Outline: Validate the countdown begins in descending order with user exiting after countdown ends
Given user invokes the browser
And user navigates to the ggtimer home page
When user enters <requiredTimer> 
And clicks on Go button
Then the countdown should begin in descending order and user exits after the countdown ends

Examples:
|requiredTimer		|
|"25 seconds"		|
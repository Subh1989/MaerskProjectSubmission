$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("GGtimerPage.feature");
formatter.feature({
  "line": 1,
  "name": "Validation of Countdown timer",
  "description": "",
  "id": "validation-of-countdown-timer",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Validate the countdown begins in descending order with user exiting at specific time",
  "description": "",
  "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-at-specific-time",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user invokes the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigates to the ggtimer home page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \u003crequiredTimer\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the countdown should begin in descending order and user exits after \u003cexpectedTime\u003e",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-at-specific-time;",
  "rows": [
    {
      "cells": [
        "requiredTimer",
        "expectedTime"
      ],
      "line": 11,
      "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-at-specific-time;;1"
    },
    {
      "cells": [
        "\"25 seconds\"",
        "\"16 seconds\""
      ],
      "line": 12,
      "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-at-specific-time;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": "Validate the countdown begins in descending order with user exiting at specific time",
  "description": "",
  "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-at-specific-time;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "user invokes the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user navigates to the ggtimer home page",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "user enters \"25 seconds\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "clicks on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "the countdown should begin in descending order and user exits after \"16 seconds\"",
  "matchedColumns": [
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_invokes_the_browser()"
});
formatter.result({
  "duration": 7633392200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_navigates_to_the_ggtimer_home_page()"
});
formatter.result({
  "duration": 4112754700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25 seconds",
      "offset": 13
    }
  ],
  "location": "StepDefination.user_enters(String)"
});
formatter.result({
  "duration": 111679300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clicks_on_Go_button()"
});
formatter.result({
  "duration": 5281731900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "16 seconds",
      "offset": 69
    }
  ],
  "location": "StepDefination.the_countdown_should_begin_in_descending_order_and_user_exits_after(String)"
});
formatter.result({
  "duration": 5750362799,
  "status": "passed"
});
formatter.after({
  "duration": 1192206501,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 14,
  "name": "Validate the countdown begins in descending order with user exiting after countdown ends",
  "description": "",
  "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-after-countdown-ends",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user invokes the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user navigates to the ggtimer home page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters \u003crequiredTimer\u003e",
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "clicks on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the countdown should begin in descending order and user exits after the countdown ends",
  "keyword": "Then "
});
formatter.examples({
  "line": 21,
  "name": "",
  "description": "",
  "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-after-countdown-ends;",
  "rows": [
    {
      "cells": [
        "requiredTimer"
      ],
      "line": 22,
      "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-after-countdown-ends;;1"
    },
    {
      "cells": [
        "\"25 seconds\""
      ],
      "line": 23,
      "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-after-countdown-ends;;2"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 23,
  "name": "Validate the countdown begins in descending order with user exiting after countdown ends",
  "description": "",
  "id": "validation-of-countdown-timer;validate-the-countdown-begins-in-descending-order-with-user-exiting-after-countdown-ends;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 15,
  "name": "user invokes the browser",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "user navigates to the ggtimer home page",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user enters \"25 seconds\"",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 18,
  "name": "clicks on Go button",
  "keyword": "And "
});
formatter.step({
  "line": 19,
  "name": "the countdown should begin in descending order and user exits after the countdown ends",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefination.user_invokes_the_browser()"
});
formatter.result({
  "duration": 5699013200,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.user_navigates_to_the_ggtimer_home_page()"
});
formatter.result({
  "duration": 4175769100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "25 seconds",
      "offset": 13
    }
  ],
  "location": "StepDefination.user_enters(String)"
});
formatter.result({
  "duration": 126843300,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.clicks_on_Go_button()"
});
formatter.result({
  "duration": 4965467100,
  "status": "passed"
});
formatter.match({
  "location": "StepDefination.the_countdown_should_begin_in_descending_order_and_user_exits_after_the_countdown_ends()"
});
formatter.result({
  "duration": 23235306500,
  "status": "passed"
});
formatter.after({
  "duration": 1198627900,
  "status": "passed"
});
});
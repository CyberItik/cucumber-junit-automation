$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/features/shoppingSearchSorting.feature");
formatter.feature({
  "name": "Shopping Search Result Sorting",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Ascending price order verification in Search Result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@priceOrder"
    }
  ]
});
formatter.step({
  "name": "user goes to shopping homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "user searches for item \"\u003citem\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user verifies a message \"\u003cresult\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "user selects sort by option \"\u003csortByOption\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user verifies each result is sorted by lowest price first",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "item",
        "result",
        "sortByOption"
      ]
    },
    {
      "cells": [
        "dress",
        "67",
        "Price: Lowest first"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Ascending price order verification in Search Result",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@priceOrder"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user goes to shopping homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "ShppingDressTypes_steps.user_goes_to_shopping_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user searches for item \"dress\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_searches_for_item(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user verifies a message \"67\"",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_verifies_a_message(String)"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Result message verification expected:\u003c[6]7 results have been ...\u003e but was:\u003c[]7 results have been ...\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat steps.ShoppingSearchSorting_steps.user_verifies_a_message(ShoppingSearchSorting_steps.java:28)\r\n\tat ✽.user verifies a message \"67\"(src/test/resources/features/shoppingSearchSorting.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user selects sort by option \"Price: Lowest first\"",
  "keyword": "And "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_selects_sort_by_option(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user verifies each result is sorted by lowest price first",
  "keyword": "Then "
});
formatter.match({
  "location": "ShoppingSearchSorting_steps.user_verifies_each_result_is_sorted_by_lowest_price_first()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png");
formatter.write("THIS SCENARIO FAILED");
formatter.after({
  "status": "passed"
});
});
---
layout: post
title: Unusual Spending Kata
categories: [Experienced, Mocks, TDD, Pair-Programming]
image: default.jpg
---

{% include credits.md name='Test Double Consulting Agency' url='https://github.com/testdouble/contributing-tests/wiki/Unusual-Spending-Kata' %}

## Description

You work at a credit card company and as a value-add they want to start providing alerts to users when their spending in any particular category is higher than usual.

* A `Payment` is a simple value object with a `price`, `description`, and `category`
* A `Category` is an enumerable type of a collection of things like "entertainment", "restaurants", and "golf"
* For a given `userId`, fetch the payments for the current month and the previous month
* Compare the total amount paid for the each month, grouped by category; filter down to the categories for which the user spent at least 50% more this month than last month
* Compose an e-mail message to the user that lists the categories for which spending was unusually high, with a subject like "Unusual spending of $1076 detected!" and this body:

```
Hello card user!

We have detected unusually high spending on your card in these categories:

* You spent $148 on groceries
* You spent $928 on travel

Love,

The Credit Card Company
```

## More details

More details about the goal, caveats, extra credit or solutions: [Unusual Spending Kata by Test Double](https://github.com/testdouble/contributing-tests/wiki/Unusual-Spending-Kata).

## Get the code

Starter projects: [JavaScript](https://github.com/testdouble/unusual-spending), [Java](https://github.com/testdouble/java-testing-example/tree/master/unusual-spending).

If your favorite language is missing, feel free to create a pull request. Be sure the maintainer will be happy ;-)


{% include default_image_credits.md %}

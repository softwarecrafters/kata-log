---
layout: post
title:  "Parallel Change Kata"
categories: [TDD, Refactoring, Starter, Agile]
image: parallel_change.jpg
---

{% include credits.md name='Pawel Duda & Carlos Ble' url='https://github.com/unclejamal/parallel-change' %}

## Your Task

Change the class `ShoppingCart` in the package `field`.

The class should be handle multiple `int` items instead of a single one.

Tests have already been written.

## Rules

The tests must not be red at any time. No compile-errors, no failures.

You may want to try the TCR workflow: [Test && Commit || Revert](https://medium.com/@kentbeck_7670/test-commit-revert-870bbd756864). It forces you to always have code that works, in other words, to be green all the time. When you save the code (production code or tests), you also test it. If the tests pass, the changes are commited to the repository. If the tests fail, the code is reverted. When you save code that doesn't work, it changes back to a working state in a blink.

You can find various implementations of the TCR setup for you programming environment, if you search for it on the web.

{%
    include get_the_code.md 
    url='https://github.com/unclejamal/parallel-change' 
    languages='C++, C#, Go, Java, Python, Ruby'
%}


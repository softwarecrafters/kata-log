---
layout: post
title:  "Baby Steps"
image: baby_steps.jpg
---

{% include constraint_header.html %}

{% include credits.md name='Adrian Bolboaca' url='http://blog.adrianbolboaca.ro/2013/01/the-history-of-taking-baby-steps/' %}

# Rules

1. Setup a git repository (or use another SCM that supports resets)
2. Setup a timer for 2 minutes interval when you start
3. Write exactly one test
   * If the timer rings and the test is red then revert and start over
   * If you finish your test earlier: no problem, reset the timer and continue
4. Restart timer
5. Go to 3.

# Hints

* Most pairs need to reset at least once
* It is absolutely OK to spend iterations to do only refactorings
* Feel free to discuss whatever is needed in between cycles
* The most important part is to have green tests. Your code base must
  never be red for more than two minutes

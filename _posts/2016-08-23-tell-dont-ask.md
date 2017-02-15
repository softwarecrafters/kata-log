---
layout: post
title:  "Tell! Don't ask!"
categories: [Constraint, Software-Design, Experienced, Mocks]
image: tell_dont_ask.jpg
---

{% include constraint_header.html %}

## Rules

* No return values
* No side effects changing "global variables"
* Don't use exceptions as return values

Yeah, really... That's the whole show. If you try this for the first
time it might seem impossible or not very useful. Trust us, you will
find a design that you didn't consider before. And maybe one day in
production you will remember...

In some languages you will need a mocking framework to write proper
test.

Believe us: you can do it!


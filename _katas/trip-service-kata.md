---
layout: post
title:  "Trip Service Kata"
categories: [Refactoring, Starter, SOLID Principles, Software-Design]
level: Starter
image: trip_service.jpg
---

{% include credits.md name='Sandro Mancuso' url='https://github.com/sandromancuso/trip-service-kata' %}

## Your Task

The objective is to test and refactor the legacy `TripService` class.
The end result should be well-crafted code that expresses the domain.
We do not need tests for collaborators (right now), we want to test only
the logic contained in the `TripService` class.

## Rules
* **We can't change any existing code if not covered by tests**. We
  can’tafford to break any existing behavior.
* The only exception is if we need to change the code to add unit tests,
  but in this case, **just automated refactorings (via IDE) are allowed**.

{%
    include get_the_code.md 
    url='https://github.com/sandromancuso/trip-service-kata' 
    languages='ABAP, Bash, C#, C++, Java, JavaScript, Kotlin,
               Objective C, PHP, Python, Ruby, Scala, Swift,
               TypeScript'
%}

## Image credits

Image by [Egga](https://github.com/eggstrema). It shows an exemplary flip chart to facilitate the kata.

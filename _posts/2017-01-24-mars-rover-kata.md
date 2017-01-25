---
layout: post
title:  "Mars Rover Kata"
categories: [TDD, Encapsulation, Intermediate]
---

<img style="height: 200px" src="{{ site.github.url }}/images/mars_rover.jpg">

By Victor Farcic: [technologyconversations.com/2014/10/17/java-tutorial-through-katas-mars-rover/](https://technologyconversations.com/2014/10/17/java-tutorial-through-katas-mars-rover/) 

[Handouts](https://goo.gl/sdktbj)

## Your Task
You’re part of the team that explores Mars by sending remotely controlled vehicles to the surface of the planet. Develop an API that translates the commands sent from earth to instructions that are understood by the rover.

## Requirements
You are given the initial starting point (x,y) of a rover and the direction (N,S,E,W) it is facing.
The rover receives a character array of commands.
Implement commands that move the rover forward/backward (f,b).
Implement commands that turn the rover left/right (l,r).
Implement wrapping from one edge of the grid to another. (planets are spheres after all)
Implement obstacle detection before each move to a new square. If a given sequence of commands encounters an obstacle, the rover moves up to the last possible point, aborts the sequence and reports the obstacle.

## Rules
* Hardcore TDD. No Excuses!
* Change roles (driver, navigator) after each TDD cycle.
* No red phases while refactoring.
* Be careful about edge cases and exceptions. We can not afford to lose a mars rover, just because the developers overlooked a null pointer.

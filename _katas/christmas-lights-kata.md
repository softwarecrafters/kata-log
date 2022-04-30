---
layout: post
title: "Christmas Lights Kata"
categories: [TDD, Software-Design, SOLID Principles, Starter, Outside-In]
image: default.jpg
---

{% include credits.md name='Advent of Code' url='http://adventofcode.com/2015/day/6' %}

## Probably a Fire Hazard
Because your neighbors keep defeating you in the holiday house
decorating contest year after year, you've decided to deploy one million
lights in a 1000x1000 grid. Furthermore, because you've been especially
nice this year, Santa has mailed you instructions on how to display the
ideal lighting configuration.Lights in your grid are numbered from 0 to
999 in each direction; the lights at each corner are at 0,0, 0,999,
999,999, and 999,0. The instructions include whether to turn on, turn
off, or toggle various inclusive ranges given as coordinate pairs. Each
coordinate pair represents opposite corners of a rectangle, inclusive; a
coordinate pair like 0,0 through 2,2 therefore refers to 9 lights in a
3x3 square. The lights all start turned off. To defeat your neighbors
this year, all you have to do is set up your lights by doing the
instructions Santa sent you in order.

### Examples
* turn on 0,0 through 999,999 would turn on (or leave on) every light.
* toggle 0,0 through 999,0 would toggle the first line of 1000 lights,
  turning off the ones that were on, and turning on the ones that were
  off.
* turn off 499,499 through 500,500 would turn off (or leave off) the
  middle four lights.

### Instructions
* turn on 887,9 through 959,629
* turn on 454,398 through 844,448
* turn off 539,243 through 559,965
* turn off 370,819 through 676,868
* turn off 145,40 through 370,997
* turn off 301,3 through 808,453
* turn on 351,678 through 951,908
* toggle 720,196 through 897,994
* toggle 831,394 through 904,860

**After following the instructions, how many lights are lit?**


## Part Two
You just finish implementing your winning light pattern when you realize
you mistranslated Santa's message from Ancient Nordic Elvish. The light
grid you bought actually has individual brightness controls; each light
can have a brightness of zero or more. The lights all start at zero.
* The phrase turn on actually means that you should increase the
  brightness of those lights by 1.
* The phrase turn off actually means that you should decrease the
  brightness of those lights by 1, to a minimum of zero.
* The phrase toggle actually means that you should increase the
  brightness of those lights by 2.

**What is the total brightness of all lights combined after following
Santa's instructions?**

For example:
* turn on 0,0 through 0,0 would increase the total brightness by 1.
* toggle 0,0 through 999,999 would increase the total brightness by
  2000000.


## Image credits
Image by [Rachel M. Carmena](https://github.com/rachelcarmena) for **Kata-Log**. It represents a greeting of respect and gratitude made at the beginning and at the end of a kata.

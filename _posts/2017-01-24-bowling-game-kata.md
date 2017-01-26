---
layout: post
title:  "Bowling Game Kata"
categories: [Single Responsibility, TDD, Starter]
image: bowling_game.jpg
---

By Uncle Bob: [butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata)

Handouts: [https://goo.gl/NMDBwg](https://goo.gl/NMDBwg)

{% include starting_points.md %}

## Bowling Rules
The game consists of 10 frames as shown to the right. In each frame the player has two opportunities to knock down 10 pins. The score for the frame is the total number of pins knocked down, plus bonuses for strikes and spares.

A spare is when the player knocks down all 10 pins in two tries. The bonus for that frame is the number of pins knocked down by the next roll. So in frame 3 above, the score is 10 (the total number knocked down) plus a bonus of 5 (the number of pins knocked down on the next roll).

A strike is when the player knocks down all 10 pins on his first try. The bonus for that frame is the value of the next two balls rolled.

In the tenth frame a player who rolls a spare or strike is allowed to roll the extra balls to complete the frame. However no more than three balls can be rolled in tenth frame.

## Requirements
Write a class named “Game” that has two methods:
1.  `void roll(int)` is called each time the player rolls a ball.  The argument is the number of pins knocked down.
2.  `int score()` returns the total score for that game.

## Follow up
Read this article “Engineer Notebook: An Extreme Programming Episode” by Robert C. Martin, where he describes solving this kata together with Robert S. Koss. Follow along in your editor. Does he do the kata the same way as you would?
[butunclebob.com/files/downloads/Bowling%20Game%20Kata.ppt](http://butunclebob.com/files/downloads/Bowling%20Game%20Kata.ppt)

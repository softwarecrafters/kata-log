---
layout: post
title:  "The Lift Kata"
categories: [TDD, Software-Design, Mocks, Starter]
level: Starter
image: lift.jpg
---
 
{% include credits.md name='Matt Florence' url='https://gist.github.com/mattflo/4669508' %}

## The Lift Kata

Since lifts are everywhere and they contain software, how easy would it be to write a basic one?
Let's TDD a lift, starting with simple behaviors and working toward complex ones. 
Assume good input from calling code and concentrate on the main flow.

Here are some suggested lift features: 
* a lift responds to calls containing a source floor and direction
* a lift has an attribute floor, which describes it's current location
* a lift delivers passengers to requested floors
* you may implement current floor monitor
* you may implement direction arrows
* you may implement doors (opening and closing)
* you may implement DING!
* there can be more than one lift

{% include starting_points.md %}

## Advanced Requirements
* a lift does not respond immediately. consider options to simulate time, possibly a tick method.
* lift calls are queued, and executed only as the lift passes a floor

## Objects Only
Can you write a lift that does not need to be queried? Try writing a lift that only sends messages to other objects.

### Image Credits
Image by Cat Robinson. It shows an opening or closing lift door.

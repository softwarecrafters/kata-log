---
layout: post
title:  "No Primitives"
categories: [Constraint, Software-Design, Experienced]
image: no_primitives.jpg
---

{% include credits.md name='Code Cop Peter Kofler' url='http://blog.code-cop.org/2014/11/tddaiymi-vs-naked-primitives.html' %}

Also called "no naked primitives". All primitive values,
e.g. booleans, numbers or strings need to be wrapped and must not be
visible at object boundaries. Arrays, all kinds of containers like lists
or hash-tables and even Object (the root class of the language's class
hierarchy) are considered primitive as well. Similar to Keith's TDDaiymi
this rule is designed to exercise our object orientation skills. A
string representing a name is an under-engineered design because many
strings are no valid names. In an object oriented system we would like
to represent the concept of a name with a `Name` class. Usually Value
Objects are used for this purpose. Also a list of shopping items is not
a shopping basket. A general purposes list implementation offers
operations that do not make sense for a shopping basket. So [containers
need to be encapsulated](http://wiki.c2.com/?PrimitiveObsession). While
it is exaggerated to wrap all primitives
(see [Primitive obsession obsession](http://blog.thecodewhisperer.com/permalink/primitive-obsession-obsession/))
, I have seen too many cases of
[Primitive Obsessions](http://wiki.c2.com/?PrimitiveObsession) that I
rather see a few additional
[value objects](https://sourcemaking.com/refactoring/encapsulate-collection)
than another map holding maps holding strings. (To avoid that I created
a custom PMD rule PrimitiveObsession that flags all primitives in public
signatures of Java classes.)
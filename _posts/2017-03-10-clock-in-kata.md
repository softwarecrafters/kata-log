---
layout: post
title:  "Clock-in Kata"
categories: [TDD, Asynchronous, Promises]
image: clock_in_kata_cases.png
---

{% include credits.md name='Crewmeister' url='https://crewmeister.com/' %}

# Clock-in kata

Practice writing (tests with) Promises.
OR Practice writing asynchronous tests, without making them slow.
In this case there are two async operations combined in different ways
those operations are the XHR and the GPS retrieval. Each of them
takes a while. In JavaScript asynchronous
programming can be done via callbacks, Promises or various async libraries.
In other languages this might be handled in a different way.

The challenge here is to make the asynchronous code readable and
to handle all edge cases properly, which might get tricky ones async calls
get parallelized and return errors.

# What is the task?

A time tracking tool, that optionally also accepts GPS positions.
Implement the collecting of all GPS data (using promises) and sending to the server using some 
asynchronous method, like XHR or fetch (using promises too).
Implement a `clockIn()` function that returns a promise and works as the diagrams below show.

Or in other words: the "boss" can determine
1. if only times shall be tracked, without any GPS position recoding (one async action, the XHR) or
2. GPS can be optionally added to the XHR data to be sent, getting GPS is async too,
3. require GPS data to be sent with the XHR

# Where to start?

- start with case 1), the simplest
- mock/stub the actual XHR and build all cases incl. error cases that might happen when sending an XHR
- mock/stub the GPS-data retreival, implement case 2), watch out there are multiple execution paths
- case 3) incl. retrying should be a piece of cake now
- prevent that any test times out, ensure that all Promise-paths are tested

# Next steps

If you want to get more challenging you can go the next steps like this:
- search for a library that makes testing with Promises easier
- use one or many library to find out which one suites best your needs
- mock that getting retreiving GPS data takes very long, trigger a time out
  and report it to the user
- write tests that verify the timing of the things happening, e.g.
  that the clock-in call NEVER starts before the gps-retreival had
  finished

For some code feel free to have a look at the [original repo][repo].

[repo]: https://github.com/wolframkriesing/clock-in-kata

# Promise test libraries

- [mocha] brings built in promise support
- [chai-as-promised] adds promise support to [chai]
- [hamjest] is an assertion library that can be used with any testing framework/lib, and has nice [promise support][hamjest-promise-support]
- [tap] has [promise support][tap-promises] too
- [ava] has [promise support][ava-promise] too

[ava]: https://github.com/sindresorhus/ava
[ava-promise]: https://github.com/sindresorhus/ava#promise-support
[tap]: http://www.node-tap.org/
[tap-promises]: http://www.node-tap.org/promises/
[chai]: http://chaijs.com/
[chai-as-promised]: https://github.com/domenic/chai-as-promised
[mocha]: http://mochajs.org/
[hamjest]: https://github.com/rluba/hamjest
[hamjest-promise-support]: https://github.com/rluba/hamjest/wiki/Matcher-documentation#promise-matchers

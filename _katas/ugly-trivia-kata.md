---
layout: post
title:  "Ugly Trivia Game Kata"
categories: [Refactoring, Golden Master, Experienced, Mocks, Pair-Programming, SOLID Principles, Software-Design]
image: default.jpg
---

{% include credits.md name='J. B. Rainsberger' url='https://github.com/jbrains/trivia' %}

You can practice different things using this code base. For example...


## Golden Master

We can't write reasonable unit tests without refactorings first. But we
don't want to refactor without tests at all.

But we can test the application as a whole. Gain control over all
external input sources (RNGs, system time, keyboard input and so on).
Then save all outputs produced (console output, emails sent, files
changed etc). This is our Golden Master.

Now we can change the code and compare if it still yields the same
results as before.

## Free Fall

This is another thing to try out. And probably it's a good idea to not
learn this in production. Just use your IDE refactorings. Do not waste
time to understand the code. Trust your IDE and use features like
`extract method` or `invert if statement`. You will be surprised about
the results.


{%
    include get_the_code.md 
    url='https://github.com/jbrains/trivia' 
    languages='C#, C++, C, COBOL, PowerShell, CoffeeScript, D, F#, Go,
    Groovy, Java, JavaScript, Lua, Objective C, Perl, PHP, Python,
    Ruby, Rust, Scala, ShellScript, Smalltalk, Swift, VB6'
%}

## Image credits
Image by [Rachel M. Carmena](https://github.com/rachelcarmena) for **Kata-Log**. It represents a greeting of respect and gratitude made at the beginning and at the end of a kata. Please, feel free to use this image in case you want to contribute with a kata, but you don't have another image. It's not necessary to include this credit again.

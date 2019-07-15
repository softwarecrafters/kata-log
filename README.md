# Kata-Log

Resources to facilitate coding katas

Go to [http://kata-log.rocks/](http://kata-log.rocks/) to see it in all its glory...

## How to collaborate with a new kata

1. Fork this repository
2. Clone the new repository in your local environment
3. Create a branch
4. Add a new file:
```
_katas/name-of-the-kata.md
```
with this content (see details later):
```
---
layout: post
title:  "The name of the kata"
categories: [ List of categories separated by commas ]
image: default.jpg
---

{% include credits.md name='Author name' url='Original kata URL' %}

## Name of the kata

General explanation.

(*) Starting point
```
5. Create a pull request

### Name of the kata

Replace `The name of the kata`. 

For example:

```
---
...
title: "Gilded Rose Kata"
...
---

```

### Categories

Replace `List of categories separated by commas` by one **level** and one or more **topics**:

* Level. Choose `Starter` or `Experienced`.
* Topics. Choose as many as required from this list: `SOLID Principles`, `Mocks`, `TDD`, `Software-Design`, `Golden Master`, `SOLID Principles`, `Outside-In`, `Agile`, `Pair-Programming`, `Mocks`, `BDD`, `Refactoring`.

For example:

```
---
...
categories: [Starter, Refactoring, Golden Master, SOLID Principles, Software-Design]
...
---
```

### Image

If you have an available image to represent this kata, add it into `images` directories and replace `default.jpg` by the new filename in the header:

```
---
...
image: default.jpg
---
```

### Credits

Give credit to the author of the kata when adding:

```
{% include credits.md name='Author name' url='Original kata URL' %}
```

For example:

```
{% include credits.md name='Emily Bache' url='https://github.com/emilybache/GildedRose-Refactoring-Kata' %}
```

Then, a Credits section will appear in the page.

### The starting point

#### Initial source code is required to do the kata

If there is initial source code for the kata (for example, a refactoring kata) add this content at the end of the file (instead of `(*) Starting point`) to indicate the location (URL) and languages:

```
{%
    include get_the_code.md
    url='Source code repository URL'
    languages='List of languages separated by commas'
%}
```

For example:

```
{%
    include get_the_code.md
    url='https://github.com/emilybache/GildedRose-Refactoring-Kata'
    languages='ABAP, C, C++, C#, Dart, Elixir, F#, Go, Groovy, Haskell,
    Java, JavaScript, Kotlin, Perl, PHP, PLSQL, Python, Ruby, Rust, R,
    Scala, Smalltalk, Swift'
%}
```

#### Initial source code is not required to do the kata

In case there is no initial source code for the kata, add this line at the end of the file (instead of `(*) Starting point`) to add repository links with bootstraps in different programming languages:

```
{% include starting_points.md %}
```


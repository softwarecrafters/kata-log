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

### Categories

Regarding categories:

* Level: `Starter` or `Experienced`
Check the list of available levels via `grep -r category_name _levels/ | cut -d: -f3`
* Topics: `SOLID Principles`, `Mocks`, ... 
Check the list of available topics via `grep -r category_name _topics/ | cut -d: -f3`

### Image

If you have an available image to represent this kata, add it into `images` directories and replace `default.jpg` by the new filename in the header:

```
---
...
image: 
---
```

### The starting point

If there is initial source code for the kata (for example, a refactoring kata) add this line at the end of the file (instead of `(*) Starting point`) to indicate the location:

```
{%
    include get_the_code.md
    url='Source code repository URL'
    languages='List of languages separated by commas'
%}
```

In case there is no initial source code for the kata, add this line at the end of the file (instead of `(*) Starting point`) to add repository links with bootstraps in different programming languages:

```
{% include starting_points.md %}
```


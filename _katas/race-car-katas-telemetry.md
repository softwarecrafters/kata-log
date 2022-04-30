---
layout: post
title:  "Race Car Katas - Telemetry"
categories: [SOLID Principles, Refactoring, Starter, Mocks]
image: default.jpg
---

{% include credits.md name='Emily Bache' url='https://github.com/emilybache' %}

{% include race_car_situation.md %}


## Your Task

Write the unit tests for the `TelemetryDiagnosticControls` class. The
responsibility of the `TelemetryDiagnosticControls` class is to
establish a connection to the telemetry server (through the
`TelemetryClient`), send a diagnostic request and successfully receive
the response that contains the diagnostic info. The `TelemetryClient`
class provided for the exercise fakes the behavior of the real
`TelemetryClient` class, and can respond with either the diagnostic
information or a random sequence. The real `TelemetryClient` class would
connect and communicate with the telemetry server via tcp/ip.

{%
    include get_the_code.md 
    url='https://github.com/emilybache/Racing-Car-Katas' 
    languages='C, C#, C++, Go, Kotlin, Java, JavaScript, PHP, Python, Ruby, Scala, Swift, TypeScript'
%}


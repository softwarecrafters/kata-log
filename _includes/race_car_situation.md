## The Situation

You just started your new job as a developer at the Ferrari Formula1
team. But you're not really convinced by the legacy code-base. Now you
want to write unit tests for them, and that is harder than it needs to
be. The code snippet fails to follow one or more of the SOLID principles.

For this exercise, you should identify which SOLID principles are
violated. There is only one class you are interested in writing tests
for right now. As a first step, try to get some kind of test in place
before you change the class at all. If the tests are hard
to write, is that because of the problems with SOLID principles?

When you have some kind of test to lean on, refactor the code and make
it testable. Take care when refactoring not to alter the functionality,
or change interfaces which other client code may rely on. (Imagine there
is client code in another repository that you can't see right now). Add
more tests to cover the functionality of the particular class you've
been asked to get under test.

Apply the unit testing style and framework you are most comfortable
with. You can choose to use stubs or mocks or none at all. If you do,
you are free to use the mocking tool that you prefer.

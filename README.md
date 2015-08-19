Habular
=======

[![Build Status](https://travis-ci.org/biril/habular.png)](https://travis-ci.org/biril/habular)

Although naturally viewed as a tree, a hash is often structured in a way that a tabular view is
both applicable and better suited to inspection. Habular defines and implements a conversion of
hash to equivalent data structure which may be easily rendered as a table (similar to the
[`console.table` API](https://developer.chrome.com/devtools/docs/tips-and-tricks#console-table)
found in Chrome's devtools).

As an example, the hash

```javascript
[
  0,
  null,
  ["zero" ,1],
  {
    name: "Alice",
    age: 19,
    extra: null
  }, {
    name: "Bob",
    age: 23,
    extra: {},
    superpower: "laziness"
  }, {
    name: "Charles",
    age: 27,
    extra: [],
    nickname: "Carlos"
  }
]
```

will be converted to a structure that may be visualized as


| primitive | index0 | index1 | name      | age | extra    | superpower | nickname |
| --------- | ------ | ------ | --------- | --- | -------- | ---------- | -------- |
| 0         |        |        |           |     |          |            |          |
| `null`    |        |        |           |     |          |            |          |
|           | "zero" | 1      |           |     |          |            |          |
|           |        |        | "Alice"   | 19  | `null`   |            |          |
|           |        |        | "Bob"     | 23  | `object` | "laziness" |          |
|           |        |        | "Charles" | 27  | `array`  |            | "Carlos" |


This is a very early revision and further documentation is forthcoming.


License
-------

Licensed under the MIT License (LICENSE.txt).

Copyright (c) 2014-2015 Alex Lambiris

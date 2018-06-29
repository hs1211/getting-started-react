REACT STUDY
===========
개발 속도가 너무 늦어지고 있어서 간단한 기능 및 신규 기능 개발 시에 프론트와 함께 개발에 참여하기 위하여 
이전에 학습한 내용을 다시한번 정리한다.


Chapter.1 Getting Start
=======================


Javascript 2015 or ECMAScript 6 or ES6
--------------------------------------
1) Class

- How to define

.. code-block:: Javascript

  class Point {

    constructor(x,y) {
      this.x = x;
      this.y = y;
    }

    toString() {
      return `(${this.x}, ${this.y})`;
    }
  }

- How to use

.. code-block:: Javascript

  const pt = new Point(1,2)
  pt.toString()

2) Module
- Export

.. code-block:: Javascript

  function generateRandom() {
    return Math.random();
  }

  function sum(a, b) {
    return a+b;
  }

  export { generateRandom, sum }

- Import

.. code-block:: Javascript

  import { generateRandom, sum } from 'utility';
  generateRandom();
  sum(1,2);

- Default Export

.. code-block:: Javascript

  var utils = {
    generateRandom: function() {
      return Math.random();
    }

    sum: function(a, b) {
      return a+b;
    }
  }

  export default utils;

- Default Import

.. code-block:: Javascript

  import utils from 'utility';
  utils.generateRandom();
  utils.sum(1,2);

3) Template string

- How to use

.. code-block:: Javascript

  // Generate string
  var greeting = `Yo World!`;

  // Replace string
  var name = 'Jay';
  console.log(`Yo, ${name}`);

4) Destructing

.. code-block:: Javascript

  var robotA = {
    name: 'Jay'
  };

  var { name: nameA } = robotA;

  function g({name:x}) {
    console.log(`Hello ${x}`);
  }



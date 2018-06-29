REACT STUDY
===========
.. image:: http://image.yes24.com/momo/TopCate813/MidCate007/81264096.jpg

리액트 공부를 이전에 진행했는데, 사용하지 않으니 매번 다시 진행하는 기분이다. 
그래서 필요한 내용만 추려서 나만의 참고 서적을 만들어보자는 생각으로 정리한다.

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



First React App
===============
리액트 프로젝트를 처음 만들때 어떻게 하면될까?
우선 개발 순서를 정의해 보자.
- 1. 프로젝트 구조 정의
- 2. 의존성 해결
- 3. 실행


프로젝트 구조 정의
-------------------
아래 구조는 프로젝트 구조를 간략하게 표현한 부분이다. 
현재는 package.json, source, index.html 그리고 webpack.config.js파일만 주읭해서 보면 된다. 

.. code-block:: text

  ├── README.rst
  ├── package.json
  ├── source
  │   └── App.js
  ├── index.html
  └── webpack.config.js


의존성 해결
--------------
yarn을 통하여 의존성을 해결하였다. 

.. code-block:: text

  // yarn initialize
  $ yarn init

  // yarn add
  $ yarn add <module>

  // yarn remove
  $ yarn remove <module>

패키지
----------------------

Webpack을 통하여 1차 변환작업을 거치고, 이후에 번들로 생성해 주었다.

(주의점)loader의 이름이 이전에는 "babel"이라고 적어주어도 되었지만, 현재 버전("webpack": "^4.14.0")에서는 "babel-loader"로 명시해줘야 한다.
(주의점)transpile을 위한 "query: {presets: ['es2015', 'react'] }"부분을 추가해주어야 제대로 트랜스파일이 진행된다.

.. code-block:: text

  module: {
    rules:[{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      query: {presets: ['es2015', 'react'] }
    }]
  }

실행
--------------
실행은 다음의 명령어로 실행했다.

.. code-block:: text

  //run script
  $ yarn run start


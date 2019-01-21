# NumsToEnglish Todo App

Simple React ToDo App implementing the Toy Problem, NumsToEnglish.
Implemented **without** `create-react-app`

- [1.2. Usage](#13-usage)
- [1.3. Code Style](#13-code-style)
- [1.4. Development Setup](#14-development-setup)

## 1.2. Usage


This app converts any number up to a quintillion into English.  On `Submit`, that conversion is then added to the list

**Main Widget**

![upload](https://giant.gfycat.com/DecisiveScarceBull.gif)

## 1.3. Code Style


[![Style Guide: Hack Reactor](https://img.shields.io/badge/Style%20Guide-Hack%20Reactor-blue.svg)](https://github.com/hackreactor-labs/eslint-config-hackreactor)

## 1.4. Development Setup


This service uses the following dev stack and tech:
  - Server: [Express](http://expressjs.com/)
  - Deployment: [Elastic Beanstalk on AWS](https://aws.amazon.com/elasticbeanstalk/)
  - Client:[React](http://reactjs.org/) & [Webpack](https://webpack.js.org)

```sh
# install npm dependencies
$> cd /path/to/num2eng
$> npm install
```

To execute:

```sh
$ npm run server-dev
$ npm run react-dev
```
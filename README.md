
# <img src='https://i.imgur.com/Z74bS7R.png' height='60' alt='SWAG Logo' aria-label='redux.js.org' />

##### SWAG is a straightforward ***React*** state manager wich sounds familiar for those who likes ***View-Model*** pattern.

[![build status](https://img.shields.io/travis/guisouza/react-swag/master.svg?color=%23ee1958&logoColor=%23ee1958)](https://travis-ci.org/guisouza/react-swag/)
[![code coverage](https://img.shields.io/codecov/c/github/guisouza/react-swag?color=%23ee1958)](https://codecov.io/gh/guisouza/react-swag)
[![npm version](https://img.shields.io/npm/v/react-swag.svg?color=%23ee1958&logoColor=%23ee1958)](https://www.npmjs.com/package/react-swag)
[![npm downloads](https://img.shields.io/npm/dm/react-swag.svg?color=%23ee1958&logoColor=%23ee1958)](https://www.npmjs.com/package/react-swag)
[![Maintainability](https://img.shields.io/codeclimate/maintainability/guisouza/react-swag?color=%23ee1958&logoColor=%23ee1958)](https://codeclimate.com/github/guisouza/react-swag)
[![Size](https://img.shields.io/bundlephobia/minzip/react-swag?color=%23ee1958&label=gzip%20size)]()
[![MIT](https://img.shields.io/github/license/guisouza/react-swag?color=ee1958)]()


## Install
```
npm install --save react-swag
```

```
yarn add react-swag
```


## Basic Setup 

###### You will need two things, **connect** and **createStore**

##### ★ ***connect***(ReactComponent, Store)
##### ★ ***createStore***(Object or Class)

You get than like this :

```javascript
import { createStore, connect } from 'react-swag';
```

Now you would like to create your store, with your data and methods as object properties.
```javascript

const store = {
    counter: 1,
    add(){
        this.counter++;
    }
}
// you could also do this :
class Store = {
    constructor(){
        this.counter = 1
    }
    add(){
        this.counter++
    }
}
```

Now you create your presentation layer as a React Component accessing your store methods through `actions` prop and your props through `store`


```javascript
const Component = ({store,actions}) => (
    <div onClick={actions.add}>{store.counter}</div>
)
```
now connect your component to the store ; 

```javascript
const ConnectedComponent = connect(Component, store);
```
BOOM ! its  working.

![Demo](http://g.recordit.co/gVkCandDWV.gif)

[LIVE DEMO ](https://travis-ci.org/guisouza/react-swag/)

### Things you need to know about SWAG
#### 💎You can easily deal with async operations using **ing** helper

#### 💎Your changes to the store will always sync to the UI.

#### 💎You can connect to portions of your store.

#### 💎I am still thinking the whole nomenclature

#### 💎I`d love to hear yout opinion

## License

[MIT](LICENSE.md)
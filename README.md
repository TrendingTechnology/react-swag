
# <img src='https://i.imgur.com/Z74bS7R.png' height='60' alt='SWAG Logo' aria-label='redux.js.org' />

SWAG is a straightforward ***React*** state manager wich sounds familiar for those who likes ***View-Model*** pattern.

> **Note**: SWAG violates unidirecional data-flow premises.
**This repo is still a place just for the ones that dont give a fuck abou it**. Thanks!

## How it works : 
```javascript
import { prepare, connect } from 'react-swag';

//You can define your view-model as a plain javascript object
const store = {
    counter: 1,
    increment(){
        this.counter++;
    }
}

//Define the component you will connect to your store, access properties from store and methods from actions
const Component = ({store, actions}) => (
    <div onClick={actions.increment}>
        {store.counter}
    </div>)

//connect your store and component
const ConnectedComponent = connect(Component, store);
```

## Reusing the Store

***store.js***
```javascript
import {prepare} from 'react-swag';

export default prepare({
    counter: 1,
    increment(){
        this.counter++;
    }
})
```

***component1.js***
```javascript
import {connect} from 'react-swag';
import store from 'store.js';

const Component1 = ({store}) => (<p>{store.counter}</p>)

export default connect(Component1)
```

***component2.js***
```javascript
import {connect} from 'react-swag';
import store from 'store.js';

const Component2 = ({actions}) =><input type="buton" onClick={actions.increment} />

export default connect(Component2)
```

## Store as Class Instance

***store.js***
```javascript
import {prepare} from 'react-swag';

class Counter{
    constructor(initialValue){
        this.counter = initialValue
    }
    increment(){
        this.counter++;
    }
}

export default prepare(new Counter(1));
```

## Store as Class

***store.js***
```javascript
import {prepare} from 'react-swag';

class Counter{
    constructor(initialValue){
        this.counter = initialValue
    }
    increment(){
        this.counter++;
    }
}

export default prepare(Counter);
```

## Dealing with async code execution

```javascript
import { prepare, connect } from 'react-swag';

const store = {
    counter: 1,
    increment(){
        this.counter++;
    }
}

const Component = ({store, actions, ing}) => (
    <div onClick={actions.increment}>
        {ing(actions.increment) ? 'LOADING...' : store.counter}
    </div>)

const ConnectedComponent = connect(Component, store);
```

# Documentation

## Component API

The Component API is injected into your store connected component as props.

```javascript
import { connect }  from 'react-swag';
const Component = props => {
    const { didMount,unmount,set,ing } = props;
    return <p>hello world!</p>
}

export default connect(Component,store)

```

##### ing(method[,params])
    ing is a uttility function which receives a method that returns a promise, and return true, if this method was called and hasnt returned yet



##### set(prop[,value])

##### didMount(fn)

##### unmount(fn)

## Store Definition


## License

[MIT](LICENSE.md)
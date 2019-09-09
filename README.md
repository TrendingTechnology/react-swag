
# <img src='https://i.imgur.com/Z74bS7R.png' height='60' alt='SWAG Logo' aria-label='redux.js.org' />

SWAG is a straightforward ***React*** state manager wich sounds familiar for those who likes ***View-Model*** pattern.

> **Note**: SWAG violates unidirecional data-flow premises.
**This repo is still a place just for the ones that dont give a fuck abou it**. Thanks!

## How it works : 
```javascript
import { prepare, connect } from 'react-swag';

//You can define your view-model as a plain javascript object
const store = prepare({
    counter: 1,
    increment(){
        this.counter++;
    }
})

//Define the component you will connect to your store, access properties from store and methods from actions
const Component = ({store, actions}) => (
    <div onClick={actions.increment}>
        {store.counter}
    </div>)

//connect your store and component
const ConnectedComponent = connect(Component, store);
```

## Reusing the Store

store.js
```javascript
import {prepare} from 'react-swag';

export default prepare({
    counter: 1,
    increment(){
        this.counter++;
    }
})
```

component1.js
```javascript
import {connect} from 'react-swag';
import store from 'store.js';

const Component1 = ({store}) => (<p>{store.counter}</p>)

export default connect()
```

component2.js
```javascript
import {connect} from 'react-swag';
import store from 'store.js';

const Component1 = ({actions}) =><input type="buton" onClick={actions.increment} />

export default connect()
```

## Store as Class Instance

store.js
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

store.js
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






## License

[MIT](LICENSE.md)

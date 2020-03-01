import Component from '@glimmer/component';
import {
  Action
} from '../../../node_modules/rxjs/internal/scheduler/Action';

export default class JsEs6Component extends Component {
  @action
  destructing() {
    // String
    const [a, b, c, d, e] = 'hello'; // a = 'h'
    let { length: len } = 'hello'; // len=5

    // Array
    let [a, b] = [1, 2] // a=1, b=2
    let [, b] = [1, 2] // just assign b
    let [a, [b]] = [1, [2]]; // b = 2
    
    // Object
    let name = 'Jianping'
    let age = 30
    let person = { name, age } // {name: 'Jianping', age: 30}
    let { name: myName } = person; // myName = 'Jianping'
    let { name, status = 'active' } = person; // set default value
    let { person: { name, age }, status } = {
      person: { name: 'Jianping', age: 30 },
      status: 'active'
    } // name = Jianping
  }

  // iterators + for...in / for..of
  @action
  loop() {
    const obj = { a:1, b:2, c:3 };
    for (const prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        console.log(`obj.${prop} = ${obj[prop]}`);
      } 
    }

    for (var [key, value] of obj) {
        console.log(key + "'s value is : " + value);
    }
    for (var key of Object.keys(obj)) {
    console.log(key + ": " + obj[key]);
    }
  }
}

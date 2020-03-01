import Component from '@glimmer/component';
import {
  action
} from '@ember/object';
import {
  minOfArray
} from '../../utils/common';

/**
 * ref url : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function
 */
export default class JsFunction extends Component {

  // The apply() method calls a function with a given this value, and arguments provided as an array
  @action
  apply() {
    // Using apply to append an array to another
    const array = ['a', 'b'];
    const elements = [0, 1, 2];
    array.push.apply(array, elements);
    console.log(array); // ["a", "b", 0, 1, 2]

    // Using apply and built-in functions
    const numbers = [5, 6, 2, 3, 7];
    const max = Math.max.apply(null, numbers);
    console.log(max); // 7

    // Using apply to chain constructors
    Function.prototype.construct = function (aArgs) {
      let oNew = {};
      oNew.__proto__ = this.prototype;
      this.apply(oNew, aArgs);
      return oNew;
    };

    function MyConstructor() {
      for (let nProp = 0; nProp < arguments.length; nProp++) {
        this['property' + nProp] = arguments[nProp];
      }
    }
    let myArray = [4, 'Hello world!', false];
    let myInstance = MyConstructor.construct(myArray);
    console.log(myInstance.property1); // 'Hello world!'
    console.log(myInstance instanceof MyConstructor); // 'true'
    console.log(myInstance.constructor); // 'MyConstructor'

    alert('func.apply(thisArg, [ argsArray])');
  }

  @action
  call() {
    // Using call to chain constructors for an object
    function Product(name, price) {
      this.name = name;
      this.price = price;
    }

    function Food(name, price) {
      Product.call(this, name, price);
      this.category = 'food';
    }
    console.log(new Food('cheese', 5).name); // cheese

    // Using call to invoke an anonymous function
    const animals = [{
        species: 'Lion',
        name: 'King'
      },
      {
        species: 'Whale',
        name: 'Fail'
      }
    ];
    for (let i = 0; i < animals.length; i++) {
      (function (i) {
        this.print = function () {
          console.log('#' + i + ' ' + this.species + ': ' + this.name);
        }
        this.print();
      }).call(animals[i], i);
    }

    // Using call to invoke a function and specifying the context for 'this'
    function greet() {
      const reply = [this.animal, 'typically sleep between', this.sleepDuration].join(' ');
      console.log(reply);
    }
    const obj = {
      animal: 'cats',
      sleepDuration: '12 and 16 hours'
    };
    greet.call(obj); // cats typically sleep between 12 and 16 hours

    alert('func.call([thisArg[, arg1, arg2, ...argN]])');
  }

  @action
  bind() {
    // Creating a bound function
    const module = {
      x: 42,
      getX: function () {
        return this.x;
      }
    }
    const unboundGetX = module.getX;
    const boundGetX = unboundGetX.bind(module);
    console.log(boundGetX()); // 42

    // With setTimeout()
    function LateBloomer() {
      this.petalCount = Math.floor(Math.random() * 12) + 1;
    }
    LateBloomer.prototype.bloom = function() {
      window.setTimeout(this.declare.bind(this), 1000);
    };
    LateBloomer.prototype.declare = function() {
      console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
    };
    const flower = new LateBloomer();
    flower.bloom(); 

    alert('let boundFunc = func.bind(thisArg[, arg1[, arg2[, ...argN]]])');
  }
}

// Module Pattern base on object literal
var myObject = {
  variable: variablevalue,
  functionKey: function() {
    // do something
  }
}

// Complex object module

var myModule = {
  myProperty: 'some value',

  myConfig: {
    useCaching: true,
    language: 'en'
  },

  myMethod: function() {
    console.log('This is crazy');
  },

  myMethod2: function() {
    console.log('Caching is: ' + (this.myConfig.useCaching) ? 'enable' : 'disable');
  },

  myMethod3: function(newConfig) {
    if (typeof newConfig === 'object') {
      this.myConfig = newConfig;
      console.log(this.myConfig.language);
    }
  }
};

//Usage

myModule.myMethod();
myModule.myMethod2();
myModule.myMethod3({
  language: 'fr',
  useCaching: false
});

//Ex

var testModule = (function() {
  var counter = 0;

  return {
    incrementCounter: function() {
      return counter++;
    },
    resetCounter: function() {
      console.log('Counter value prior to reset: ' + counter);
      counter = 0;
    }
  }
})();

testModule.incrementCounter();
testModule.resetCounter();

// Private and public with module

var myNamespace = (function() {
  var myPrivate = 0;
  var myPrivateMethod = function(someText) {
    console.log(someText);
  };

  return {
    myPublicVar: 'foo',

    myPublicFunction: function(bar) {
      myPrivate++;
      myPrivateMethod(bar);
    }
  }
})();

// More exam

var basketModule = (function() {
  var basket = [];

  function doSomethingPrivate() {
    // do something
  };

  function doSomethingElsePrivate() {
    // do something else
  };

  return {
    addItem: function(values) {
      basket.push(values);
    },
    getItemCount: function() {
      return basket.length;
    },
    doSomething: doSomethingPrivate(),
    getTotal: function() {
      var q = this.getItemCount(),
      p = 0;
      while (q--) {
        p += basket[q].price;
      }
      return p;
    }
  }
})();

// Usage

basketModule.addItem({
  item: 'bread',
  price: 0.5
});

basketModule.addItem({
  item: 'butter',
  price: 0.3
})

basketModule.getItemCount();
basketModule.getItemCount();

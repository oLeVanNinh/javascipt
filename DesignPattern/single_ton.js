// Simple singleton implement


var Singleton = function() {
  var privateVariable = 'private variable';

  function showPrivate() {
    console.log(privateVariable);
  }

  return {
    publicMethod: function() {
      showPrivate();
    },

    publicVariable: "everyone can seeing this"
  }
}


var Singleton = (function() {
  var instantiated;

  function init() {
    return {
      publicMethod: function() {
        console.log('Hello World');
      },
      publicProperty: 'test'
    };
  }

  return {
    getInstance: function() {
      if (!instantiated) {
        instantiated = init();
      }

      return instantiated;
    }
  }
})();

// Usage
Singleton.getInstance().publicMethod();


//

var SingletonTest = (function() {
  function Singleton(options) {
    var options = options || {};

    this.name = 'SingletonTester';
    this.pointX = options.pointX || 6;
    this.pointY = options.pointY || 4;
  }

  var instance;

  var _static = {
    name: 'Singleton Tester',
    getInstance: function(options) {
      if (instance === undefined) {
        instance = new Singleton(options);
      }

      return instance;
    }
  };
  return _static;
})();

// Usage

var SingletonTester = SingletonTest.getInstance({pointX: 1});
console.log(SingletonTester.pointX);

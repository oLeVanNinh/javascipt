var pubsub = {};

(function(q) {
  var topics = {},
      subUid = -1;
  q.publish = function(topic, args) {
    if (!topics[topic]) {
      return false;
    }

    var subscribers = topics[topic],
        len = subscribers ? subscribers.length : 0;

    while (len--) {
      subscribers[len].func(topic, args);
    }

    return this;
  }

  q.subscribe = function(topic, func) {
    if (!topics[topic]) {
      topics[topic] = [];
    }

    var token = (++subUid).toString();
    topics[topic].push({
      token: token,
      func: func
    });
    return token;
  };

  q.unsubscribe = function(token) {
    for (var m in topics) {
      if (topics[m]) {
        for (var i = 0, j = topics[m].length; i < j; i++) {
          if (topics[m][i].token === token) {
            topics[m].splice(i, 1);
            return token;
          }
        }
      }
    }
    return this;
  }
}(pubsub));


// Example Usage 1:


var testHanler = function(topic, data) {
  console.log(topic + ": " + data);
}

var testSubscription = pubsub.subscribe('Example1', testHanler);

pubsub.publish('Example1', 'Hello World');
pubsub.unsubscribe(testSubscription);
pubsub.publish('Example1', 'Hello again');


// Example 2: UI notification

var grid = {
  refreshData: function() {
    console.log('retrieved lastest data from data cache');
    console.log('update grid component');
  },

  updateCounter: function() {
    console.log('data last updated at: ' + getCurrentTime());
  }
}

var gridUpdate = function(topics, data) {
  grid.refreshData();
  grid.updateCounter();
}

var dataSubscription = pubsub.subscribe('dataUpdated', gridUpdate);

pubsub.publish('dataUpdated', 'new stocket data available!');
pubsub.publish('dataUpdated', 'new stocket data available!');

function getCurrentTime() {
  var date = new Date(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      y = date.getFullYear(),
      t = date.toLocaleTimeString().toLocaleLowerCase();
  return (m + '/' + d + '/' + y + ' ' + t);
}

// Example 3: Taking Notification:

var grid = {
  addEntry: function(data) {
    if (data !== 'undefined') {
      console.log(`Entry: ${data.title} Changenet / % ${data.changenet} / ${data.percentage} % added`);
    }
  },

  updateCounter: function(timestamp) {
    console.log('grid last updated at: ' + timestamp);
  }
}

var gridUpdate = function(topics, data) {
  grid.addEntry(data);
  grid.updateCounter(data.timestamp);
};

var gridSubscription = pubsub.subscribe('DataUpdated', gridUpdate);

pubsub.publish('DataUpdated', {
  title: "Microsoft shares",
  changenet: 4,
  percentage: 33,
  timestamp: '17:34:12'
});

// Example 4: Decoupling application

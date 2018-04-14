"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CloudService = function CloudService(name, price, description) {
  _classCallCheck(this, CloudService);

  this.name = name;
  this.price = price;
  this.description = description;
};

var ComputingService = new CloudService("Computing service", 1200, "Buy computing power");
var MachineLearning = new CloudService("Machine Learning", 100, "USe Machine learning to solve problems");
var WebHost = new CloudService("Web Host", 10);

function describeService(service) {
  console.log("Service name: " + service.name + "\n Price: " + service.price);

  if (service.description != null) {
    console.log("Service description: " + service.description);
  }
}

describeService(ComputingService);
describeService(WebHost);

function addService(tag, name, price, description) {
  tag = new CloudService(name, price, description);
  describeService(tag);
}

addService("test", "test", 20, "blabla"); //describeService(test)
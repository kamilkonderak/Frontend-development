let Services = [{
    type: "Compute",
    amount: 5,
    price: 200
  }, {
    type: "AI",
    amount: 1,
    price: 10
  }, {
    type: "CDN",
    amount: 10,
    price: 0.3
  }];
  let User = [{
    name: "kamil",
    surname: "Konderak",
    isOnline: true
  }, {
    name: "Test",
    surname: "Test",
    isOnline: false
  }];
  
  class BaseService {
    constructor(User) {
      this.staff = staff;
    }
    getUser() {
      return this.user
    }
  
    getOnlineUsers() {
      return this.user.filter(person => person.isOnline);
    }
  }
  
  class ServicesStore extends BaseService {
    constructor(user, Services) {
      super(user);
      this.Services = services;
    }
    showAvaiableServices() {
      return this.services;
    }
  
    addNewService(service = {
      type: "VM",
      amount: 1,
      price: 500
    }) {
      if (service.type && service.amount > 0) {
        service.push(service)
        console.log(`Added: ${service.amount} of ${service.type} for the price ${service.price}`);
      } else {
        console.log(`Cannot add service to the store: ${service}`);
      }
    }
  }
  
  
  var BaseService = new BaseService(staff);
  BaseService.getOnlineUsers().forEach(person => console.log(`${person.name} ${person.surname}`));
  
  var CloudStore = new ServicesStore(user, services);
  console.log(CloudStore.showAvaiableServices());
  CloudStore.getPresentStaff().forEach(person => console.log(`${person.name} ${person.surname}`));
  CloudStore.addNewService({
    type: "AI v2",
    amount: 25
  });

  CloudStore.addNewService("Red Hat VM");
  console.log(CloudStore.showAvaiableServices());

  
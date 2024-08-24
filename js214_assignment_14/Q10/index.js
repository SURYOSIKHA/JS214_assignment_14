// Car constructor function
function Car(make, model, year, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isAvailable = isAvailable;
  }
  
  // Customer constructor function
  function Customer(name, rentedCars = []) {
    this.name = name;
    this.rentedCars = rentedCars;
  }
  
  // Add rentCar method to Customer prototype
  Customer.prototype.rentCar = function(car) {
    if (car.isAvailable) {
      car.isAvailable = false;
      this.rentedCars.push(car);
      console.log(`${this.name} has rented a ${car.make} ${car.model}.`);
    } else {
      console.log(`The ${car.make} ${car.model} is already rented.`);
    }
  };
  
  // Add returnCar method to Customer prototype
  Customer.prototype.returnCar = function(car) {
    setTimeout(() => {
      car.isAvailable = true;
      this.rentedCars = this.rentedCars.filter(c => c !== car);
      console.log(`${this.name} has returned a ${car.make} ${car.model}.`);
    }, 2000); // Simulate a 2-second delay
  };
  
  // PremiumCustomer constructor function
  function PremiumCustomer(name, rentedCars = [], discountRate = 0.1) {
    Customer.call(this, name, rentedCars);
    this.discountRate = discountRate;
  }
  
  // Set up inheritance from Customer
  PremiumCustomer.prototype = Object.create(Customer.prototype);
  PremiumCustomer.prototype.constructor = PremiumCustomer;
  
  // Function to calculate rental prices
  function calculateRentalPrice(carType, days, customer) {
    const basePricePerDay = 50;
    const typeRates = {
      SUV: 20,
      Sedan: 10,
      Truck: 30
    };
  
    let rentalPrice = basePricePerDay * days + (typeRates[carType] || 0) * days;
  
    if (customer instanceof PremiumCustomer) {
      rentalPrice *= (1 - customer.discountRate);
    }
  
    return rentalPrice;
  }
  
  // Maintenance function
  function Maintenance(car, delay) {
    setTimeout(() => {
      car.isAvailable = true;
      console.log(`The ${car.make} ${car.model} has been maintained and is now available.`);
    }, delay);
  }
  
  // Demonstration
  const car1 = new Car('Toyota', 'Corolla', 2020);
  const car2 = new Car('Honda', 'Civic', 2019);
  const car3 = new Car('Ford', 'Escape', 2021, false); // Already rented
  
  const regularCustomer = new Customer('Alice');
  const premiumCustomer = new PremiumCustomer('Bob', [], 0.15);
  
  regularCustomer.rentCar(car1); // Alice rents Toyota Corolla
  regularCustomer.rentCar(car3); // Alice tries to rent Ford Escape (already rented)
  
  premiumCustomer.rentCar(car2); // Bob rents Honda Civic
  console.log(`Rental price for Bob's Honda Civic for 3 days: $${calculateRentalPrice('Sedan', 3, premiumCustomer)}`);
  
  regularCustomer.returnCar(car1); // Alice returns Toyota Corolla
  
  Maintenance(car1, 3000); // Simulate maintenance for Toyota Corolla with a 3-second delay
  
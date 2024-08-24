// Step 1: Define the Animal constructor function
function Animal() {
    this.type = "Animal";
  }
  
  // Step 2: Add a method to Animal.prototype
  Animal.prototype.sound = function() {
    console.log("animal sound");
  };
  
  // Step 3: Define the Dog constructor function
  function Dog() {
    Animal.call(this); // Call the Animal constructor
  }
  
  // Step 4: Set up inheritance from Animal
  Dog.prototype = Object.create(Animal.prototype); // Inherit from Animal.prototype
  Dog.prototype.constructor = Dog; // Set constructor property
  
  // Step 5: Override the sound method in Dog.prototype
  Dog.prototype.sound = function() {
    console.log("Bark");
  };
  
  // Step 6: Create an instance of Dog
  const mydog = new Dog();
  
  // Step 7: Call the sound method on mydog
  mydog.sound(); // This will log "Bark"
  
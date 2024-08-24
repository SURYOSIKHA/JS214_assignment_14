// Product constructor function
function Product(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }
  
  // Method to display product details
  Product.prototype.displayDetails = function() {
    console.log(`Name: ${this.name}, Price: $${this.price}, Quantity: ${this.quantity}`);
  };
  
  // Electronics constructor function
  function Electronics(name, price, quantity, brand, model) {
    // Call the Product constructor
    Product.call(this, name, price, quantity);
    this.brand = brand;
    this.model = model;
  }
  
  // Set up inheritance from Product
  Electronics.prototype = Object.create(Product.prototype);
  Electronics.prototype.constructor = Electronics;
  
  // Method to power on
  Electronics.prototype.powerOn = function() {
    console.log(`${this.brand} ${this.model} is now powered on.`);
  };
  
  // Method to power off
  Electronics.prototype.powerOff = function() {
    console.log(`${this.brand} ${this.model} is now powered off.`);
  };
  
  // Clothing constructor function
  function Clothing(name, price, quantity, size, material) {
    // Call the Product constructor
    Product.call(this, name, price, quantity);
    this.size = size;
    this.material = material;
  }
  
  // Set up inheritance from Product
  Clothing.prototype = Object.create(Product.prototype);
  Clothing.prototype.constructor = Clothing;
  
  // Method to display clothing details
  Clothing.prototype.displayClothingDetails = function() {
    console.log(`Size: ${this.size}, Material: ${this.material}`);
  };
  
  // Books constructor function
  function Books(name, price, quantity, author, genre) {
    // Call the Product constructor
    Product.call(this, name, price, quantity);
    this.author = author;
    this.genre = genre;
  }
  
  // Set up inheritance from Product
  Books.prototype = Object.create(Product.prototype);
  Books.prototype.constructor = Books;
  
  // Method to display book details
  Books.prototype.displayBookDetails = function() {
    console.log(`Author: ${this.author}, Genre: ${this.genre}`);
  };
  
  // Demonstration
  const laptop = new Electronics('Laptop', 999.99, 10, 'Dell', 'XPS 13');
  const tshirt = new Clothing('T-Shirt', 19.99, 50, 'M', 'Cotton');
  const book = new Books('JavaScript Basics', 29.99, 20, 'John Doe', 'Programming');
  
  // Display details and use methods
  laptop.displayDetails();
  laptop.powerOn();
  laptop.powerOff();
  
  tshirt.displayDetails();
  tshirt.displayClothingDetails();
  
  book.displayDetails();
  book.displayBookDetails();
  
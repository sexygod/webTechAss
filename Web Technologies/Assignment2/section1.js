//Question 1
function getMostValuable(customers) {
  var mostValuable = 0;
  var mostValuablePos;
  for (var key in customers) {
    if (customers[key].products.value > mostValuable) {
      mostValuable = customers[key].products.value;
      mostValuablePos = key;
    }
  }
  return mostValuablePos;
}

//Question 2
function addCustomer(customers) {
  var newCustomer = {
    name: "Henry",
    sex: "m",
    country: "tt",
    products: {
      name: "Peanut",
      category: "food",
      value: 165,
      date: "2019 - 03 - 12"
    }
  };
  var i = 0;
  for (var key in customers) {
    if (newCustomer.name < customers[key].name) {
      customers.splice(i, 0, newCustomer);
      break;
    }
    i++;
  }
  return customers;
}

//Question 3
function getBySex(customers, sex){
  var arr = [];
  if (sex === "male") sex = "m";
  else if (sex === "female") sex = "f";
  else{
    return "Invalid input";
  }

  for (var key in customers){
    if(customers[key].sex === sex)
        arr.push(customers[key]);
  }
  return arr;
}

//Question 4
function getCustomerWhoBought(customers, productToQuery){
  var arr = [];
  for (var key in customers){
    if(customers[key].products.name === productToQuery)
      arr.push(customers[key]);
  }
  return arr;
}

//Question 5
function convertDate(dates){

}

//Question 6
function convertProductDates(){
  
}

function test() {
  var customerA = {
    name: "John",
    sex: "m",
    country: "tt",
    products: {
      name: "Peanut",
      category: "food",
      value: 165,
      date: "2019 - 03 - 12"
    }
  };

  var customerB = {
    name: "Mary",
    sex: "f",
    country: "tt",
    products: {
      name: "Chips",
      category: "food",
      value: 152,
      date: "2019 - 03 - 12"
    }
  };

  var customerC = {
    name: "Kalista",
    sex: "f",
    country: "tt",
    products: {
      name: "Chicken",
      category: "food",
      value: 10000,
      date: "2019 - 03 - 12"
    }
  };

  var customers = [customerA, customerB, customerC ];
  return getCustomerWhoBought(customers, "Peanut");
}

console.log(test());
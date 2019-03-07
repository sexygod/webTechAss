from util import *

customerA = {
    "name": "Mary",
    "sex": "f",
    "country": "tt",
    "products": {
            "name": "Chips",
            "category": "food",
            "value": 111000000,
            "date": "2019-03-12"
    }
}
customerB = {
    "name": "Paladin Danse",
    "sex": "m",
    "country": "tt",
    "products": {
            "name": "Pizza",
            "category": "food",
            "value": 400,
            "date": "2029-03-12"
    }
}
customerC = {
    "name": "Kalista",
    "sex": "f",
    "country": "tt",
    "products": {
            "name": "Chicken",
            "category": "food",
            "value": 10000,
            "date": "2019-03-12"
    }
}
customerD = {
    "name": "David Blaine",
    "sex": "m",
    "country": "us",
    "products": {
            "name": "Chicken",
            "category": "food",
            "value": 10000,
            "date": "2019-05-12"
    }
}

customers = [customerC, customerB]
customers = addCustomer(customers, customerA)
customers = addCustomer(customers, customerD)

chicken = getCustomerWhoBought(customers, "Chicken")
dates = ["2019-03-12", "20-03-2012", "2011-03-15", "2020-04-20"]
print(convertProductDates(customers))
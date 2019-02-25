from section1 import *

customerA = {
    "name": "Mary",
    "sex": "f",
    "country": "tt",
    "products": {
            "name": "Chips",
            "category": "food",
            "value": 111000000,
            "date": "2019 - 03 - 12"
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
            "date": "2019 - 03 - 12"
    }
}

customers = [customerA, customerC]
print(getMostValuable(customers))

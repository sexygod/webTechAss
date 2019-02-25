# Question 1
def getMostValuable(customers):
       mostValuable = 0
       for key in customers:
              if(key["products"]["value"] > mostValuable):
                     mostValuable = key["products"]["value"]
                     mostValuablePos = key
       return mostValuablePos

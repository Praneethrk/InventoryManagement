import sys
import os
path = os.getcwd() + "/logic/inventory.txt"


fhand = open(path, "r")
records = fhand.read()
if len(records) > 0 :
    print(records)
else:
    print("None")


# for record in records:
#     print(record)
sys.stdout.flush()

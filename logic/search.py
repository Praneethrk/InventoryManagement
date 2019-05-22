import sys
import os
path = os.getcwd() + "/logic/inventory.txt"

inum = sys.argv[1]
print(inum)
found = False
fhand = open(path, "r")
records = fhand.read().split('$')
del records[-1]
for record in records:
    items = record.split('|')
    if items[0] == inum:
        print(record)
        found = True
        break
if not found:
    print("NULL")

sys.stdout.flush()

import sys
import os
path = os.getcwd() + "/logic/inventory.txt"

# try:

inum = sys.argv[1]
found = False
fhand = open(path, "r+")
records = fhand.read().split('$')
del records[-1]
for record in records:
    items = record.split('|')
    if items[0] == inum:
        records.remove(record)
        found = True
        break
if found:
    buf=""
    fhand.seek(0)
    fhand.truncate()
    for record in records:
        buf += record+"$"
    fhand.write(buf)
    fhand.close()
    print("Record deleted successfully")
else:
    print("record doesnt exist")

sys.stdout.flush()

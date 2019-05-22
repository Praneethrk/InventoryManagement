import sys
import os
path = os.getcwd() + "/logic/inventory.txt"

# try:
fhand = open(path, "a+")
inum = sys.argv[1]
name = sys.argv[2]
desc = sys.argv[3]
quant = sys.argv[4]

buf = inum +"|"+ name +"|"+ desc +"|"+ quant +"$"

fhand.write(buf)
fhand.close()
message = "record " +sys.argv[5]+ " successfully"
print(message)
sys.stdout.flush()
# except:
#     print("An error occured while adding record")

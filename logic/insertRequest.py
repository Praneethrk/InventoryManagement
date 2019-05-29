import sys
import os
path = os.getcwd() + "/logic/request.txt"

# try:
fhand = open(path, "a+")
inum = sys.argv[1]
quant = sys.argv[2]
buf = inum +"|" + quant +"$"

fhand.write(buf)
fhand.close()
message = "request placed successfully"
print(message)
sys.stdout.flush()
# except:
#     print("An error occured while adding record")

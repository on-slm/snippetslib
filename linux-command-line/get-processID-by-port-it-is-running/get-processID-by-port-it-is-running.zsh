# returns name of the process (its ID, user and other info) running on PORTNUMBER:
lsof -i tcp:[PORTNUMBER]
# eg., process and ID running on port 3000:
lsof -i tcp:3000

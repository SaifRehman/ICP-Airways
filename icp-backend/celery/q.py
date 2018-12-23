import pymqi

queue_manager = "admin"
channel = "DEV.ADMIN.SVRCONN"
host = "10.150.20.151"
port = "30375"
conn_info = "%s(%s)" % (host, port)

user = 'admin'
password = 'admin'

qmgr = pymqi.connect(queue_manager, channel, conn_info, user, password)
qmgr.disconnect()
#!/usr/bin/python
# -*- coding: utf-8 -*-

import sqlite3 as lite
import sys

con = None

try:
    con = lite.connect('/home/pi/db/test.db')
    
    cur = con.cursor()    
    #cur.execute('SELECT SQLITE_VERSION()')
    cur.execute('SELECT * FROM garage')
    data = cur.fetchone()
    print data
    #print "SQLite version: %s" % data                
    
except lite.Error, e:
    
    print "Error %s:" % e.args[0]
    sys.exit(1)
    
finally:
    
    if con:
        con.close()
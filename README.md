# Introduction

The WPS Adapter.

node will run on a ```node-schedule`` every 15 seconds, and update local store - then invoke remote api, track result of the call in the local store.


python code will also be created that will essentially
(a) connect to ms sql
(b) query table
(c) write data to sqlite tracking db
(d) post data to service
(e) update meta-data on sqlite
(f) close connections
(g) restart program

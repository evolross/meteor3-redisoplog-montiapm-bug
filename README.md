You'll need to install and have Redis running locally at `127.0.0.1` on port `6379`.  You can start redis using:
```
redis-server <path to meteor project>/redis/redis.conf
```

Run project using the following so `redis-oplog` connects:
```
meteor --settings config/settings.json
```
Then open the browser console, and click "Toggle Disabled" on any of the links to toggle a simple `disabled` field using `await Meteor.callAsync()`. Though not visible in the DOM, notice in the browser console the value toggling back and forth between `true` and `false`.
It's hard to see the flickering in this repo because the DOM is so simple, but on a complex dashboard, the flickering is very noticable.

Then do a:
```
meteor remove montiapm:agent
```
Then do the toggling and notice it behaves normally.

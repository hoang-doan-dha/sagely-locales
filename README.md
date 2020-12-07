
1) should properly initialize the controller
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
loaded@http://localhost:9876/context.js:162:17
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:64:33
loaded@http://localhost:9876/context.js:162:17

2) should broadcast viewContentLoaded
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

3) should load a message view which was already in page messages
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 92)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:92:23

4) should not load message #0
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:104:22

5) should not load message #ABC
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:114:22

6) should not load message not in page messages or in database
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 124)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:124:23

7) should load message not in page messages but in database
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 137)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:137:23

8) should set sendDelayMinutes to 0 if undefined
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Unable to delete property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 151)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:151:41

9) should format author
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:164:22

10) should queue for sending
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 175)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:175:23

11) should fail to queue for sending
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 192)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:192:23

12) should format send button label to Send now for 0 delay
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 210)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:210:23

13) should format send button label for 5 minute delay
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 223)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:223:17

14) should format send button label for 5 minute delay
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 237)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:237:17

15) should format send button label for 15 minute delay
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 251)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:251:17

16) should format send button label for 30 minute delay
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 265)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:265:17

17) should format send button label for 1 hour delay
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 279)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:279:17

18) should format send button label for 24 hour delay
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 293)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:293:17

19) should route to form
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 307)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:307:23

20) should confirm and succeed delete
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 322)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:322:23

21) should confirm and fail delete
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 338)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:338:23

22) should not confirm on delete
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 357)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:357:23

23) should load all recipients photos
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 372)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:372:23

24) should not load all recipients photos as they are already loaded
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 399)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:399:23

25) should not load recipients photos as photo is undefined
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 440)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:440:23

26) should show all recipients modal
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 468)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:468:23

27) should not show all recipients modal
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 502)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:502:23

28) should get trusted html body with formatted placeholder
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

29) should format timestamp 10 years ago
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:531:22

30) should format timestamp today 10 minutes ago
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:547:22

31) should format timestamp today 30 minutes from now
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:561:22

32) should format timestamp yesterday
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:574:22

33) should format timestamp for 13 days from now
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:591:22

34) should format timestamp for 16 days from now
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:604:22

35) should format timestamp for 400 days from now
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:617:22

36) should format timestamp for 1000 days from now
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:630:22

37) should format scheduledSendOn
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:643:22

38) should set scope variable on broadcast
     Message View Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:11:26
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/message-view-ctrl-spec.js:649:22

39) should properly initialize the controller
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:41:31

40) should broadcast viewContentLoaded
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

41) should display draft folder
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

42) should display pending folder
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

43) should display sent folder
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

44) should route to new form with no folder counts
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

45) should route to sent folder because it has message
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

46) should route to pending folder because it has message
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

47) should route to draft folder because it has message
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

48) should route to page 2 of draft folder
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

49) should route to form when message clicked in draft folder
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:138:20

50) should route to view when message clicked in pending folder
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:153:20

51) should not route anywher when message clicked but no data
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:168:20

52) should load a page of messages and sort
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

53) should update counts on broadcast
     Messages Folder Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js (line 205)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-folder-ctrl-spec.js:205:21

54) should properly initialize the controller
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:39:31

55) should broadcast viewContentLoaded
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

56) should run simple search
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 66)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:66:21

57) should run advanced search
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 77)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:77:21

58) should route to page 2 of search results
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 89)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:89:21

59) should run setUsers when users are null
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 102)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:102:21

60) should refresh search on order broadcast
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

61) should formatted author on decodedSearchParams broadcast
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 137)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:137:21

62) should formatted author on user broadcast
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 154)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:154:21

63) should run advanced search requiring Javascript filtering
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 172)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:172:21

64) should run advanced search requiring Javascript filtering 2
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 184)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:184:21

65) should format author for filter
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:194:20

66) should not display author when missing user
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 199)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:199:21

67) should format resident for filter
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:205:20

68) should not display resident missing resident ID
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:211:20

69) should not display resident missing resident params
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:216:20

70) should format family user for filter
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:221:20

71) should not display resident missing familyUser ID
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:240:20

72) should not display resident missing familyUser params
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:245:20

73) should not update authorDisplayStr
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:250:20

74) should format two dates
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:256:20

75) should not display two dates for empty filter
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:267:20

76) should not display two dates for filter missing start
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:272:20

77) should not display two dates for filter missing end
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:278:20

78) should go to form
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:284:20

79) should go to view
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:290:20

80) should not go to view or form
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:296:20

81) should go to folder after filter removal
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not a constructor (evaluating 'controller') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 11)
getController@/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:11:24
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:306:20

82) should go to simple search after filter removal
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 316)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:316:21

83) should go to advanced search after filter removal
     Messages Search Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'messageSvcMock._options') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js (line 328)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/messages-search-ctrl-spec.js:328:21

1) should successfully load the resident health mood controller
     Resident Health Mood Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-mood-ctrl-spec.js:73:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26
loaded@http://localhost:9876/context.js:162:17

2) should successfully load the resident health mood controller with events
     Resident Health Mood Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
Expected $[3][0] = '10/30/2014 06:00 午前' to equal '10/30/2014 06:00 AM'.
Expected $[4][0] = '10/31/2014 06:00 午前' to equal '10/31/2014 06:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-mood-ctrl-spec.js:113:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

3) should successfully load the resident health mood controller with a sagely user
     Resident Health Mood Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
Expected $[3][0] = '10/30/2014 06:00 午前' to equal '10/30/2014 06:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-mood-ctrl-spec.js:143:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

4) should successfully load the resident health mood controller with an invalid user
     Resident Health Mood Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
Expected $[3][0] = '11/01/2014 12:00 午前' to equal '11/01/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-mood-ctrl-spec.js:168:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

5) should only load the data once initially
     Resident Health Mood Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-mood-ctrl-spec.js:181:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

6) should not reload the data if the start date is after the end date
     Resident Health Mood Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-mood-ctrl-spec.js:199:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

7) should load history for an action
     Resident Health Mood History Controller
     Expected $[0][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/14/2014 12:00 午前' to equal '10/14/2014 12:00 AM'.
Expected $[1][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[2][0] = '10/13/2014 12:00 午前' to equal '10/13/2014 12:00 AM'.
Expected $[2][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[3][0] = '10/12/2014 12:00 午前' to equal '10/12/2014 12:00 AM'.
Expected $[3][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-mood-history-ctrl-spec.js:122:40
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

8) should successfully load the resident health Self Assessment controller
     Resident Health Self Assessment Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-self-assessment-ctrl-spec.js:85:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

9) should only load the data once initially
     Resident Health Self Assessment Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-self-assessment-ctrl-spec.js:104:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

10) should not reload the data if the start date is after the end date
     Resident Health Self Assessment Controller
     Expected $[0][0] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/18/2014 12:00 午前' to equal '10/18/2014 12:00 AM'.
Expected $[2][0] = '10/25/2014 12:00 午前' to equal '10/25/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-self-assessment-ctrl-spec.js:117:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

11) should successfully load the resident health Self Assessment controller
     Resident Health Self Assessment History Controller
     Expected $[0][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[1][0] = '10/14/2014 12:00 午前' to equal '10/14/2014 12:00 AM'.
Expected $[1][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[2][0] = '10/13/2014 12:00 午前' to equal '10/13/2014 12:00 AM'.
Expected $[2][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
Expected $[3][0] = '10/12/2014 12:00 午前' to equal '10/12/2014 12:00 AM'.
Expected $[3][2] = '10/11/2014 12:00 午前' to equal '10/11/2014 12:00 AM'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-health-self-assessment-history-ctrl-spec.js:127:40
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

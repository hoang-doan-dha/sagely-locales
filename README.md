1) should get the correct report header
     Reports Controller Standard Tests
     TypeError: undefined is not a constructor (evaluating 'scope.getHeader()') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js (line 62)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:62:31

2) should generate a Resident Participation Summary report
     Reports Controller Standard Tests
     Expected 0 to equal 1.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:200:61
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26
     Expected undefined to equal 'generateReport'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:201:67
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26
     undefined
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:202:58
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

3) should show an error if the start date is invalid
     Reports Controller Standard Tests
     Expected undefined to equal Object({ type: 'error', message: 'Invalid start date' }).
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:226:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

4) should show an error if the end date is invalid
     Reports Controller Standard Tests
     Expected undefined to equal Object({ type: 'error', message: 'Invalid end date' }).
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:248:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

5) should show an error if the start date is after the end date
     Reports Controller Standard Tests
     Expected undefined to equal Object({ type: 'error', message: 'Start date must be before end date' }).
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:270:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

6) should generate a Community Events Summary report
     Reports Controller Standard Tests
     Expected 0 to equal 1.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:285:61
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26
     Expected undefined to equal 'generateReport'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:286:67
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26
     undefined
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:287:58
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

7) should show an error if the date validation fails for Community Events Summary report
     Reports Controller Standard Tests
     Expected undefined to equal Object({ type: 'error', message: 'Invalid start date' }).
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:311:33
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

8) should generate a family member report
     Reports Controller Standard Tests
     Expected 'http://server.com/report/html/familyMemberSummary?resTypes=1%2C2%2C3&resStatuses=&u=http://server.com/api/organizations/1/users/1' to equal 'http://server.com/report/html/familyMemberSummary?resTypes=-1%2C1%2C2%2C3&resStatuses=active&u=http://server.com/api/organizations/1/users/1'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:325:57
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

9) should generate a Resident Summary report
     Reports Controller Standard Tests
     Expected 'http://server.com/report/html/residentSummary?resTypes=1%2C2%2C3&resStatuses=&u=http://server.com/api/organizations/1/users/1' to equal 'http://server.com/report/html/residentSummary?resTypes=-1%2C1%2C2%2C3&resStatuses=active&u=http://server.com/api/organizations/1/users/1'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:339:57
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

10) should generate a Daily Participation Audit report
     Reports Controller Standard Tests
     Expected 'http://server.com/report/html/dailyParticipationAudit?date=2015-03-04&resTypes=1%2C2%2C3&cals=1%2C2%2C3&u=http://server.com/api/organizations/1/users/1' to equal 'http://server.com/report/html/dailyParticipationAudit?date=2015-03-04&resTypes=-1%2C1%2C2%2C3&cals=1%2C2%2C3&u=http://server.com/api/organizations/1/users/1'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:355:57
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

11) should generate a Residents Dashboard report
     Reports Controller Standard Tests
     Expected 'http://server.com/report/html/residentsDashboard?year=2014&month=11&resTypes=1%2C2%2C3&cals=1%2C2%2C3&u=http://server.com/api/organizations/1/users/1' to equal 'http://server.com/report/html/residentsDashboard?year=2014&month=11&resTypes=-1%2C1%2C2%2C3&cals=1%2C2%2C3&u=http://server.com/api/organizations/1/users/1'.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/reports-ctrl-spec.js:389:57
invoke@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4625:24
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2933:26

12) should successfully load the residents controller
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     Expected undefined to be defined.
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:51:38
     TypeError: undefined is not an object (evaluating 'scope.genders') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 54)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:54:19

13) should return default empty array if no source
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'rootScope.facility') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 164)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:164:16

14) should have proper resident type options
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.residentTypeOptions') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 169)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:169:19

15) should format multi objects
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.formatMultiObject') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 185)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:185:19

16) should check facility feature flag for resident engagement
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.isResidentEngagementEnabled') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 191)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:191:19

17) should check whether or not a sign up pin is available
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 195)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:195:12

18) should check if a resident email is editable
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.selectedResident') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 203)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:203:12

19) should log if form is not valid
     Resident About Me Controller
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.submitForm') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 224)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:224:12

20) should show an error tooltip if the external ID is a duplicate 
     Resident About Me Controller
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

21) should test resident DOB updates
     Resident About Me Controller Test watches
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.dates') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 257)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:257:14

22) should test resident move in dates updates
     Resident About Me Controller Test watches
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.dates') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 278)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:278:14

23) should test resident move out dates updates
     Resident About Me Controller Test watches
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.dates') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 299)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:299:14

24) should send a resident a user invitation email
     Resident About Me Controller Resident user invites
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

25) should send a resident a user invitation email with a pin expiring in 1 hour
     Resident About Me Controller Resident user invites
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

26) should send a resident a user invitation email with a pin expiring in less than an hour
     Resident About Me Controller Resident user invites
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

27) should send a resident a user invitation email with a pin expiring in one minute
     Resident About Me Controller Resident user invites
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

28) should generate a new pin expiring in one minute
     Resident About Me Controller Resident user invites
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

29) should show an error if it failed to generate a new pin
     Resident About Me Controller Resident user invites
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

30) should show an error if when sending a resident a user invitation fails
     Resident About Me Controller Resident user invites
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

31) should show an error if when sending a resident a user invitation fails, but the pin failed to generate
     Resident About Me Controller Resident user invites
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

32) should not do anything or crash if trying to create a pin with no selected resident
     Resident About Me Controller Resident user invites
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 495)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:495:14

33) should create new resident without image
     Resident About Me Controller Creating Residents
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

34) should create new resident with a birth date and move in date
     Resident About Me Controller Creating Residents
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

35) should error when create new resident without image fails
     Resident About Me Controller Creating Residents
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

36) should create new resident with image
     Resident About Me Controller Creating Residents
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

37) should error when create new resident with image fails
     Resident About Me Controller Creating Residents
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

38) should save resident
     Resident About Me Controller Updating Residents
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

39) should handle error cases
     Resident About Me Controller Updating Residents
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: Attempted to assign to readonly property. in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 806)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:806:14

40) should test repeatable items
     Resident About Me Controller Updating Residents
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.facility') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 823)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:823:51

41) should go back to previous values when cancelling
     Resident About Me Controller Updating Residents
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53
     TypeError: undefined is not an object (evaluating 'scope.facility') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 912)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:912:36

42) should error when saving a resident without an image fails
     Resident About Me Controller Updating Residents
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

43) should save resident with a floor and no type
     Resident About Me Controller Updating Residents
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

44) should handle tags properly
     Resident About Me Controller Updating Residents
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

45) should copy over nothing if resident has no custom answers
     Resident About Me Controller Custom Resident Profile fields
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
     TypeError: undefined is not an object (evaluating 'scope.copyCustomAnswersToTemp') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 1404)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:1404:14

46) should copy resident with custom answers
     Resident About Me Controller Custom Resident Profile fields
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
     TypeError: undefined is not an object (evaluating 'scope.copyCustomAnswersToTemp') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 1412)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:1412:14

47) should handle an unknown question type
     Resident About Me Controller Custom Resident Profile fields
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
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

48) should get the custom questions
     Resident About Me Controller Custom Resident Profile fields
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
     forEach@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:321:24
loadModules@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4508:12
createInjector@/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4430:30
workFn@/Users/hailuabk/Documents/projects/sagely/bower_components/angular-mocks/angular-mocks.js:2922:60
/Users/hailuabk/Documents/projects/sagely/bower_components/angular/angular.js:4548:53

49) should get the custom question answer options
     Resident About Me Controller Custom Resident Profile fields
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
     TypeError: undefined is not an object (evaluating 'scope.getCustomAnswerOptions') in /Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js (line 1466)
/Users/hailuabk/Documents/projects/sagely/test/client/web/controllers/resident-about-me-ctrl-spec.js:1466:21

(function () {
  'use strict';

  app.directive('adminGeneral', function ($log, $location, $q, $sce, $timeout, apiSvc, analyticsSvc, localeSvc, pathSvc, resourceSvc, sessionSvc, cookieSvc, networkSvc, unsavedChangesSvc, moment) {
    return {
      restrict: 'E',
      templateUrl: pathSvc.getFullPath('html/directives/adminGeneral.html'),
      scope: {},
      controller: function ($rootScope, $scope, $translate) {
        $scope.forms = {};
        $scope.flags = _.map(networkSvc.environment.featureFlags, function (f) {
          return { id: f, text: f};
        });

        // var timezones = [];
        // var timezoneTexts = [
        //   'Community_Admin_GeneralSettings_Dropdown_NewZealand',
        //   'Community_Admin_GeneralSettings_Dropdown_Hawaii',
        //   'Community_Admin_GeneralSettings_Dropdown_AlaskaTime',
        //   'Community_Admin_GeneralSettings_Dropdown_PacificTime',
        //   'Community_Admin_GeneralSettings_Dropdown_Arizona',
        //   'Community_Admin_GeneralSettings_Dropdown_MountainTime',
        //   'Community_Admin_GeneralSettings_Dropdown_CentralTime',
        //   'Community_Admin_GeneralSettings_Dropdown_EasternTime',
        // ];
        // $translate(timezoneTexts).then(function (translations) {
        // })

        var timezones = [
          { id: 'Pacific/Auckland', text: 'NewZealand' },
          { id: 'Pacific/Honolulu', text: 'Hawaii' },
          { id: 'America/Anchorage', text: 'AlaskaTime' },
          { id: 'America/Los_Angeles', text: 'PacificTime' },
          { id: 'America/Phoenix', text: 'Arizona' },
          { id: 'America/Denver', text: 'MountainTime' },
          { id: 'America/Chicago', text: 'CentralTime' },
          { id: 'America/New_York', text: 'EasternTime' }
          // { id: 'America/Metlakatla' , text: 'Metlakatla Time - Annette Island' }
          // { id: 'America/Adak', text: 'Aleutian Islands' }
        ];

        var statusTexts = [
          'Community_Admin_Label_Active',
          'Community_Admin_GeneralSettings_Dropdown_Demo',
          'Community_Admin_GeneralSettings_Dropdown_NoLongerUsing',
          'Community_Admin_GeneralSettings_Dropdown_Trial',
        ]
        $translate(statusTexts).then(function (translations) {
          $scope.statuses = [
            { 
              id: 'active', 
              text: translations.Community_Admin_Label_Active
            },
            { 
              id: 'demo', 
              text: translations.Community_Admin_GeneralSettings_Dropdown_Demo
            },
            { 
              id: 'nlu', 
              text: translations.Community_Admin_GeneralSettings_Dropdown_NoLongerUsing
            },
            { 
              id: 'pilot', 
              text: translations.Community_Admin_GeneralSettings_Dropdown_Trial
            }
          ];
        })


        $scope.regions = networkSvc.environment.ddbRegions;

        $scope.ipPattern = /(^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$)|(^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/([0-9]|[1-2][0-9]|3[0-2]))$)|(^s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]d|1dd|[1-9]?d)(.(25[0-5]|2[0-4]d|1dd|[1-9]?d)){3}))|:)))(%.+)?s*(\/([0-9]|[1-9][0-9]|1[0-1][0-9]|12[0-8]))?$)/;

        var tooltipMessages = [
          'Community_Admin_Label_Description',
          'Community_Admin_GeneralSettings_Hint_EnterADescription',
          'Community_Admin_GeneralSettings_Hint_AddressRange',
          'Community_Admin_GeneralSettings_Hint_EnterIPAddress',
        ];
        $translate(tooltipMessages).then(function (translations) {
          $scope.tooltips = {
            // IP Access
            ipRangeDescription: [{
              type: 'title',
              message: translations.Community_Admin_Label_Description
            }, {
              type: 'info',
              message: translations.Community_Admin_GeneralSettings_Hint_EnterADescription
            }],
            ipRangeAddress: [{
              type: 'title',
              message: translations.Community_Admin_GeneralSettings_Hint_AddressRange
            }, {
              type: 'info',
              message: translations.Community_Admin_GeneralSettings_Hint_EnterIPAddress
            }]
          };
        })


        $scope.getDirtyFlag = function (form) {
          return form && form.$dirty ? ' *' : '';
        };

        // watch for changes since the facility logo is loaded after the facility is loaded
        $rootScope.$watch('facility.logo', function () {
          $scope.editFacility.logo = $rootScope.facility ? $rootScope.facility.logo : null;
        });

        $scope.getFacilityID = function () {
          return $rootScope.facility._href.split('/').pop();
        };

        $scope.getOrgID = function () {
          return $rootScope.facility.organization ? $rootScope.facility.organization._href.split('/').pop() : '';
        };

        // Load the IP whitelist
        $scope.loadIPWhitelist = function () {
          $scope.ipWhitelistError = false;
          if ($scope.hasAccessToIPWhitelist()) {
            resourceSvc.read($scope.editFacility.ipWhitelist._href).then(function (results) {
              $scope.ipWhitelist = results;
            }).catch(function (err) {
              $log.error(err);
              $scope.ipWhitelistError = true;
            });
          }
        };

        // register forms for the unsaved changes detector
        var registerForms = function () {
          unsavedChangesSvc.setCurrentForms(_.values($scope.forms));
        };

        // clone the facility for editing
        // a deep clone would be too slow, so just clone what we need
        $scope.organizationName = $rootScope.facility.organization.name;
        var cloneFacility = function () {
          registerForms();
          $scope.editFacility = _.omit(_.cloneDeep($rootScope.facility), function (value, key) {
            return value._href && key !== 'logo' && key !== 'ipWhitelist';
          });
          $scope.editFacility.address = _.clone($rootScope.facility.address);
          $scope.editFacility.icons = _.sortBy(_.cloneDeep($rootScope.facility.tagIcons.items), 'name');
          delete $scope.editFacility.organization;
          if ($rootScope.facility.status) {
            $scope.editFacility.status = _.clone($rootScope.facility.status);
          } else {
            $scope.editFacility.status = $scope.statuses[0].id;
          }

          var oldFlags = _.difference($scope.editFacility.facilityFeatures, networkSvc.environment.featureFlags);
          _.each(oldFlags, function (f) {
            $scope.removeFeatureFlag(f, true);
          });

          if ($scope.editFacility.trialEndDate) {
            $scope.editFacility.trialEndDateInput = moment($scope.editFacility.trialEndDate).format(localeSvc.getDateFormat());
          }

          $scope.orgFeatureFlags = _.filter($scope.editFacility.features, function (flag) {
            return !_.contains($scope.editFacility.facilityFeatures, flag);
          });

          // load ip whitelist
          $scope.loadIPWhitelist();
        };


        $scope.getTrustedHtml = function (text) {
          return $sce.trustAsHtml(text);
        };

        $scope.timezones = _.map(timezones, function (tz) {
          tz.text = '(GMT' + moment.tz(tz.id).format('Z') + ') ' + tz.text;
          return tz;
        });

        $scope.isEditable = sessionSvc.hasAccess('admin');
        $scope.hasAccessToIPWhitelist = function () {
          return sessionSvc.hasAccess('ipwhitelist') && sessionSvc.isFacilityFeatureEnabled('ipWhitelist');
        };

        $scope.modal = {
          display: false,
          type: 'delete'
        };

        $scope.showModal = function (type) {
          $scope.modal.type = type;
          $scope.modal.display = true;
          $scope.deleteFacilityInfo = { name: '' };
          $timeout(function () { });
        };

        $scope.hideModal = function () {
          $scope.modal.display = false;
        };

        $scope.deleteDisabled = function () {
          return !$rootScope.facility || $scope.deletingFacility || ($scope.deleteFacilityInfo.name !== $rootScope.facility.name);
        };

        $scope.deleteFacilityInfo = { name: '' };
        $scope.deleteFacility = function () {
          if ($scope.deleteFacilityInfo.name !== $rootScope.facility.name) {
            $translate('Community_Admin_GeneralSettings_Message_NameDidNotMatch').then(function (message) {
              $scope.$emit('bulletinMessage', { type: 'error', message: message });
            })
            $scope.hideModal();
          } else {
            $scope.deletingFacility = true;
            $log.warn('Deleting facility: ' + $scope.editFacility.name);
            resourceSvc.delete($scope.editFacility).then(function () {
              return sessionSvc.logOut();
            }).then(function () {
              $location.path('/login');
            }).catch(function (err) {
              $log.error(err);
              $translate('Community_Admin_GeneralSettings_Message_CommunityNotDeleted').then(function (message) {
                $scope.$emit('bulletinMessage', { type: 'error', message: message });
              });
              $scope.hideModal();
            }).finally(function () {
              $scope.deletingFacility = false;
            });
          }
        };

        $scope.isSagelyUser = function () {
          return sessionSvc.isSagelyUser();
        };

        $scope.addFeatureFlag = function () {
          if (!_.contains($scope.editFacility.facilityFeatures, '')) {
            $scope.editFacility.facilityFeatures.push('');
            $scope.forms.supportForm.$setDirty();
          }
        };

        $scope.removeFeatureFlag = function (flag, noDirty) {
          _.remove($scope.editFacility.facilityFeatures, function (item) {
            return _.isEqual(item, flag);
          });
          if (!noDirty) {
            $scope.forms.supportForm.$setDirty();
          }
        };

        $scope.addOrgTemplate = function () {
          if (!$scope.editFacility.orgTemplates) {
            $scope.editFacility.orgTemplates = [];
          }
          if (!_.contains($scope.editFacility.orgTemplates, '')) {
            $scope.editFacility.orgTemplates.push('');
            $scope.forms.supportForm.$setDirty();
          }
        };

        $scope.removeOrgTemplate = function (index) {
          $scope.editFacility.orgTemplates.splice(index, 1);
          $scope.forms.supportForm.$setDirty();
        };

        $scope.validIconTypes = [ 'image/svg+xml' ];

        $scope.addIcon = function (data) {
          if (data === false) {
            $translate('Community_Admin_GeneralSettings_Message_ErrorOpeningIcon').then(function (message) {
              $scope.$emit('bulletinMessage', {
                type: 'error',
                message: message
              });
            });           
            $scope.$apply();
          } else {
            var ids = _.chain($scope.editFacility.icons).map('name').map(function (v) {return parseInt(v.substr(1)) || 0;}).value();
            var id = 0;
            if (_.isFinite(_.max(ids))) {
              id = _.max(ids) + 1;
            }
            $scope.editFacility.icons.push({
              abbreviation: data,
              name: 'Z' + id
            });
            $scope.forms.iconsForm.$setDirty();
          }
        };

        $scope.removeIcon = function (icon) {
          _.remove($scope.editFacility.icons, function (item) {
            return _.isEqual(item, icon);
          });
          $scope.forms.iconsForm.$setDirty();
        };

        $scope.currentIcon = null;
        $scope.updateIconClick = function (icon) {
          $scope.currentIcon = icon;
        };

        $scope.updateIcon = function (data) {
          if (data === false) {
            $translate('Community_Admin_GeneralSettings_Message_ErrorOpeningIcon').then(function (message) {
              $scope.$emit('bulletinMessage', {
                type: 'error',
                message: message
              });
            });
            $scope.$apply();
          } else {
            $scope.currentIcon.abbreviation = data;
            $scope.forms.iconsForm.$setDirty();
          }
          $scope.currentIcon = null;
        };

        $scope.hasFacilityLogo = function () {
          return $scope.editFacility && $scope.editFacility.logo && ($scope.editFacility.logo.data || $scope.editFacility.logo.url);
        };

        $scope.getFacilityLogoSrc = function () {
          if ($scope.hasFacilityLogo()) {
            if ($scope.editFacility.logo.data) {
              return 'data:' + ($scope.editFacility.logo.mimeType || 'image/*') + ';base64,' + $scope.editFacility.logo.data;
            }
            else {
              return $scope.editFacility.logo.url;
            }
          }
          else {
            return pathSvc.getFullPath('img/logo-placeholder.png');
          }
        };

        $scope.updateFacilityLogo = function (dataUri) {
          if (dataUri === false) {
            $translate('Community_Admin_GeneralSettings_Message_ErrorOpeningImage').then(function (message) {
              $scope.$emit('bulletinMessage', {
                type: 'error',
                message: message
              });
            });
            $scope.$apply();
          } else {
            var parts = dataUri.split(/[:,;]/);
            $scope.editFacility.logo.data = parts[3];
            $scope.editFacility.logo.mimeType = parts[1];
            $scope.forms.generalForm.$setDirty();
            delete $scope.editFacility.logo.url;
          }
        };

        $scope.deleteFacilityLogo = function () {
          $scope.editFacility.logo.data = null;
          $scope.editFacility.logo.url = null;
          $scope.editFacility.logo.mimeType = null;
          $scope.forms.generalForm.$setDirty();
        };

        var updateCustomIcons = function () {
          // Delete removed custom icons
          return $q.resolve(_.difference(_.map($rootScope.facility.tagIcons.items, '_href'), _.map($scope.editFacility.icons, '_href')))
            .map(function (href) {
              var item = _.find($rootScope.facility.tagIcons.items, {_href: href});
              _.remove($rootScope.facility.tagIcons.items, item);
              return resourceSvc.delete(item);
            }, { concurrency: 1 }).then(function () {
              // Add new and update modified icons
              return $q.resolve($scope.editFacility.icons)
                .map(function (icon) {
                  if (!icon._href) {
                    return resourceSvc.create($rootScope.facility.tagIcons._href, icon);
                  } else {
                    var prev = _.find($rootScope.facility.tagIcons.items, { _href: icon._href });
                    if (prev && prev.abbreviation !== icon.abbreviation) {
                      return resourceSvc.save(icon);
                    } else {
                      return $q.resolve();
                    }
                  }
                }, { concurrency: 1 });
            }).then(function (data) {
              _.each(_.compact(data), function (icon) {
                var prev = _.find($rootScope.facility.tagIcons.items, { _href: icon._href });
                if (prev) {
                  prev.abbreviation = icon.abbreviation;
                } else {
                  $rootScope.facility.tagIcons.items.push(icon);
                }
              });
            });
        };

        $scope.toggleIPWhitelist = function () {
          $scope.ipWhitelist.enabled = !$scope.ipWhitelist.enabled;
          $scope.forms.ipWhitelistForm.$setDirty();

          // if IP access was toggle on, make sure there is at least one row
          if ($scope.ipWhitelist.enabled && $scope.ipWhitelist.ipRanges.length === 0) {
            $scope.addIPWhitelist();
          }

          // if IP access was toggled off, remove any invalid rows
          if (!$scope.ipWhitelist.enabled) {
            var indexes = _.uniq(_.map($('.ip-whitelist .ng-invalid'), function (el) {
              return parseInt(el.id.substring(el.id.lastIndexOf('-') + 1));
            })).sort().reverse();

            _.each(indexes, function (i) {
              $scope.ipWhitelist.ipRanges.splice(i, 1);
            });
          }
        };

        $scope.addIPWhitelist = function () {
          if (!_.find($scope.ipWhitelist.ipRanges, function (item) {
            return _.isEqual(item, { name: '', address: '' });
          })) {
            $scope.ipWhitelist.ipRanges.push({ name: '', address: '' });
            $scope.forms.ipWhitelistForm.$setDirty();
          }
        };

        $scope.removeIPWhitelist = function (index) {
          // must have at least one
          if ($scope.ipWhitelist.ipRanges.length > 1) {
            $scope.ipWhitelist.ipRanges.splice(index, 1);
          }
          $scope.forms.ipWhitelistForm.$setDirty();
        };

        /**
         * Extra step to use the uploader to upload the file before the calling the Sagely API
         */
        $scope.saveFacilityLogo = function (logo) {
          var deferred = $q.defer();
          resourceSvc.uploadFile(logo).then(function (fileID) {
            logo.fileID = fileID;
            deferred.resolve(resourceSvc.save(_.omit(logo, 'data')));
          }).catch(function (err) {
            deferred.reject(err);
          });
          return deferred.promise;
        };

        /**
         * Validate and save changes to form
         **/
        $scope.submitForm = function (form) {
          _.each(form.$error.required, function (input) {
            input.$setViewValue(input.$viewValue);
          });
          if (form.$valid && $scope.isEditable) {
            $scope.saving = true;
            // Force the organization
            $scope.editFacility.organization = {
              _href: $rootScope.facility.organization._href
            };

            // Deal with the trial end date
            if ($scope.editFacility.status !== 'pilot') {
              delete $scope.editFacility.trialEndDate;
            } else {
              var ted = moment($scope.editFacility.trialEndDateInput, localeSvc.getDateFormat());
              if (ted.isValid()) {
                $scope.editFacility.trialEndDate = ted.format();
              } else {
                delete $scope.editFacility.trialEndDate;
              }
            }
            delete $scope.editFacility.trialEndDateInput;

            resourceSvc.save(_.omit($scope.editFacility, 'logo', 'icons')).then(function (data) {
              $scope.editFacility._rev = data._rev;

              // Add + Update
              _.assign($rootScope.facility, _.omit(data, function (value) {
                return value._href;
              }));

              // Delete
              _.each(_.keys($rootScope.facility), function (propName) {
                if (!data[propName] && !$rootScope.facility[propName]._href) {
                  delete $rootScope.facility[propName];
                }
              });

              // if a logo was set, save it
              if ($scope.editFacility.logo.data) {
                // return resourceSvc.save($scope.editFacility.logo);
                return $scope.saveFacilityLogo($scope.editFacility.logo);
              } else {
                return resourceSvc.delete($scope.editFacility.logo);
              }
            }).then(function (data) {
              if (data) {
                $scope.editFacility.logo._rev = data._rev || '1';
                _.assign($rootScope.facility.logo, data);
              }
              return updateCustomIcons();
            }).then(function () {
              if ($scope.hasAccessToIPWhitelist() && $scope.ipWhitelist) {
                return resourceSvc.save($scope.ipWhitelist);
              } else {
                return $q.when();
              }
            }).then(function () {
              // read back the facility to get its updated features
              return resourceSvc.read($scope.editFacility._href);
            }).then(function (data) {
              $rootScope.facility.features = _.clone(data.features);
              $rootScope.facility.facilityFeatures = _.clone(data.facilityFeatures);

              analyticsSvc.track('updateSettings', 'Admin');
              cloneFacility();
              $translate('Community_Admin_GeneralSettings_Message_SavedChanges').then(function (message) {
                $scope.$emit('bulletinMessage', {
                  type: 'success',
                  message: message
                });
              });
              _.each(_.values($scope.forms), function (form) {
                if (form) {
                  form.$setPristine();
                }
              });
            }).catch(function (err) {
              $log.error(err);
              cloneFacility();
              $translate('Community_Admin_GeneralSettings_Message_ErrorSaving').then(function (message) {
                $scope.$emit('bulletinMessage', {
                  type: 'error',
                  message: message
                });
              });
            }).finally(function () {
              $scope.saving = false;
            });
          }
          else if (form.$valid && !$scope.isEditable) {
            resourceSvc.save($scope.editFacility.logo).then(function (data) {
              if (data) {
                $scope.editFacility.logo._rev = data._rev;
                _.assign($rootScope.facility.logo, data);
              }
              return updateCustomIcons();
            }).then(function () {
              analyticsSvc.track('updateSettings', 'Admin');
              cloneFacility();
              $translate('Community_Admin_GeneralSettings_Message_SavedChanges').then(function (message) {
                $scope.$emit('bulletinMessage', {
                  type: 'success',
                  message: message
                });
              });
            }).catch(function (err) {
              $log.error(err);
              cloneFacility();
              $translate('Community_Admin_GeneralSettings_Message_ErrorSaving').then(function (message) {
                $scope.$emit('bulletinMessage', {
                  type: 'error',
                  message: message
                });
              });
            });
          }
        };

        cloneFacility();
        $timeout(registerForms);
      }
    };
  });

})();

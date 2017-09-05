angular.module("agendasApp")
  .component("setupDialog", {
    templateUrl: "setup-dialog/setup-dialog.html",
    controller: function($scope, $mdDialog, $rootScope, $mdToast, $state) {
      $scope.done = function() {
        firebase.database().ref("/users/" + $rootScope.user.uid + "/setupComplete").set(true);

        if ($scope.skippedUsername) {
          $mdToast.show($mdToast.simple()
            .textContent("You can set a username in the settings page")
            .action("SETTINGS")
            .highlightAction(true)
            .highlightClass("md-accent")
            .position("top right")
            .hideDelay(3000)
          ).then(function(response) {
            if (response === "ok") {
              $state.go("settings");
            }
          }).catch(console.log);
        }

        $mdDialog.hide();
      };

      $scope.username = {username: ""};

      $scope.saveUsername = function(username) {
        $scope.changingUsername = true;
        $scope.error = false;

        var usernamesRef = firebase.database().ref("/usernames");

        usernamesRef.child(username).once("value").then(function(data) {
          if (data.val() === $rootScope.user.uid) {
            return;
          } else if (data.exists()) {
            throw new Error("Username taken");
          } else {
            return ($rootScope.username ? usernamesRef.child($rootScope.username).remove() : Promise.resolve()).then(function() {
              if (username.length > 0) {
                return firebase.database().ref("/users/" + $rootScope.user.uid + "/username").set(username);
              }
            }).then(function() {
              return usernamesRef.child(username).set($rootScope.user.uid);
            });
          }
        }).then(function() {
          $scope.changingUsername = false;
          $scope.tutorialStep = 1;
          $scope.$digest();
        }).catch(function(e) {
          $scope.changingUsername = false;
          $scope.usernameError = true;
          console.log(e);
          $scope.$digest();
        });
      };

      $scope.skipUsername = function() {
        $scope.tutorialStep = 1;
        $scope.skippedUsername = true;
      };

      $scope.backToUsername = function() {
        $scope.tutorialStep = false;
        $scope.skippedUsername = false;
      };

      firebase.database().ref("/users/" + $rootScope.user.uid + "/username").once("value").then(function(data) {
        if (data.exists()) {
          $scope.tutorialStep = 1;
        } else {
          $scope.usernameStep = true;
        }

        $scope.$digest();
      });

      firebase.auth().onAuthStateChanged(function(user) {
        if (!user) {
          $mdDialog.cancel();
        }
      });
    }
  })

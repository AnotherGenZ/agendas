angular.module("agendasApp")
  .component("taskCreator", {
    templateUrl: "creator/creator.html",
    bindings: {
      onAddTask: "&",
      onAddTag: "&?",
      tags: "=?"
    },
    controller: function($scope, $timeout) {
      $scope.items = [];
      $scope.matches = [];
      $scope.selectedMatch = null;
      $scope.hasDeadlineChip = false;

      $scope.addMatch = function(match) {
        if ($scope.matches.length < 1) {
          $scope.selectedMatch = 0;
        }

        $scope.matches.push(match);
      };

      $scope.removeMatch = function(index) {
        $scope.matches.splice(index);
        if ($scope.selectedMatch === index) {
          $scope.selectedMatch = $scope.matches.length > 0 ? 0 : null;
        }
      };

      $scope.refreshMatches = function(text) {
        $scope.matches = [];
        $scope.selectedMatch = null;

        if (!$scope.hasDeadlineChip) {
          var date = chrono.parse(text);
          if (date.length > 0 && text.endsWith(date[0].text)) {
            $scope.addMatch({type: "deadline", text: date[0].text, deadline: date[0].start.date(), time: date[0].start.isCertain("hour")});
          }
        }
      };

      $scope.hasFocus = function() {
        return !!document.querySelector("task-creator input:focus, task-creator input:active");
      };

      $scope.complete = function(match) {
        var active = document.activeElement;
        var index  = Array.prototype.slice.call(active.parentElement.parentElement.children).indexOf(active.parentElement);
        $scope.items.splice(index + 1, 0, match);
        $timeout(function() {
          document.querySelector("task-creator > div.task-input > span:nth-child(" + (index + 2) + ") > *").focus();
        }, 0, false);

        if (match.type === "deadline") {
          $scope.hasDeadlineChip = true;
        }

        $scope.items[index].text = $scope.items[index].text.slice(0, -1 * (match.text.length));
      };

      $scope.removeItem = function(index) {
        if ($scope.items[index].type === "deadline") {
          $scope.hasDeadlineChip = false;
        }
        $scope.items.splice(index, 1);
        if ($scope.items.length > 0) {
          document.querySelector("task-creator > div.task-input > span:nth-child(" + index + ") > *").focus();
        }
        if ($scope.items.length > index && $scope.items[index - 1].type === "text" && $scope.items[index].type === "text") {
          $scope.items[index - 1].text += " " + $scope.items[index].text;
          $scope.removeItem(index);
        }
      };

      $scope.keyEvent = function(item, index, event) {
        switch (event.keyCode) {
          case 8:
            var element = document.querySelector("task-creator > div.task-input > span:nth-child(" + (index + 1) + ") > *");
            if (element.tagName !== "INPUT") {
              $scope.removeItem(index);
              event.preventDefault();
            } else if (element.selectionStart < 1) {
              if (index > 0 && (event.target.tagName !== "INPUT" || event.target.selectionStart <= 0)) {
                event.target.blur();
                var element = document.querySelector("task-creator > div.task-input > span:nth-child(" + (index) + ") > *")
                element.focus();
                if (element.tagName === "INPUT") {
                  element.selectionStart = element.value.length + 1;
                }
                event.preventDefault();
              }
            }
            break;
          case 13:
            if ($scope.selectedMatch !== null) {
              $scope.complete($scope.matches[$scope.selectedMatch]);
              event.preventDefault();
              event.stopPropagation();
            } else {
              $scope.$ctrl.addTask();
            }
            break;
          case 37:
            if (index > 0 && (event.target.tagName !== "INPUT" || event.target.selectionStart <= 0)) {
              event.target.blur();
              var element = document.querySelector("task-creator > div.task-input > span:nth-child(" + (index) + ") > *")
              element.focus();
              if (element.tagName === "INPUT") {
                element.selectionStart = element.value.length + 1;
              }
              event.preventDefault();
            }
            break;
          case 38:
            if ($scope.selectedMatch !== 0 && $scope.selectedMatch !== null) {
              $scope.selectedMatch--;
              event.preventDefault();
              event.stopPropagation();
            }
            break;
          case 39:
            if (event.target.tagName !== "INPUT" || event.target.selectionStart >= item.text.length) {
              if ((index >= $scope.items.length - 1 && event.target.tagName !== "INPUT") || ($scope.items[index + 1] && $scope.items[index].type !== "text" && $scope.items[index + 1].type !== "text")) {
                $scope.items.splice(index + 1, 0, {type: "text", text: ""});
              }
              if (index >= 0 && index < $scope.items.length - 1) {
                $timeout(function() {
                  event.target.blur();
                  var element = document.querySelector("task-creator > div.task-input > span:nth-child(" + (index + 2) + ") > *");
                  element.focus();
                  if (element.tagName === "INPUT") {
                    element.selectionStart = 0;
                  }
                  event.preventDefault();
                }, 0, false);
              }
            }
            break;
          case 40:
            if ($scope.selectedMatch !== $scope.matches.length - 1 && $scope.selectedMatch !== null) {
              $scope.selectedMatch++;
              event.preventDefault();
              event.stopPropagation();
            }
            break;
          default:
            break;
        }
      };

      $scope.clickEvent = function(event) {
        if ($scope.items.length > 0) {
          document.querySelector("task-creator > .task-input > span:nth-child(" + $scope.items.length + ") > *").focus();
        } else {
          $scope.items.push({type: "text", text: ""});
          $timeout(function() {
            document.querySelector("task-creator > .task-input > span:first-child > input").focus();
          }, 0, false);
        }
      };

      $scope.keypressEvent = function(index, event) {
        if ($scope.items[index + 1] && $scope.items[index + 1].type === "text") {
          $scope.items[index + 1].text = event.key + $scope.items[index + 1].text;
          var element = document.querySelector("task-creator > div.task-input > span:nth-child(" + (index + 2) + ") > *")
          element.focus();
          $timeout(function() {
            element.selectionStart = 1;
            element.selectionEnd = 1;
          }, 0, false);
        } else {
          $scope.items.splice(index + 1, 0, {type: "text", text: event.key});
          $timeout(function() {
            document.querySelector("task-creator > .task-input > span:nth-child(" + (index + 2) + ") > *").focus();
          }, 0, false);
        }
        event.preventDefault();
      };

      $scope.removeIfEmpty = function(item, index) {
        if (item.text.length < 1) {
          $scope.removeItem(index);
        }
      };

      $scope.getTextWidth = function(text) {
        if (text.length < 1) {
          return 1;
        }

        var measure = document.querySelector("task-creator > .measuring-div");
        measure.innerText = text;
        var width = measure.offsetWidth + 10;
        measure.innerText = "";
        return width;
      };

      this.addTask = function() {
        var task = {name: ""};

        $scope.items.forEach(function(item) {
          if (item.type === "text") {
            if (task.name.length > 0 && item.text.length > 0) {
              task.name += " ";
            }
            task.name += item.text;
          } else if (item.type === "deadline") {
            task.deadline = item.deadline.toJSON();
            task.deadlineTime = !!item.time;
          }
        });

        this.onAddTask({task: task});

        $scope.items = [{type: "text", text: ""}];
        $scope.matches = [];
        $scope.hasDeadlineChip = false;
        $scope.selectedMatch = null;

        document.querySelector("task-creator input").focus();
      };
    }
  })

var todayDate = new Date();

function askTZ() {
    var response = prompt("what timezone are u from: GMT+3.5, GMT-4.75 & GMT-4 are examples (caps needed)")

    if (response == 'GMT') {
        setInterval(function timing() {
            document.getElementById("time").innerHTML = new Date().toUTCString().split(" ")[4];
        }, 1000);
    }

    if (response == 'GMT+1') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 1))

        setInterval(function timing() {
            var hours = aTime.getHours()
            var migDate = new Date()
            var seconds = migDate.getSeconds()
            var minutes = migDate.getMinutes()
            if (minutes < 10 && hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && hours < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && seconds < 10) {
                str = hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (seconds < 10) {
                str = hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10) {
                str = "0" + hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10) {
                str = hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else {
                str = hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            }
        }, 1000)
    }

    if (response == 'GMT+2') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 2))

        setInterval(function timing() {
            var hours = aTime.getHours()
            var migDate = new Date()
            var seconds = migDate.getSeconds()
            var minutes = migDate.getMinutes()
            if (minutes < 10 && hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && hours < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && seconds < 10) {
                str = hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (seconds < 10) {
                str = hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10) {
                str = "0" + hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10) {
                str = hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else {
                str = hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            }
        }, 1000)
    }

    if (response == 'GMT+3') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 3))

        setInterval(function timing() {
            var hours = aTime.getHours()
            var migDate = new Date()
            var seconds = migDate.getSeconds()
            var minutes = migDate.getMinutes()
            if (minutes < 10 && hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && hours < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && seconds < 10) {
                str = hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (seconds < 10) {
                str = hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10) {
                str = "0" + hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10) {
                str = hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else {
                str = hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            }
        }, 1000)
    }

    if (response == 'GMT+3.5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 4))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 30))
        setInterval(function timing() {
            var hours = aTime.getHours()
            var migDate = new Date()
            var seconds = migDate.getSeconds()
            var minutes = bTime.getMinutes()
            if (minutes < 10 && hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && hours < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && seconds < 10) {
                str = hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (seconds < 10) {
                str = hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10) {
                str = "0" + hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10) {
                str = hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else {
                str = hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            }
        }, 1000)
    }

    if (response == 'GMT+4') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 4))

        setInterval(function timing() {
            var hours = aTime.getHours()
            var migDate = new Date()
            var seconds = migDate.getSeconds()
            var minutes = migDate.getMinutes()
            if (minutes < 10 && hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && hours < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && seconds < 10) {
                str = hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (seconds < 10) {
                str = hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10) {
                str = "0" + hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10) {
                str = hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else {
                str = hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            }
        }, 1000)
    }

    if (response == 'GMT+4.5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 5))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 30))

        setInterval(function timing() {
            var hours = aTime.getHours()
            var migDate = new Date()
            var seconds = migDate.getSeconds()
            var minutes = bTime.getMinutes()
            if (minutes < 10 && hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && hours < 10) {
                str = "0" + hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10 && seconds < 10) {
                str = hours + ':' + "0" + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10 && seconds < 10) {
                str = "0" + hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (seconds < 10) {
                str = hours + ':' + minutes + ':' + "0" + seconds
                document.getElementById("time").innerHTML = str;
            } else if (hours < 10) {
                str = "0" + hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else if (minutes < 10) {
                str = hours + ':' + "0" + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            } else {
                str = hours + ':' + minutes + ':' + seconds
                document.getElementById("time").innerHTML = str;
            }
        }, 1000)
    }

    if (response == 'GMT+5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 5))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+5.5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 6))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 30))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = bTime.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+5.75') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 6))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 45))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = bTime.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+6') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 6))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+6.5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 7))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 30))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = bTime.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+7') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 7))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+8') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 8))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+9') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 9))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+9.5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 10))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 30))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = bTime.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+10') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 10))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+11') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 11))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+12') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 12))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT+13') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + 13))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-1') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() + -1))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-2') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -2))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-3') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -3))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-3.5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -4))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 30))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = bTime.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-4') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -4))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-4.5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -5))
        var bTime = new Date(todayDate.setMinutes(todayDate.getMinutes() + 30))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = bTime.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-5') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -5))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-6') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -6))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-7') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -7))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-8') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -8))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-9') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -9))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-10') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -10))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-11') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -11))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

      if (response == 'GMT-12') {
        var aTime = new Date(todayDate.setHours(todayDate.getHours() -12))
          
        setInterval(function timing() {
          var hours = aTime.getHours()
          var migDate = new Date()
          var seconds = migDate.getSeconds()
          var minutes = migDate.getMinutes()
          if (minutes < 10 && hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && hours < 10) {
            str = "0" + hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10 && seconds < 10) {
            str = hours + ':' + "0" + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10 && seconds < 10) {
            str = "0" + hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (seconds < 10) {
            str = hours + ':' + minutes + ':' + "0" + seconds
            document.getElementById("time").innerHTML = str;
          } else if (hours < 10) {
            str = "0" + hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else if (minutes < 10) {
            str = hours + ':' + "0" + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          } else {
            str = hours + ':' + minutes + ':' + seconds
            document.getElementById("time").innerHTML = str;
          }
        }, 1000)
      }

}
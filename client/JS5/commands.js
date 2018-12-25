"use strict";function _classCallCheck(a,b){if(!(a instanceof b))throw new TypeError("Cannot call a class as a function")}function _defineProperties(a,b){for(var c,d=0;d<b.length;d++)c=b[d],c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(a,c.key,c)}function _createClass(a,b,c){return b&&_defineProperties(a.prototype,b),c&&_defineProperties(a,c),a}var Command=/*#__PURE__*/function(){function a(b){var c=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(a){return a},d=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"im";_classCallCheck(this,a),this.reg=new RegExp(b,d),this.exec=c}//ctor
return _createClass(a,[{key:"test",value:function b(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"";return!!this.reg.test(a)&&this.exec(a)}//test
}]),a}(),commands={disconnect:new Command("^"+prefix+"disc?(onnect)?$",function(){return sock.disconnect()}),connect:new Command("^"+prefix+"con(nect)?$",function(){return sock.open()}),admin:new Command("^"+prefix+"adm(in)? .+$",function(a){return sock.emit("imAdmin",drop(a))})};//Command
function command(a){for(var b in commands)if(commands[b].test(a))return}//command
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0pTL2NvbW1hbmRzLmpzIl0sIm5hbWVzIjpbIkNvbW1hbmQiLCJyZWdleHAiLCJleGMiLCJsaW5lIiwiZmxhZ3MiLCJyZWciLCJSZWdFeHAiLCJleGVjIiwiYWdhaW5zdCIsInRlc3QiLCJjb21tYW5kcyIsImRpc2Nvbm5lY3QiLCJwcmVmaXgiLCJzb2NrIiwiY29ubmVjdCIsIm9wZW4iLCJhZG1pbiIsImVtaXQiLCJkcm9wIiwiY29tbWFuZCIsImkiXSwibWFwcGluZ3MiOiJBQUFDLGEscVlBRUtBLENBQUFBLE8seUJBQ0wsV0FBWUMsQ0FBWixDQUErRixJQUFuRUMsQ0FBQUEsQ0FBbUUsd0RBQW5ELFNBQUNDLENBQUQsUUFBdUJBLENBQUFBLENBQXZCLENBQW1ELENBQXRCQyxDQUFzQix3REFBTixJQUFNLHlCQUM5RixLQUFLQyxHQUFMLENBQVcsR0FBSUMsQ0FBQUEsTUFBSixDQUFXTCxDQUFYLENBQW1CRyxDQUFuQixDQURtRixDQUU5RixLQUFLRyxJQUFMLENBQVlMLENBQ1osQ0FBQztxREFFeUIsSUFBdEJNLENBQUFBLENBQXNCLHdEQUFKLEVBQUksU0FDdEIsS0FBS0gsR0FBTCxDQUFTSSxJQUFULENBQWNELENBQWQsQ0FEc0IsRUFFbEIsS0FBS0QsSUFBTCxDQUFVQyxDQUFWLENBSVIsQ0FBQztTQUdDRSxRQUFnQixDQUFHLENBQ3RCQyxVQUFVLENBQUUsR0FBSVgsQ0FBQUEsT0FBSixDQUFZLElBQU1ZLE1BQU4sQ0FBZSxpQkFBM0IsQ0FBOEMsaUJBQVFDLENBQUFBLElBQUksQ0FBQ0YsVUFBTCxFQUFSLENBQTlDLENBRFUsQ0FFdEJHLE9BQU8sQ0FBRSxHQUFJZCxDQUFBQSxPQUFKLENBQVksSUFBTVksTUFBTixDQUFlLGFBQTNCLENBQTBDLGlCQUFRQyxDQUFBQSxJQUFJLENBQUNFLElBQUwsRUFBUixDQUExQyxDQUZhLENBR3RCQyxLQUFLLENBQUUsR0FBSWhCLENBQUFBLE9BQUosQ0FBWSxJQUFNWSxNQUFOLENBQWUsY0FBM0IsQ0FBMkMsU0FBQVQsQ0FBSSxRQUFJVSxDQUFBQSxJQUFJLENBQUNJLElBQUwsQ0FBVSxTQUFWLENBQXFCQyxJQUFJLENBQUNmLENBQUQsQ0FBekIsQ0FBSixDQUEvQyxDQUhlLEMsQ0FGckI7QUFRRixRQUFTZ0IsQ0FBQUEsT0FBVCxDQUFpQmhCLENBQWpCLENBQStCLENBQzlCLElBQUssR0FBSWlCLENBQUFBLENBQVQsR0FBY1YsQ0FBQUEsUUFBZCxDQUNDLEdBQUlBLFFBQVEsQ0FBQ1UsQ0FBRCxDQUFSLENBQVlYLElBQVosQ0FBaUJOLENBQWpCLENBQUosQ0FDQyxNQUdGLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyLvu79cInVzZSBzdHJpY3RcIjtcblxuY2xhc3MgQ29tbWFuZCB7XG5cdGNvbnN0cnVjdG9yKHJlZ2V4cDogc3RyaW5nLCBleGM6IEZ1bmN0aW9uID0gKGxpbmU6IHN0cmluZyk6IGFueSA9PiBsaW5lLCBmbGFnczogc3RyaW5nID0gXCJpbVwiKSB7XG5cdFx0dGhpcy5yZWcgPSBuZXcgUmVnRXhwKHJlZ2V4cCwgZmxhZ3MpO1xuXHRcdHRoaXMuZXhlYyA9IGV4Yztcblx0fSAvL2N0b3JcblxuXHR0ZXN0KGFnYWluc3Q6IHN0cmluZyA9ICcnKSB7XG5cdFx0aWYgKHRoaXMucmVnLnRlc3QoYWdhaW5zdCkpIHtcblx0XHRcdHJldHVybiB0aGlzLmV4ZWMoYWdhaW5zdCk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IC8vdGVzdFxufSAvL0NvbW1hbmRcblxubGV0IGNvbW1hbmRzOiBvYmplY3QgPSB7XG5cdGRpc2Nvbm5lY3Q6IG5ldyBDb21tYW5kKCdeJyArIHByZWZpeCArIFwiZGlzYz8ob25uZWN0KT8kXCIsIGxpbmUgPT4gc29jay5kaXNjb25uZWN0KCkpLFxuXHRjb25uZWN0OiBuZXcgQ29tbWFuZCgnXicgKyBwcmVmaXggKyBcImNvbihuZWN0KT8kXCIsIGxpbmUgPT4gc29jay5vcGVuKCkpLFxuXHRhZG1pbjogbmV3IENvbW1hbmQoJ14nICsgcHJlZml4ICsgXCJhZG0oaW4pPyAuKyRcIiwgbGluZSA9PiBzb2NrLmVtaXQoXCJpbUFkbWluXCIsIGRyb3AobGluZSkpKVxufTtcblxuZnVuY3Rpb24gY29tbWFuZChsaW5lOiBzdHJpbmcpIHtcblx0Zm9yIChsZXQgaSBpbiBjb21tYW5kcykge1xuXHRcdGlmIChjb21tYW5kc1tpXS50ZXN0KGxpbmUpKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXHR9XG59IC8vY29tbWFuZFxuIl19
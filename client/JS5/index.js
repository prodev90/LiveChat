"use strict";function asyncGeneratorStep(a,b,c,d,e,f,g){try{var h=a[f](g),i=h.value}catch(a){return void c(a)}h.done?b(i):Promise.resolve(i).then(d,e)}function _asyncToGenerator(a){return function(){var b=this,c=arguments;return new Promise(function(d,e){function f(a){asyncGeneratorStep(h,d,e,f,g,"next",a)}function g(a){asyncGeneratorStep(h,d,e,f,g,"throw",a)}var h=a.apply(b,c);f(void 0)})}}var text={shift:!1,area:null,send:null},scroll=100,historyIdx=0,hist=[],maxHistory=50,prefix="!!";for(window.nick=getCookie("user")||"guest_"+Math.round(1e5*Math.random());!(nick=prompt("Insert a Nickname:",nick||getCookie("user")))||!/^[a-zA-Z0-9_\-();' ]+$/i.test(nick););function drop(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:1;for(a=a.split(" ");b--;)a.shift();return a.join(" ")}//drop
function dropGet(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;for(a=a.split(" ");b--;)a.shift();return a.shift()}//dropGet
function load(){return _load.apply(this,arguments)}//load
function _load(){return _load=_asyncToGenerator(/*#__PURE__*/regeneratorRuntime.mark(function a(){return regeneratorRuntime.wrap(function(a){for(;;)switch(a.prev=a.next){case 0:console.log("Index loaded"),text.area=document.getElementById("msgarea"),text.send=document.getElementById("txtarea"),auth(nick),setCookie("user",nick),parseQueries(),sock.on("message",function(a,b){message(a,b)}),sock.once("history",function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];for(var d,e=0;e<b.length;e++)d=b[e],console.dir(d),message(d.content,d.user.name)}),sock.once("connect",function(){text.area.innerHTML="",message("This is a Beta version of a chatting service, upcoming features are: profile picture support, multiple chatrooms and more security!","<font color='red'><b>SYSTEM</b></font>"),message("<b>THIS SERVER DOES NOT FOLLOW PRIVACY RULES!! USE AT YOUR OWN AGREEMENT (GDPR)</b>","<font color='red'><b>SYSTEM</b></font>"),message("<u>Please be kind and don't spam, we have means of banning aggitators.</u>","<font color='red'><b>SYSTEM</b></font>"),console.info("The prefix is !!, type !!help in chat for commands.")});case 9:case"end":return a.stop();}},a,this)})),_load.apply(this,arguments)}function send(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:text.send.value;return text.send.value="",a.startsWith(prefix)?command(a):void(a=a.trim(),sendMessage(a))}//send
function sendMessage(a){a?conn?sock.send(a):message("<font color='red'><b>You cannot send messages while disconnected!</b></font>","<font color='red'><b>SYSTEM</b></font>"):message("<font color='red'><b>You cannot send an empty message!</b></font>","<font color='red'><b>SYSTEM</b></font>")}//sendMessage
function message(a,b){var c=document.createElement("p");c.innerHTML="<font color='gray'><small>".concat(new Date().toDateString(),"</small></font>&emsp;<b>").concat(b,":</b> ").concat(a,"<br />"),text.area.appendChild(c),text.area.scrollBy&&text.area.scrollBy(0,scroll)}//message
function shiftcheck(a){var b=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];if("Shift"==a.key)text.shift=b;else{if("ArrowUp"==a.key&&b)return++historyIdx,historyIdx%=hist.length,void(text.send.value=hist[historyIdx]);if("ArrowUp"==a.key)return;if("ArrowDown"==a.key&&b)return historyIdx=1>historyIdx?hist.length-1:historyIdx-1,void(text.send.value=hist[historyIdx]);if("ArrowDown"==a.key)return;if("Enter"==a.key&&!text.shift&&!b)for(send(),hist.unshift("");hist.length>=maxHistory;)hist.pop()}hist[0]=text.send.value}//shiftcheck
function submit(){text.shift=!1,shiftcheck({key:"Enter"},!1)}//submit
function sanitize(a){return a=a.replace(/&/gmi,"&amp;").replace(/</gmi,"&lt;").replace(/>/gmi,"&gt;").replace(/"/gmi,"&quot;").replace(/'/gmi,"&#039;"),a}//sanitize
function parseCookies(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.cookie;return new Map(a.split(";").map(function(a){return a.split("=")}))}//parseCookies
function storeCookies(a){return document.cookie=Array.from(a).map(function(b){return b.join("=")}).join(";")}//storeCookies
function setCookie(a,b){var c=parseCookies();return c.set(a,b),storeCookies(c)}//setCookie
function getCookie(a){var b=parseCookies();return b.get(a)}//getCookie
function parseQueries(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:location.href,b=a.split("?").pop().replace(/#.*?$/,"").split("&").map(function(a){return a.split("=")}),c=!0,d=!1,e=void 0;try{for(var f,g,h=b[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,window[g.shift()]=g.pop()}catch(a){d=!0,e=a}finally{try{c||null==h.return||h.return()}finally{if(d)throw e}}}//parseQueries
window.addEventListener("DOMContentLoaded",load);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0pTL2luZGV4LmpzIl0sIm5hbWVzIjpbInRleHQiLCJzaGlmdCIsImFyZWEiLCJzZW5kIiwic2Nyb2xsIiwiaGlzdG9yeUlkeCIsImhpc3QiLCJtYXhIaXN0b3J5IiwicHJlZml4Iiwid2luZG93IiwibmljayIsImdldENvb2tpZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInByb21wdCIsInRlc3QiLCJkcm9wIiwibGluZSIsInQiLCJzcGxpdCIsImpvaW4iLCJkcm9wR2V0IiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXV0aCIsInNldENvb2tpZSIsInBhcnNlUXVlcmllcyIsInNvY2siLCJvbiIsIm1zZyIsIm1lc3NhZ2UiLCJvbmNlIiwiZGF0YSIsImkiLCJkaXIiLCJjb250ZW50IiwidXNlciIsIm5hbWUiLCJpbm5lckhUTUwiLCJpbmZvIiwidmFsdWUiLCJzdGFydHNXaXRoIiwiY29tbWFuZCIsInRyaW0iLCJzZW5kTWVzc2FnZSIsImNvbm4iLCJwIiwiY3JlYXRlRWxlbWVudCIsIkRhdGUiLCJ0b0RhdGVTdHJpbmciLCJhcHBlbmRDaGlsZCIsInNjcm9sbEJ5Iiwic2hpZnRjaGVjayIsImV2ZW50IiwiZG93biIsImtleSIsImxlbmd0aCIsInVuc2hpZnQiLCJwb3AiLCJzdWJtaXQiLCJzYW5pdGl6ZSIsInJlcGxhY2UiLCJwYXJzZUNvb2tpZXMiLCJjb29raWVzIiwiY29va2llIiwiTWFwIiwibWFwIiwiYyIsInN0b3JlQ29va2llcyIsIkFycmF5IiwiZnJvbSIsImEiLCJ0bXAiLCJzZXQiLCJnZXQiLCJsb2MiLCJsb2NhdGlvbiIsImhyZWYiLCJvdXQiLCJxIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUMsYSxnWUFFR0EsQ0FBQUEsSUFBWSxDQUFHLENBQ2xCQyxLQUFLLEdBRGEsQ0FFbEJDLElBQUksQ0FBRSxJQUZZLENBR2xCQyxJQUFJLENBQUUsSUFIWSxDLENB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QUF3QyxDQUN2QyxHQUFJaUIsQ0FBQUEsQ0FBUSxDQUFHVixZQUFZLEVBQTNCLENBQ0EsTUFBT1UsQ0FBQUEsQ0FBRyxDQUFDRSxHQUFKLENBQVFuQixDQUFSLENBQ1AsQ0FBQztBQUVGLFFBQVM3QixDQUFBQSxZQUFULEVBQW1ELElBQTdCaUQsQ0FBQUEsQ0FBNkIsd0RBQWZDLFFBQVEsQ0FBQ0MsSUFBTSxDQUM5Q0MsQ0FBRyxDQUFHSCxDQUFHLENBQUMzRCxLQUFKLENBQVUsR0FBVixFQUFlMEMsR0FBZixHQUFxQkcsT0FBckIsQ0FBNkIsT0FBN0IsQ0FBc0MsRUFBdEMsRUFBMEM3QyxLQUExQyxDQUFnRCxHQUFoRCxFQUFxRGtELEdBQXJELENBQXlELFNBQUFhLENBQUMsUUFBSUEsQ0FBQUEsQ0FBQyxDQUFDL0QsS0FBRixDQUFRLEdBQVIsQ0FBSixDQUExRCxDQUR3Qyx3QkFHbEQsVUFBU2lCLENBQVQsR0FBYzZDLENBQWQsZ0RBQVM3QyxDQUFULFNBQ0M1QixNQUFNLENBQUM0QixDQUFDLENBQUNwQyxLQUFGLEVBQUQsQ0FBTixDQUFvQm9DLENBQUMsQ0FBQ3lCLEdBQUYsRUFKNkIsbUZBTWxELENBQUM7QUFFRnJELE1BQU0sQ0FBQzJFLGdCQUFQLENBQXdCLGtCQUF4QixDQUE0QzdELElBQTVDLEMiLCJzb3VyY2VzQ29udGVudCI6WyLvu79cInVzZSBzdHJpY3RcIjtcclxuXHJcbmxldCB0ZXh0OiBvYmplY3QgPSB7XHJcblx0c2hpZnQ6IGZhbHNlLFxyXG5cdGFyZWE6IG51bGwsXHJcblx0c2VuZDogbnVsbFxyXG59LFxyXG5cdHNjcm9sbDogbnVtYmVyID0gMTAwLFxyXG5cdGhpc3RvcnlJZHg6IG51bWJlciA9IDAsXHJcblx0aGlzdDogQXJyYXkgPSBbIF0sXHJcblx0bWF4SGlzdG9yeTogbnVtYmVyID0gNTA7XHJcblxyXG5jb25zdCBwcmVmaXg6IHN0cmluZyA9IFwiISFcIjtcclxuXHJcbndpbmRvdy5uaWNrID0gZ2V0Q29va2llKFwidXNlclwiKSB8fCBcImd1ZXN0X1wiICsgTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpICogMWU1KTtcclxuXHJcbndoaWxlICghKG5pY2sgPSBwcm9tcHQoXCJJbnNlcnQgYSBOaWNrbmFtZTpcIiwgbmljayB8fCBnZXRDb29raWUoXCJ1c2VyXCIpKSkgfHwgIS9eW2EtekEtWjAtOV9cXC0oKTsnIF0rJC9pLnRlc3QobmljaykpIHsgfVxyXG5cclxuZnVuY3Rpb24gZHJvcChsaW5lOiBudW1iZXIsIHQ6IG51bWJlciA9IDEpOiBzdHJpbmcge1xyXG5cdGxpbmUgPSBsaW5lLnNwbGl0KCcgJyk7XHJcblx0d2hpbGUgKHQtLSkge1xyXG5cdFx0bGluZS5zaGlmdCgpO1xyXG5cdH1cclxuXHRyZXR1cm4gbGluZS5qb2luKCcgJyk7XHJcbn0gLy9kcm9wXHJcblxyXG5mdW5jdGlvbiBkcm9wR2V0KGxpbmU6IG51bWJlciwgdDogbnVtYmVyID0gMCk6IHN0cmluZyB7XHJcblx0bGluZSA9IGxpbmUuc3BsaXQoJyAnKTtcclxuXHR3aGlsZSAodC0tKSB7XHJcblx0XHRsaW5lLnNoaWZ0KCk7XHJcblx0fVxyXG5cdHJldHVybiBsaW5lLnNoaWZ0KCk7XHJcbn0gLy9kcm9wR2V0XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkKGU/OiBvYmplY3QpOiB2b2lkIHtcclxuXHRjb25zb2xlLmxvZyhcIkluZGV4IGxvYWRlZFwiKTtcclxuXHJcblx0dGV4dC5hcmVhID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtc2dhcmVhXCIpO1xyXG5cdHRleHQuc2VuZCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidHh0YXJlYVwiKTtcclxuXHJcblx0YXV0aChuaWNrKTtcclxuXHRzZXRDb29raWUoXCJ1c2VyXCIsIG5pY2spO1xyXG5cdHBhcnNlUXVlcmllcygpO1xyXG5cdFxyXG5cdHNvY2sub24oXCJtZXNzYWdlXCIsIChtc2c6IHN0cmluZywgbmljazogc3RyaW5nKTogdm9pZCA9PiB7XHJcblx0XHRtZXNzYWdlKG1zZywgbmljayk7XHJcblx0fSk7XHJcblx0c29jay5vbmNlKFwiaGlzdG9yeVwiLCAoLi4uZGF0YTogc3RyaW5nW10pOiB2b2lkID0+IHtcclxuXHRcdGZvciAobGV0IGkgb2YgZGF0YSkge1xyXG5cdFx0XHRjb25zb2xlLmRpcihpKTtcclxuXHRcdFx0bWVzc2FnZShpLmNvbnRlbnQsIGkudXNlci5uYW1lKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHRzb2NrLm9uY2UoXCJjb25uZWN0XCIsICgpOiB2b2lkID0+IHtcclxuXHRcdHRleHQuYXJlYS5pbm5lckhUTUwgPSAnJztcclxuXHRcdG1lc3NhZ2UoXCJUaGlzIGlzIGEgQmV0YSB2ZXJzaW9uIG9mIGEgY2hhdHRpbmcgc2VydmljZSwgdXBjb21pbmcgZmVhdHVyZXMgYXJlOiBwcm9maWxlIHBpY3R1cmUgc3VwcG9ydCwgbXVsdGlwbGUgY2hhdHJvb21zIGFuZCBtb3JlIHNlY3VyaXR5IVwiLCBcIjxmb250IGNvbG9yPSdyZWQnPjxiPlNZU1RFTTwvYj48L2ZvbnQ+XCIpO1xyXG5cdFx0bWVzc2FnZShcIjxiPlRISVMgU0VSVkVSIERPRVMgTk9UIEZPTExPVyBQUklWQUNZIFJVTEVTISEgVVNFIEFUIFlPVVIgT1dOIEFHUkVFTUVOVCAoR0RQUik8L2I+XCIsIFwiPGZvbnQgY29sb3I9J3JlZCc+PGI+U1lTVEVNPC9iPjwvZm9udD5cIik7XHJcblx0XHRtZXNzYWdlKFwiPHU+UGxlYXNlIGJlIGtpbmQgYW5kIGRvbid0IHNwYW0sIHdlIGhhdmUgbWVhbnMgb2YgYmFubmluZyBhZ2dpdGF0b3JzLjwvdT5cIiwgXCI8Zm9udCBjb2xvcj0ncmVkJz48Yj5TWVNURU08L2I+PC9mb250PlwiKTtcclxuXHRcdGNvbnNvbGUuaW5mbyhcIlRoZSBwcmVmaXggaXMgISEsIHR5cGUgISFoZWxwIGluIGNoYXQgZm9yIGNvbW1hbmRzLlwiKTtcclxuXHR9KTtcclxufSAvL2xvYWRcclxuXHJcbmZ1bmN0aW9uIHNlbmQobXNnOiBzdHJpbmcgPSB0ZXh0LnNlbmQudmFsdWUpOiB2b2lkIHtcclxuXHR0ZXh0LnNlbmQudmFsdWUgPSAnJztcclxuXHRpZiAobXNnLnN0YXJ0c1dpdGgocHJlZml4KSkge1xyXG5cdFx0cmV0dXJuIGNvbW1hbmQobXNnKTtcclxuXHR9XHJcblx0bXNnID0gbXNnLnRyaW0oKTtcclxuXHRzZW5kTWVzc2FnZShtc2cpO1xyXG59IC8vc2VuZFxyXG5cclxuZnVuY3Rpb24gc2VuZE1lc3NhZ2UobXNnOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRpZiAoIW1zZykge1xyXG5cdFx0bWVzc2FnZShcIjxmb250IGNvbG9yPSdyZWQnPjxiPllvdSBjYW5ub3Qgc2VuZCBhbiBlbXB0eSBtZXNzYWdlITwvYj48L2ZvbnQ+XCIsIFwiPGZvbnQgY29sb3I9J3JlZCc+PGI+U1lTVEVNPC9iPjwvZm9udD5cIik7XHJcblx0fSBlbHNlIGlmIChjb25uKSB7XHJcblx0XHRzb2NrLnNlbmQobXNnKTtcclxuXHR9IGVsc2Uge1xyXG5cdFx0bWVzc2FnZShcIjxmb250IGNvbG9yPSdyZWQnPjxiPllvdSBjYW5ub3Qgc2VuZCBtZXNzYWdlcyB3aGlsZSBkaXNjb25uZWN0ZWQhPC9iPjwvZm9udD5cIiwgXCI8Zm9udCBjb2xvcj0ncmVkJz48Yj5TWVNURU08L2I+PC9mb250PlwiKTtcclxuXHR9XHJcbn0gLy9zZW5kTWVzc2FnZVxyXG5cclxuZnVuY3Rpb24gbWVzc2FnZShtc2c6IHN0cmluZywgdXNlcjogc3RyaW5nKTogdm9pZCB7XHJcblx0bGV0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcclxuXHRwLmlubmVySFRNTCA9IGA8Zm9udCBjb2xvcj0nZ3JheSc+PHNtYWxsPiR7KG5ldyBEYXRlKCkpLnRvRGF0ZVN0cmluZygpfTwvc21hbGw+PC9mb250PiZlbXNwOzxiPiR7dXNlcn06PC9iPiAke21zZ308YnIgLz5gO1xyXG5cdFxyXG5cdHRleHQuYXJlYS5hcHBlbmRDaGlsZChwKTtcclxuXHRpZiAodGV4dC5hcmVhLnNjcm9sbEJ5KSB7XHJcblx0XHR0ZXh0LmFyZWEuc2Nyb2xsQnkoMCwgc2Nyb2xsKTtcclxuXHR9XHJcbn0gLy9tZXNzYWdlXHJcblxyXG5mdW5jdGlvbiBzaGlmdGNoZWNrKGV2ZW50OiBvYmplY3QsIGRvd246IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblx0aWYgKGV2ZW50LmtleSA9PSBcIlNoaWZ0XCIpIHtcclxuXHRcdHRleHQuc2hpZnQgPSBkb3duO1xyXG5cdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiICYmIGRvd24pIHtcclxuXHRcdCsraGlzdG9yeUlkeDtcclxuXHRcdGhpc3RvcnlJZHggJT0gaGlzdC5sZW5ndGg7XHJcblx0XHR0ZXh0LnNlbmQudmFsdWUgPSBoaXN0W2hpc3RvcnlJZHhdO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIiAmJiBkb3duKSB7XHJcblx0XHRoaXN0b3J5SWR4ID0gKGhpc3RvcnlJZHggPCAxKSA/IChoaXN0Lmxlbmd0aCAtIDEpIDogKGhpc3RvcnlJZHggLSAxKTtcclxuXHRcdHRleHQuc2VuZC52YWx1ZSA9IGhpc3RbaGlzdG9yeUlkeF07XHJcblx0XHRyZXR1cm47XHJcblx0fSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIiAmJiAhdGV4dC5zaGlmdCAmJiAhZG93bikge1xyXG5cdFx0c2VuZCgpO1xyXG5cdFx0aGlzdC51bnNoaWZ0KCcnKTtcclxuXHRcdHdoaWxlIChoaXN0Lmxlbmd0aCA+PSBtYXhIaXN0b3J5KSB7XHJcblx0XHRcdGhpc3QucG9wKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGhpc3RbMF0gPSB0ZXh0LnNlbmQudmFsdWU7XHJcbn0gLy9zaGlmdGNoZWNrXHJcblxyXG5mdW5jdGlvbiBzdWJtaXQoZT86IG9iamVjdCk6IHZvaWQge1xyXG5cdHRleHQuc2hpZnQgPSBmYWxzZTtcclxuXHRzaGlmdGNoZWNrKHtcclxuXHRcdGtleTogXCJFbnRlclwiXHJcblx0fSwgZmFsc2UpO1xyXG59IC8vc3VibWl0XHJcblxyXG5mdW5jdGlvbiBzYW5pdGl6ZShtc2c6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0bXNnID0gbXNnLnJlcGxhY2UoLyYvZ21pLCBcIiZhbXA7XCIpXHJcblx0XHQucmVwbGFjZSgvPC9nbWksIFwiJmx0O1wiKVxyXG5cdFx0LnJlcGxhY2UoLz4vZ21pLCBcIiZndDtcIilcclxuXHRcdC5yZXBsYWNlKC9cIi9nbWksIFwiJnF1b3Q7XCIpXHJcblx0XHQucmVwbGFjZSgvJy9nbWksIFwiJiMwMzk7XCIpO1xyXG5cdHJldHVybiBtc2c7XHJcbn0gLy9zYW5pdGl6ZVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXM6IHN0cmluZyA9IGRvY3VtZW50LmNvb2tpZSk6IE1hcCB7XHJcblx0cmV0dXJuIG5ldyBNYXAoY29va2llcy5zcGxpdCgnOycpLm1hcChjID0+IGMuc3BsaXQoJz0nKSkpO1xyXG59IC8vcGFyc2VDb29raWVzXHJcblxyXG5mdW5jdGlvbiBzdG9yZUNvb2tpZXMobWFwOiBNYXApOiBzdHJpbmcge1xyXG5cdHJldHVybiBkb2N1bWVudC5jb29raWUgPSBBcnJheS5mcm9tKG1hcCkubWFwKGEgPT4gYS5qb2luKCc9JykpLmpvaW4oJzsnKTtcclxufSAvL3N0b3JlQ29va2llc1xyXG5cclxuZnVuY3Rpb24gc2V0Q29va2llKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRsZXQgdG1wID0gcGFyc2VDb29raWVzKCk7XHJcblx0dG1wLnNldChrZXksIHZhbHVlKTtcclxuXHRyZXR1cm4gc3RvcmVDb29raWVzKHRtcCk7XHJcbn0gLy9zZXRDb29raWVcclxuXHJcbmZ1bmN0aW9uIGdldENvb2tpZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0bGV0IHRtcDogTWFwID0gcGFyc2VDb29raWVzKCk7XHJcblx0cmV0dXJuIHRtcC5nZXQoa2V5KTtcclxufSAvL2dldENvb2tpZVxyXG5cclxuZnVuY3Rpb24gcGFyc2VRdWVyaWVzKGxvYzogc3RyaW5nID0gbG9jYXRpb24uaHJlZikge1xyXG5cdGxldCBvdXQgPSBsb2Muc3BsaXQoJz8nKS5wb3AoKS5yZXBsYWNlKC8jLio/JC8sICcnKS5zcGxpdCgnJicpLm1hcChxID0+IHEuc3BsaXQoJz0nKSk7XHJcblxyXG5cdGZvciAobGV0IGkgb2Ygb3V0KSB7XHJcblx0XHR3aW5kb3dbaS5zaGlmdCgpXSA9IGkucG9wKCk7XHJcblx0fVxyXG59IC8vcGFyc2VRdWVyaWVzXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZCk7XHJcbiJdfQ==
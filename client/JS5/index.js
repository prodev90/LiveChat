"use strict";var text={shift:!1,area:null,send:null},scroll=100,historyIdx=0,hist=[],maxHistory=50,prefix="!!";for(window.nick=getCookie("user")||"guest_"+Math.round(1e5*Math.random());!(nick=prompt("Insert a Nickname:",nick||getCookie("user")))||!/^[a-zA-Z0-9_\-();' ]+$/i.test(nick););function drop(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:1;for(a=a.split(" ");b--;)a.shift();return a.join(" ")}//drop
function dropGet(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:0;for(a=a.split(" ");b--;)a.shift();return a.shift()}//dropGet
function load(){console.log("Index loaded"),text.area=document.getElementById("msgarea"),text.send=document.getElementById("txtarea"),auth(nick),setCookie("user",nick),parseQueries(),sock.on("message",function(a,b){message(a,b)}),sock.once("history",function(){for(var a=arguments.length,b=Array(a),c=0;c<a;c++)b[c]=arguments[c];for(var d,e=0;e<b.length;e++)d=b[e],console.dir(d),message(d.content,d.user.name)}),sock.once("connect",function(){text.area.innerHTML="",message("This is a Beta version of a chatting service, upcoming features are: profile picture support, multiple chatrooms and more security!","<font color='red'><b>SYSTEM</b></font>"),message("<b>THIS SERVER DOES NOT FOLLOW PRIVACY RULES!! USE AT YOUR OWN AGREEMENT (GDPR)</b>","<font color='red'><b>SYSTEM</b></font>"),message("<u>Please be kind and don't spam, we have means of banning aggitators.</u>","<font color='red'><b>SYSTEM</b></font>"),console.info("The prefix is !!, type !!help in chat for commands.")})}//load
function send(){var a=0<arguments.length&&void 0!==arguments[0]?arguments[0]:text.send.value;return text.send.value="",a.startsWith(prefix)?command(a):void(a=a.trim(),sendMessage(a))}//send
function sendMessage(a){a?conn?sock.send(a):message("<font color='red'><b>You cannot send messages while disconnected!</b></font>","<font color='red'><b>SYSTEM</b></font>"):message("<font color='red'><b>You cannot send an empty message!</b></font>","<font color='red'><b>SYSTEM</b></font>")}//sendMessage
function message(a,b){var c=document.createElement("p");c.innerHTML="<b>".concat(b,":</b> ").concat(a,"<br />"),text.area.appendChild(c),text.area.scrollBy&&text.area.scrollBy(0,scroll)}//message
function shiftcheck(a){var b=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];if("Shift"==a.key)text.shift=b;else{if("ArrowUp"==a.key&&b)return++historyIdx,historyIdx%=hist.length,void(text.send.value=hist[historyIdx]);if("ArrowUp"==a.key)return;if("ArrowDown"==a.key&&b)return historyIdx=1>historyIdx?hist.length-1:historyIdx-1,void(text.send.value=hist[historyIdx]);if("ArrowDown"==a.key)return;if("Enter"==a.key&&!text.shift&&!b)for(send(),hist.unshift("");hist.length>=maxHistory;)hist.pop()}hist[0]=text.send.value}//shiftcheck
function submit(){text.shift=!1,shiftcheck({key:"Enter"},!1)}//submit
function sanitize(a){return a=a.replace(/&/gmi,"&amp;").replace(/</gmi,"&lt;").replace(/>/gmi,"&gt;").replace(/"/gmi,"&quot;").replace(/'/gmi,"&#039;"),a}//sanitize
function parseCookies(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:document.cookie;return new Map(a.split(";").map(function(a){return a.split("=")}))}//parseCookies
function storeCookies(a){return document.cookie=Array.from(a).map(function(b){return b.join("=")}).join(";")}//storeCookies
function setCookie(a,b){var c=parseCookies();return c.set(a,b),storeCookies(c)}//setCookie
function getCookie(a){var b=parseCookies();return b.get(a)}//getCookie
function parseQueries(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:location.href,b=a.split("?").pop().replace(/#.*?$/,"").split("&").map(function(a){return a.split("=")}),c=!0,d=!1,e=void 0;try{for(var f,g,h=b[Symbol.iterator]();!(c=(f=h.next()).done);c=!0)g=f.value,window[g.shift()]=g.pop()}catch(a){d=!0,e=a}finally{try{c||null==h.return||h.return()}finally{if(d)throw e}}}//parseQueries
window.addEventListener("DOMContentLoaded",load);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL0pTL2luZGV4LmpzIl0sIm5hbWVzIjpbInRleHQiLCJzaGlmdCIsImFyZWEiLCJzZW5kIiwic2Nyb2xsIiwiaGlzdG9yeUlkeCIsImhpc3QiLCJtYXhIaXN0b3J5IiwicHJlZml4Iiwid2luZG93IiwibmljayIsImdldENvb2tpZSIsIk1hdGgiLCJyb3VuZCIsInJhbmRvbSIsInByb21wdCIsInRlc3QiLCJkcm9wIiwibGluZSIsInQiLCJzcGxpdCIsImpvaW4iLCJkcm9wR2V0IiwibG9hZCIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYXV0aCIsInNldENvb2tpZSIsInBhcnNlUXVlcmllcyIsInNvY2siLCJvbiIsIm1zZyIsIm1lc3NhZ2UiLCJvbmNlIiwiZGF0YSIsImkiLCJkaXIiLCJjb250ZW50IiwidXNlciIsIm5hbWUiLCJpbm5lckhUTUwiLCJpbmZvIiwidmFsdWUiLCJzdGFydHNXaXRoIiwiY29tbWFuZCIsInRyaW0iLCJzZW5kTWVzc2FnZSIsImNvbm4iLCJwIiwiY3JlYXRlRWxlbWVudCIsImFwcGVuZENoaWxkIiwic2Nyb2xsQnkiLCJzaGlmdGNoZWNrIiwiZXZlbnQiLCJkb3duIiwia2V5IiwibGVuZ3RoIiwidW5zaGlmdCIsInBvcCIsInN1Ym1pdCIsInNhbml0aXplIiwicmVwbGFjZSIsInBhcnNlQ29va2llcyIsImNvb2tpZXMiLCJjb29raWUiLCJNYXAiLCJtYXAiLCJjIiwic3RvcmVDb29raWVzIiwiQXJyYXkiLCJmcm9tIiwiYSIsInRtcCIsInNldCIsImdldCIsImxvYyIsImxvY2F0aW9uIiwiaHJlZiIsIm91dCIsInEiLCJhZGRFdmVudExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQyxhLEdBRUdBLENBQUFBLElBQVksQ0FBRyxDQUNsQkMsS0FBSyxHQURhLENBRWxCQyxJQUFJLENBQUUsSUFGWSxDQUdsQkMsSUFBSSxDQUFFLElBSFksQyxDQUtsQkMsTUFBYyxDQUFHLEcsQ0FDakJDLFVBQWtCLENBQUcsQyxDQUNyQkMsSUFBVyxDQUFHLEUsQ0FDZEMsVUFBa0IsQ0FBRyxFLENBRWhCQyxNQUFjLENBQUcsSSxLQUV2QkMsTUFBTSxDQUFDQyxJQUFQLENBQWNDLFNBQVMsQ0FBQyxNQUFELENBQVQsRUFBcUIsU0FBV0MsSUFBSSxDQUFDQyxLQUFMLENBQTJCLEdBQWhCLENBQUFELElBQUksQ0FBQ0UsTUFBTCxFQUFYLEMsQ0FFdkMsRUFBRUosSUFBSSxDQUFHSyxNQUFNLENBQUMsb0JBQUQsQ0FBdUJMLElBQUksRUFBSUMsU0FBUyxDQUFDLE1BQUQsQ0FBeEMsQ0FBZixHQUFxRSxDQUFDLDBCQUEwQkssSUFBMUIsQ0FBK0JOLElBQS9CLEMsR0FFN0UsUUFBU08sQ0FBQUEsSUFBVCxDQUFjQyxDQUFkLENBQW1ELElBQXZCQyxDQUFBQSxDQUF1Qix3REFBWCxDQUFXLEtBQ2xERCxDQUFJLENBQUdBLENBQUksQ0FBQ0UsS0FBTCxDQUFXLEdBQVgsQ0FEMkMsQ0FFM0NELENBQUMsRUFGMEMsRUFHakRELENBQUksQ0FBQ2pCLEtBQUwsR0FFRCxNQUFPaUIsQ0FBQUEsQ0FBSSxDQUFDRyxJQUFMLENBQVUsR0FBVixDQUNQLENBQUM7QUFFRixRQUFTQyxDQUFBQSxPQUFULENBQWlCSixDQUFqQixDQUFzRCxJQUF2QkMsQ0FBQUEsQ0FBdUIsd0RBQVgsQ0FBVyxLQUNyREQsQ0FBSSxDQUFHQSxDQUFJLENBQUNFLEtBQUwsQ0FBVyxHQUFYLENBRDhDLENBRTlDRCxDQUFDLEVBRjZDLEVBR3BERCxDQUFJLENBQUNqQixLQUFMLEdBRUQsTUFBT2lCLENBQUFBLENBQUksQ0FBQ2pCLEtBQUwsRUFDUCxDQUFDO0FBRUYsUUFBU3NCLENBQUFBLElBQVQsRUFBZ0MsQ0FDL0JDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosQ0FEK0IsQ0FHL0J6QixJQUFJLENBQUNFLElBQUwsQ0FBWXdCLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixTQUF4QixDQUhtQixDQUkvQjNCLElBQUksQ0FBQ0csSUFBTCxDQUFZdUIsUUFBUSxDQUFDQyxjQUFULENBQXdCLFNBQXhCLENBSm1CLENBTS9CQyxJQUFJLENBQUNsQixJQUFELENBTjJCLENBTy9CbUIsU0FBUyxDQUFDLE1BQUQsQ0FBU25CLElBQVQsQ0FQc0IsQ0FRL0JvQixZQUFZLEVBUm1CLENBVS9CQyxJQUFJLENBQUNDLEVBQUwsQ0FBUSxTQUFSLENBQW1CLFNBQUNDLENBQUQsQ0FBY3ZCLENBQWQsQ0FBcUMsQ0FDdkR3QixPQUFPLENBQUNELENBQUQsQ0FBTXZCLENBQU4sQ0FDUCxDQUZELENBVitCLENBYS9CcUIsSUFBSSxDQUFDSSxJQUFMLENBQVUsU0FBVixDQUFxQixVQUE2Qiw0QkFBekJDLENBQXlCLHNCQUF6QkEsQ0FBeUIsaUJBQ2pELE9BQVNDLENBQUFBLENBQVQsT0FBY0QsQ0FBZCxZQUFTQyxDQUFULENBQWNELENBQWQsSUFDQ1osT0FBTyxDQUFDYyxHQUFSLENBQVlELENBQVosQ0FERCxDQUVDSCxPQUFPLENBQUNHLENBQUMsQ0FBQ0UsT0FBSCxDQUFZRixDQUFDLENBQUNHLElBQUYsQ0FBT0MsSUFBbkIsQ0FFUixDQUxELENBYitCLENBbUIvQlYsSUFBSSxDQUFDSSxJQUFMLENBQVUsU0FBVixDQUFxQixVQUFZLENBQ2hDbkMsSUFBSSxDQUFDRSxJQUFMLENBQVV3QyxTQUFWLENBQXNCLEVBRFUsQ0FFaENSLE9BQU8sQ0FBQyxxSUFBRCxDQUF3SSx3Q0FBeEksQ0FGeUIsQ0FHaENBLE9BQU8sQ0FBQyxxRkFBRCxDQUF3Rix3Q0FBeEYsQ0FIeUIsQ0FJaENBLE9BQU8sQ0FBQyw0RUFBRCxDQUErRSx3Q0FBL0UsQ0FKeUIsQ0FLaENWLE9BQU8sQ0FBQ21CLElBQVIsQ0FBYSxxREFBYixDQUNBLENBTkQsQ0FPQSxDQUFDO0FBRUYsUUFBU3hDLENBQUFBLElBQVQsRUFBbUQsSUFBckM4QixDQUFBQSxDQUFxQyx3REFBdkJqQyxJQUFJLENBQUNHLElBQUwsQ0FBVXlDLEtBQWEsT0FDbEQ1QyxDQUFBQSxJQUFJLENBQUNHLElBQUwsQ0FBVXlDLEtBQVYsQ0FBa0IsRUFEZ0MsQ0FFOUNYLENBQUcsQ0FBQ1ksVUFBSixDQUFlckMsTUFBZixDQUY4QyxDQUcxQ3NDLE9BQU8sQ0FBQ2IsQ0FBRCxDQUhtQyxNQUtsREEsQ0FBRyxDQUFHQSxDQUFHLENBQUNjLElBQUosRUFMNEMsQ0FNbERDLFdBQVcsQ0FBQ2YsQ0FBRCxDQU51QyxDQU9sRCxDQUFDO0FBRUYsUUFBU2UsQ0FBQUEsV0FBVCxDQUFxQmYsQ0FBckIsQ0FBd0MsQ0FDbENBLENBRGtDLENBRzVCZ0IsSUFINEIsQ0FJdENsQixJQUFJLENBQUM1QixJQUFMLENBQVU4QixDQUFWLENBSnNDLENBTXRDQyxPQUFPLENBQUMsOEVBQUQsQ0FBaUYsd0NBQWpGLENBTitCLENBRXRDQSxPQUFPLENBQUMsbUVBQUQsQ0FBc0Usd0NBQXRFLENBTVIsQ0FBQztBQUVGLFFBQVNBLENBQUFBLE9BQVQsQ0FBaUJELENBQWpCLENBQThCTyxDQUE5QixDQUFrRCxDQUNqRCxHQUFJVSxDQUFBQSxDQUFDLENBQUd4QixRQUFRLENBQUN5QixhQUFULENBQXVCLEdBQXZCLENBQVIsQ0FDQUQsQ0FBQyxDQUFDUixTQUFGLGNBQW9CRixDQUFwQixrQkFBaUNQLENBQWpDLFVBRmlELENBSWpEakMsSUFBSSxDQUFDRSxJQUFMLENBQVVrRCxXQUFWLENBQXNCRixDQUF0QixDQUppRCxDQUs3Q2xELElBQUksQ0FBQ0UsSUFBTCxDQUFVbUQsUUFMbUMsRUFNaERyRCxJQUFJLENBQUNFLElBQUwsQ0FBVW1ELFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBc0JqRCxNQUF0QixDQUVELENBQUM7QUFFRixRQUFTa0QsQ0FBQUEsVUFBVCxDQUFvQkMsQ0FBcEIsQ0FBK0QsSUFBNUJDLENBQUFBLENBQTRCLDREQUM5RCxHQUFpQixPQUFiLEVBQUFELENBQUssQ0FBQ0UsR0FBVixDQUNDekQsSUFBSSxDQUFDQyxLQUFMLENBQWF1RCxDQURkLE1BRU8sR0FBaUIsU0FBYixFQUFBRCxDQUFLLENBQUNFLEdBQU4sRUFBMEJELENBQTlCLENBSU4sTUFIQSxFQUFFbkQsVUFHRixDQUZBQSxVQUFVLEVBQUlDLElBQUksQ0FBQ29ELE1BRW5CLE1BREExRCxJQUFJLENBQUNHLElBQUwsQ0FBVXlDLEtBQVYsQ0FBa0J0QyxJQUFJLENBQUNELFVBQUQsQ0FDdEIsRUFDTSxHQUFpQixTQUFiLEVBQUFrRCxDQUFLLENBQUNFLEdBQVYsQ0FDTixPQUNNLEdBQWlCLFdBQWIsRUFBQUYsQ0FBSyxDQUFDRSxHQUFOLEVBQTRCRCxDQUFoQyxDQUdOLE1BRkFuRCxDQUFBQSxVQUFVLENBQWlCLENBQWIsQ0FBQUEsVUFBRCxDQUFvQkMsSUFBSSxDQUFDb0QsTUFBTCxDQUFjLENBQWxDLENBQXdDckQsVUFBVSxDQUFHLENBRWxFLE1BREFMLElBQUksQ0FBQ0csSUFBTCxDQUFVeUMsS0FBVixDQUFrQnRDLElBQUksQ0FBQ0QsVUFBRCxDQUN0QixFQUNNLEdBQWlCLFdBQWIsRUFBQWtELENBQUssQ0FBQ0UsR0FBVixDQUNOLE9BQ00sR0FBaUIsT0FBYixFQUFBRixDQUFLLENBQUNFLEdBQU4sRUFBd0IsQ0FBQ3pELElBQUksQ0FBQ0MsS0FBOUIsRUFBdUMsQ0FBQ3VELENBQTVDLEtBQ05yRCxJQUFJLEVBREUsQ0FFTkcsSUFBSSxDQUFDcUQsT0FBTCxDQUFhLEVBQWIsQ0FGTSxDQUdDckQsSUFBSSxDQUFDb0QsTUFBTCxFQUFlbkQsVUFIaEIsRUFJTEQsSUFBSSxDQUFDc0QsR0FBTCxFQW5CRixDQXNCQXRELElBQUksQ0FBQyxDQUFELENBQUosQ0FBVU4sSUFBSSxDQUFDRyxJQUFMLENBQVV5QyxLQUNwQixDQUFDO0FBRUYsUUFBU2lCLENBQUFBLE1BQVQsRUFBa0MsQ0FDakM3RCxJQUFJLENBQUNDLEtBQUwsR0FEaUMsQ0FFakNxRCxVQUFVLENBQUMsQ0FDVkcsR0FBRyxDQUFFLE9BREssQ0FBRCxJQUdWLENBQUM7QUFFRixRQUFTSyxDQUFBQSxRQUFULENBQWtCN0IsQ0FBbEIsQ0FBdUMsQ0FNdEMsTUFMQUEsQ0FBQUEsQ0FBRyxDQUFHQSxDQUFHLENBQUM4QixPQUFKLENBQVksTUFBWixDQUFvQixPQUFwQixFQUNKQSxPQURJLENBQ0ksTUFESixDQUNZLE1BRFosRUFFSkEsT0FGSSxDQUVJLE1BRkosQ0FFWSxNQUZaLEVBR0pBLE9BSEksQ0FHSSxNQUhKLENBR1ksUUFIWixFQUlKQSxPQUpJLENBSUksTUFKSixDQUlZLFFBSlosQ0FLTixDQUFPOUIsQ0FDUCxDQUFDO0FBRUYsUUFBUytCLENBQUFBLFlBQVQsRUFBOEQsSUFBeENDLENBQUFBLENBQXdDLHdEQUF0QnZDLFFBQVEsQ0FBQ3dDLE1BQWEsQ0FDN0QsTUFBTyxJQUFJQyxDQUFBQSxHQUFKLENBQVFGLENBQU8sQ0FBQzdDLEtBQVIsQ0FBYyxHQUFkLEVBQW1CZ0QsR0FBbkIsQ0FBdUIsU0FBQUMsQ0FBQyxRQUFJQSxDQUFBQSxDQUFDLENBQUNqRCxLQUFGLENBQVEsR0FBUixDQUFKLENBQXhCLENBQVIsQ0FDUCxDQUFDO0FBRUYsUUFBU2tELENBQUFBLFlBQVQsQ0FBc0JGLENBQXRCLENBQXdDLENBQ3ZDLE1BQU8xQyxDQUFBQSxRQUFRLENBQUN3QyxNQUFULENBQWtCSyxLQUFLLENBQUNDLElBQU4sQ0FBV0osQ0FBWCxFQUFnQkEsR0FBaEIsQ0FBb0IsU0FBQUssQ0FBQyxRQUFJQSxDQUFBQSxDQUFDLENBQUNwRCxJQUFGLENBQU8sR0FBUCxDQUFKLENBQXJCLEVBQXNDQSxJQUF0QyxDQUEyQyxHQUEzQyxDQUN6QixDQUFDO0FBRUYsUUFBU1EsQ0FBQUEsU0FBVCxDQUFtQjRCLENBQW5CLENBQWdDYixDQUFoQyxDQUF1RCxDQUN0RCxHQUFJOEIsQ0FBQUEsQ0FBRyxDQUFHVixZQUFZLEVBQXRCLENBRUEsTUFEQVUsQ0FBQUEsQ0FBRyxDQUFDQyxHQUFKLENBQVFsQixDQUFSLENBQWFiLENBQWIsQ0FDQSxDQUFPMEIsWUFBWSxDQUFDSSxDQUFELENBQ25CLENBQUM7QUFFRixRQUFTL0QsQ0FBQUEsU0FBVCxDQUFtQjhDLENBQW5CLENBQXdDLENBQ3ZDLEdBQUlpQixDQUFBQSxDQUFRLENBQUdWLFlBQVksRUFBM0IsQ0FDQSxNQUFPVSxDQUFBQSxDQUFHLENBQUNFLEdBQUosQ0FBUW5CLENBQVIsQ0FDUCxDQUFDO0FBRUYsUUFBUzNCLENBQUFBLFlBQVQsRUFBbUQsSUFBN0IrQyxDQUFBQSxDQUE2Qix3REFBZkMsUUFBUSxDQUFDQyxJQUFNLENBQzlDQyxDQUFHLENBQUdILENBQUcsQ0FBQ3pELEtBQUosQ0FBVSxHQUFWLEVBQWV3QyxHQUFmLEdBQXFCRyxPQUFyQixDQUE2QixPQUE3QixDQUFzQyxFQUF0QyxFQUEwQzNDLEtBQTFDLENBQWdELEdBQWhELEVBQXFEZ0QsR0FBckQsQ0FBeUQsU0FBQWEsQ0FBQyxRQUFJQSxDQUFBQSxDQUFDLENBQUM3RCxLQUFGLENBQVEsR0FBUixDQUFKLENBQTFELENBRHdDLHdCQUdsRCxVQUFTaUIsQ0FBVCxHQUFjMkMsQ0FBZCxnREFBUzNDLENBQVQsU0FDQzVCLE1BQU0sQ0FBQzRCLENBQUMsQ0FBQ3BDLEtBQUYsRUFBRCxDQUFOLENBQW9Cb0MsQ0FBQyxDQUFDdUIsR0FBRixFQUo2QixtRkFNbEQsQ0FBQztBQUVGbkQsTUFBTSxDQUFDeUUsZ0JBQVAsQ0FBd0Isa0JBQXhCLENBQTRDM0QsSUFBNUMsQyIsInNvdXJjZXNDb250ZW50IjpbIu+7v1widXNlIHN0cmljdFwiO1xyXG5cclxubGV0IHRleHQ6IG9iamVjdCA9IHtcclxuXHRzaGlmdDogZmFsc2UsXHJcblx0YXJlYTogbnVsbCxcclxuXHRzZW5kOiBudWxsXHJcbn0sXHJcblx0c2Nyb2xsOiBudW1iZXIgPSAxMDAsXHJcblx0aGlzdG9yeUlkeDogbnVtYmVyID0gMCxcclxuXHRoaXN0OiBBcnJheSA9IFsgXSxcclxuXHRtYXhIaXN0b3J5OiBudW1iZXIgPSA1MDtcclxuXHJcbmNvbnN0IHByZWZpeDogc3RyaW5nID0gXCIhIVwiO1xyXG5cclxud2luZG93Lm5pY2sgPSBnZXRDb29raWUoXCJ1c2VyXCIpIHx8IFwiZ3Vlc3RfXCIgKyBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkgKiAxZTUpO1xyXG5cclxud2hpbGUgKCEobmljayA9IHByb21wdChcIkluc2VydCBhIE5pY2tuYW1lOlwiLCBuaWNrIHx8IGdldENvb2tpZShcInVzZXJcIikpKSB8fCAhL15bYS16QS1aMC05X1xcLSgpOycgXSskL2kudGVzdChuaWNrKSkgeyB9XHJcblxyXG5mdW5jdGlvbiBkcm9wKGxpbmU6IG51bWJlciwgdDogbnVtYmVyID0gMSk6IHN0cmluZyB7XHJcblx0bGluZSA9IGxpbmUuc3BsaXQoJyAnKTtcclxuXHR3aGlsZSAodC0tKSB7XHJcblx0XHRsaW5lLnNoaWZ0KCk7XHJcblx0fVxyXG5cdHJldHVybiBsaW5lLmpvaW4oJyAnKTtcclxufSAvL2Ryb3BcclxuXHJcbmZ1bmN0aW9uIGRyb3BHZXQobGluZTogbnVtYmVyLCB0OiBudW1iZXIgPSAwKTogc3RyaW5nIHtcclxuXHRsaW5lID0gbGluZS5zcGxpdCgnICcpO1xyXG5cdHdoaWxlICh0LS0pIHtcclxuXHRcdGxpbmUuc2hpZnQoKTtcclxuXHR9XHJcblx0cmV0dXJuIGxpbmUuc2hpZnQoKTtcclxufSAvL2Ryb3BHZXRcclxuXHJcbmZ1bmN0aW9uIGxvYWQoZT86IG9iamVjdCk6IHZvaWQge1xyXG5cdGNvbnNvbGUubG9nKFwiSW5kZXggbG9hZGVkXCIpO1xyXG5cclxuXHR0ZXh0LmFyZWEgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIm1zZ2FyZWFcIik7XHJcblx0dGV4dC5zZW5kID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0eHRhcmVhXCIpO1xyXG5cclxuXHRhdXRoKG5pY2spO1xyXG5cdHNldENvb2tpZShcInVzZXJcIiwgbmljayk7XHJcblx0cGFyc2VRdWVyaWVzKCk7XHJcblx0XHJcblx0c29jay5vbihcIm1lc3NhZ2VcIiwgKG1zZzogc3RyaW5nLCBuaWNrOiBzdHJpbmcpOiB2b2lkID0+IHtcclxuXHRcdG1lc3NhZ2UobXNnLCBuaWNrKTtcclxuXHR9KTtcclxuXHRzb2NrLm9uY2UoXCJoaXN0b3J5XCIsICguLi5kYXRhOiBzdHJpbmdbXSk6IHZvaWQgPT4ge1xyXG5cdFx0Zm9yIChsZXQgaSBvZiBkYXRhKSB7XHJcblx0XHRcdGNvbnNvbGUuZGlyKGkpO1xyXG5cdFx0XHRtZXNzYWdlKGkuY29udGVudCwgaS51c2VyLm5hbWUpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdHNvY2sub25jZShcImNvbm5lY3RcIiwgKCk6IHZvaWQgPT4ge1xyXG5cdFx0dGV4dC5hcmVhLmlubmVySFRNTCA9ICcnO1xyXG5cdFx0bWVzc2FnZShcIlRoaXMgaXMgYSBCZXRhIHZlcnNpb24gb2YgYSBjaGF0dGluZyBzZXJ2aWNlLCB1cGNvbWluZyBmZWF0dXJlcyBhcmU6IHByb2ZpbGUgcGljdHVyZSBzdXBwb3J0LCBtdWx0aXBsZSBjaGF0cm9vbXMgYW5kIG1vcmUgc2VjdXJpdHkhXCIsIFwiPGZvbnQgY29sb3I9J3JlZCc+PGI+U1lTVEVNPC9iPjwvZm9udD5cIik7XHJcblx0XHRtZXNzYWdlKFwiPGI+VEhJUyBTRVJWRVIgRE9FUyBOT1QgRk9MTE9XIFBSSVZBQ1kgUlVMRVMhISBVU0UgQVQgWU9VUiBPV04gQUdSRUVNRU5UIChHRFBSKTwvYj5cIiwgXCI8Zm9udCBjb2xvcj0ncmVkJz48Yj5TWVNURU08L2I+PC9mb250PlwiKTtcclxuXHRcdG1lc3NhZ2UoXCI8dT5QbGVhc2UgYmUga2luZCBhbmQgZG9uJ3Qgc3BhbSwgd2UgaGF2ZSBtZWFucyBvZiBiYW5uaW5nIGFnZ2l0YXRvcnMuPC91PlwiLCBcIjxmb250IGNvbG9yPSdyZWQnPjxiPlNZU1RFTTwvYj48L2ZvbnQ+XCIpO1xyXG5cdFx0Y29uc29sZS5pbmZvKFwiVGhlIHByZWZpeCBpcyAhISwgdHlwZSAhIWhlbHAgaW4gY2hhdCBmb3IgY29tbWFuZHMuXCIpO1xyXG5cdH0pO1xyXG59IC8vbG9hZFxyXG5cclxuZnVuY3Rpb24gc2VuZChtc2c6IHN0cmluZyA9IHRleHQuc2VuZC52YWx1ZSk6IHZvaWQge1xyXG5cdHRleHQuc2VuZC52YWx1ZSA9ICcnO1xyXG5cdGlmIChtc2cuc3RhcnRzV2l0aChwcmVmaXgpKSB7XHJcblx0XHRyZXR1cm4gY29tbWFuZChtc2cpO1xyXG5cdH1cclxuXHRtc2cgPSBtc2cudHJpbSgpO1xyXG5cdHNlbmRNZXNzYWdlKG1zZyk7XHJcbn0gLy9zZW5kXHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZShtc2c6IHN0cmluZyk6IHZvaWQge1xyXG5cdGlmICghbXNnKSB7XHJcblx0XHRtZXNzYWdlKFwiPGZvbnQgY29sb3I9J3JlZCc+PGI+WW91IGNhbm5vdCBzZW5kIGFuIGVtcHR5IG1lc3NhZ2UhPC9iPjwvZm9udD5cIiwgXCI8Zm9udCBjb2xvcj0ncmVkJz48Yj5TWVNURU08L2I+PC9mb250PlwiKTtcclxuXHR9IGVsc2UgaWYgKGNvbm4pIHtcclxuXHRcdHNvY2suc2VuZChtc2cpO1xyXG5cdH0gZWxzZSB7XHJcblx0XHRtZXNzYWdlKFwiPGZvbnQgY29sb3I9J3JlZCc+PGI+WW91IGNhbm5vdCBzZW5kIG1lc3NhZ2VzIHdoaWxlIGRpc2Nvbm5lY3RlZCE8L2I+PC9mb250PlwiLCBcIjxmb250IGNvbG9yPSdyZWQnPjxiPlNZU1RFTTwvYj48L2ZvbnQ+XCIpO1xyXG5cdH1cclxufSAvL3NlbmRNZXNzYWdlXHJcblxyXG5mdW5jdGlvbiBtZXNzYWdlKG1zZzogc3RyaW5nLCB1c2VyOiBzdHJpbmcpOiB2b2lkIHtcclxuXHRsZXQgcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xyXG5cdHAuaW5uZXJIVE1MID0gYDxiPiR7dXNlcn06PC9iPiAke21zZ308YnIgLz5gO1xyXG5cdFxyXG5cdHRleHQuYXJlYS5hcHBlbmRDaGlsZChwKTtcclxuXHRpZiAodGV4dC5hcmVhLnNjcm9sbEJ5KSB7XHJcblx0XHR0ZXh0LmFyZWEuc2Nyb2xsQnkoMCwgc2Nyb2xsKTtcclxuXHR9XHJcbn0gLy9tZXNzYWdlXHJcblxyXG5mdW5jdGlvbiBzaGlmdGNoZWNrKGV2ZW50OiBvYmplY3QsIGRvd246IGJvb2xlYW4gPSB0cnVlKTogdm9pZCB7XHJcblx0aWYgKGV2ZW50LmtleSA9PSBcIlNoaWZ0XCIpIHtcclxuXHRcdHRleHQuc2hpZnQgPSBkb3duO1xyXG5cdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiICYmIGRvd24pIHtcclxuXHRcdCsraGlzdG9yeUlkeDtcclxuXHRcdGhpc3RvcnlJZHggJT0gaGlzdC5sZW5ndGg7XHJcblx0XHR0ZXh0LnNlbmQudmFsdWUgPSBoaXN0W2hpc3RvcnlJZHhdO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiQXJyb3dVcFwiKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIiAmJiBkb3duKSB7XHJcblx0XHRoaXN0b3J5SWR4ID0gKGhpc3RvcnlJZHggPCAxKSA/IChoaXN0Lmxlbmd0aCAtIDEpIDogKGhpc3RvcnlJZHggLSAxKTtcclxuXHRcdHRleHQuc2VuZC52YWx1ZSA9IGhpc3RbaGlzdG9yeUlkeF07XHJcblx0XHRyZXR1cm47XHJcblx0fSBlbHNlIGlmIChldmVudC5rZXkgPT0gXCJBcnJvd0Rvd25cIikge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH0gZWxzZSBpZiAoZXZlbnQua2V5ID09IFwiRW50ZXJcIiAmJiAhdGV4dC5zaGlmdCAmJiAhZG93bikge1xyXG5cdFx0c2VuZCgpO1xyXG5cdFx0aGlzdC51bnNoaWZ0KCcnKTtcclxuXHRcdHdoaWxlIChoaXN0Lmxlbmd0aCA+PSBtYXhIaXN0b3J5KSB7XHJcblx0XHRcdGhpc3QucG9wKCk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGhpc3RbMF0gPSB0ZXh0LnNlbmQudmFsdWU7XHJcbn0gLy9zaGlmdGNoZWNrXHJcblxyXG5mdW5jdGlvbiBzdWJtaXQoZT86IG9iamVjdCk6IHZvaWQge1xyXG5cdHRleHQuc2hpZnQgPSBmYWxzZTtcclxuXHRzaGlmdGNoZWNrKHtcclxuXHRcdGtleTogXCJFbnRlclwiXHJcblx0fSwgZmFsc2UpO1xyXG59IC8vc3VibWl0XHJcblxyXG5mdW5jdGlvbiBzYW5pdGl6ZShtc2c6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0bXNnID0gbXNnLnJlcGxhY2UoLyYvZ21pLCBcIiZhbXA7XCIpXHJcblx0XHQucmVwbGFjZSgvPC9nbWksIFwiJmx0O1wiKVxyXG5cdFx0LnJlcGxhY2UoLz4vZ21pLCBcIiZndDtcIilcclxuXHRcdC5yZXBsYWNlKC9cIi9nbWksIFwiJnF1b3Q7XCIpXHJcblx0XHQucmVwbGFjZSgvJy9nbWksIFwiJiMwMzk7XCIpO1xyXG5cdHJldHVybiBtc2c7XHJcbn0gLy9zYW5pdGl6ZVxyXG5cclxuZnVuY3Rpb24gcGFyc2VDb29raWVzKGNvb2tpZXM6IHN0cmluZyA9IGRvY3VtZW50LmNvb2tpZSk6IE1hcCB7XHJcblx0cmV0dXJuIG5ldyBNYXAoY29va2llcy5zcGxpdCgnOycpLm1hcChjID0+IGMuc3BsaXQoJz0nKSkpO1xyXG59IC8vcGFyc2VDb29raWVzXHJcblxyXG5mdW5jdGlvbiBzdG9yZUNvb2tpZXMobWFwOiBNYXApOiBzdHJpbmcge1xyXG5cdHJldHVybiBkb2N1bWVudC5jb29raWUgPSBBcnJheS5mcm9tKG1hcCkubWFwKGEgPT4gYS5qb2luKCc9JykpLmpvaW4oJzsnKTtcclxufSAvL3N0b3JlQ29va2llc1xyXG5cclxuZnVuY3Rpb24gc2V0Q29va2llKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuXHRsZXQgdG1wID0gcGFyc2VDb29raWVzKCk7XHJcblx0dG1wLnNldChrZXksIHZhbHVlKTtcclxuXHRyZXR1cm4gc3RvcmVDb29raWVzKHRtcCk7XHJcbn0gLy9zZXRDb29raWVcclxuXHJcbmZ1bmN0aW9uIGdldENvb2tpZShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcblx0bGV0IHRtcDogTWFwID0gcGFyc2VDb29raWVzKCk7XHJcblx0cmV0dXJuIHRtcC5nZXQoa2V5KTtcclxufSAvL2dldENvb2tpZVxyXG5cclxuZnVuY3Rpb24gcGFyc2VRdWVyaWVzKGxvYzogc3RyaW5nID0gbG9jYXRpb24uaHJlZikge1xyXG5cdGxldCBvdXQgPSBsb2Muc3BsaXQoJz8nKS5wb3AoKS5yZXBsYWNlKC8jLio/JC8sICcnKS5zcGxpdCgnJicpLm1hcChxID0+IHEuc3BsaXQoJz0nKSk7XHJcblxyXG5cdGZvciAobGV0IGkgb2Ygb3V0KSB7XHJcblx0XHR3aW5kb3dbaS5zaGlmdCgpXSA9IGkucG9wKCk7XHJcblx0fVxyXG59IC8vcGFyc2VRdWVyaWVzXHJcblxyXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgbG9hZCk7XHJcbiJdfQ==
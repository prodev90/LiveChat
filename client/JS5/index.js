"use strict";var text={shift:!1,area:null,send:null},prefix="!!";for(window.nick="guest_"+Math.round(1e5*Math.random());!(nick=prompt("Insert a Nickname:",nick))||!/^[a-zA-Z0-9_\-()]+$/i.test(nick););function send(){var a=0<arguments.length&&arguments[0]!==void 0?arguments[0]:text.send.value;a.startsWith(prefix)||(a=a.trim(),sendMessage(a),text.send.value="")}//send
function load(){console.log("Index loaded"),text.area=document.getElementById("msgarea"),text.send=document.getElementById("txtarea"),auth(nick),sock.on("message",function(a,b){message(a,b)}),sock.once("connect",function(){text.area.innerHTML="",message("This is a Beta version of a chatting service, upcoming features are: profile picture support, message history view, spam defense, multiple chatrooms and more security!","<b>System</b>"),message("<u>Please be kind and don't spam, we have means of banning aggitators.</u>","<b>System</b>")})}//load
function sendMessage(a){a?sock.connected?(message(a,nick),sock.send(a)):message("<font style='color: red'><b>You cannot send messages while disconnected!</b></font>","<b>System</b>"):message("<font style='color: red'><b>You cannot send an empty message!</b></font>","<b>System</b>")}//sendMessage
function message(a,b){var c=document.createElement("p");c.innerHTML="<b>".concat(b,":</b> ").concat(a,"<br />"),text.area.appendChild(c),text.area.scrollBy(0,100+c.offsetHeight)}//message
function shiftcheck(a){var b=!(1<arguments.length&&arguments[1]!==void 0)||arguments[1];"Shift"==a.key&&(text.shift=b),"Enter"!=a.key||text.shift||b||send()}//shiftcheck
function submit(){text.shift=!1,shiftcheck({key:"Enter"},!1)}window.addEventListener("load",load);
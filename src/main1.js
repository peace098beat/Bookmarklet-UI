// javascript:(function(arg1, arg2){



// (RESET) body内部のDOMを消去
// for(var i=0; i<100; i++){
// 	var h = document.querySelector("body");
// 	var hc = h.firstChild;
// 	if(hc!=null) hc.remove();
// }

// (RESET) 上書き回避
document.querySelectorAll("#BOOKMARKLET")
		.forEach( function(element, index) {
			element.remove();
});


// (RESET) 上書き回避
document.querySelectorAll(".bookmarklet-style")
		.forEach( function(element, index) {
			element.remove();
});


// ------------------------------------------------------------
// スタイル要素
// ------------------------------------------------------------
// HTMLStyleElement オブジェクトを作成する
var style_element = document.createElement("style");
style_element.className="bookmarklet-style";
// 親DOM 位置
style_element.innerHTML+='\
#BOOKMARKLET { \
	position:fixed;\
	width:200px;height:350px;\
	top:20px; right:20px;\
	background-color: #333;\
	border:3px solid #000;\
	border-radius:3px;\
	border-top-width:30px;\
	border-bottom-width:30px;\
	padding:20px;margin:0;\
	opacity:0.8;\
	box-shadow:0px 0px 3px 3px #CCC;\
}\
';
// 親DOM 文字関係
style_element.innerHTML+='\
#BOOKMARKLET { \
	color:white;\
	line-height:26px;\
	font-size:15px\
}\
';
// 親DOM
style_element.innerHTML+='\
#BOOKMARKLET .small{ \
	font-size:12px\
}\
';

// 共通
style_element.innerHTML+='\
#BOOKMARKLET * {\
	color:white; outline:solid 0px #FFF; margin:0px;}\
';


// ボタン共通
style_element.innerHTML+='\
#BOOKMARKLET_BUTTON {\
	color:#333; \
	float:right;\
}\
';


// 閉じるボタン
style_element.innerHTML+='\
#BOOKMARKLET_CLOSE_BTN{\
	color:white; background:none;\
	position:fixed;width:20px;height:20px;\
	top:25px; right:30px;\
	padding:0px;\
	border:none;\
}\
#BOOKMARKLET_CLOSE_BTN:hover{\
	border:1px solid #334c66;\
}\
#BOOKMARKLET_CLOSE_BTN:active{\
	border:1px solid #334c66;\
	background-color:#69c;\
}\
';

style_element.innerHTML+='\
#BOOKMARKLET_TITLE {\
	font-size:12px;\
	color:white; background:none;\
	position:fixed;\
	width:200px;height:20px;\
	top:30px; right:55px;\
	padding:0px;margin:0px;\
	line-height:12px;\
}\
';

style_element.innerHTML+='\
#BOOKMARKLET_STATUS {\
	font-size:12px;\
	color: #777;\
	background:none;\
	position:fixed;\
	width:230px; height:20px;\
	top:450px; right:28px;\
	padding:0px;margin:0px;\
	line-height:12px;\
	text-align:right;\
}\
';

// ボタン共通
style_element.innerHTML+='\
#BOOKMARKLET hr {\
	margin:0;padding:0;\
	margin:20px 0px;\
}\
';


// BODY のノードリストに登録する
document.body.appendChild(style_element);

// 実行
var menu_panel = document.createElement("div");
menu_panel.id = "BOOKMARKLET";
// ADD DOM
document.body.insertBefore(menu_panel, 
							document.body.firstChild);

menu_panel.innerHTML+=' \
<span id="BOOKMARKLET_TITLE">Your Bookmarklet</span>\
<span id="BOOKMARKLET_STATUS">Your Bookmarklet</span>\
<button id="BOOKMARKLET_CLOSE_BTN">x</button>\
<p>your panel function here</p>\
<p class="small">your panel function here</p>\
<button id="BOOKMARKLET_BUTTON">btn</button>\
<div style="clear: both"></div>\
<hr>\
<p>your panel function here</p>\
<p class="small">your panel function here</p>\
<button id="BOOKMARKLET_BUTTON">btn</button>\
<div style="clear: both"></div>\
<hr>\
';

var close_btn = document.getElementById("BOOKMARKLET_CLOSE_BTN");
close_btn.onclick = function(){
	console.log('[INFO] CloseBtn Click');
};

console.log(document.body);
// }("argument1", "argument2"));



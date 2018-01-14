// ==UserScript==
// @name         ClickButton
// @namespace    http://tampermonkey.net/
// @version      0.4
// @description  Click on every button (or disguised button) containing the text inserted
// @author       Leonard Okaz
// @match        http://*/*
// @match        https://*/*
// @grant        none
// ==/UserScript==

(function() {
  var button = buildButton();
  button.onclick = function() {
      var matchingText = prompt("Please enter the text", null);
      if(matchingText !== null) {
        var buttons = document.querySelectorAll("button, input[type=submit], a");
        for (var iButton = 0; iButton < buttons.length; iButton++) {
            var button = buttons[iButton];
            //alert("button:" + buttons + ";button.innerHTML:" + button.innerHTML+";matchingText:" + matchingText);
            if (button.innerHTML.indexOf(matchingText) !== -1) {
              button.click();
            }
        }
    }
  };
  document.body.insertBefore(button, document.body.firstChild);
})();

function buildButton() {
  var button = document.createElement("BUTTON");
  var buttonText = document.createTextNode("ClickButton script Tampermonkey");
  button.appendChild(buttonText);
  button.style.background = "#8A2BE2";
  button.style.color = "white";
  button.style.position = "relative";
  button.style.zIndex = "1000";
  return button;
}
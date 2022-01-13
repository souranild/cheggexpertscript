

// ==UserScript==
// @name         Chegg Expert Tool
// @namespace    http://tampermonkey.net/
// @version      0.5
// @description  try to take over the world!
// @author       You
// @match        https://expert.chegg.com/*
// @icon         https://www.google.com/s2/favicons?domain=chegg.com
// @run-at document-idle
// @grant        none
// ==/UserScript==





(function() {

    //EDITABLE VALUES
    const SKIP=[32, 13] //32 space //13 enter key
    const TODAY=97 //numpad 1
    const WEEK=98 //numpad 2
    const MONTH=99 //numpad 3
    const per_qn_price = 189
    const TDS = 0.9





    document.addEventListener('keydown', e => {

        //CHECK IF ANSWERING RN
        var notanswered = false
        try {
            notanswered = window.getComputedStyle(document.getElementsByTagName('section')[1]).display === "none"
        }
        catch (e) {
            notanswered = true;
        }

        //SKIP
        if (SKIP.includes(e.keyCode) && notanswered) { //enter key
            try {
                document.getElementsByTagName('button')[1].click() //skip
                document.getElementsByTagName('label')[5].click() //dont have subj knowledge
                document.getElementsByTagName('button')[3].click() //submit
            }
            catch (e) { //if error or no qn in queue
                document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0].click() //click on Home tab
                document.getElementsByTagName('nav')[0].getElementsByTagName('a')[1].click() //back to qna tab
                      }
        }


        //EARNED

        if (e.keyCode == TODAY && notanswered) { //numpad 1
            update_earned(0)
        }
        if (e.keyCode == WEEK && notanswered) { //numpad 2
            update_earned(1)
        }
        if (e.keyCode == MONTH && notanswered) { //numpad 3
            update_earned(2)
        }

        function update_earned(val) { //add amount earned

            const sidepanel = document.getElementsByTagName('aside')[0].getElementsByTagName('div')[0]
            sidepanel.getElementsByTagName("div")[6].click() //selection
            sidepanel.getElementsByTagName("li")[val].click() //0=today, 1=week, 2=month

            var answered= document.getElementsByTagName('aside')[0].getElementsByTagName('div')[0].getElementsByTagName("span")[5]
            var money = Math.round( answered.innerText * per_qn_price * TDS)
            if (!isNaN(money)) {answered.append(" : ₹",money)}
        }


    });
})();


try {
    document.getElementsByTagName('button')[1].click() //skip
    document.getElementsByTagName('label')[5].click() //dont have subj knowledge
    document.getElementsByTagName('button')[3].click() //submit
}
catch (e) { //if error or no qn in queue
    document.getElementsByTagName('nav')[0].getElementsByTagName('a')[0].click() //click on Home tab
    document.getElementsByTagName('nav')[0].getElementsByTagName('a')[1].click() //back to qna tab
}

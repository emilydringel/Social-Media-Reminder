alert(newMsg())

function newMsg(){
  var rand = Math.random();
  if(rand<.25){
    return "Go here instead: nytimes.com"
  }else if(rand<.5){
    return "Go here instead: washingtonpost.com"
  }else if(rand<.75){
    return "Go here instead: economist.com"
  }else if(rand<1){
    return "Go here instead: apnews.com"
  }
}

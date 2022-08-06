let inputText=document.getElementById("inputFeild");
let wordCounter=document.getElementById("wordCounter");
let charCounter=document.getElementById("charCounter");
let sentenceCounter=document.getElementById("sentenceCounter");

function countWord(){
    let text = inputText.value;
    // text=text.trim();
    let words=text.split(/[a-zA-Z]+/);
    if(words=="")
    wordCounter.innerHTML="0";
    else{
        wordCounter.innerHTML=words.length-1;
    }

}
function countChar(){
    let text = inputText.value;
    let chars=text.split(/[a-zA-Z]/);
    if(chars=="")
    charCounter.innerHTML="0";
    else{
        charCounter.innerHTML=chars.length-1;
    }


}
function countSentence(){
    let text = inputText.value;
    let sentences=text.split(/[a-zA-Z]+[.]/);
    if(sentences=="")
    sentenceCounter.innerHTML="0";
    else{
        sentenceCounter.innerHTML=sentences.length-1;
    }

}
let textELe = document.getElementById('text')
let voicesELe = document.getElementById('voiceList');
let speakBtn = document.getElementById('speak');

let  speechSynth = speechSynthesis


speechSynth.addEventListener("voiceschanged", loadvoices);

function loadvoices(){
    let voices = speechSynth.getVoices()
    for(voice of voices){
    let option = document.createElement('option')
    option.value = voice.name;
    option.innerText = `${voice.name} ${voice.lang}`
    voicesELe.appendChild(option)
    }
}

function textToSpeech(text){
   let utterance = new SpeechSynthesisUtterance(text);
   for(let voice of speechSynth.getVoices()){
       if(voice.name === voicesELe.value){
        utterance.voice = voice;
       }
    }
   speechSynth.speak(utterance)
}

speakBtn.addEventListener("click", function(){
    if(textELe.value !== ""){
    if(!speechSynth.speaking){
        textToSpeech(textELe.value);
    }
    }
    else{
        alert("Enter the text")
        
    }
});
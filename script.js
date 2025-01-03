let btn=document.querySelector("#btn")
let content=document.querySelector("#content")
let voice=document.querySelector("#voice")

function speak(text){
    let text_speak=new SpeechSynthesisUtterance(text)
    text_speak.rate=1
    text_speak.pitch=1
    text_speak.volume=1
    text_speak.lang="en-GB"
    window.speechSynthesis.speak(text_speak)
}

function wishMe(){
    let day=new Date()
    let hours=day.getHours()
    if(hours>=0 && hours<12){
        speak("Good Morning Sir")
    }
    else if(hours>=12 && hours <16){
        speak("Good Afternoon Sir")
    }else{
        speak("Good Evening Sir")
    }
}
window.addEventListener('load',()=>{
    wishMe()
})

let speechRecognition= window.SpeechRecognition || window.webkitSpeechRecognition
let recognition =new speechRecognition()
recognition.onresult=(event)=>{
    let currentIndex=event.resultIndex
    let transcript=event.results[currentIndex][0].transcript
    content.innerText=transcript
    takeCommand(transcript.toLowerCase())
}

btn.addEventListener("click",()=>{
    recognition.start()
    btn.style.display="none"
    voice.style.display="block"
}) 
function takeCommand(message){
    btn.style.display="flex"
    voice.style.display="none"
    if(message.includes("hello")||message.includes("hey")){
        speak("hello sir,how can i help you?")
    }
    else if(message.includes("who are you")){
        speak("i am helix your personal assistance ,created by shaihan")
    }else if(message.includes("open youtube")){
        speak("opening youtube...")
        window.open("https://youtube.com/","_blank")
    }
    else if(message.includes("open spotify")){
        speak("opening spotify...")
        window.open("https://spotify.com/","_blank")
    }
    else if(message.includes("open google")){
        speak("opening google...")
        window.open("https://google.com/","_blank")
    }
    else if(message.includes("open whatsApp Web")){
        speak("opening whatsAppWeb...")
        window.open("//https://web.whatsapp.com/","_blank")
    }
    else if(message.includes("open blackbox ai")){
        speak("opening blackbox.ai...")
        window.open("https://www.blackbox.ai/chat/BH9OUYD","_blank")
    }
    else if(message.includes("open YT music")){
        speak("opening YT music...")
        window.open("https://music.youtube.com","_blank")
    }
    
    else if(message.includes("time")){
      let time=new Date().toLocaleString(undefined,{hour:"numeric",minute:"numeric"})
      speak(time)
    }
    else if(message.includes("date")){
        let date=new Date().toLocaleString(undefined,{day:"numeric",month:"short",year:"numeric"})
        speak(date)
      }
      
    else{
        let finalText="this is what i found on internet" + message.replace("helix","") || message.replace("","")
        speak(finalText)
        window.open(`https://www.google.com/search?q=${message.replace("","")}`, "_blank")
    }
}
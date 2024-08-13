document.getElementById('speakbutton').addEventListener('click', function(){
    const text = document.getElementById('text').value;
    if (text.trim() ==''){
        alert('please enter some text');
        return;
    }
    const speech = new SpeechSynthesisUtterance
    speech.text = text;
    speech.lang = 'en US';
    speech.pitch = 2;
    speech.rate = 1;

    window.speechSynthesis.speak(speech);
})
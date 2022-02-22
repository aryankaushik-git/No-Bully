var box = document.getElementById("floatingTextarea2");

box.addEventListener('input',(e)=>{
  console.log(e.target.value);
})
function setup() {
    noCanvas();
    let lang = navigator.language || 'en-US';
    let speechRec = new p5.SpeechRec(lang, gotSpeech);
  
    let continuous = true;
    let interim = false;
    speechRec.start(continuous, interim);

    function gotSpeech() {
      if (speechRec.resultValue) {
        //createP(speechRec.resultString);
        console.log(speechRec.resultString);
        document.getElementById("floatingTextarea2").innerHTML = speechRec.resultString;
        classify(speechRec.resultString);
      }
    }
  }

  const threshold = 0.9

function classify(word) {
    var res=[]
	toxicity.load(threshold).then(model => {
		const sentence = word;
		model.classify(sentence).then(predictions => {
            var txct = (Math.round((predictions.at(-1).results[0].probabilities[1]*10000)));
            console.log();
            if(txct>=50 && !predictions.at(-1).results[0].match){
            document.getElementById('pgs').style.width= txct+"%";
            }
            else if(txct>=50 && predictions.at(-1).results[0].match){
              window.close();
            }

		});
	});
}
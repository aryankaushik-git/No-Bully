var warning = 0;
var speech = true;
var arr = [];
window.SpeechRecognition = window.SpeechRecognition
                || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.interimResults = true;
const words = document.querySelector('.words');
words.appendChild(p);

recognition.addEventListener('result', e => {
    const transcript = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')

    document.getElementById("p").innerHTML = transcript;
    classify(transcript);
});

// recognition.addEventListener('soundend', function(event) {
//   console.log('Sound has stopped being received');
//   console.log(arr)
// });


if (speech == true && warning<3) {
    recognition.start();
    recognition.addEventListener('end', recognition.start);
}
else if(warning>=9){
    alert("CONTROL");
}

const threshold = 0.9

function classify(word) {
    var res=[]
	toxicity.load(threshold).then(model => {
		const sentence = word;
		model.classify(sentence).then(predictions => {
            arr.push(predictions)
            console.log(arr);
            // predictions.forEach((elem)=>{
            //     if(elem.label =='toxicity'){
            //     if((elem.results[0].probabilities[1]>0.9) || (elem.results[0].match == true)){
            //         warning++;
            //         var name = elem.results[0].label;
            //         res.push({name:elem.results[0].match});
            //     }
            // }
            // })
            // // "Warning: "+warning+
			// console.log(res);
		});
	});
}

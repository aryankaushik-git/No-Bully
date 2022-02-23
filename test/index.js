

const threshold = 0.9



function classify() {
	toxicity.load(threshold).then(model => {
		const sentence = document.getElementById('mytext').value;
		model.classify(sentence).then(predictions => {
			console.log(predictions);
		});
	});
}

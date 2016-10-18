var express = require('express');
var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
var alchemy_language = new AlchemyLanguageV1({
  api_key: 'fcb11f5cebca4850ae9771ed0678ae4222d5733e'
});


var router = express.Router();

router.get('/', function(req, res, next) {
  res.render(
		'ibm', { 
			title: 'Tranquility-IBM',
			TConceptR: ' ',		
			TEmotionAnger: ' ',
			TEmotionDisgust: ' ',	
			TEmotionFear: ' ',	
			TEmotionJoy: ' ',	
			TEmotionSadness: ' ',		
			});
		});
		
		
router.post('/', function(req, res) {
    //console.log(req.body.name);
		var TData = {
			text: req.body.name
		};
	//Text Analysis
		alchemy_language.concepts(TData, function (err, ConceptsResponse) {
			if (err)
				console.log('error:', err);
			else
				var AllConcepts = JSON.stringify(ConceptsResponse, null, 5);
					var TCParse = JSON.parse(AllConcepts);
					var TAllConcept = TCParse.concepts;
		
										
					alchemy_language.emotion(TData, function (err, EmotionResponse) {
						if (err)
							console.log('error:', err);
						else
							var AllEmotion = JSON.stringify(EmotionResponse, null, 5);
							var TEParse = JSON.parse(AllEmotion);
							var TAllEmotion = TEParse.docEmotions;
								var TEmotionanger = TAllEmotion.anger;
								var TEmotiondisgust = TAllEmotion.disgust;
								var TEmotionfear = TAllEmotion.fear;
								var TEmotionjoy = TAllEmotion.joy;
								var TEmotionsadness = TAllEmotion.sadness;
							//console.log(TEmotionanger);

							res.render(
									'ibm', { 
										title: 'Tranquility-IBM',
										TConceptR: TAllConcept[0].text,									
										TEmotionAnger: TEmotionanger,
										TEmotionDisgust: TEmotiondisgust,
										TEmotionFear: TEmotionfear,
										TEmotionJoy: TEmotionjoy,
										TEmotionSadness: TEmotionsadness
									});

					});					
					
					
					
					
		});
		

		
	});



module.exports = router;

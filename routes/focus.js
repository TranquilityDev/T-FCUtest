var express = require('express');
var trends = require('google-trends');


var router = express.Router();


//COM
trends.load(['com'], function (err, result) {
 // console.log(err, JSON.stringify(result))

	Result = result.com;
	COMN0Title = JSON.stringify(Result[0].title);
	COMN0Link= JSON.stringify(Result[0].link);	
	COMN0Ctime= JSON.stringify(Result[0].ctime);	

	COMN1Title = JSON.stringify(Result[1].title);
	COMN1Link= JSON.stringify(Result[1].link);	
	COMN1Ctime= JSON.stringify(Result[1].ctime);		
	
	COMN2Title = JSON.stringify(Result[2].title);
	COMN2Link= JSON.stringify(Result[2].link);	
	COMN2Ctime= JSON.stringify(Result[2].ctime);		
	
	COMN3Title = JSON.stringify(Result[3].title);
	COMN3Link= JSON.stringify(Result[3].link);	
	COMN3Ctime= JSON.stringify(Result[3].ctime);		
	
	COMN4Title = JSON.stringify(Result[4].title);
	COMN4Link= JSON.stringify(Result[4].link);	
	COMN4Ctime= JSON.stringify(Result[4].ctime);		
	
	COMN5Title = JSON.stringify(Result[5].title);
	COMN5Link= JSON.stringify(Result[5].link);	
	COMN5Ctime= JSON.stringify(Result[5].ctime);		

});

//TW

trends.load(['tw'], function (err, result) {
 // console.log(err, JSON.stringify(result))

	Result = result.tw;
	TWN0Title = JSON.stringify(Result[0].title);
	TWN0Link= JSON.stringify(Result[0].link);	
	TWN0Ctime= JSON.stringify(Result[0].ctime);	

	TWN1Title = JSON.stringify(Result[1].title);
	TWN1Link= JSON.stringify(Result[1].link);	
	TWN1Ctime= JSON.stringify(Result[1].ctime);		
	
	TWN2Title = JSON.stringify(Result[2].title);
	TWN2Link= JSON.stringify(Result[2].link);	
	TWN2Ctime= JSON.stringify(Result[2].ctime);		
	
	TWN3Title = JSON.stringify(Result[3].title);
	TWN3Link= JSON.stringify(Result[3].link);	
	TWN3Ctime= JSON.stringify(Result[3].ctime);		
	
	TWN4Title = JSON.stringify(Result[4].title);
	TWN4Link= JSON.stringify(Result[4].link);	
	TWN4Ctime= JSON.stringify(Result[4].ctime);		
	
	TWN5Title = JSON.stringify(Result[5].title);
	TWN5Link= JSON.stringify(Result[5].link);	
	TWN5Ctime= JSON.stringify(Result[5].ctime);		
	
	TWN6Title = JSON.stringify(Result[6].title);
	TWN6Link= JSON.stringify(Result[6].link);	
	TWN6Ctime= JSON.stringify(Result[6].ctime);

	TWN7Title = JSON.stringify(Result[7].title);
	TWN7Link= JSON.stringify(Result[7].link);	
	TWN7Ctime= JSON.stringify(Result[7].ctime);		
	
	TWN8Title = JSON.stringify(Result[8].title);
	TWN8Link= JSON.stringify(Result[8].link);	
	TWN8Ctime= JSON.stringify(Result[8].ctime);		
	
	TWN9Title = JSON.stringify(Result[9].title);
	TWN9Link= JSON.stringify(Result[9].link);	
	TWN9Ctime= JSON.stringify(Result[9].ctime);		
})


router.get('/', function(req, res) {

//var N0Title = JSON.stringify(Result[2].title)
//var N0Link = JSON.stringify(Result[2].link)
//var N0Ctime = JSON.stringify(Result[2].ctime)
  res.render('focus', 
		{	title: 'Tranquility',

			COMNewsTitle0: COMN0Title,
			COMNewsLink0: COMN0Link,
			COMNewsCtime0: COMN0Ctime,
			
			COMNewsTitle1: COMN1Title,
			COMNewsLink1: COMN1Link,
			COMNewsCtime1: COMN1Ctime,			
			
			COMNewsTitle2: COMN2Title,
			COMNewsLink2: COMN2Link,
			COMNewsCtime2: COMN2Ctime,			
			
			COMNewsTitle3: COMN3Title,
			COMNewsLink3: COMN3Link,
			COMNewsCtime3: COMN3Ctime,			
			
			COMNewsTitle4: COMN4Title,
			COMNewsLink4: COMN4Link,
			COMNewsCtime4: COMN4Ctime,		

			COMNewsTitle5: COMN5Title,
			COMNewsLink5: COMN5Link,
			COMNewsCtime5: COMN5Ctime,			
			
	
			TWNewsTitle0: TWN0Title,
			TWNewsLink0: TWN0Link,
			TWNewsCtime0: TWN0Ctime,
			
			TWNewsTitle1: TWN1Title,
			TWNewsLink1: TWN1Link,
			TWNewsCtime1: TWN1Ctime,			
			
			TWNewsTitle2: TWN2Title,
			TWNewsLink2: TWN2Link,
			TWNewsCtime2: TWN2Ctime,			
			
			TWNewsTitle3: TWN3Title,
			TWNewsLink3: TWN3Link,
			TWNewsCtime3: TWN3Ctime,			
			
			TWNewsTitle4: TWN4Title,
			TWNewsLink4: TWN4Link,
			TWNewsCtime4: TWN4Ctime,		

			TWNewsTitle5: TWN5Title,
			TWNewsLink5: TWN5Link,
			TWNewsCtime5: TWN5Ctime,			
			
			TWNewsTitle6: TWN6Title,
			TWNewsLink6: TWN6Link,
			TWNewsCtime6: TWN6Ctime,

			TWNewsTitle7: TWN7Title,
			TWNewsLink7: TWN7Link,
			TWNewsCtime7: TWN7Ctime,		

			TWNewsTitle8: TWN8Title,
			TWNewsLink8: TWN8Link,
			TWNewsCtime8: TWN8Ctime,			
			
			TWNewsTitle9: TWN9Title,
			TWNewsLink9: TWN9Link,
			TWNewsCtime9: TWN9Ctime				

		
		});
});

module.exports = router;

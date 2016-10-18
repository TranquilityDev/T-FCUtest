 var config = {
                width: 600,
                height: 350,
                valueProp: 'value',
                labelProp: 'name',
                subProp: 'players',
                id: '#graph-chart'
            };
	
//Department ASC = 商學院, 金融學院, 建設學院, 工學院, 人文社會學院, 資訊電機學院, 理學院
            var goalsData = [
                { id: 1, name: '商學院',
                    players: [
                        { name: 'Anger', value: 5.274485909572454 },
                    //    { name: 'Disgust', value: 5.274485909572454 },
                        { name: 'Fear', value: 3.626240689443318 },
						{ name: 'Joy', value: 1.441037187481636 },
						{ name: 'Sadness', value: 0.6640833177055788 }
                    ]
                },
                { id: 2, name: '金融學院',
                    players: [
                        { name: 'Anger', value: 5.233739965277777 },
                    //    { name: 'Disgust', value: 5.233739965277777 },
                        { name: 'Fear', value: 4.816055624999999 },
						{ name: 'Joy', value: 1.1134111111111113 },
						{ name: 'Sadness', value: 0.7963988541666667 }
                    ]
                },
				{ id: 3, name: '建設學院',
                    players: [
                        { name: 'Anger', value: 6.154443663955326 },
                    //    { name: 'Disgust', value: 6.154443663955326 },
                        { name: 'Fear', value: 4.4955860530955966 },
						{ name: 'Joy', value: 0.844741898773612 },
						{ name: 'Sadness', value: 0.3941339816131581 }
                    ]
                },
				{ id: 4, name: '工學院',
                    players: [
                        { name: 'Anger', value: 7.302180456349207 },
                    //    { name: 'Disgust', value: 7.302180456349207 },
                        { name: 'Fear', value: 4.5825232986111103 },
						{ name: 'Joy', value: 1.0948507490079364 },
						{ name: 'Sadness', value: 0.2106190128968254 }
                    ]
                },
				{ id: 5, name: '人文社會學院',
                    players: [
                        { name: 'Anger', value: 3.752490555555557 },
                    //    { name: 'Disgust', value: 3.752490555555557 },
                        { name: 'Fear', value: 3.92106388888889 },
						{ name: 'Joy', value: 2.5030250000000004 },
						{ name: 'Sadness', value: 1.591769722222222 }
                    ]
                },
				{ id: 6, name: '資訊電機學院',
                    players: [
                        { name: 'Anger', value: 7.88334693416149 },
                    //    { name: 'Disgust', value: 7.88334693416149 },
                        { name: 'Fear', value: 3.518465018012423 },
						{ name: 'Joy', value: 1.288213186956522 },
						{ name: 'Sadness', value: 0.443547917914351 }
                    ]
                },
				{ id: 7, name: '理學院',
                    players: [
                        { name: 'Anger', value: 5.043073467105263 },
                    //    { name: 'Disgust', value: 5.043073467105263 },
                        { name: 'Fear', value: 3.7855564473684195 },
						{ name: 'Joy', value: 1.3699628815789472 },
						{ name: 'Sadness', value: 1.3309262697368418 }
                    ]
                }
            ];
			
            var goalsData2 = [
                { id: 1, name: '2012-2013',
                    players: [
                        { name: 'Aguero', value: 0.8 },
                        { name: 'Suarez', value: 0.7 },
                        { name: 'van Persie', value: 0.7 }
                    ]
                },
                { id: 2, name: '2013-2014',
                    players: [
                        { name: 'Aguero', value: 0.5 },
                        { name: 'Suarez', value: 0.6 },
                        { name: 'van Persie', value: 0.9 }
                    ]
                }
            ];
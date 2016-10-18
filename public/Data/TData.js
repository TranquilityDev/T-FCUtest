var TData = {
            "test1":[
                {"id":"1","text":"just test XD"},
                { "id":"2","text":"just test XD"} 
                    ],
                    
            "test2":[
                {"id":"3","text":"21"},
                {"id":"4","text":"22"},
                {"id":"5","text":"23"} 

                    ],
            "test3":[
                {"id":"3","text":"31"},
                {"id":"4","text":"33"},
                {"id":"5","text":"33"} 

                    ],

                }


window.onload = function () {
			var themeSel = document.getElementById("theme"),
			questionSel = document.getElementById("questions");
			for (var theme in TData) {
			    themeSel.options[themeSel.options.length] = new Option(theme, theme);
			}
			themeSel.onchange = function () {
			    questionSel.length = 1; // remove all options bar first
			    if (this.selectedIndex < 1) return; // done   		        
	                for(var i=0;i<TData[this.value].length;i++)
	                {                        
	                    questionSel.options[questionSel.options.length] = new Option(TData[this.value][i].text, TData[this.value][i].id);
	                }
			}
}

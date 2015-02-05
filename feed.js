$(document).ready(function(){

	var password="lahacks"; 			//Static password:temporary. Please implement dynamic password storage for production version

 	chrome.tabs.getSelected(null, function(o) {
		$('#myConsole').text('zero');
		$('#myConsole').text(o.url);
	})
	
	$("#words").click(function(){							//Add key words into local storage
		var r = true; 
		var k = 0; 
		var m =0; 
		var i = 0;
		var currentcount = 0; 
		var w= window.open('','data', 800, 600);	
		$(w.document.body).css("background","#323131"); 
		var p; 
		p=w.prompt("Enter password:");
		if(p!==password)
		{
			w.close(); 
		}
		else
		{ 
			while(localStorage.getItem(k)!=="null")
		 	{
		 	
		 		if(localStorage.getItem(k)===null)
		 		{
		 			break;
		 		} 	
			
				k++;  			//Keeping track of the index of the last item in local storage	
			
			}

			while(r===true){
				
				var word = w.prompt("Enter word/url to add:"); 
				if (word==null)
					 break; 
					 
				localStorage.setItem(k+i,word);				//Adding user specified keyword to local storage 
				i++; 
				r = w.confirm("Enter more words?");  
			}
			w.close();
		}
	}); 
	
	
	$("#remove").click(function(){ 						//Remove all keywords from local storage
		
			var v= window.open('','data', 800, 600);	
			$(v.document.body).css("background","#323131"); 
			var c = v.confirm("Are you sure you want to clear the List?"); 
			if(c)
			{
				localStorage.clear(); 
				v.alert("List cleared!"); 
			}
			v.close(); 
		});
	

	$("#view").click(function(){ 								//View stored key words
	
			var v= window.open('','data', 800, 600);	
			$(v.document.body).css("background","#323131"); 
			$(v.document.body).css("color","white"); 
			var p; 
			p=v.prompt("Enter password:");
			if(p!==password)
			{
					v.close(); 
			}
			else
			{ 
				var j = 0; 
				 while(localStorage.getItem(j)!==null)
				 {
	 					 
					var getw = localStorage.getItem(j); 				//Fetching keywords stored in local storage
					$(v.document.body).append("<p>"+getw+"</p>");
		
					j++;  
				}
			}
		});
		
}); 
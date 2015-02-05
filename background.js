/*Runs in the background; continuously checks if a new URL has been loaded. If so, check is performed against
key words in local storage and URL is deleted from history if a match is found*/


chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  	if (changeInfo.status == 'complete' && tab.active) {
		var url = tab.url; 
		var k = 0;
		var flag=0; 
		while(localStorage.getItem(k)!==null)
		{
			var wrd = localStorage.getItem(k);		//Fetch each key word from local storage
			//console.log(wrd);  
			var n = url.search(wrd);				//Search for key word in the URL
			//console.log(n); 
			if(n!==-1)								//If keyword found, delete URL from history
			{
				chrome.history.deleteUrl({url:tab.url});
				break; 
			}
			k++; 
		}

	}
})
# Obscure

Obscure is a Google Chrome extension that offers a customizable Private Browsing experience.
This was made in April 2014 at LA Hacks , UCLA's hackathon. 

This extension lets the user specify key words, that are stored in the browser's local storage.
If the user visits a website that contains any of the specified keywords in its URL, the website URL is automatically and instantly cleared from the user's browser history. 
_____________________________________________________________________________________
background.js - This script runs in the background while the user browses the internet. Everytime a new website is loaded, the script checks if any of the keywords are present in the URL, and if so, it deletes the website URL from the browser's history

feed.js - This script controls the viewing, editing and deletion of keywords from the local storage. 
The "Add" option lets the user add keywords into list. The "View" option displays the keywords currently present in a new window. The "Clear" option removes all keywords from the list. 

manifest.json - Specifies the various permissions and dependencies of the Extension.
______________________________________________________________________________________

Set up: 
Download the files into a folder called "Obscure", for example. Open up Google Chrome -> click on the List button on the top right corner -> More Tools -> Extensions -> Load unpacked extension -> Select the "Obscure" directory in which all the files are present -> You're set! The extension should appear as a small button to the right of the address bar in your browser. Click it to use.

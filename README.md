# AAY Brand Anniversary

A blank slate to start creating your react page

	npm i - To install dependencies
	npm start - To run the hot loader
	npm run make - To create production files in dist folder

Google analytics function
	import into component using '../functions/Ga'
	pass Object into function with 'label'. required.
	Optionally you can overwrite the category name and action, which defaults to 'Radium' and current page url respectivly.
	Note: if current page url contains 'localhost', the data will not be sent to ga but will be logged in the console.
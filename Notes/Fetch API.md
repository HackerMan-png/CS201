#Unit1 
#React 

# Async / Await funcitons

### Async / Await functions
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
JS will compile code as fast as possibleso there are times when it need to slow down and wait for data

To force it to slow down we use async/await functions

The rest of the code will wait for these functions to finish and return data

We start by calling the function an async function

Thenwe use await on any parts of the code that we need to wait for.

const fetchTours = async () => {
	const response = await fetch(url)
	const tours = await response.json()
	setTours(tours)
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Introduction to Fetch
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const fetchTours = async () => {
	const response = await fetch(url)
	const tours = await response.json()
	setTours(tours)
}

fetch() is a built in JS method that reaches out to a URL and grabs a response

The response is an object with several parts but the most important ones are
- The json with the data
- The response code 200
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Reponse Code 200
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The code 200 means that it reached out to he server and was allowed to access the information there, other codes will be talked aobut in the next unit
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### JSON Data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The json is not available in the response object, only the fact that it is available to fetch

Once we know that it is available we use the response object to take the data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Using the data
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Once you have the data make sure you save it somewhere in a state or the data will disappear.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### useEffect{fetch}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
useEffect(() =>{
	fetchTours();
}, [])

We are going to want to run that fetch function often but not forever, that is what useEffect is made for.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


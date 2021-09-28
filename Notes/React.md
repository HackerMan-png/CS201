#Unit1 
#React

# Intro to React


### How To Start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Creating a react app is a large task that we can use toolchains to do this for us.

There are a lot of toolchains that serve different purposes but here are the biggest ones

Create React App
Next.js
Gatsby
Parcel
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Create React App
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Now that the CRA is installed we can use it to create a new app
npx create-react-app "file name"

This command is run with npx (node packet executable)

NOTE! You cannot use any capitals in the file name!
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Intro to .JSX
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
JSX stands for javascript expressions and runs perfectly fine in a .JS file too

This language allows us to type HTML style code in a JS format

 The biggest advantages is allowing us to do calculations or conditional checking alongside the page rendering
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
 ### Using .JSX
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 When you are creating components or anything that is rendered with the index.js file you can instead use .jsx
 
 .jsx should only be used with files that are capitalized
 
 You can use JS or JSX but the benefit to JSX is the use of emmet and auto-fill of the HTML elements.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
 ### Using Code in JSX
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 The way to use code in JSx is surrounding it in { curly brackets }
 
 This informs the code to treat everything inside of the brackets as regular JS
 
 If you want anything to render then you need to "return" it from the component function
 
 Lastly, just like js, when you return something the code stops
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
 ## Components
 
 ### Intro To Components
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 React is written in .jsx, this is a special form of HTML
 
 Components are differentiated from the rest of the html tags by using capitals
 
 Components can be use for anything that you want to partition into smaller more managable parts.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
 ### Creating New Components
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 When creating components it is best that they are named singular nouns, Book, Header, Item, Button etc.
 
 Components should also be kept in a components folder in the .src folder.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 
 ### Parts of a Component
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 Imports
 Typically useState, useEffect, or other react hook
 
 Arrow Function
 This is the name of the component and will also hold any props that are passed down
 
 Any states, function, variables
 Before the return the react component you can define any js you want to use
 
 The return statement
 This will house what you want to be rendered into the html
 
 Export component
 This just sends off the react components to the dom render.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Importing Components
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Once you have created your components you need to import them on the main app page

You can rename them if you like by using 'as' keyword
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Using Components
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
When you want to use a component you type it out just ikea  regular HTML tag but you must use a capital letter.

Capital letters let the react know to compile the code.

Lastly remember that you always need to close all of your react components
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### useState
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const [state, setState] = useState(initialState)
useState stores a value and returns it to the user similar to a variable.

setState(newState)
Updating using setState causes a re-render of your page.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Setting Styles
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Lastly, there will be times when you need to use js to pass objects, it i important to remember that requires a double bracket {{...}}

One of the most common instances of this is css styles and props
style={{color: blue, fontsize: '40px'}}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### 
#Unit1 
#React 

# Props

## Introduction to props
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Props (short for properties) are any setting or value that is attatched to a component

These are most used to pass values down the line but can also be used just like HTML element properties
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Props
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
You can give these props any name and any value

The better you name it the more useful it will be


Example:
<Question
	key={data.id}
	title={data.title}
	info={data.info}
/>
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Destructuring Props
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
If you have a lot of information you can destructure your props to save you some space:

<Question
	key={data.id}
	{...data}
/>

const Question = ({ title, info }) => {
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Mapping Arrays
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
{questions.map((question) => {
	return (
		<Question key={question.id} {...question} />
	)
})}

In this example we have several items in the questions state and we can loop through all of them, returning a <Question/> component for each one

You can do more complicated returns that use HTML components and props to fill out the information
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Anatomy of .map()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
You can destructure your item if you like, this is not required but does make the setup easier
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Using Props
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Using props once they are passed down is as simple as adding the name of the prop to the components parameters

We use {...} to immediately deconstruct it for use in the component

Now that we have accepted these props we are able to use them as variables

This is especially important when we are mapping and using the same varaibles for several different values

Example:
const List = ({ people, name, id, info}) => {
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

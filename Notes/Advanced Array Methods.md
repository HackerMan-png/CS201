#Unit1

# Advanced Array Methods
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    This is just a quick reminder about how ternaties work, think of them as small if statements.
    {conditional ? truePath : falsePath}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### The Spread Operator
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The spread operator (...) will iterate through and all values from an array-like object

Book version 2 will have all the same values but we changed pages to 140 and added an author property

book = {
	title: 'Coding',
	pages: 123,
	cover 'hard-cover'
}
```

bookV2 = {
	...book,
	pages: 140,
	author: 'Steve'
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Mapping Arrays
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
When you have an array with several items that you to break down the best way is .map()

.map() is an array method that will go through each of the items and do a thing

The nice part of .map() is that it returns a whole new array when it's finished
 
Other methods such as forEach() do not create new arrays and instead just paste content for the exiting array.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Anatomy of .map()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
let newArray = people.map((person) => {

The first part of a map method is a variable name that will represent each item from your array

This variable name should be named as the singular or the array 

people => person
books => book

let newArray = people.map((person) => {
const {name, age, job, shirtColot, drink, pet } = person

return {...person, shirtColor: 'tie-dye', isNice: 'yes'};

Next you can destructure your item if you like, this is not required but does make the setup easier.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### .forEach()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
forEach doesn't return an array as an output.

You have 3 values that you can use to work with:
Value
Index
Array(The entire thing)

The last export of a forEach loop is 'undefined' this really messes with returning values.

Instead you can have a conditional that acts depending on the values returned.
Counting occurences
Breaking up the array into smaller arrays
Printing out every name that starts with A

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### .filter()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Filter is how you can remove certain items from your array

It will go through each item and compare them to a conditional that you set up, true gets added and false does not.

continents.filter((continent) => {
return continent.startsWith('A'
)})

-- This would return all the continents that start with the letter A
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### .every()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const numbers = [-1, -2, 20, 40, 50]

console.log(
numbers.every((num) => num < 100)
);

This checks to make sure that EVERY value meets th condition
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### .some()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This is very similar to .every but instead of checking all it checks in there are any that are true

As long as one is true this will return a true statement.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### .reduce()
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
reduce() is a method that adds to an output, it finds the accumulation of a number.

This does nothing for non-number values, this is very useful for creating updated numbers of items 
Items in your cart
Money raised by the class


Parameters:

const array = [2, 4, 6, 8, 10]
array.reduce((total, current, index, arr) =>
{
	return total + current
}, 20)

Reduce has a lot going on there are 5 things that you can use:

Total is a variable that is automatically returned when the method ends.

Current is a variable referring to value currenty being looked at

You can choose how this number will affect the total (here it is added)

Lastly is the optional starting value
This is outside of the callback function and sets the total value so that you can start at any value
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


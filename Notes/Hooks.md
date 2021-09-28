#Unit1 
#React 

# Hooks

### Introduction to Hooks
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
React is only re-rendered when told to, in react 16.7 and older you had to write these functions by hand

Since React 16.8 there are built in hooks that you can use without creating your own functions.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### What is a hook?
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Hooks are just special functions that are built into react that let you 'hook' into the react features

Every hook in React must start with a lowercase "use"
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### useEffect
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
useEffect() is a function that will run anytimea  re-render happens

This is especially helpful when pulling data from a server and we cant to make sure that the data is up to date on a render.

Example:
useEffect(() =>{
	effect
	return () => {
		cleanup
	}
})

useEffect runs a certain chunk of code every rerender, most often that chunk is a function

The 'effect' to the right is the js code that runs when you re-render

The effect that is created is permanent and will stack over and over

We can use a cleanup function that removes any left behind events

NOTE: this is not required for every effect, only use when needed(usually events)

The input array can be used to choose specific state changes that will cause this effect instead of every render

You can also leave it empty to have the effect only happen once
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


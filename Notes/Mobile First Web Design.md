#Unit1 
#React 

# Mobile First Web Design


### 7 Folders - 1 File
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Sass devolped the 7 folder structure to organize all of the sass partial files that you will be creating

The one file outside of the folders is the main styles that you import all of the other work into.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### util folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This folder contains all of the variables including colors and sizes.

_Variables.scss
_functions.scss
_mixins.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### base folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This folder contains all of the defaults that you will use.

_reset.scss
_typography.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### components folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This will be a robust foler that holds a bunch of smaller pieces of the site.

_buttons.scss
_carousel.scss
_slider.scss
_modal.scss
_slideshow.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### layout folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
- These are pieces of the site that will always be visible or define the layout of the site.
_navbar.scss
_grid.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### pages folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
These are specific pages that your site will have, these don't have a ton of styles in them but in case you need something special for that page you can do it here.

_home.scss
_about.scss
_contact.scss
_error.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### themes folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
These are where you will add different themes like light and dark mode, it is also recommended to add an admin theme so that people know when they are in charge

_theme.scss
_defaultTheme,scss
_light.scss
_darkTheme.scss
_admin.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### vendors folder
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
This is an optional folder but you will use this for any libraries that you need/install

_bootstrap.scss
_jquery-ui.scss
_chartsjs.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### mains.scss
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
THIS FILE WILL HAVE NO STYLES IN IT

mains.scss is there to collect all of the other styles into 1 place. When you compile this file into 1 css everything should work nicer.

Make sure you import in order of least specific to most specific.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### order for importing to main
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
@use 'abstracts/'
@use 'vendors/'
@use 'base/'
@use 'layout/'
@use 'pages/'
@use 'components/'
@use 'themes/'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

# **Dart Sass**
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The newest version of sass, called Dart, added 2 new features

They replaced @import with @use if you want to import a partial into your file for use.

They also added @forward which is a really convenient way to export your files
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### @forward
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
The @forward rule is used in an index file that allows you to export a large amount of partials with 1 import.

This is really useful for the 7 folders - 1 file system because we will have 7 folders full of partials and importing each one is a nightmare to organize on your final file.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### @use
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Remember that @import is now deprecated and we use @use now.

You can @use any file that you want but we are going to use it to import partials to:
index.scss files
mains.scss file
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### Variables
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
Variables are just like js, a name representing a value that you can use in other files.

These are created using '$' but make sure to kepp the names descriptive.

Ex:
$clr-white: #fff;
$clr-red-dark: hsl(360, 67%, 44%)
etc...
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### @use 'variables'
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
All variables should be kept on a variables file, you can make several if needed but 1 if prefered.

This file is imported using @use at the top of any file that you use the variable.

@use '../themes/index';

Once imported you need to make sure that you call them like we do for objects

@use '../themes/defaultTheme';

.question {
	padding: 1rem 1.5rem;
	border: 2px solid defaultTheme.$clr-grey;
}

Declaring the name of the file and then the variable.


Shortcut:
@use '../themes/defaultTheme' as c;

.question {
	padding: 1rem 1.5rem;
	border: 2px solid c.$clr-grey-special;
}


Shorter-cut:
DO NOT USE THIS IF YOU HAVE MULTIPLE VARIABLE FILES

You can use * to give you variables the ability to be called with no name

@use '../themes/defaultTheme' as *;

.question {
	padding: 1rem 1.5rem
	border: 2px solid $clr-grey-special;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

### @content
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
One more amazing tool added to dart sass was @content

This takes anything in the brackets and distributes it.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

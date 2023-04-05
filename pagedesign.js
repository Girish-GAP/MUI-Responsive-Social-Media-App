// Page Design

/// 1) Design the layout :
// write the div's of partision like navbar, sidebar, content etc..
// write the component for each div in component folder
// render that components in parent page instead of div
// now there will be some components who will share the space in column so we need to make use of flex

// 2) To flex the components first we have  to select the parent element like box, grid, stack etc..
// go to -> mui -> layout -> list of layout elements eg. box, grid etc..
/// - Box : 
	// - it's like a html div, nothing special for just gonna wrap our components.
	// - don't have default margin
// Container : - to center the content horizontally.
	    //    - have some default margin and padding

/// Interactive elements : 

// Grid : - it's basically for flexing two dimentional items
	//   - it's more powerful than stack
	//   - we can applay properties same like flexbox

// Stack : - for flexing in one direction only, eg. horizontal or vertical
	//     - we can applay properties same like flexbox

// we can applay flex properties like direction, alignitems, justifyContent 
// to apply this property easily : go to interactive section of that element in mui 


// now we can also change the component elements wrapping to Box like inside navbar etc..

// flex the items on screen and defined how many flex width it will going to take :
	//  flex = {1}: 1 will be unit, flex = {4} : it will 4 times of 1

// also think when screen collapse what should be visible and what should not
	// to do that we can applay conditions based on the screen size eg.  sx = {{display : {xs : "none", sm : "block", }}}






// Explore about css positioning
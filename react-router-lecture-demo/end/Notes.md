- show the current code, especially the database
- how do we get the information about puppies -- axios and componentDidMount (async request to backend and setState)
	- update `.map` for key and no puppies at the get go
- add router, route, hashHistory
	- show hash in url
- add single puppy view (just have it display `you made it`)
	- start without params then add them
- see what `a` tag does
- add Link (thin wrapper around a tag)
- talk about hash, move to browserHistory and talk about rendering index.html for everything
	- go to page and it works, but refresh breaks the world
- router params and update puppy view with name (this.props.params.puppyName)
- absolute vs relative in index.html
- nesting routes
	- active style 
	- this.props.children
- pull out puppies and singlePuppy
	- axios request from singlePuppy (access only to name in puppies)
- copy in kittens
	- .cloneElement with all axios and state
- pull out Link and make NavLink into own file
	- {...props}
	- activeOnlyOnIndex={true} (same as using IndexLink)
- make Home component
	- IndexRoute (similar to IndexRedirect)

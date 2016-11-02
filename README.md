# ng-server-by
A better way than controllers

## What is ngServeBy ?

**ngServeBy** is directive that binds services to the scope of the using element. As if using `ngController`.

## Why not just use ngController?

It's often that we write services to distribute code in our application. And to make usage of service, we inject them to controllers/directives, but then to reuse them somewhere else, we'll either re-instantiate a controller or inject them to that other directive.

### Example:
Let's imagine we have a little app where we would like to display our posts in the news feed (*e.g: as in facebook*) :

For that we have written a service:

**postsService.js**
```Javascript
app.service('postsService', function () {
	return {
		fetch: function () {},
		refresh: function () {},
		spinLoader: function () {}
		...
	}; 
});
```

Injected it into a controller:

**postsController.js**
```Javascript
app.controller('postsController', function ($scope, postsService) {
	$scope.fetch = postsService.fetch;	
	$scope.refresh = postsService.refresh;	
	$scope.spinLoader = postsService.spinLoader;
	// other functionalities
});
```

And use it in our page (*Jade is used in here instead of html, because it's simpler*):
```Jade
div(ng-controller="postsController")
	div(ng-init="fetch()")
		...
```

*But then, whenever we would like to use that somewhere else, without wanting to creat another controller, create a file for it, call it in the dom, what could you do?* **Use ngServeBy!**

## Usage:
Define our services in a fashion that allows binding functions to the current scope, as if in a controller, only now you could use the same service all across your app without having to create controllers:
**postsService.js**
```Javascript
app.service('postsService', function () {
	return function (scope) {
		scope.fetch = function () {};
		...
		return scope; // Very important!
	};
});
```

And in your page:
```Jade
div(ng-serve-by="postsService")
	div(ng-init="fetch()")
		...
```

## Why all that?
Honestly, I missed on why I created this solution to begin with, but one of the reasons is that because it solved some of my problems at the time, and not until recently I felt like sharing it after having forgot most of the reasons why. If you think it's a good practice or a bad practice, please let me know!
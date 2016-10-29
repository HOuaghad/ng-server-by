# ng-server-by
A better way than controllers

## What is ngServeBy ?

**ngServeBy** is directive that binds services to the scope of the using element. As if using `ngController`.

## Why not just use ngController?

It's often that we write services to distribute code in our application. And to make usage of service, we inject them to controllers/directives, but then to reuse them somewhere else, we'll either re-instantiate a controller or inject them to that other directive.

### Example:

**postsService.js**
```
app.service('postsService', function () {
  
});
```

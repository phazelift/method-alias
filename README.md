<h1>method-alias</h1>


*Create a method alias without losing context*

- save call, the returned alias is always a callable function
- dynamically type checked

--

**Usage**:


>Install with npm: `npm install --save method-alias`


```javascript

var Test= function(){};

Test.prototype.show= function( text ){
	alert( text ); 
};	

var
	 instance= new Text()
	,show= methodAlias( instance, 'show' )
;

show( 'hey!' );
```

###license

MIT

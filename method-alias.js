// method-alias - Create a method alias without losing context
//
// Copyright (c) 2016 Dennis Raymondo van der Sluis
//
// This program is free software: you can redistribute it and/or modify
//     it under the terms of the GNU General Public License as published by
//     the Free Software Foundation, either version 3 of the License, or
//     (at your option) any later version.
//
//     This program is distributed in the hope that it will be useful,
//     but WITHOUT ANY WARRANTY; without even the implied warranty of
//     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
//     GNU General Public License for more details.
//
//     You should have received a copy of the GNU General Public License
//     along with this program.  If not, see <http://www.gnu.org/licenses/>
//

var types= require( 'types.js' );


module.exports= function( instance, name ){
	'use strict';

   var alias= types.forceFunction( types.forceObject(instance)[name] );
	return function(){
		return alias.apply( instance, arguments );
	}
};
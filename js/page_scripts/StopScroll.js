window.addEventListener( "keydown",function(e)
{
    if( [ 37,38,39,40 ].indexOf( e.keyCode ) > -1 )
	{
        e.preventDefault();
    }
}, false );
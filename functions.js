/* set the bg image for a div with an id 
 * IMPORTANT: url must be relative to the .html page directory
*/
function setImage(id, url)
{
	$("#" + id).css("background", "url(" + url + ") repeat");
}

/*
 * Set animation direction (MUST be "right" or "left")
 * and duration (in seconds) for a div with an id
 * [use this function for the 'stars' div]
*/
function setAnimation(id, direction, duration)
{
	if (direction == "left")
		direction = "moveLeft";
	else if (direction == "right")
		direction = "moveRight";
	else
	{
		console.log("ERROR: the direction must be <<left>> or <<right>>");
		return false;
	}
	$("#" + id).css({"-webkit-animation" : direction + " " + duration + "s linear infinite", "animation" : direction + " " + duration + "s linear infinite"});
}
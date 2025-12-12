window.changeSegment = (id, segment, value) => {
	let display = document.getElementById(id);
	let segmentClass = "display-no-" + segment;
	if (value == 1)
	{
		display.classList.add(segmentClass);
	}
	else
	{
		display.classList.remove(segmentClass);
	}
}
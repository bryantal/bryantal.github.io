function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on github</p>",
"<p onClick=nextLine(2)>So many pull requests she did snub</p>",
"<p onClick=nextLine(3)>So I forked the repo</p>",
"<p onClick=nextLine(4)>Now they all send <em>me</em> changes, d'oh!</p>",
"<p onClick=nextLine(0)>Said the maintainer, 'Welcome to the club!'</p>");

	document.getElementById("line").innerHTML=poem[line];
}


function redirectToGarfield() {
	window.location.replace("https://en.wikipedia.org/wiki/Garfield");
}

function redirectToGitHub() {
	window.location.replace("https://github.com/bryantal");
}

function redirectToBlog() {
	window.location.replace("https://bryantalfall2019opensource.blogspot.com");
}

function changeButtonColor() {
	document.getElementById("myButton").style.background = "#5FE209"
}

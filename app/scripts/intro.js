var lineInc = 2,
majMarkDegree = 10,
degreeInc = 30,
compassrose = document.getElementById("compassrose"),
xmlns = "http://www.w3.org/2000/svg",
xlink = "http://www.w3.org/1999/xlink";
if (lineInc > 0 ) {
for (var i=0; i < 360; i+=lineInc) {
  var newline = document.createElementNS(xmlns,'use');
  if (i % majMarkDegree == 0) {	  newline.setAttributeNS(xlink,'xlink:href','#majline');
  } else {	newline.setAttributeNS(xlink,'xlink:href','#roseline');
  }
 newline.setAttributeNS(null,'transform','rotate('+i+' 250 250)');
  compassrose.appendChild(newline);
}
}

var writeDegs = document.createElementNS(xmlns,'text'),
currentDeg = 0,
writeOffset = 0;
for (var i=0; i < 99; i+=(degreeInc/360)*100) {
	var degree = document.createElementNS(xmlns,'textPath');
    degree.setAttributeNS(xlink,'xlink:href','#rosecircle');
	var length = Math.log(i) * Math.LOG10E + 1 | 0;
	if (length > 1) { writeOffset = 1; } 
	degree.setAttributeNS(null,'startOffset',(i - writeOffset)+"%");
	degree.textContent = currentDeg;
	writeDegs.appendChild(degree);
	currentDeg += degreeInc;
}
compassrose.appendChild(writeDegs);

function randomRot() {
    
    let newBlur = Math.floor(Math.random() * 20)
    document.documentElement.style.setProperty(`--blur`, newBlur + 'px');
   
    var oldOrientation = newOrientation;
    newOrientation =  Math.floor(Math.random() * 40);
  compassrose.animate([
    { transform: 'rotate('+ oldOrientation+'deg)' },
		{ transform: 'rotate('+ newOrientation+'deg)' }
		], {
	duration: Math.abs(oldOrientation - newOrientation) * 20,
	fill: 'forwards'
	}).onfinish = function() {
		randomRot();
	}
}
newOrientation = 0;
randomRot();
introExit();

function introExit() {
    
    setTimeout(
        function(){
            document.querySelector('.intro').style.setProperty('opacity', '0');
            document.querySelector('.header-media').style.setProperty('opacity', '1');
            document.querySelector('.header-media').style.setProperty('box-shadow', '0px 30px 60px #b9b8b8');
            document.querySelector('.header-media').style.setProperty('margin-top', '0');
        }, 3000);
    
}

const toolboxWidth = document.querySelector('section.toolbox').offsetWidth
let brushSelector = null
let selectedTool = 'pen'

var mode;
function _(selector){
  return document.querySelector(selector);
}
$(document).ready(function(){
  /* JS is enabled */
  $('body').removeClass('no-js');
  $('.anim').click(function() {  //use a class, since your ID gets mangled
    $(this).addClass('clicked');      //add the class to the clicked element
  });
});

function setup (){  
setupToolbox()
  let canvas = createCanvas(800,700);
  canvas.parent("canvas-wrapper");
  background(245);
}
function setupToolbox() {
  // set up paint style tools in the Styles category
  const paintStyles = select('section.toolbox div.styles-tools')
  setupBrushSelector(paintStyles)
}

function setupBrushSelector(parentTag) {
  // create the brush selector as a <select> tag
	brushSelector = createSelect()

  // make a label for the menu
  makeLabel(brushSelector, parentTag, 'Paintbrush style')

  // make an array of all the paintbrush function names
  const brushes = [
     'pen',
    'marker',
    'beads',
    'rainbowBeads',
    'wiggle',
    'toothpick',
    'fountainPen',
    'splatter',
    'sprayPaint',
  ]

  // add in all of the paintbrush function names as menu options
  brushes.forEach(function (brush) {
      brushSelector.option(brush)
  })

  // set initial value of the currently selected paintbrush
  selectedTool = brushSelector.value()

  // update the selected paintbrush if the user picks a different menu option
  brushSelector.changed(function () {
    selectedTool = brushSelector.value()
  })
}

function makeLabel(tag, parentTag, text) {
  const label = createElement('label', text)
  label.parent(parentTag)
  tag.parent(label)
}

function draw() {
  

	// check if mouse button is pressed and mouse is hovering over canvas section
  if (mouseIsPressed && mouseX <= windowWidth - toolboxWidth) {
    // draw on the canvas with the selected painting tool function
     window[selectedTool]()
  }
}

  
 
 
_("#reset-canvas").addEventListener("click",
 function(){
  background(canvas2.value);
});

_("#save-canvas").addEventListener("click",function(){
saveCanvas(canvas,"sketch", "png" );
});
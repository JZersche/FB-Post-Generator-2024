// // // // // // // // FB Post Element // // // // // // // // 
const _Wrapper = document.createElement("div");
_Wrapper.className = "_Wrapper";
//_Wrapper.style.height = _Wrapper.offsetHeight + "px";


const _PostHeader = document.createElement("div");
_PostHeader.className = "_PostHeader";

const _PostHeaderData_Logo = document.createElement("div");
_PostHeaderData_Logo.className = "_PostHeaderData_Logo";

const _PostHeaderLogoImageSRC = new Image();
_PostHeaderLogoImageSRC.className = "_PostHeaderLogoImageSRC";

_PostHeaderLogoImageSRC.src =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2YzAxMDAwMGMwMDEwMDAwMWYwMjAwMDA1MjAyMDAwMDhhMDIwMDAwZTEwMjAwMDAzYTAzMDAwMDZkMDMwMDAwYWEwMzAwMDBlMjAzMDAwMDgwMDQwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIACgAKAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAABQIEBgP/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQAAf/aAAwDAQACEAMQAAABSvso0ehypy74xrnEW+SporI6NyqzYPcmJzVOAWZ64FcbgCfv/8QAIBAAAgIDAAEFAAAAAAAAAAAAAQIDBAAREiIQEyMyM//aAAgBAQABBQKOXw0PbM0JrTtxjZGdZNcCJE3yxTBkZvSzJpnO1qE9NineWFPMn0q/mwytFyLx8Cd5Xl5wHsf/xAAdEQEBAAEEAwAAAAAAAAAAAAABAAIDEBESITFR/9oACAEDAQE/AcsefU6fWCD5MXUDxG3/xAAaEQACAwEBAAAAAAAAAAAAAAABIQACEBEx/9oACAECAQE/ARCsr65c9DyjtCFn/8QAIRAAAQMDBAMAAAAAAAAAAAAAAQACERASMQMTIYFCUXH/2gAIAQEABj8CZwm9qzcbdci0Cbo6qGhsnKvcR8WrdMkjNS1MRq98eUJld13MYHsqyM8oKKf/xAAfEAADAAICAgMAAAAAAAAAAAAAAREhMUFRkfBhcbH/2gAIAQEAAT8hwOUc2LIav4Qop0FNDVKug0pgeR7KDrgelk20lBqokj4FmSM5kU8DEm8JMzduJGAzfY89wIx1gt5M8d3J2C8Km16Qelgk9P6Jk6PQ2a7wf//aAAwDAQACAAMAAAAQy0BUn/j8D//EABwRAQADAAIDAAAAAAAAAAAAAAEAESFRobHB8P/aAAgBAwEBPxB0EWs2AkffnPqKzYKJVnDzQ9MWxJ//xAAcEQADAAEFAAAAAAAAAAAAAAAAAREQITFBUbH/2gAIAQIBAT8Q3CcsQDaCjaj78FOMf//EAB8QAQEAAgIDAQEBAAAAAAAAAAERADEhQVFhoYFxkf/aAAgBAQABPxCfdaEdQ+OeN966wj5W8cSPNybSg1jZTw3jJk6MZUsEE6cn0yfVA+T7iNy28F6EmUuEt5uupc0xwcvGAaAXrx6xHubc4VNezOG4hHy3EAnu6tMaP7ipVmXzhGgPKSPHz/cVwk3lR4D81gIdn9cT5gN7B/nvI5SmluL6bfw7ypUindIQ1XFXJM8YjFB9fH9w1XJus//Z";

const createDiv = (className, textContent) => {
  const div = document.createElement("div");
  div.className = className;
  if (textContent) div.textContent = textContent;
  return div;
};

const createTextarea = (className, textContent) => {
  const textarea = document.createElement("textarea");
  textarea.className = className;
  if (textContent) textarea.textContent = textContent;
  return textarea;
};




const _PostHeaderData = createDiv("_PostHeaderData");
const _PostHeaderData_Username = createDiv("_PostHeaderData_Username", "👾 𝔍𝒵eͥяsͣcͫḣε 0");
  _PostHeaderData_Username.style.cssText = `
color: rgb(228, 230, 235);
direction: ltr;
/*font-family: 'Uni Sans Demo', sans-serif;*/
/*font-family: Helvetica, Arial, sans-serif;*/
font-family: 'Segoe UI';
font-size: 16px;
line-height: 18.6667px;
list-style: none;
overflow-wrap: break-word;
text-align: left;
word-break: break-word;
`


const _PostHeaderData_Timestamp = createDiv("_PostHeaderData_Timestamp", "_PostHeaderData_Timestamp goes here ·1");
const _Post_Background = createDiv("_Post_Background");
var _Post = createTextarea("_Post");


_Post.style.cssText = `background:none;border:0;min-width:450px;`;

_Post.addEventListener('focusin', () => {
    _Post_Background.style.backgroundColor = "#fff";
    _Post.style.minWidth = "443px";
    //_Post.style.resize = "vertical";
    _Post.style.resize = "none";
    _Post.style.border = "0";
});

_Post.addEventListener('focusout', () => {
    _Post_Background.style.backgroundColor = "#000";
    _Post.style.minWidth = "450px";
    _Post.style.resize = "none";
    _Post.style.border = "0";
});

const _Post_Image1 = createDiv("_Post_Image1");
const IMAGE = createDiv("IMAGE");

        // Create input element
        var imageUrl_input = document.createElement("input");
        imageUrl_input.setAttribute("type", "text");
        imageUrl_input.setAttribute("id", "imageUrl_input");
        imageUrl_input.setAttribute("placeholder", "Paste your image URL here");

        _Post_Image1.appendChild(imageUrl_input);

        imageUrl_input.addEventListener('input', function(event) {
            // Retrieve the entered URL
            var imageUrl_url = event.target.value;
						console.log(event.target.value);
})

_Post_Image1.style.cssText = `margin-top: 12px;`;
IMAGE.style.cssText = `width: 100%;`;
imageUrl_input.style.cssText = `background-color:#111;color:#fff;border:0;width: 436px;border-radius:4px;padding:4px;`

_Post.textContent = `After years of study and examination, mathematicians at Paderborn University and KU Leuven have discovered the elusive ninth Dedekind number, solving a three-decade-old math mystery.

Making history with its 42-digit length, the number was found using the Noctua supercomputer at Paderborn University. This breakthrough, which will be presented at a workshop in September, marks a significant achievement in the field.

The researchers, led by Lennart Van Hirtum, overcame the challenge of calculating the number, which was an open question for 32 years. The ninth Dedekind number is 286386577668298411128469151667598498812366.`;




// // // // // // // // // // // // // // // // // // // // //


// // // // // // // // ForeignObject // // // // // // // //
const ForeignObject_Wrapper = document.createElement("div");
ForeignObject_Wrapper.className = "ForeignObject_Wrapper";
ForeignObject_Wrapper.style.cssText = "border-radius: 0px; border: 1px solid #2e2; margin-top: 5px;";
//ForeignObject_Wrapper.style.height = 400 + 'px';



// Create the post_header div element and apply styles
const ForeignObject_PostHeader = document.createElement("div");
ForeignObject_PostHeader.className = "_PostHeader";
ForeignObject_PostHeader.style.cssText = "position: relative; display: flex; width: 400px; align-items: center; border-radius: 2px; color: #fff; border: 0px solid #f99; border-bottom: 0px;margin-bottom:0px";


// Exported PNG Logo Style
const ForeignObject_PostHeaderData_Logo = document.createElement("div");
ForeignObject_PostHeaderData_Logo.className = "post_header_logo";
ForeignObject_PostHeaderData_Logo.style.position = "relative";
ForeignObject_PostHeaderData_Logo.style.paddingTop = "10px";
ForeignObject_PostHeaderData_Logo.style.paddingLeft = "10px";

// Load the external image
const ForeignObject_PostHeaderLogoImageSRC = new Image();
ForeignObject_PostHeaderLogoImageSRC.src =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/7QCEUGhvdG9zaG9wIDMuMAA4QklNBAQAAAAAAGgcAigAYkZCTUQwYTAwMGE2YzAxMDAwMGMwMDEwMDAwMWYwMjAwMDA1MjAyMDAwMDhhMDIwMDAwZTEwMjAwMDAzYTAzMDAwMDZkMDMwMDAwYWEwMzAwMDBlMjAzMDAwMDgwMDQwMDAwAP/bAEMABgQFBgUEBgYFBgcHBggKEAoKCQkKFA4PDBAXFBgYFxQWFhodJR8aGyMcFhYgLCAjJicpKikZHy0wLSgwJSgpKP/bAEMBBwcHCggKEwoKEygaFhooKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKP/CABEIACgAKAMBIgACEQEDEQH/xAAZAAACAwEAAAAAAAAAAAAAAAAABQIEBgP/xAAYAQADAQEAAAAAAAAAAAAAAAACAwQAAf/aAAwDAQACEAMQAAABSvso0ehypy74xrnEW+SporI6NyqzYPcmJzVOAWZ64FcbgCfv/8QAIBAAAgIDAAEFAAAAAAAAAAAAAQIDBAAREiIQEyMyM//aAAgBAQABBQKOXw0PbM0JrTtxjZGdZNcCJE3yxTBkZvSzJpnO1qE9NineWFPMn0q/mwytFyLx8Cd5Xl5wHsf/xAAdEQEBAAEEAwAAAAAAAAAAAAABAAIDEBESITFR/9oACAEDAQE/AcsefU6fWCD5MXUDxG3/xAAaEQACAwEBAAAAAAAAAAAAAAABIQACEBEx/9oACAECAQE/ARCsr65c9DyjtCFn/8QAIRAAAQMDBAMAAAAAAAAAAAAAAQACERASMQMTIYFCUXH/2gAIAQEABj8CZwm9qzcbdci0Cbo6qGhsnKvcR8WrdMkjNS1MRq98eUJld13MYHsqyM8oKKf/xAAfEAADAAICAgMAAAAAAAAAAAAAAREhMUFRkfBhcbH/2gAIAQEAAT8hwOUc2LIav4Qop0FNDVKug0pgeR7KDrgelk20lBqokj4FmSM5kU8DEm8JMzduJGAzfY89wIx1gt5M8d3J2C8Km16Qelgk9P6Jk6PQ2a7wf//aAAwDAQACAAMAAAAQy0BUn/j8D//EABwRAQADAAIDAAAAAAAAAAAAAAEAESFRobHB8P/aAAgBAwEBPxB0EWs2AkffnPqKzYKJVnDzQ9MWxJ//xAAcEQADAAEFAAAAAAAAAAAAAAAAAREQITFBUbH/2gAIAQIBAT8Q3CcsQDaCjaj78FOMf//EAB8QAQEAAgIDAQEBAAAAAAAAAAERADEhQVFhoYFxkf/aAAgBAQABPxCfdaEdQ+OeN966wj5W8cSPNybSg1jZTw3jJk6MZUsEE6cn0yfVA+T7iNy28F6EmUuEt5uupc0xwcvGAaAXrx6xHubc4VNezOG4hHy3EAnu6tMaP7ipVmXzhGgPKSPHz/cVwk3lR4D81gIdn9cT5gN7B/nvI5SmluL6bfw7ypUindIQ1XFXJM8YjFB9fH9w1XJus//Z"; // Replace with your base64 image URL
ForeignObject_PostHeaderLogoImageSRC.style.borderRadius = "25px"

const ForeignObject_PostHeaderData = document.createElement("div");
ForeignObject_PostHeaderData.className = "post_headerInfo";
ForeignObject_PostHeaderData.style.cssText =`
display: flex; 
flex-direction: column; 
align-items: flex-start; 
margin-left: 12px; 
line-height: 1;
`




const ForeignObject_PostHeaderData_Username = document.createElement("div");
ForeignObject_PostHeaderData_Username.className = "ForeignObject_PostHeaderData_Username";
ForeignObject_PostHeaderData_Username.textContent = "👾 𝔍𝒵eͥяsͣcͫḣε 1";
ForeignObject_PostHeaderData_Username.style.cssText = `
color: rgb(228, 230, 235);
direction: ltr;
/*font-family: 'Uni Sans Demo', sans-serif;*/
/*font-family: Helvetica, Arial, sans-serif;*/
font-family: 'Segoe UI';
font-size: 16px;
line-height: 18.6667px;
list-style: none;
overflow-wrap: break-word;
text-align: left;
word-break: break-word;
`




const ForeignObject_PostHeaderData_Timestamp = document.createElement("div");
ForeignObject_PostHeaderData_Timestamp.className = "_PostHeaderData_Timestamp";
ForeignObject_PostHeaderData_Timestamp.textContent = _PostHeaderData_Timestamp.textContent;
ForeignObject_PostHeaderData_Timestamp.style.cssText = `
cursor: pointer;
direction: ltr;
font-family: Helvetica, Arial, sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 14.7667px;
list-style: none;
overflow-wrap: break-word;
text-align: left;
word-break: break-word;
color: rgb(176, 179, 184);
`




const ForeignObject_Post_Background = document.createElement("div");
ForeignObject_Post_Background.className = "ForeignObject_Post_Background";
ForeignObject_Post_Background.style.cssText = `
position: relative;
top: 0;
left: 0;
width: 480px;
border: 0px solid #0f0;
border-radius: 0px;
border-bottom: 0;
`
const elements = [
    ForeignObject_Wrapper,
    ForeignObject_Post_Background,
    ForeignObject_PostHeader,
		ForeignObject_PostHeaderData
];

elements.forEach(element => {
    element.style.backgroundColor = "#000";
});


const ForeignObject_Post = document.createElement("div");
ForeignObject_Post.className = "testpost";
ForeignObject_Post.style.cssText = `
color: #fff;
direction: ltr;
display: block;
padding-top: 12px;
padding-left: 12px;
padding-right: 25px;
padding-bottom: 20px;
font-family: 'Segoe UI Historic', 'Segoe UI', Helvetica, Arial, sans-serif;
font-size: 12px;
font-weight: 400;
line-height: 14.6667px;
max-width: 100%;
min-width: 0;
overflow-wrap: break-word;
word-break: break-word;
white-space: pre-wrap;
word-spacing: justify;
border: 1px solid #fff;
`

/*
ForeignObject_Post.textContent = `
After years of study and examination, mathematicians at Paderborn University and KU Leuven have discovered the elusive ninth Dedekind number, solving a three-decade-old math mystery.

Making history with its 42-digit length, the number was found using the Noctua supercomputer at Paderborn University. This breakthrough, which will be presented at a workshop in September, marks a significant achievement in the field.

The researchers, led by Lennart Van Hirtum, overcame the challenge of calculating the number, which was an open question for 32 years. The ninth Dedekind number is 286386577668298411128469151667598498812366.
`;
*/


ForeignObject_Wrapper.appendChild(ForeignObject_PostHeader);
ForeignObject_PostHeader.appendChild(ForeignObject_PostHeaderData_Logo);
ForeignObject_PostHeaderData_Logo.appendChild(ForeignObject_PostHeaderLogoImageSRC);
ForeignObject_PostHeader.appendChild(ForeignObject_PostHeaderData);
ForeignObject_PostHeaderData.appendChild(ForeignObject_PostHeaderData_Username);
ForeignObject_PostHeaderData.appendChild(ForeignObject_PostHeaderData_Timestamp);
ForeignObject_Wrapper.appendChild(ForeignObject_Post_Background);
ForeignObject_Post_Background.appendChild(ForeignObject_Post);

_Wrapper.appendChild(_PostHeader);
_PostHeader.appendChild(_PostHeaderData_Logo);
_PostHeaderData_Logo.appendChild(_PostHeaderLogoImageSRC);
_PostHeader.appendChild(_PostHeaderData);
_PostHeaderData.appendChild(_PostHeaderData_Username);
_PostHeaderData.appendChild(_PostHeaderData_Timestamp);
_Wrapper.appendChild(_Post_Background);
_Post_Background.appendChild(_Post);
_Post.appendChild(_Post_Image1);
_Post_Image1.appendChild(IMAGE);

document.body.appendChild(_Wrapper);

_Post.style.height = (_Post.scrollHeight-17) + 'px';
console.log(_Post.scrollHeight);

  // Add an event listener to the textarea for input
  _Post.addEventListener('input', function() {
    // Update the content of the div with the textarea value
    _Post.textContent = _Post.value;
		console.log(_Post.value);
console.log(_Post.scrollHeight);
_Post.style.height = 0;
_Post.style.height = (_Post.scrollHeight+17) + 'px';

  });


// Create a new button element
const ExportPNGButton = document.createElement("button");
ExportPNGButton.className = "ExportPostPNG";
ExportPNGButton.textContent = "Export Post (PNG)";
ExportPNGButton.style.margin = "5px";
ExportPNGButton.style.fontSize = "11px";
ExportPNGButton.style.height = "18px";
ExportPNGButton.style.lineHeight = "4px";
ExportPNGButton.style.border = "1px solid #0eb";
ExportPNGButton.style.background = "#0a6";
ExportPNGButton.style.color = "#fff";
ExportPNGButton.style.borderRadius = "4px";
ExportPNGButton.style.padding = "6px";
//ForeignObject_Wrapper.style.height = _Wrapper.style.height;

// Create a Canvas
const canvas = document.createElement("canvas");
const ctx = canvas.getContext("2d");

let canvasWidth = document.body.lastChild.getBoundingClientRect().width;
//let canvasHeight = document.body.lastChild.getBoundingClientRect().height;
let canvasHeight = document.querySelector('._Wrapper').offsetHeight - parseInt(ExportPNGButton.style.height);
console.log('CHeight: '+document.querySelector('._Wrapper').offsetHeight);
canvasWidth = canvasWidth;
canvasHeight = canvasHeight + 42; // Adjust this MF

canvas.height = canvasHeight;
canvas.width = canvasWidth; // Set the canvas width to match the desired element width
//_Wrapper.style.display = "none";
//canvas.style.border = "0px solid #0f4";
//canvas.style.borderRadius = "0px";
canvas.style.background = "#faf";
canvas.className = "ExportCanvas";
//ctx.fillStyle = "#f0f";
ctx.fillRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "#99f";
ctx.strokeRect(0, 0, canvas.width, canvas.height);
ctx.strokeStyle = "#000"; // Change color to match the background
ctx.imageSmoothingEnabled = true;






ctx.lineWidth = 1;
ctx.beginPath();
ctx.moveTo(0, canvas.height - 1);
ctx.lineTo(canvas.width, canvas.height - 0);
ctx.stroke();

//document.body.appendChild(canvas);


// Create an SVG element
const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
svg.setAttribute("width", canvas.width);
svg.setAttribute("height", canvas.height);

// Create a foreignObject element
const foreignObject = document.createElementNS(
  "http://www.w3.org/2000/svg",
  "foreignObject"
);
foreignObject.setAttribute("width", canvas.width);
foreignObject.setAttribute("height", canvas.height);
//foreignObject.innerHTML = ``;
foreignObject.appendChild(ForeignObject_Wrapper);

// Append the foreignObject to the SVG
svg.appendChild(foreignObject);

//// Uncomment to —>
//// Display Foreign Object 
//document.body.appendChild(svg);





// Append the new button to the document body
////_Wrapper.parentNode.insertBefore(ExportPNGButton, _Wrapper.nextSibling);
//_Wrapper.parentNode.insertBefore(ExportPNGButton, _Wrapper.parentNode.childNodes[12]);

//_Wrapper.insertBefore(ExportPNGButton, _Wrapper.querySelector('._Post_Background').nextSibling);

_Wrapper.parentNode.insertBefore(ExportPNGButton, _Wrapper.nextSibling);

//let heightAdjust = document.getElementsByClassName('ExportPostPNG')[0].offsetHeight;

canvas.height = canvasHeight - 5;
console.log("HEIGHT IS "+_Wrapper.offsetHeight);
_Wrapper.style.height = _Wrapper.offsetHeight - 2.5 + "px";
ForeignObject_Wrapper.style.height = _Wrapper.style.height;
//ForeignObject_Wrapper.setAttribute("style", "background-color: #2A5773; background-image: url('https://i.imgur.com/CnbEeEv.png'); background-size: 64px; background-repeat: repeat;");



var backgroundImage = new Image();
backgroundImage.crossOrigin = "anonymous"; // Set the crossorigin attribute

// Set the src attribute to the image URL
backgroundImage.src = "https://i.imgur.com/cXcOVgl.png";

// Once the image is loaded, set it as the background image of ForeignObject_Wrapper
backgroundImage.onload = function() {
_Wrapper.style.backgroundImage = `url('${backgroundImage.src}')`;
_Wrapper.style.backgroundSize = "64px";
_Wrapper.style.backgroundRepeat = "repeat"; // or 'repeat-x' for horizontal repeat, 'repeat-y' for vertical repeat
ForeignObject_Wrapper.style.backgroundImage = `url('${backgroundImage.src}')`;
ForeignObject_Wrapper.style.backgroundSize = "64px";
ForeignObject_Wrapper.style.backgroundRepeat = "repeat"; // or 'repeat-x' for horizontal repeat, 'repeat-y' for vertical repeat
};



ExportPNGButton.style.background = "#0a6";
ExportPNGButton.addEventListener("mousedown", function() {
  ExportPNGButton.style.backgroundColor = "#084";
});
ExportPNGButton.addEventListener("mouseup", function() {
  ExportPNGButton.style.backgroundColor = "#0a6";
});

ExportPNGButton.addEventListener("click", function() {
  ExportPNGButton.style.border = "1px solid #0eb";
  _PostHeaderData_Username.textContent = ForeignObject_PostHeaderData_Username.textContent;


///// ATTENTION
canvas.height = document.querySelector('._Wrapper').offsetHeight - parseInt(ExportPNGButton.style.height) + 50;



ForeignObject_Post.textContent = _Post.textContent;

console.log(canvasHeight);

  // Convert the SVG to a data URL
  const serializer = new XMLSerializer();
  const svgStr = serializer.serializeToString(svg);
  const dataUrl =
    "data:image/svg+xml;charset=utf-8," + encodeURIComponent(svgStr);
  const img = new Image();
img.crossOrigin = "anonymous"; // Request CORS-enabled usage of the image
  img.onload = function() {
  ctx.drawImage(img, 0, -5); // adjust position of element in canvas as needed
  ctx.drawImage(backgroundImage, canvas.width/2.5 + 250, (canvas.height/2.5 - 118), 100,100);
// LAST ADJUSTMENT 
  };
  document.body.appendChild(canvas);
  img.src = dataUrl;

  const canvasParent = canvas.parentElement;
  const newSpan = document.createElement("span");
  newSpan.textContent = "Exported HTML/CSS as PNG Image";
  newSpan.style.display = "block";
  newSpan.style.color = "#0fa";

  if (canvasParent) {
    canvasParent.insertBefore(newSpan, canvas);
    ExportPNGButton.style.border = "1px solid #0eb";
  }

  _PostHeaderData_Username.textContent = "👾 𝔍𝒵eͥяsͣcͫḣε (SVG-FOREIGNOBJECT)";

  svg.remove();
});

// Create an image element from the canvas and append it to the post_header_logo div
//const targetImg = document.createElement("img");
//targetImg.src = canvas.toDataURL();

//_PostHeaderLogoImageSRC.onload = function () {
//document.body.appendChild(targetImg);
//};

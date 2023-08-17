// Selectors 
const body = document.body 
const menu = document.getElementById('menu')
const download = document.getElementById('download')
const clear = document.getElementById('delete')
const menubar = document.querySelector('.menubar')

menu.addEventListener('click', () => {
  if(menubar.style.display === 'none') {
    menubar.style.display = 'block'
  } else {
    menubar.style.display = 'none'
  }
})

clear.addEventListener('click', () => {
  ctx.clearRect(0,0,canvas.width,canvas.height)
})
function downloadCanvasImage() {
  const link = document.createElement('a');
  link.href = canvas.toDataURL('image/png');
  link.download = 'Artcraft_image.png';
  link.click();
  console.log('good')
}

download.addEventListener('click',() => {
   downloadCanvasImage()
   saveCanvasToLocalStorage()
});

function saveCanvasToLocalStorage() {
  const imageDataURL = canvas.toDataURL('image/png');
  localStorage.setItem('canvasImage', imageDataURL);
}

function setCanvasFromLocalStorage() {
  const imageDataURL = localStorage.getItem('canvasImage');
  if (imageDataURL) {
    const image = new Image();
    image.onload = () => {
      canvas.width = image.width;
      canvas.height = image.height;
      canvas.getContext('2d').drawImage(image, 0, 0);
    };
    image.src = imageDataURL;
  }
  console.log('nice')
}

window.addEventListener('load', setCanvasFromLocalStorage);


//UI Buttons 
const pencil = document.querySelector('#pencil')
const arrow = document.querySelector('#arrow')
const paintbrush = document.querySelector('#paintbrush')
const zoomButton = document.querySelector('#hand-pointer')

const background = document.querySelector('#background')
const backgroundColors = document.querySelector('.background-colors')

const palette = document.querySelector('#palette')
const colors = document.querySelector('.colors-box')
//colors
const red = document.querySelector('.red')
const black = document.querySelector('.black')
const grey = document.querySelector('.grey')
const yellow = document.querySelector('.yellow')
const purple = document.querySelector('.purple')
const lightgreen = document.querySelector('.lightgreen')
const lightpink = document.querySelector('.lightpink')
const blue = document.querySelector('.blue')

let color;
red.addEventListener('click', () => {
  palette.style.color = 'red' 
  color = 'red'
})
black.addEventListener('click', () => {
  palette.style.color = 'black' 
  color = 'black'
})
blue.addEventListener('click', () => {
  palette.style.color = 'blue' 
  color = 'blue'
})
purple.addEventListener('click', () => {
  palette.style.color = 'rebeccapurple' 
  color = 'rebeccapurple'
})
yellow.addEventListener('click', () => {
  palette.style.color = 'yellow' 
  color = 'yellow'
})
lightgreen.addEventListener('click', () => {
  palette.style.color = 'lightgreen' 
  color = 'lightgreen'
})
lightpink.addEventListener('click', () => {
  palette.style.color = 'lightpink' 
  color = 'lightpink'
})
grey.addEventListener('click', () => {
  palette.style.color = 'grey' 
  color = 'grey'
})

// Backgrounds

const bgwhite = document.querySelector('#white')
const bgblack = document.querySelector('#black')
const bgblue = document.querySelector('#blue')
const bgred = document.querySelector('#red')
const bggrey = document.querySelector('#grey')
const bgpurple = document.querySelector('#purple')
const bggreen = document.querySelector('#lightgreen')
const bgpink = document.querySelector('#lightpink')

bgwhite.addEventListener('click', () => {
  body.style.background = 'white'
  canvas.style.background = 'white'
})
bgblack.addEventListener('click', () => {
  body.style.background = 'black'
  canvas.style.background = 'black'
})
bgblue.addEventListener('click', () => {
  body.style.background = 'blue'
  canvas.style.background = 'blue'
})
bgred.addEventListener('click', () => {
  body.style.background = 'red'
  canvas.style.background = 'red'
})
bggrey.addEventListener('click', () => {
  body.style.background = 'grey'
  canvas.style.background = 'grey'
})
bgpurple.addEventListener('click', () => {
  body.style.background = 'rebeccapurple'
  canvas.style.background = 'rebeccapurple'
})
bgpink.addEventListener('click', () => {
  body.style.background = 'lightpink'
  canvas.style.background = 'lightpink'
})
bggreen.addEventListener('click', () => {
  body.style.background = 'lightgreen'
  canvas.style.background = 'lightgreen'
})

palette.addEventListener('click', () => {
  if(colors.style.display === 'none') {
    colors.style.display = 'block' 
  } else {
    colors.style.display = 'none'
  }
})

background.addEventListener('click', () => {
    if(backgroundColors.style.display === 'none') {
      backgroundColors.style.display = 'grid'
    } else {
      backgroundColors.style.display = 'none'
    }
})

const canvas = document.getElementById('drawing-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let painting = false;
 function startPosition(event) { 
   painting = true;
   draw(event);
  }

  function endPosition() { 
    painting = false;
    ctx.beginPath(); 
  }

  function draw(event) {
    if (!painting) return;
     ctx.lineWidth = 1;
     ctx.lineCap = 'round';
     if(!color) {
       ctx.strokeStyle = 'black';
     } else {
       ctx.strokeStyle = `${color}`;
     }
     
    if (event.type === 'mousemove') {
     ctx.lineTo(event.clientX, event.clientY);
       } 
       else if (event.type === 'touchmove') {
        ctx.lineTo(event.touches[0].clientX,
        event.touches[0].clientY);
    }

    ctx.stroke();
    ctx.beginPath();

    if (event.type === 'mousemove') {
      ctx.moveTo(event.clientX, event.clientY);
       } 
       else if (event.type === 'touchmove') {
       ctx.moveTo(event.touches[0].clientX, event.touches[0].clientY);
      }
  }

let brushpainting = false;

function brushstartPosition(event) {
  brushpainting = true;
  brushdraw(event);
}

function brushendPosition() {
  brushpainting = false;
  ctx.beginPath();
}

function brushdraw(event) {
  if (!brushpainting) return;
  ctx.lineWidth = 18;
  ctx.lineCap = 'round';
  if (!color) {
    ctx.strokeStyle = 'black';
  } else {
    ctx.strokeStyle = `${color}`;
  }

  if (event.type === 'mousemove') {
    ctx.lineTo(event.clientX, event.clientY);
  }
  else if (event.type === 'touchmove') {
    ctx.lineTo(event.touches[0].clientX,
      event.touches[0].clientY);
  }

  ctx.stroke();
  ctx.beginPath();

  if (event.type === 'mousemove') {
    ctx.moveTo(event.clientX, event.clientY);
  }
  else if (event.type === 'touchmove') {
    ctx.moveTo(event.touches[0].clientX, event.touches[0].clientY);
  }
}

function removeDrawingListeners() {
  canvas.removeEventListener('mousedown', startPosition);
  canvas.removeEventListener('mouseup', endPosition);
  canvas.removeEventListener('mousemove', draw);

  canvas.removeEventListener('touchstart', startPosition);
  canvas.removeEventListener('touchend', endPosition);
  canvas.removeEventListener('touchmove', draw);
}
function removeBrushListeners() {
  canvas.removeEventListener('mousedown', brushstartPosition);
  canvas.removeEventListener('mouseup', brushendPosition);
  canvas.removeEventListener('mousemove', brushdraw);
  
  canvas.removeEventListener('touchstart', brushstartPosition);
  canvas.removeEventListener('touchend', brushendPosition);
  canvas.removeEventListener('touchmove', brushdraw);
}
paintbrush.addEventListener('click', () => {
  removeDrawingListeners()
  removeCircleListeners()
  removeTriangleListeners()
  removesquareListeners()
  canvas.addEventListener('mousedown', brushstartPosition);
  canvas.addEventListener('mouseup', brushendPosition);
  canvas.addEventListener('mousemove', brushdraw);
  canvas.addEventListener('touchstart', brushstartPosition);
  canvas.addEventListener('touchend', brushendPosition);
  canvas.addEventListener('touchmove', brushdraw);
});

pencil.addEventListener('click', () => {
    removeBrushListeners()
    removeCircleListeners()
    removeTriangleListeners()
    removesquareListeners()
    canvas.addEventListener('mousedown', startPosition);
    canvas.addEventListener('mouseup', endPosition);
    canvas.addEventListener('mousemove', draw);

    canvas.addEventListener('touchstart', startPosition);
    canvas.addEventListener('touchend', endPosition);
    canvas.addEventListener('touchmove', draw);
});

const canvasContainer = document.getElementById("canvas-container");
    let scale = 1.0;
    
    document.getElementById("zoomin").addEventListener("click", function() {
      scale += 0.1;
      updateCanvasScale();
    });
    
    document.getElementById("zoomout").addEventListener("click", function() {
      scale -= 0.1;
      if (scale < 0.6) scale = 0.6;
      updateCanvasScale();
    });
    
    function updateCanvasScale() {
      canvas.style.transform = `scale(${scale})`;
      console.log(scale)
    }
const shapesBar = document.getElementById('shapesBar')
const shapes = document.getElementById('shapes')

shapes.addEventListener('click', () => {
  if (shapesBar.style.display === 'none') {
    shapesBar.style.display = 'block'
  } else {
    shapesBar.style.display = 'none'
  }
})
const triangleButton = document.getElementById('triangle')
const circleButton = document.getElementById('shcircle')
const square = document.getElementById('square')

circleButton.addEventListener('click', () => {
    removeDrawingListeners();
    removeBrushListeners();
    removeTriangleListeners()
    removesquareListeners()
    shapesBar.style.display = 'none';
    canvas.addEventListener('mousedown', mouseDownHandler);
    canvas.addEventListener('touchstart', touchStartHandler);
    canvas.addEventListener('mouseup', mouseUpHandler);
    canvas.addEventListener('touchend', touchEndHandler);
});
triangleButton.addEventListener('click', () => {
  removeDrawingListeners();
  removeBrushListeners();
  removeCircleListeners();
  removesquareListeners()
  shapesBar.style.display = 'none';
  canvas.addEventListener("mousedown", handleMouseDown);
  canvas.addEventListener("mouseup", handleMouseUp);
  canvas.addEventListener("touchstart", handleTouchStart);
  canvas.addEventListener("touchend", handleTouchEnd);
});
square.addEventListener('click', () => {
  removeDrawingListeners();
  removeBrushListeners();
  removeCircleListeners();
  removeTriangleListeners()
  shapesBar.style.display = 'none';
  canvas.addEventListener("mousedown", handleSquareMouseDown);
  canvas.addEventListener("mouseup", handleSquareMouseUp);
  canvas.addEventListener("touchstart", handleSquareTouchStart);
  canvas.addEventListener("touchend", handleSquareTouchEnd);
})
function removesquareListeners() {
  canvas.removeEventListener("mousedown", handleSquareMouseDown);
  canvas.removeEventListener("mouseup", handleSquareMouseUp);
  canvas.removeEventListener("touchstart", handleSquareTouchStart);
  canvas.removeEventListener("touchend", handleSquareTouchEnd);
}
function removeTriangleListeners() {
  canvas.removeEventListener("mousedown", handleMouseDown);
  canvas.removeEventListener("mouseup", handleMouseUp);
  canvas.removeEventListener("touchstart", handleTouchStart);
  canvas.removeEventListener("touchend", handleTouchEnd);
}
function removeCircleListeners() {
    canvas.removeEventListener('mousedown', mouseDownHandler);
    canvas.removeEventListener('touchstart', touchStartHandler);
    canvas.removeEventListener('mouseup', mouseUpHandler);
    canvas.removeEventListener('touchend', touchEndHandler);
}

let drawing = false;
let startX, startY;

function mouseDownHandler(e) {
    drawing = true;
    startX = e.clientX - canvas.getBoundingClientRect().left;
    startY = e.clientY - canvas.getBoundingClientRect().top;
}

function touchStartHandler(e) {
    e.preventDefault();
    drawing = true;
    startX = e.touches[0].clientX - canvas.getBoundingClientRect().left;
    startY = e.touches[0].clientY - canvas.getBoundingClientRect().top;
}

function mouseUpHandler() {
    if (!drawing) return;
    drawing = false;
    const x = event.clientX - canvas.getBoundingClientRect().left;
    const y = event.clientY - canvas.getBoundingClientRect().top;
    const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
    drawCircle(startX, startY, radius);
}

function touchEndHandler() {
    if (!drawing) return;
    drawing = false;
    const x = event.changedTouches[0].clientX - canvas.getBoundingClientRect().left;
    const y = event.changedTouches[0].clientY - canvas.getBoundingClientRect().top;
    const radius = Math.sqrt(Math.pow(x - startX, 2) + Math.pow(y - startY, 2));
    drawCircle(startX, startY, radius);
}

function drawCircle(x, y, radius) {
    ctx.beginPath();
    if (!color) {
        ctx.strokeStyle = 'black';
    } else {
        ctx.strokeStyle = `${color}`;
    }
    ctx.lineWidth = 1
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.stroke();
}

let isDrawing = false;
let startPoint = { x: 0, y: 0 };
let endPoint = { x: 0, y: 0 };

function handleMouseDown(event) {
  isDrawing = true;
  startPoint = getMousePos(canvas, event);
  endPoint = startPoint; 
}

function handleMouseUp(event) {
  if (!isDrawing) return;
  isDrawing = false;
  endPoint = getMousePos(canvas, event);
  drawTriangle();
}

function handleTouchStart(event) {
  event.preventDefault(); 

  isDrawing = true;
  startPoint = getTouchPos(canvas, event.touches[0]);
  endPoint = startPoint; 
}

function handleTouchEnd(event) {
  event.preventDefault(); 

  if (!isDrawing) return;
  isDrawing = false;
  endPoint = getTouchPos(canvas, event.changedTouches[0]);
  drawTriangle();
}

function getMousePos(canvas, event) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top,
  };
}

function getTouchPos(canvas, touch) {
  const rect = canvas.getBoundingClientRect();
  return {
    x: touch.clientX - rect.left,
    y: touch.clientY - rect.top,
  };
}

function drawTriangle() {
  ctx.beginPath();
  ctx.moveTo(startPoint.x, startPoint.y);
  ctx.lineTo(endPoint.x, endPoint.y);
  ctx.lineTo(startPoint.x + (startPoint.x - endPoint.x), endPoint.y); 
  ctx.lineWidth = 1
  ctx.closePath();
  
  if (!color) {
    ctx.strokeStyle = 'black';
  } else {
    ctx.strokeStyle = `${color}`;
  }
  ctx.stroke();
}
let isDrawingSquare = false;
let startSquarePoint = { x: 0, y: 0 };
let endSquarePoint = { x: 0, y: 0 };

function handleSquareMouseDown(event) {
  isDrawingSquare = true;
  startSquarePoint = getMousePos(canvas, event);
  endSquarePoint = startSquarePoint
}

function handleSquareMouseUp(event) {
  if (!isDrawingSquare) return;

  isDrawingSquare = false;
  endSquarePoint = getMousePos(canvas, event);
  drawSquare();
}

function handleSquareTouchStart(event) {
  event.preventDefault();

  isDrawingSquare = true;
  startSquarePoint = getTouchPos(canvas, event.touches[0]);
  endSquarePoint = startSquarePoint; 
}

function handleSquareTouchEnd(event) {
  event.preventDefault();

  if (!isDrawingSquare) return;

  isDrawingSquare = false;
  endSquarePoint = getTouchPos(canvas, event.changedTouches[0]);
  drawSquare();
}

function drawSquare() {
  const sideLength = Math.min(Math.abs(startSquarePoint.x - endSquarePoint.x), Math.abs(startSquarePoint.y - endSquarePoint.y));

  ctx.beginPath();
  ctx.rect(startSquarePoint.x, startSquarePoint.y, sideLength, sideLength);

  if (!color) {
    ctx.strokeStyle = 'black';
  } else {
    ctx.strokeStyle = `${color}`;
  }
  ctx.stroke();
}


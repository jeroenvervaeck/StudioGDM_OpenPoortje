
import React, { Component } from 'react';

import './SupervisorEigenSticker.scss'

import { Nav } from '../../components'

document.onload = () => {
    const canvas = document.getElementById('canvas');
    const saveButton = document.getElementById('save');
    const loadInput = document.getElementById('load');
    var drawingColor = "black";

    new Drawing(canvas, saveButton, loadInput, drawingColor);
};


function pickColor(color){

  var blue = document.getElementById('blue');
  var red = document.getElementById('red');
  var black = document.getElementById('black');
  const canvas = document.getElementById('canvas');
  const saveButton = document.getElementById('save');
  const loadInput = document.getElementById('load');

  switch(color) {
    case "blue":
      blue.classList.add("activeColor");
      red.classList.remove("activeColor");
      black.classList.remove("activeColor");
      
      new Drawing(canvas, saveButton, loadInput, color);
      break;
    case "red":
      blue.classList.remove("activeColor");
      red.classList.add("activeColor");
      black.classList.remove("activeColor");
      new Drawing(canvas, saveButton, loadInput, color);
      break;
    case "black":
      blue.classList.remove("activeColor");
      red.classList.remove("activeColor");
      black.classList.add("activeColor");
      new Drawing(canvas, saveButton, loadInput, color);
        break;
    default:
      black.classList.add("activeColor");
  }

}
  
class Drawing {
    constructor(canvas, saveButton, loadInput, drawingColor) {
      this.isDrawing = false;
      
      canvas.addEventListener('mousedown', () => this.startDrawing());
      canvas.addEventListener('mousemove', (event) => this.draw(event, drawingColor));
      canvas.addEventListener('mouseup', () => this.stopDrawing());
  
      saveButton.addEventListener('click', () => this.save());
      loadInput.addEventListener('change', (event) => this.load(event));
  
      const rect = canvas.getBoundingClientRect();
  
      this.offsetLeft = rect.left;
      this.offsetTop = rect.top;
  
      this.canvas = canvas;
      this.context = this.canvas.getContext('2d');
    }
    startDrawing() {
      this.isDrawing = true;
    }
    stopDrawing() {
      this.isDrawing = false;
    }
    draw(event, color) {
      if (this.isDrawing) {
        this.context.fillStyle = color;
        this.context.fillRect(event.pageX - this.offsetLeft, event.pageY - this.offsetTop, 20, 20);
      }
    }

    save() {
      const data = this.canvas.toDataURL('image/png');
      const a = document.createElement('a');
      a.href = data;
      a.download = 'image.png';
      a.click();
    }
    load(event) {
      const file = [...event.target.files].pop();
      this.readTheFile(file)
        .then((image) => this.loadTheImage(image))
    }
    loadTheImage(image) {
      const img = new Image();
      const canvas = this.canvas;
      img.onload = function () {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(img, 0, 0);
      };
      img.src = image;
    }
    readTheFile(file) {
      const reader = new FileReader();
      return new Promise((resolve) => {
        reader.onload = (event) => {
          resolve(event.target.result);
        };
        reader.readAsDataURL(file);
      })
    }
}

class SupervisorEigenSticker extends Component {

    render() { 
        return ( 
            <div>
      				<Nav />
      				<div class="draw-container">
                          <div>
                              <canvas id="canvas" width="500" height="500"></canvas>
                          </div>
                          <div>
                              <div id="blue" class="colorPicker" onClick={() => pickColor("blue")}></div>
                              <div id="red" class="colorPicker" onClick={() => pickColor("red")}></div>
                              <div id="black" class="colorPicker activeColor" onClick={() => pickColor("black")}></div>
                              <div class="colorPicker"></div>
                          </div>
                          <div>
                              <button id="save" type="button">save</button>
                              <input
                              type="file"
                              id="load"
                              name="avatar"
                              accept="image/png"
                              ></input>
                          </div>
               </div>
      			</div>
        );
    }
}
 
export default SupervisorEigenSticker;

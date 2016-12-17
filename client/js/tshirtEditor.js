var canvas = null;
var tshirts = new Array(); //prototype: [{style:'x',color:'white',front:'a',back:'b',price:{tshirt:'12.95',frontPrint:'4.99',backPrint:'4.99',total:'22.47'}}]

var line1;
var line2;
var line3;
var line4;

// var applyColor = function(){
// 	$('.color-preview').click(function(){
// 		   var color = $(this).css("background-color");
// 		   document.getElementById("shirtDiv").style.backgroundColor = color;
// 	   });
// 	 document.getElementsByClassName('color-preview')[0].click();
// }
var setPatternIntoCanvas = function(patternId,left, top, scale){
	$('#' + patternId).click(function(e){

			//  console.log(canvas._objects[0]);
			//  console.log(canvas._ojects.length);
				if (typeof canvas._objects[0] !== "undefined" ){
					left = canvas._objects[0].left;
					top = canvas._objects[0].top;
					//canvas.remove(canvas._objects[0].oCoords);

				}

					canvas.remove(canvas._objects[0]);


				var el = e.target;

	  		fabric.Image.fromURL(el.src, function(image) {
		          image.set({
		            left: left,
		            top: top,
		            angle: 0,
		            padding: 10,
		            cornersize: 10,
	      	  		hasRotatingPoint:true
		          });
		          image.scale(scale).setCoords();
		          canvas.add(image);
		        });
  	});
  	$('#'+ patternId).click();
}
var applyCanvasAndShirt = function() {
		//setup front side canvas
		// 	if (!canvas){
	 		console.log($('canvas'));
	 		// var event = new Event('input', { bubbles: true });
			 // $('#patternTop')[0].dispatchEvent(event);
			 // $('#patternLeft')[0].dispatchEvent(event);

	 		canvas = new fabric.Canvas('shirtCanvas', {
			  hoverCursor: 'pointer',
			  selection: false,
			  selectionBorderColor:'blue',
				isDrawingMode: true
			});


			// drawing

			fabric.Object.prototype.transparentCorners = false;

			canvas.freeDrawingBrush = new fabric.PencilBrush(canvas);
			console.log(canvas.freeDrawingBrush);
			 canvas.freeDrawingColor;
       canvas.freeDrawingBrush.width;
       canvas.freeDrawingBrush.shadowBlur;

			// end drawing

				canvas.on({
				 'object:moving': function(e) {
				    e.target.opacity = 0.5;

				  },
				  'object:modified': function(e) {
				  	$('#patternTop')[0].value = e.target.getTop();
				    $('#patternLeft')[0].value = e.target.getLeft();
				    $('#patternScale')[0].value = e.target.getScaleX();
				    $('#patternAngle')[0].value = e.target.getAngle();
				     $('#patternAngle').trigger("click");
				    $('#patternTop').trigger("click");
				    $('#patternLeft').trigger("click");
			        $('#patternScale').trigger("click");

				    e.target.opacity = 1;
				  },
				 // 'angular.isObject(value):selected':onObjectSelected,
				 'selection:cleared':onSelectedCleared
			 });
			// piggyback on `canvas.findTarget`, to fire "object:over" and "object:out" events
	 		canvas.findTarget = (function(originalFn) {
			  return function() {
			    var target = originalFn.apply(this, arguments);
			    return target;
			  };
			})(canvas.findTarget);
			// $(".shirtTypes").click(function(e){
	  	// 		$("#tshirtFacing")[0].src = e.currentTarget.src;
			// });
			// document.getElementsByClassName('shirtTypes')[0].click();
			// applyColor();



			// document.getElementById('remove-selected').onclick = function() {
			//     var activeObject = canvas.getActiveObject(),
			//         activeGroup = canvas.getActiveGroup();
			//     if (activeObject) {
			//       canvas.remove(activeObject);
			//     }
			//     else if (activeGroup) {
			//       var objectsInGroup = activeGroup.getObjects();
			//       canvas.discardActiveGroup();
			//       objectsInGroup.forEach(function(object) {
			//         canvas.remove(object);
			//       });
			//     }
		  // 	};
		// 	}

	  //  $(".clearfix button,a").tooltip();

 	// 	canvas.on('object:over', function(e) {
		// });

 	// 	canvas.on('object:out', function(e) {
		// });



}//end
	 function getRandomNum(min,max){
	 	return Math.random() * (max-min) +min;
	 }


	 function onSelectedCleared(e){

		// console.log('clearrrrrrrr');
	 }


 // var applyEvent = new MouseEvent('click', {
 //    'view': window,
 //    'bubbles': true,
 //    'cancelable': true
 //  });


  // var applyShirtCanvas = document.getElementById('applyShirtCanvas');
  // applyShirtCanvas.dispatchEvent(applyEvent);
  // applyShirtCanvas.click = function(){
	//   	applyCanvasAndShirt();
 // 	}

 // click to apply Canvas
	  //  $( "#applyShirtCanvas" ).click(function() {
		// 	 console.log('click')
		// 	 	applyCanvasAndShirt();
		//  });

	applyCanvasAndShirt();


  var addPatternEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


//   var addPatternToShirt = document.getElementById('addPatternToShirt');
//   addPatternToShirt.dispatchEvent(addPatternEvent);
//   addPatternToShirt.click = function(patternId,left, top,scale){
// 	  	setPatternIntoCanvas(patternId,left, top,scale);
//  	}
//  	var colorEvent = new MouseEvent('click', {
//     'view': window,
//     'bubbles': true,
//     'cancelable': true
//   });
//
//
//   var applyColorChange = document.getElementById('applyColorChange');
//   applyColorChange.dispatchEvent(colorEvent);
//   applyColorChange.click = function(){
// 	  	applyColor();
//  	}
//
//   //html2canvas
//    $( "#screenShot" ).click(function() {
// 		 // xóa mấy nút resize ở cái góc cái hình
// 		//  console.log(canvas._objects[0]);
//
// 			var img = canvas._objects[0];
//
// 				img.active = false;
// 			  img.cornervisibility = false;
// 			  canvas.remove(img.oCoords)
// 			//  img.oCoords.setControlsVisibility(HideControls);
// 			html2canvas(document.getElementById('shirtDiv'), {
// 			  onrendered: function(shotPicture) {
//
// 								var dataURL = shotPicture.toDataURL("image/jpeg", 0.5);
// 									$.ajax({
// 											url: 'http://192.168.2.193:3013/api/upload64',
// 											type: 'post',
// 											headers: {
// 											},
// 											data: {
// 													image: dataURL
// 											},
// 											dataType: 'json',
// 											xhrFields: {
// 														withCredentials: true
// 												},
// 												crossDomain: true,
// 											success: function(response) {
//
// 												$('#screenShotUrl')[0].value = response.pictureUrl;
// 											$('#screenShotUrl').trigger("click");
// 											}
// 							});
// 			  },
// 				useCORS: true
// 			});
// });
		// 	.then(function(shotPicture) {
		//     var dataURL = shotPicture.toDataURL("image/jpeg", 0.5);
		//     $.ajax({
		//         url: 'http://192.168.2.193/api/upload64',
		//         type: 'post',
		//         headers: {
		//         },
		//         data: {
		//             image: dataURL
		//         },
		//         dataType: 'json',
    //             xhrFields: {
	  //               withCredentials: true
	  //           },
	  //           crossDomain: true,
		//         success: function(response) {
		//
		//         	$('#screenShotUrl')[0].value = response.pictureUrl;
		// 		    $('#screenShotUrl').trigger("click");
		//         }
		// });
 	// 	});


	//////////////////////////////////////////////////////////////////////////////////////////

   // free drawing
// 	(function() {
//   var $ = function(id){return document.getElementById(id)};
//
//   var canvas = this.__canvas = new fabric.Canvas('c', {
//     isDrawingMode: true
//   });
//
//   fabric.Object.prototype.transparentCorners = false;
//
//   var drawingModeEl = $('drawing-mode'),
//       drawingOptionsEl = $('drawing-mode-options'),
//       drawingColorEl = $('drawing-color'),
//       drawingShadowColorEl = $('drawing-shadow-color'),
//       drawingLineWidthEl = $('drawing-line-width'),
//       drawingShadowWidth = $('drawing-shadow-width'),
//       drawingShadowOffset = $('drawing-shadow-offset'),
//       clearEl = $('clear-canvas');
//
//   clearEl.onclick = function() { canvas.clear() };
//
//   drawingModeEl.onclick = function() {
//     canvas.isDrawingMode = !canvas.isDrawingMode;
//     if (canvas.isDrawingMode) {
//       drawingModeEl.innerHTML = 'Cancel drawing mode';
//       drawingOptionsEl.style.display = '';
//     }
//     else {
//       drawingModeEl.innerHTML = 'Enter drawing mode';
//       drawingOptionsEl.style.display = 'none';
//     }
//   };
//
//   if (fabric.PatternBrush) {
//     var vLinePatternBrush = new fabric.PatternBrush(canvas);
//     vLinePatternBrush.getPatternSrc = function() {
//
//       var patternCanvas = fabric.document.createElement('canvas');
//       patternCanvas.width = patternCanvas.height = 10;
//       var ctx = patternCanvas.getContext('2d');
//
//       ctx.strokeStyle = this.color;
//       ctx.lineWidth = 5;
//       ctx.beginPath();
//       ctx.moveTo(0, 5);
//       ctx.lineTo(10, 5);
//       ctx.closePath();
//       ctx.stroke();
//
//       return patternCanvas;
//     };
//
//     var hLinePatternBrush = new fabric.PatternBrush(canvas);
//     hLinePatternBrush.getPatternSrc = function() {
//
//       var patternCanvas = fabric.document.createElement('canvas');
//       patternCanvas.width = patternCanvas.height = 10;
//       var ctx = patternCanvas.getContext('2d');
//
//       ctx.strokeStyle = this.color;
//       ctx.lineWidth = 5;
//       ctx.beginPath();
//       ctx.moveTo(5, 0);
//       ctx.lineTo(5, 10);
//       ctx.closePath();
//       ctx.stroke();
//
//       return patternCanvas;
//     };
//
//     var squarePatternBrush = new fabric.PatternBrush(canvas);
//     squarePatternBrush.getPatternSrc = function() {
//
//       var squareWidth = 10, squareDistance = 2;
//
//       var patternCanvas = fabric.document.createElement('canvas');
//       patternCanvas.width = patternCanvas.height = squareWidth + squareDistance;
//       var ctx = patternCanvas.getContext('2d');
//
//       ctx.fillStyle = this.color;
//       ctx.fillRect(0, 0, squareWidth, squareWidth);
//
//       return patternCanvas;
//     };
//
//     var diamondPatternBrush = new fabric.PatternBrush(canvas);
//     diamondPatternBrush.getPatternSrc = function() {
//
//       var squareWidth = 10, squareDistance = 5;
//       var patternCanvas = fabric.document.createElement('canvas');
//       var rect = new fabric.Rect({
//         width: squareWidth,
//         height: squareWidth,
//         angle: 45,
//         fill: this.color
//       });
//
//       var canvasWidth = rect.getBoundingRectWidth();
//
//       patternCanvas.width = patternCanvas.height = canvasWidth + squareDistance;
//       rect.set({ left: canvasWidth / 2, top: canvasWidth / 2 });
//
//       var ctx = patternCanvas.getContext('2d');
//       rect.render(ctx);
//
//       return patternCanvas;
//     };
//
//     var img = new Image();
//     img.src = '../assets/honey_im_subtle.png';
//
//     var texturePatternBrush = new fabric.PatternBrush(canvas);
//     texturePatternBrush.source = img;
//   }
//
//   $('drawing-mode-selector').onchange = function() {
//
//     if (this.value === 'hline') {
//       canvas.freeDrawingBrush = vLinePatternBrush;
//     }
//     else if (this.value === 'vline') {
//       canvas.freeDrawingBrush = hLinePatternBrush;
//     }
//     else if (this.value === 'square') {
//       canvas.freeDrawingBrush = squarePatternBrush;
//     }
//     else if (this.value === 'diamond') {
//       canvas.freeDrawingBrush = diamondPatternBrush;
//     }
//     else if (this.value === 'texture') {
//       canvas.freeDrawingBrush = texturePatternBrush;
//     }
//     else {
//       canvas.freeDrawingBrush = new fabric[this.value + 'Brush'](canvas);
//     }
//
//     if (canvas.freeDrawingBrush) {
//       canvas.freeDrawingBrush.color = drawingColorEl.value;
//       canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
//       canvas.freeDrawingBrush.shadowBlur = parseInt(drawingShadowWidth.value, 10) || 0;
//     }
//   };
//
//   drawingColorEl.onchange = function() {
//     canvas.freeDrawingBrush.color = this.value;
//   };
//   drawingShadowColorEl.onchange = function() {
//     canvas.freeDrawingBrush.shadowColor = this.value;
//   };
//   drawingLineWidthEl.onchange = function() {
//     canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;
//     this.previousSibling.innerHTML = this.value;
//   };
//   drawingShadowWidth.onchange = function() {
//     canvas.freeDrawingBrush.shadowBlur = parseInt(this.value, 10) || 0;
//     this.previousSibling.innerHTML = this.value;
//   };
//   drawingShadowOffset.onchange = function() {
//     canvas.freeDrawingBrush.shadowOffsetX =
//     canvas.freeDrawingBrush.shadowOffsetY = parseInt(this.value, 10) || 0;
//     this.previousSibling.innerHTML = this.value;
//   };
//
//   if (canvas.freeDrawingBrush) {
//     canvas.freeDrawingBrush.color = drawingColorEl.value;
//     canvas.freeDrawingBrush.width = parseInt(drawingLineWidthEl.value, 10) || 1;
//     canvas.freeDrawingBrush.shadowBlur = 0;
//   }
// })();

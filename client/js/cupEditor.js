var canvas = null;
var tshirts = new Array(); //prototype: [{style:'x',color:'white',front:'a',back:'b',price:{tshirt:'12.95',frontPrint:'4.99',backPrint:'4.99',total:'22.47'}}]
var host = 'http://169.254.148.213:3013/'
var line1;
var line2;
var line3;
var line4;





var applyColor = function(){
	$('.color-preview').click(function(){
		   var color = $(this).css("background-color");
		   document.getElementById("shirtDiv").style.backgroundColor = color;
	   });
	 // document.getElementsByClassName('color-preview')[0].click();
}
var changePatternDiv = function(url,index){
	setTimeout(function() {

	 $('#level'+ index)[0].style.backgroundImage = 'url('+ host + url.replace("\\", "/")+')';
	},500);
}
var setPatternClickFunc = function(){
	$('.patternPicker').click(function(e){

			 console.log(canvas);
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
		            left: getRandomNum(20,100),
		            top: getRandomNum(20,100),
		            angle: 0,
		            padding: 10,
		            cornersize: 10,
	      	  		hasRotatingPoint:true
		          });
		          image.scale(1).setCoords();
		          canvas.add(image);
		        });
  	});
}
var applyCanvasAndIngrident = function() {
		//setup front side canvas
	 	if (!canvas){
	 		console.log($('canvas'));
	 		// var event = new Event('input', { bubbles: true });
			 // $('#patternTop')[0].dispatchEvent(event);
			 // $('#patternLeft')[0].dispatchEvent(event);

	 		canvas = this.__canvas = new fabric.Canvas('cupCanvas', {
			  hoverCursor: 'pointer',
			  selection: false,
			  selectionBorderColor:'blue',
			  isDrawingMode: true
			});

			fabric.Object.prototype.transparentCorners = false;


			//
			// console.log(canvas.freeDrawingBrush);
			//  canvas.freeDrawingColor;
	   		canvas.freeDrawingBrush.width = 20;
	   		canvas.freeDrawingBrush.shadowBlur;

				canvas.on({
				 'object:moving': function(e) {
				    e.target.opacity = 0.5;

				  },
				  'object:modified': function(e) {
				  	// $('#patternTop')[0].value = e.target.getTop();
				   //  $('#patternLeft')[0].value = e.target.getLeft();
				   //  $('#patternScale')[0].value = e.target.getScaleX();
				   //  $('#patternAngle')[0].value = e.target.getAngle();
				   //   $('#patternAngle').trigger("click");
				   //  $('#patternTop').trigger("click");
				   //  $('#patternLeft').trigger("click");
			    //     $('#patternScale').trigger("click");

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

			$(".colorPicker").click(function(e){
	  			 canvas.freeDrawingBrush.color = e.currentTarget.style.backgroundColor;
			});

			$('#drawWidth')[0].onchange = function() {
		    canvas.freeDrawingBrush.width = parseInt(this.value, 10) || 1;

  		};
			


			// $(".colorPicker").click(function(e){
	  // 			$("#cupPicture")[0].src = e.currentTarget.src;
			// });
			// document.getElementsByClassName('shirtTypes')[].click();
			applyColor();

			document.getElementById('remove-selected').onclick = function() {
			    canvas.clear()
		  	};
	 	}
 

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
  var applyShirtCanvasEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


  var applyCupCanvas = document.getElementById('applyCupCanvas');
  applyCupCanvas.dispatchEvent(applyShirtCanvasEvent);
  applyCupCanvas.click = function(){
	  	applyCanvasAndIngrident();
 	}
    $( "#resetCanvas" ).click(function() {
		 	canvas = null;
	 });

  var addPatternEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


  var addPatternToShirt = document.getElementById('addPatternToShirt');
  addPatternToShirt.dispatchEvent(addPatternEvent);
  addPatternToShirt.click = function(){
	setPatternClickFunc();
 	}
 	var colorEvent = new MouseEvent('click', {
    'view': window,
    'bubbles': true,
    'cancelable': true
  });


  var applyColorChange = document.getElementById('applyColorChange');
  applyColorChange.dispatchEvent(colorEvent);
  applyColorChange.click = function(){
	  	applyColor();
 	}
 var handleIngredientPattern = document.getElementById('handleIngredientPattern');
   handleIngredientPattern.dispatchEvent(colorEvent);
   handleIngredientPattern.click = function(index){
	  	changePatternDiv(this.value,index);
 	}

  //html2canvas
   $( "#screenShot" ).click(function() {

			var img = canvas._objects[0];

				img.active = false;
			  img.cornervisibility = false;
			  canvas.remove(img.oCoords)
			//  img.oCoords.setControlsVisibility(HideControls);
			html2canvas(document.getElementById('shirtDiv'), {
			  onrendered: function(shotPicture) {

								var dataURL = shotPicture.toDataURL("image/jpeg", 0.5);
									$.ajax({
											url: host+'api/upload64',
											type: 'post',
											headers: {
											},
											data: {
													image: dataURL
											},
											dataType: 'json',
											xhrFields: {
														withCredentials: true
												},
												crossDomain: true,
											success: function(response) {

												$('#screenShotUrl')[0].value = response.pictureUrl;
											$('#screenShotUrl').trigger("click");
											}
							});
			  },
				useCORS: true
			});
});
		 
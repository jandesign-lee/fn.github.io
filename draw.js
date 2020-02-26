// first we need to create a stage
var stage = new Konva.Stage({
  container: 'bjimg',   // id of container <div>
  width: 900,
  height: 383,
});

// then create layer
var layer = new Konva.Layer();

// create our shape
var circle = new Konva.Circle({
 
});

// add the shape to the layer
layer.add(circle);

// add the layer to the stage
stage.add(layer);

// draw the image
layer.draw();
      var imageObj = new Image();
      imageObj.onload = function() {
        var yoda = new Konva.Image({
          x: 0,
          y: 0,
          image: imageObj,
          width: 900,
          height: 383
        });

        // add the shape to the layer
        layer.add(yoda);
        layer.batchDraw();
      };
      imageObj.src = '22.png';

      // alternative API:
      Konva.Image.fromURL('22.png', function(darthNode) {
        darthNode.setAttrs({
          x: 200,
          y: 50,
          scaleX: 0.5,
          scaleY: 0.5
        });
        layer.add(darthNode);
        layer.batchDraw();
      });

window.addEventListener("load",function(){
    var theCanvas = document.getElementById('canvas');
    if (theCanvas && theCanvas.getContext){
        var ctx =theCanvas.getContext("2d");
        if (ctx){
            //draw an image
            var srcImg = document.getElementById("img1");

            ctx.fillStyle ="black";
            ctx.strokeStyle="orange";
            ctx.lineWidth = 5;
            ctx.strokeRect(25,25,150,200)
            ctx.fillRect(25,25,150,200)
            //draw the image and scale it to fit inside the rectangle
            ctx.drawImage(srcImg, 25, 25,150,200);

       

            ctx.fillStyle ="black";
            ctx.strokeStyle="orange";
            ctx.lineWidth = 5;
            ctx.strokeRect(225,25,150,200)
            ctx.fillRect(225,25,150,200)


            //draw the image and scale it to fit inside the rectangle           
            ctx.drawImage(srcImg, 225,25,150,200);

        }
    }
})



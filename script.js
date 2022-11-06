function zoomin(){
    //-- adding 50 to width and multiply height with .667
    var width,height; 
    width = parseInt(document.getElementById("myimage").style.width);
    width = width+50;
    height = Math.round(width*.667);

    document.getElementById("myimage").style.width = width + "px"
    document.getElementById("myimage").style.height = height + "px"
    }


function zoomout(){
    //-- reducing 50 to width and multiply height with .667
    var width,height; 
    width = parseInt(document.getElementById("myimage").style.width);
    width = width-50;
    height = Math.round(width*.667); 

    document.getElementById("myimage").style.width = width + "px"
    document.getElementById("myimage").style.height = height + "px"
    }


function reset(){
    document.getElementById("myimage").style.width="600px";
    document.getElementById("myimage").style.height="400px";
  }

function c5ld(){
       document.getElementById('c5ld').innerHTML='<span style="color:Green";><span style="color:black"> Answer: ✅</span> Correct! Equation is consistent.</span><br><br> Reason: <i>b</i> &equiv; (1, 2) = <i>T</i>(1, 4) &rArr; <i>b</i> &isin; Range <i>T</i> &rArr; Consistent  ';
       document.getElementById('c5li').innerHTML='';
       document.getElementById('solutionForm').style.display="";
   }
   function c5li(){
       document.getElementById('c5li').innerHTML='<span style="color:red";><span style="color:black"> Answer:</span>❌ Incorrect! Equation is consistent.</span><br><br> Reason: <i>b</i> &equiv; (1, 2) = <i>T</i>(1, 4) &rArr; <i>b</i> &isin; Range <i>T</i> &rArr; Consistent  ';
       document.getElementById('c5ld').innerHTML='';
       document.getElementById('solutionForm').style.display="";
   }
   function c6ld(){
       document.getElementById('c6ld').innerHTML='<span style="color:red";><span style="color:black"> Answer:</span>❌ Incorrect! Equation is inconsistent.</span><br><br> Reason:&emsp; Let (2, 3) &isin; Range <i>T</i> <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rArr; (2, 3) = <i>T</i>(<i>p, q</i>) <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  &rArr; (2, 3) = (<i>p</i>, 2<i>p</i>) <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  &rArr;  <i>p</i> = 2 and 2<i>p</i> = 3, a contradiction';
       document.getElementById('c6li').innerHTML='';
   }
   function c6li(){
       document.getElementById('c6li').innerHTML='<span style="color:Green";><span style="color:black"> Answer: ✅ </span>Correct! Equation is inconsistent.</span><br><br> Reason:&emsp; Let (2, 3) &isin; Range <i>T</i> <br> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp; &rArr; (2, 3) = <i>T</i>(<i>p, q</i>) <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  &rArr; (2, 3) = (<i>p</i>, 2<i>p</i>) <br>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;  &rArr;  <i>p</i> = 2 and 2<i>p</i> = 3, a contradiction';
       document.getElementById('c6ld').innerHTML='';
   }





   
var grid_size = 12;
var x_axis_distance_grid_lines = 10;
var y_axis_distance_grid_lines = 5;
var x_axis_starting_point = { number: 1, suffix: '' };
var y_axis_starting_point = { number: 1, suffix: '' };

var canvas = document.getElementById("my-canvas");

var ctx = canvas.getContext("2d");

var canvas_width = canvas.width;
var canvas_height = canvas.height;

var num_lines_x = Math.floor(canvas_width/grid_size);
var num_lines_y = Math.floor(canvas_height/grid_size);
        
// Draw grid lines along X-axis
for(var i=0; i<=num_lines_x; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == x_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#dcdcdc";
    
    if(i == num_lines_x) {
        ctx.moveTo(0, grid_size*i);
        ctx.lineTo(canvas_width, grid_size*i);
    }
    else {
        ctx.moveTo(0, grid_size*i+0.5);
        ctx.lineTo(canvas_width, grid_size*i+0.5);
    }
    ctx.stroke();
}

// Draw grid lines along Y-axis
for(i=0; i<=num_lines_y; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    
    // If line represents X-axis draw in different color
    if(i == y_axis_distance_grid_lines) 
        ctx.strokeStyle = "#000000";
    else
        ctx.strokeStyle = "#dcdcdc";

    if(i == num_lines_y) {
        ctx.moveTo(grid_size*i, 0);
        ctx.lineTo(grid_size*i, window.canvas_height);
    }
    else {
        ctx.moveTo(grid_size*i+0.5, 0);
        ctx.lineTo(grid_size*i+0.5, canvas_height);
    }
    
    ctx.stroke();
}

// Translate to the new origin. Now Y-axis of the canvas is opposite to the Y-axis of the graph. So the y-coordinate of each element will be negative of the actual
ctx.translate(y_axis_distance_grid_lines*grid_size, x_axis_distance_grid_lines*grid_size);

// Ticks marks along the positive X-axis
for(i=1; i<(num_lines_y - y_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(grid_size*i+0.5, -3);
    ctx.lineTo(grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(x_axis_starting_point.number*i + x_axis_starting_point.suffix, grid_size*i-2, 15);
}

// Ticks marks along the negative X-axis
for(i=1; i<y_axis_distance_grid_lines; i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-grid_size*i+0.5, -3);
    ctx.lineTo(-grid_size*i+0.5, 3);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'end';
    ctx.fillText(-x_axis_starting_point.number*i + x_axis_starting_point.suffix, -grid_size*i+3, 15);
}

// Ticks marks along the negative Y-axis
for(i=1; i<( x_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, grid_size*i+0.5);
    ctx.lineTo(3, grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(-y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, grid_size*i+3);
}

// Ticks marks along the positive Y-axis
for(i=1; i<(num_lines_x - x_axis_distance_grid_lines); i++) {
    ctx.beginPath();
    ctx.lineWidth = 1;
    ctx.strokeStyle = "#000000";

    // Draw a tick mark 6px long (-3 to 3)
    ctx.moveTo(-3, -grid_size*i+0.5);
    ctx.lineTo(3, -grid_size*i+0.5);
    ctx.stroke();

    // Text value at that point
    ctx.font = '9px Arial';
    ctx.textAlign = 'start';
    ctx.fillText(y_axis_starting_point.number*i + y_axis_starting_point.suffix, 8, -grid_size*i+3);
    ctx.beginPath();
    /*ctx.arc(2*grid_size, -4*grid_size, 3, 0, 2 * Math.PI);
    ctx.fill();*/
ctx.moveTo(-10*grid_size, 20*grid_size);
ctx.lineTo(5*grid_size, -10*grid_size);

// Draw the Path
ctx.stroke();
    
}

function plotPoint() {
    var x = parseFloat(document.getElementById("xInput").value);
    var y = parseFloat(document.getElementById("yInput").value);

    if(document.getElementById("xInput").value.length==0){
        alert("Please enter the value of r");
        return false
    }
    if(document.getElementById("yInput").value.length==0){
        alert("Please enter the value of s");
        return false
    }

     if (x < -4 || x > 14) {
        alert("Value of r must be between -4 and 14");
        return false;
    }
    if (y < -9 || y > 9) {
        alert("Value of s must be between -9 and 9");
        return false;
    }
    ctx.beginPath();
    ctx.arc(x*grid_size, -y*grid_size, 3, 0, 2 * Math.PI);
    
    ctx.fillStyle = "red";
    ctx.fill();

    document.getElementById("equation").innerHTML = 
  "<span style='color:blue;'>&emsp;Equation under consideration :</span> " +
  "<span style='color:red;'><i>T</i>(<i>x</i>) = ("+x+", "+y+")</span><br><br>";


    if(((parseFloat(document.getElementById("xInput").value))*2)==parseFloat(document.getElementById("yInput").value)){
        document.getElementById("printpoint1cords").innerHTML = "(" + x + ", " + y + ") &isin; Range <i>T</i> ";
        document.getElementById("solutionexist").innerHTML="<span style='color:blue;'>&#8658; Solution exists</span>";
        document.getElementById('constbtn').style.display="";
        document.getElementById('canvas').style.display="";
        document.getElementById('solutionexist').style.display="";
    }
    else{
        //document.getElementById("printpoint1cords").innerHTML = "(" + x + ", " + y + ") &notin; Range <i>T</i> <br><br>&#8658; Solution does not exist";
        document.getElementById("printpoint1cords").innerHTML = "(" + x + ", " + y + ") &notin; Range <i>T</i>";
        document.getElementById("solutionexist").innerHTML = "<span style='color:blue;'>&#8658; Solution does not exist</span>";
        document.getElementById('constbtn').style.display="";
        document.getElementById('canvas').style.display="";
        document.getElementById('solutionexist').style.display="";
    }
        //document.getElementById("printpoint1cords").innerHTML = "(" + x + ", " + y + "";

    document.getElementById("note2").innerHTML = "Note: The red point represents the coordinates entered by the user.";
}


document.getElementById("solutionForm").addEventListener("submit", function(event) {
            event.preventDefault();
            var p = parseFloat(document.getElementById("p").value);
            var q = parseFloat(document.getElementById("q").value);
            var resultElement = document.getElementById("result");

            if (p === 1) {
                resultElement.innerHTML = "<span style='color:black'> Answer: </span>Correct solution!";
                resultElement.style.color ="Green"
                document.getElementById("ressol").innerHTML = "Reason:&emsp;(<i>p, q</i>) is a solution if <i>T</i>(<i>p, q</i>) = (1 , 2)<br><span style='margin-left:62px;'>&rArr; (<i>p</i>, 2<i>p</i>) = (1, 2);</span><br> <span style='margin-left:61px;'>&rArr; <i>p</i> = 1</span> <br><br> Solutions : (1, <i>q</i>), <i>q</i>&isin;<i>R</i>";
            
            } else {
                resultElement.innerHTML = "<span style='color:black'>Answer: </span>Incorrect solution!";
                resultElement.style.color ="red"
                document.getElementById("ressol").innerHTML = "Reason:&emsp;(<i>p, q</i>) is a solution if <i>T</i>(<i>p, q</i>) = (1 , 2)<br><span style='margin-left:62px;'>&rArr; (<i>p</i>, 2<i>p</i>) = (1, 2);</span><br> <span style='margin-left:61px;'>&rArr; <i>p</i> = 1</span> <br><br> Solutions : (1, <i>q</i>), <i>q</i>&isin;<i>R</i>";
            }
        });

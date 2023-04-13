# sketch-an-etch

note: idea for shading function (color gets darker as user goes over area repeatedly): 


function active(element) {
    // Get the current background color of the cell
    var computedStyle = window.getComputedStyle(element);
    var backgroundColor = computedStyle.backgroundColor;
    
    // Parse the color values from the background color string
    var rgbaValues = backgroundColor.match(/\d+/g);
    var red = rgbaValues[0];
    var green = rgbaValues[1];
    var blue = rgbaValues[2];
    
    // Decrease the color values to make the color darker
    red = Math.max(0, red - 25);
    green = Math.max(0, green - 25);
    blue = Math.max(0, blue - 25);
    
    // Set the new background color of the cell
    element.style.backgroundColor = `rgba(${red}, ${green}, ${blue}, 1)`;
}

    subtracting by 25 possibly should be subbed with increase/decrease of 10%

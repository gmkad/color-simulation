function changeColor() {
    var img = document.getElementById('houseImage');
    var colorPicker = document.getElementById('colorPicker');
    img.style.filter = `sepia(1) saturate(500%) hue-rotate(${getColorRotation(colorPicker.value)}deg)`;
}

function getColorRotation(hex) {
    // Convert hex color to RGB
    var r = parseInt(hex.substr(1, 2), 16);
    var g = parseInt(hex.substr(3, 2), 16);
    var b = parseInt(hex.substr(5, 2), 16);

    // Simplified conversion to hue rotation
    return 100 - (0.299 * r + 0.587 * g + 0.114 * b) * 360 / 255;
}

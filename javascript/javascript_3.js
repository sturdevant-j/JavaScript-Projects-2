function displayType(flower) {
    var flowerType = flower.getAttribute("data-flower-type");
    alert(flowerType + " is in the " + flower.innerHTML + " family");

}
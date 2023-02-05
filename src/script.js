// ==== PASSAGE TRANSITIONS
// Remove outgoing elements when their opacity animation ends
Config.passages.transitionOut = "opacity";

// Remove outgoing elements after time in ms
Config.passages.transitionOut = 800;

// delays load to prevent funny flashes due to :passagestart event
Config.loadDelay = 1500;

setup.pData = {
    "start": [30, 35, "doorway.jpeg"],
    "Car_Mum": [10, 5, "doorway.jpeg"],
    "House_welcome": [20, 10, "chair.jpeg"],
    "Kitchen": [5, 45, "kitchen.jpeg"],
    "LivingRoom": [10, 20, "carpet.jpeg"],
    "Neighbour": [15, 5, "doorway.jpeg"]
}

$(document).on(':passagestart', function (ev) {
    // style position of element
    let passageData = setup.pData[ev.content.attributes[2].nodeValue];
    if (!passageData) { // fallback values when a passage is untagged.
        passageData = [10, 10, "sample.png"];
    }

    ev.content.style.top = passageData[0] + "%";
    ev.content.style.left = passageData[1] + "%";

    // set background
    let a = document.getElementById("background");
    a.style = "background-image: url(img/" + passageData[2] + ");";
});
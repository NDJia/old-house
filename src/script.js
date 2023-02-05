// ==== PASSAGE TRANSITIONS
// Remove outgoing elements when their opacity animation ends
Config.passages.transitionOut = "opacity";

// Remove outgoing elements after time in ms
// Config.passages.transitionOut = 800;

// delays load to prevent funny flashes due to :passagestart event
Config.loadDelay = 1500;

State.setVar("$prevTag", "start");

setup.pData = {
    "start": [30, 35, "doorway.jpeg"],
    "Car_Mum": [15, 5, "doorway.jpeg"],
    "House_welcome": [50, 4, "carpet.jpeg"],
    "Kitchen": [20, 48, "kitchen.jpeg"],
    "LivingRoom": [65, 30, "livingroom.jpeg"],
    "Neighbor": [15, 5, "doorway.jpeg"],
    "envelope": [18, 28, "envelope.jpeg"],
    "box": [10, 30, "chest.jpeg"],
    "Vase": [28, 50, "vase.jpeg"],
    "closet": [20, 30, "closet.jpeg"],
    "Upstairs": [25, 40, "room2.jpeg"],
    "End": [20, 31, "end.png"],
    "backyard": [45, 30, "backyard.jpeg"],
    "cat": [70, 33, "cat.jpeg"],
    "jimmy": [40, 7, "gun.jpeg"]
};

$(document).on(':passagestart', function (ev) {
    if (State.variables.prevTag != ev.content.attributes[2].nodeValue) {
        $("#background").fadeOut(200).delay(200).fadeIn(300);
    }
});

$(document).on(':passagerender', function (ev) {
    // style position of element
    let passageData = setup.pData[ev.content.attributes[2].nodeValue];
    if (!passageData) { // fallback values when a passage is untagged.
        passageData = [10, 10, "sample.png"];
    }

    ev.content.style = "top: " + passageData[0] + "%; left: " + passageData[1] + "%";

    // set background
    let a = document.getElementById("background");
    a.style = "background-image: url(img/" + passageData[2] + ");";

});

$(document).on(':passageend', function(ev) {
    State.variables.prevTag = ev.content.attributes[2].nodeValue;
});
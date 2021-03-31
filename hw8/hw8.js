var images = ["GalaxyCluster.jpg", "InteractingGalaxies.jpg", "M104.jpg", "M51.jpg", "NGC1300.jpg", "NGC6217.jpg"];
var image_caps = ["Galaxy Cluster", "Interacting Galaxies", "M 104", "M 51", "NGC 1300", "NGC 6217"];

function randomImg() {

        var img = document.getElementById("img");
        var cap = document.getElementById("img_cap");
        if(cap.textContent != "cap") {
                return
        }

        len = images.length;
        var rand = Math.random() * len;
        var x = Math.trunc(rand);
        img.src = "images/" + images[x];
        cap.textContent = image_caps[x];

}

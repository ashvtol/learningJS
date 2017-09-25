//jsonObject
var jsonPlaylist = { "1": [{"name": "./vids/1.mp4"}],
    "2": [{"name": "./vids/2.mp4"}],
    "3": [{"name": "./vids/3.mp4"}],
    "4": [{"name": "./vids/4.mp4"}],
    "5": [{"name": "./vids/5.mp4"}],
    "6": [{"name": "./vids/6.mp4"}],
    "7": [{"name": "./vids/7.mp4"}]};


function main() {
    "use strict";
    var table = document.getElementById("table1"), rows, 
        columns, loopLength = Object.keys(jsonPlaylist).length, i, 
        player = document.getElementById("media-video");
    //autoplay
    //player.play();
    //console.log(jsonPlaylist[1][0].name);
    for (i = 1; i <= loopLength; i++ ){
        rows = table.insertRow();
        columns = rows.insertCell();
        columns.innerHTML = jsonPlaylist[i][0].name;
        columns.addEventListener('click', changeSource);
    }    
}

function changeSource(event) {
    "use strict";
    var clickedSource = event.srcElement.outerText,
        currentSource = document.getElementById("source1"),
        player = document.getElementById("media-video");
//    console.log(clickedSource);
//    console.log(currentSource.src);
    currentSource.src = clickedSource;
    player.load();
    player.play();
    
}
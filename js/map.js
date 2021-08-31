
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 14.192260619987495, lng: -90.42397797326859},
        zoom: 7
    });
    const marker = new google.maps.Marker({
        position: {lat: 14.192260619987495, lng: -90.42397797326859},
        map: map,
    });

}


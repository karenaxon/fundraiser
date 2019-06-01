


var locations = [
        ['Salt Lake City Airport', 40.786618, -111.982183],
        ['Arches National Park', 38.733082, -109.592514],
        ['Capital Reef National Park', 38.208149, -111.194969],
        ['Bryce Canyon National Park', 37.593037, -112.187088],
        ['Sand Hollow State Park', 37.167410, -113.373860],
        ['Zion National Park', 37.348099, -113.089996],
        ['McCarran International Airport', 36.439240, -115.247280]



    ];



function initMap() {
    var blackRockUtah = {lat: 38.615900, lng: -112.609360};

    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 7,
        center: blackRockUtah
        });

    var count=0;


    for (count = 0; count < locations.length; count++) {

        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(locations[count][1], locations[count][2]),
            map: map
            });

        marker.info = new google.maps.InfoWindow({
            content: locations [count][0]
            });


        google.maps.event.addListener(marker, 'click', function() {
            // this = marker
            var marker_map = this.getMap();
            this.info.open(marker_map, this);
            // Note: If you call open() without passing a marker, the InfoWindow will use the position specified upon construction through the InfoWindowOptions object literal.
            });
    }
}

function myMap() {
    amk = {lat: 1.369115, lng: 103.845436};
    cl = {lat: 1.31620, lng: 103.76523};

    var mapProp1 = {
        center:new google.maps.LatLng(amk),
        zoom:12,
    };

    var mapProp2 = {
        center:new google.maps.LatLng(cl),
        zoom:12,
    };

    var map1 = new google.maps.Map(document.getElementById("googleMap1"),mapProp1);
    var map2 = new google.maps.Map(document.getElementById("googleMap2"),mapProp2);

    var marker1 = new google.maps.Marker({
        position: amk,
        map: map1,
        title: 'AZoom Car Rental Ang Mo Kio'
    });
    var marker2 = new google.maps.Marker({
        position: cl,
        map: map2,
        title: 'AZoom Car Rental Clementi'
    });
}
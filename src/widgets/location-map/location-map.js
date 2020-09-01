import mapboxgl from 'mapbox-gl';

if ($('[location-tabbed]').length) {
    let locationMap = document.querySelector("[map-location]");
    let z = parseInt(locationMap.getAttribute('zoom-location'));
    var start = locationMap.getAttribute('data-coords').replace('[', '').replace(']', '').split(',')

    mapboxgl.accessToken =
        'pk.eyJ1Ijoib21uaWFkZXZlbG9wbWVudCIsImEiOiJjaXpyMTgza2UwMW9kMnFvMGc1Ym1nMzB0In0.bYJIjazvCbz1TlB5wQFz_Q';

    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/omniadevelopment/ck4fnnib01l0c1cp9e37hliiz',
        center: [parseFloat(start[0]), parseFloat(start[1]) + 0.01],
        zoom: z,
    });

    var marker;

    let el = document.createElement('div');
    el.className = 'marker';
    let icon = '<a class="icon-map" ><i class="fa fa-map-marker">  </i></a>';
    el.innerHTML = icon;

    // ------------------------------------------------------------------------------------------------------------
    // var information = $('#first-location').data('popup-info');
    let locationinfo = document.querySelector('[location-info]').getAttribute('location-info')
    var popup = new mapboxgl.Popup({ offset: 2, closeOnClick: false }).setHTML(locationinfo);

    marker = new mapboxgl.Marker(el).setLngLat(start).setPopup(popup).addTo(map);

    $('.icon-map').on('click', function () {
        if ($(this).hasClass('opened')) {
            $(this).removeClass('opened');
        } else {
            $(this).addClass('opened');
        }
        setTimeout(function(){
            var contactdetail = $('.contact__map .contact a')
            contactdetail.each(function(i,ele){
               
                if($(ele).text().trim() == ""){
                    $(ele).addClass('d-none');
                }
            })
        },0)
       
    });
    // ------------------------------------------------------------------------------------------------------------
    $('[location-tabbed] .location-list a').click(function () {
        marker.remove();
        $(this).parent().siblings().find('a').removeClass('active');
        $(this).addClass('active');
        let coords = $(this).attr('data-coord').split(',');
        let lng = parseFloat(coords[0]);
        let lat = parseFloat(coords[1]);
        coords = [lng, lat];


        // ------------------------------------------------------------------------------------------------------------
        var information = $(this).data('popup-info');

        console.log('Information: ', information);

        var popup = new mapboxgl.Popup({ offset: 2, closeOnClick: false }).setHTML(`<div class="header">
            <h3> ${information.title} </h3> 
            <p class="address">  ${information.address}</p>
            <p> ${information.pobox} </p>
            <div class="contact">
            <a href="tel:  "${information.telephone}"> <i class="fa fa-phone"></i> ${information.telephone} </a>
            <a href="fax: "${information.fax}" > <i class="fa fa-fax"></i> ${information.fax} </a>
            <a href="fax: "${information.fax}" > <i class="fa fa-envelope"></i> ${information.email} </a>
            </div>
        </div>`);

        marker = new mapboxgl.Marker(el).setLngLat(coords).setPopup(popup).addTo(map)
        //$(marker.getElement()).find('a').addClass('opened');
        
        

        // ------------------------------------------------------------------------------------------------------------
        map.flyTo({
            center: [coords[0], coords[1] + 0.01],
            zoom: z,
            bearing: 0,
            speed: 2,
            curve: 1,
            easing: function (t) {
                return t;
            }
        });
    });
}
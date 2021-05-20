/*----------------------Google maps on blog page*/

function initMap() {
            var map = new google.maps.Map(document.getElementById("map"), {
                zoom: 3,
                center: {
                    lat: 46.619261,
                    lng: -33.134766
                }
            });

            var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            var locations = [

                { lat: 53.36479162160731, lng: -6.206993528184572 },
                { lat: 55.039686268255686, lng: -7.433151878407166 },
                { lat: 54.39271703285569, lng: -7.747465488411665 },
                { lat: 53.85479942958437, lng: -6.25349297493541 },
                { lat: 54.19786251019116, lng: -8.43725657307854 },
                { lat: 54.50737953406214, lng: -7.834466058478111 },
                { lat: 54.96932145814422, lng: -7.2701478307214 },
                { lat: 53.62026937164539, lng: -6.490202588438604 },
                { lat: 54.45904589323618, lng: -5.978445001904369 },
                { lat: 54.696170145259416, lng: -8.053232426170315 },
                { lat: 53.82662096502368, lng: -7.29481927309146 }
                
        ];

        var markers = locations.map(function(location, i) {
            return new google.maps.Marker({
                position: location,
                label: labels[i % labels.length]
            });

        });
        var markerCluster = new MarkerClusterer(map, markers,
                {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});

        }
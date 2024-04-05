import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

class Place {
    name: string;
    latitude: number;
    longitude: number;
}

@Component({
    standalone: true,
    selector: 'mapbox-map',
    templateUrl: './mapbox-map.component.html',
})
export class MapboxMapComponent implements OnInit {
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 53.27515756;
    lng = -7.877257;
    zoom = 6.5;

    randomPlaces: Place[] = [
        {
            name: 'Run Omagh!',
            latitude: 53.6272,
            longitude: -8.18812,
        },
        {
            name: 'Run Omagh!',
            latitude: 53.2735,
            longitude: -7.77832032,
        },
        {
            name: 'Run Omagh!',
            latitude: 53.4239,
            longitude: -7.94069,
        },
        {
            name: 'Run Omagh!',
            latitude: 54.5092,
            longitude: -6.04676,
        },
        {
            name: 'Run Omagh!',
            latitude: 54.3466,
            longitude: -7.64167,
        },
    ];

    constructor() {}

    ngOnInit() {
        mapboxgl as typeof mapboxgl;
        this.map = new mapboxgl.Map({
            accessToken:
                'pk.eyJ1IjoiZHBpZXRyb2NhcmxvIiwiYSI6ImNram9tOGFuMTBvb3oyeXFsdW5uYmJjNGQifQ._zE6Mub0-Vpl7ggMj8xSUQ',
            container: 'map',
            style: this.style,
            zoom: this.zoom,
            center: [this.lng, this.lat],
        });

        this.map.on('load', () => {
            // Disable scroll zoom
            // this.map.scrollZoom.disable();

            // Existing code to add markers
            this.randomPlaces.forEach(place => {
                new mapboxgl.Marker()
                    .setLngLat([place.longitude, place.latitude])
                    // .setPopup(new mapboxgl.Popup({ offset: 25 }).setText(place.name))
                    .addTo(this.map);
            });
        });
    }
}

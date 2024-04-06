import {Component, inject, OnInit} from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import {Run} from "../run-item/run-item.component";
import {StateService} from "../../service/state.service";

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

    // list: RunListState = {
    private runList = inject(StateService)
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 53.27515756;
    lng = -7.877257;
    zoom = 6.5;

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
          this.runList.runList.forEach(place => {
                new mapboxgl.Marker()
                    .setLngLat([place.longitude, place.latitude])
                    .addTo(this.map);
            });
        });
    }
}

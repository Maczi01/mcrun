import { Component, inject, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { StateService } from '../../service/state.service';
import { Run } from '../../types';

@Component({
    standalone: true,
    selector: 'mapbox-map',
    templateUrl: './mapbox-map.component.html',
})
export class MapboxMapComponent implements OnInit {
    // list: RunListState = {
    private runList = inject(StateService);
    map: mapboxgl.Map;
    style = 'mapbox://styles/mapbox/streets-v11';
    lat = 53.27515756;
    lng = -7.877257;
    zoom = 6.5;

    // constructor(map: mapboxgl.Map) {
    //     this.map = map;
    // }

    private markers = new Map<Run, mapboxgl.Marker>();

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
            this.runList.getRuns().forEach(run => {
                const marker = new mapboxgl.Marker({ color: 'blue' })
                    .setLngLat([run.longitude, run.latitude])
                    .addTo(this.map);

                this.markers.set(run, marker);
            });
        });

        this.runList.activeRun$.subscribe(activeRun => {
            this.markers.forEach((marker, run) => {
                marker.getElement().style.backgroundColor = run === activeRun ? 'yellow' : ''; // Adjust the logic if needed
            });
        });

        // this.map.on('load', () => {
        //     this.runList.runList.forEach(place => {
        //         new mapboxgl.Marker({ color: place.place === 'Enniskillen' ? 'red' : 'blue'})
        //             .setLngLat([place.longitude, place.latitude])
        //             .addTo(this.map);
        //     });
        // });
    }
}

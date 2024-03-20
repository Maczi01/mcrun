import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';

@Component({
  standalone: true,
  selector: 'app-mapbox-map',
  templateUrl: './mapbox-map.component.html',
  // styleUrls: ['./mapbox-map.component.css']
})
export class MapboxMapComponent implements OnInit {

  map: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';

  lat = 26.3398;
  lng = -81.7787;
  constructor() {}

  ngOnInit() {
    mapboxgl as typeof mapboxgl;
    this.map = new mapboxgl.Map({
      accessToken:
        'pk.eyJ1IjoiZHBpZXRyb2NhcmxvIiwiYSI6ImNram9tOGFuMTBvb3oyeXFsdW5uYmJjNGQifQ._zE6Mub0-Vpl7ggMj8xSUQ',
      container: 'map',
      style: this.style,
      zoom: 2,
      center: [this.lng, this.lat],
    });
  }
  // ngOnInit() {
  //   (mapboxgl as any).accessToken = 'pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4M29iazA2Z2gycXA4N2pmbDZmangifQ.-g_vE53SD2WrJ6tFX7QHmA';
  //   var map = new mapboxgl.Map({
  //     container: 'map', // container ID
  //     style: 'mapbox://styles/mapbox/streets-v11', // style URL
  //     center: [54.61, -5.896], // starting position [lng, lat]
  //     zoom: 9 // starting zoom
  //   });
}

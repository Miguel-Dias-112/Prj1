import Map from "ol/Map";
import { View } from "ol";
import TileLayer from "ol/layer/Tile";
import VectorLayer from "ol/layer/Vector";
import { Vector as VectorSource } from "ol/source";
import {Icon, Style} from 'ol/style';
import { OSM, XYZ } from "ol/source";
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import { fromLonLat } from 'ol/proj';

import { useEffect } from "react";
import './MapView.css'
export function MapView() {
    useEffect(() => {
      const map = new Map({
        target: "map",
        layers: [
          new TileLayer({
            source: new XYZ({
              url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
          }),
          
        ],
        overlays: [],
        
        view: new View({
          center: [-4827769.166891132,-2484616.878317465],
          zoom: 15.7,
        }),
      });
      var markers = new VectorLayer({
        source: new VectorSource(),
        style: new Style({
          image: new Icon({
            anchor: [0.5, 1],
            src: 'marker.png'
          })
        })
      });
      // map.addLayer(markers);
      // var marker = new Feature(new Point(fromLonLat([106.8478695, -6.1568562])));
      // const source = markers.getSource();
      // source!!.addFeature(marker);

      return () => {
        map.setTarget(undefined);
      };
    }, []);

    
    
  
    return <div id="map" style={{ width: "100%", height: "400px" }} />;
  }
import { Component, ViewChild, ElementRef } from "@angular/core";
import { IonicPage, NavController, NavParams } from "ionic-angular";
import leaflet from "leaflet";
import 'leaflet-routing-machine';

/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-map",
  templateUrl: "map.html"
})
export class MapPage {
  @ViewChild("map") mapContainer: ElementRef;
  map: any;
  public values: any;
  public latlongs;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.values = navParams.get("item");
    console.log(this.values);
  }
  ionViewDidEnter() {
    this.loadmap();
  }
  loadmap() {
    this.map = leaflet.map("map").fitWorld();
    leaflet
      .tileLayer("http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attributions:
          'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18
      })
      .addTo(this.map);
    this.map
      .locate({
        setView: true,
        maxZoom: 13
      })
      .on("locationfound", e => {
        // let markerGroup = leaflet.featureGroup();
        // let marker: any = leaflet
        //   .marker([e.latitude, e.longitude], {
        //     icon: leaflet.icon({
        //       iconUrl: "../assets/current.png",
        //       iconSize: [37, 37],
        //       iconAnchor: [18, 37]
        //     })
        //   })
        //   .on("click", () => {
        //     console.log(e.latitude, e.longitude);
        //   });
        // let marker2: any = leaflet
        //   .marker([this.values.lat, this.values.long])
        //   .on("click", () => {
        //     alert("Marker clicked");
        //   });
        // markerGroup.addLayer(marker);
        // markerGroup.addLayer(marker2);
        // this.map.addLayer(markerGroup);
        var latlngs = [[e.latitude, e.longitude], [this.values.lat, this.values.long]];
        var polyline = leaflet.polyline(latlngs, { color: "blue" }).addTo(this.map);
        // zoom the map to the polyline
        this.map.fitBounds(polyline.getBounds());
        leaflet.Routing.control({
          waypoints: [
              leaflet.latLng(e.latitude, e.longitude),
              leaflet.latLng(this.values.lat, this.values.long)
          ],
          routeWhileDragging: true
      }).addTo(this.map);
      })
      .on("locationerror", err => {
        alert(err.message);
      });

  }
  ionViewDidLoad() {
    console.log("ionViewDidLoad MapPage");
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "none";
      });
    }
  }

  ionViewWillLeave() {
    let tabs = document.querySelectorAll(".show-tabbar");
    if (tabs !== null) {
      Object.keys(tabs).map(key => {
        tabs[key].style.display = "flex";
      });
    }
  }
  cancel() {
    this.navCtrl.pop();
  }
}

import { Component, OnInit, ViewEncapsulation, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MapComponent implements OnInit {
  
  map!: google.maps.Map;
  marker!: google.maps.Marker;
  geocoder!: google.maps.Geocoder;
  responseDiv!: HTMLDivElement;
  response!: HTMLPreElement;
  isErrorAlertOpen = false;

  @Input() locationFromBackend: { address: string } | null = null;
  center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 };

  @Output() locationVerified = new EventEmitter<boolean>();

  ngOnInit(): void {
    this.loadMap();
    
    if (this.locationFromBackend) {
      this.loadLocationFromBackend(this.locationFromBackend.address);
    }
  }

  addControls(): void {
    this.response = document.createElement("pre");
    this.response.id = "response";
    this.response.innerText = "";

    this.responseDiv = document.createElement("div");
    this.responseDiv.id = "response-container";
    this.responseDiv.appendChild(this.response);

    this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(this.responseDiv);
  }

  setupListeners(): void {
    this.marker = new google.maps.Marker({ map: this.map });

    this.map.addListener("click", (e: google.maps.MapMouseEvent) => {
      if (e.latLng) {
        this.geocode({ location: e.latLng });
      }
    });
  }

  clear(): void {
    if (this.marker) {
      this.marker.setMap(null);
    }
    if (this.responseDiv) {
      this.responseDiv.style.display = "none";
    }
  }

  loadMap(): void {
    if (window.google) {
      this.initMap();
    } else {
      console.error("Google Maps JavaScript API not loaded.");
    }
  }

  initMap(): void {
    this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
      zoom: 8,
      center: this.center,
      mapTypeControl: false,
    });

    this.geocoder = new google.maps.Geocoder();

    this.addControls();
    this.setupListeners();
    this.clear();
  }

  verifyLocation(address: string): void {
    this.geocode({ address });
  }

  loadLocationFromBackend(address: string): void {
    if (address) {
      this.verifyLocation(address);
    } else {
      console.error('No address provided from backend.');
      this.locationVerified.emit(false);
    }
  }

  geocode(request: google.maps.GeocoderRequest): void {
    this.clear();

    this.geocoder.geocode(request)
      .then((response: google.maps.GeocoderResponse) => {
        const results = response.results;

        if (results.length > 0) {
          const location = results[0].geometry.location;
          this.map.setCenter(location);
          this.marker.setPosition(location);
          this.marker.setMap(this.map);
          this.locationVerified.emit(true);
        } else {
          this.openErrorAlert();
          this.locationVerified.emit(false);
        }
      })
      .catch((e: any) => {
        console.error('Error en la geocodificación:', e);
        this.openErrorAlert();
        this.locationVerified.emit(false);
      });
  }

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }
}

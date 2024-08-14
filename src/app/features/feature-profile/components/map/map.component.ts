import { Component, OnInit, ViewEncapsulation } from '@angular/core';

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

  center: google.maps.LatLngLiteral = { lat: -34.397, lng: 150.644 };

  ngOnInit(): void {
    this.loadMap();
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

  addControls(): void {
    const inputText = document.createElement("input");
    inputText.type = "text";
    inputText.placeholder = "Ingresa una Ubicación";

    const submitButton = document.createElement("input");
    submitButton.type = "button";
    submitButton.value = "Localizar";
    submitButton.classList.add("button", "button-primary");

    const clearButton = document.createElement("input");
    clearButton.type = "button";
    clearButton.value = "Limpiar";
    clearButton.classList.add("button", "button-secondary");

    this.response = document.createElement("pre");
    this.response.id = "response";
    this.response.innerText = "";

    this.responseDiv = document.createElement("div");
    this.responseDiv.id = "response-container";
    this.responseDiv.appendChild(this.response);


    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(inputText);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(submitButton);
    this.map.controls[google.maps.ControlPosition.TOP_LEFT].push(clearButton);
    this.map.controls[google.maps.ControlPosition.LEFT_TOP].push(this.responseDiv);

    // Event listeners
    submitButton.addEventListener("click", () => this.geocode({ address: inputText.value }));
    clearButton.addEventListener("click", () => this.clear());
  }

  setupListeners(): void {
    this.marker = new google.maps.Marker({ map: this.map });

    this.map.addListener("click", (e: google.maps.MapMouseEvent) => {
      this.geocode({ location: e.latLng });
    });
  }

  clear(): void {
    this.marker.setMap(null);
    this.responseDiv.style.display = "none";
  }

  geocode(request: google.maps.GeocoderRequest): void {
    this.clear();

    this.geocoder
      .geocode(request)
      .then((response: google.maps.GeocoderResponse) => {
        const { results } = response;

        if (results.length > 0) {
          this.map.setCenter(results[0].geometry.location);
          this.marker.setPosition(results[0].geometry.location);
          this.marker.setMap(this.map);
          // this.responseDiv.style.display = "block";
          // this.response.innerText = JSON.stringify(results, null, 2);
        } else {
          this.openErrorAlert();
        }
      })
      .catch((e: any) => {
        this.openErrorAlert();
      });
  }

  openErrorAlert(): void {
    this.isErrorAlertOpen = true;
  }

  closeErrorAlert(): void {
    this.isErrorAlertOpen = false;
  }
}

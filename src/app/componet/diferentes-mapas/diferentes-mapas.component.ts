import { Component,Input,OnInit } from '@angular/core';
import {LeafletService} from "../../service/leaflet.service";


export const DEFAULT_LAT =  40.4381311;
export const DEFAULT_LON =  -3.8196233;
export const TITULO = 'Proyecto';


@Component({
  selector: 'app-diferentes-mapas',
  templateUrl: './diferentes-mapas.component.html',
  styleUrls: ['./diferentes-mapas.component.css']
})
export class DiferentesMapasComponent implements OnInit {

  private map:any;
  @Input() lat: number = DEFAULT_LAT;
  @Input() lon: number = DEFAULT_LON;
  @Input() titulo: string = TITULO ;
  public latloc: any;
  public lngloc: any;


  constructor( private mapService: LeafletService) {

  }
  ngOnInit(): void {
    if (this.mapService.L) {
      this.initMap();
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
          this.lat = position.coords.latitude;
          this.lon = position.coords.longitude;
          this.setGeoLocation()
        });
      }else{
        alert("User not allowed")
      }
    }
  }

  setGeoLocation( ) {
    this.map.setView([this.lat, this.lon], 14);
    this.mapService.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>contributors'
    } ).addTo(this.map);
    const marker = this.mapService.L.marker([this.lat , this.lon ]).bindPopup(this.titulo);
    marker.addTo(this.map);
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        alert (position.coords.latitude + " " + position.coords.longitude);
        this.lat = position.coords.latitude;
        this.lon = position.coords.longitude;
        this.setGeoLocation()
      });
    }
  }



  private initMap(): void {
    var iconRetinaUrl = 'assets/marker-icon-2x.png';
    var iconUrl = 'assets/marker-icon.png';
    var shadowUrl = 'assets/marker-shadow.png';


    var iconDefault = this.mapService.L.icon({
      iconRetinaUrl,
      iconUrl,
      shadowUrl,
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      tooltipAnchor: [16, -28],
      shadowSize: [41, 41]
    });
    this.mapService.L.Marker.prototype.options.icon = iconDefault;

    this.map =  this.mapService.L.map('map', {
      center: [this.lat, this.lon],
      attributionControl: false,
      zoom: 6
    });


    const tiles = this.mapService.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.resdenciasenemergencia.es/">Web Inteligencia Artificial</a>'
    });

    const relieve = this.mapService.L.tileLayer.wms("http://www.ign.es/wms-inspire/pnoa-ma?SERVICE=WMS&", {
      layers: "OI.OrthoimageCoverage",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
    });

    const fallas0 = this.mapService.L.tileLayer.wms("https://mapas.igme.es/gis/services/BasesDatos/IGME_QAFI/MapServer/WMSServer?", {
      layers: "0",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
    });
    const fallas1 = this.mapService.L.tileLayer.wms("https://mapas.igme.es/gis/services/BasesDatos/IGME_QAFI/MapServer/WMSServer?", {
      layers: "1",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
    });
    const fallas2 = this.mapService.L.tileLayer.wms("https://mapas.igme.es/gis/services/BasesDatos/IGME_QAFI/MapServer/WMSServer?", {
      layers: "2",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
    });
    const fallas3 = this.mapService.L.tileLayer.wms("https://mapas.igme.es/gis/services/BasesDatos/IGME_QAFI/MapServer/WMSServer?", {
      layers: "3",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "PNOA WMS. Cedido por © Instituto Geográfico Nacional de España"
    });


    const inundable10 = this.mapService.L.tileLayer.wms("https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?service=WMS&", {
      layers: "NZ.Flood.FluvialT10",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad asociada a las Zonas Inundables por inundación fluvial, correspondientes a un escenario de probabilidad alta de inundación (periodo de retorno de 10 años). Segundo Ciclo"
    });
    const inundable100 = this.mapService.L.tileLayer.wms("https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?service=WMS&", {
      layers: "NZ.Flood",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad asociada a las Zonas Inundables por inundación fluvial, correspondientes a un escenario de probabilidad media de inundación (periodo de retorno de 100 años). Segundo Ciclo"
    });const inundable500 = this.mapService.L.tileLayer.wms("https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?service=WMS&", {
      layers: "NZ.Flood.FluvialT500",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad asociada a las Zonas Inundables por inundación fluvial, correspondientes a un escenario de probabilidad baja de inundación (periodo de retorno de 500 años). Segundo Ciclo"
    });const inundablec10 = this.mapService.L.tileLayer.wms("https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?service=WMS&", {
      layers: "NZ.Flood.1C.FluvialT10",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad asociada a las Zonas Inundables por inundación fluvial, correspondientes a un escenario de probabilidad alta de inundación (periodo de retorno de 10 años). Primer Ciclo"
    });
    const inundablec100 = this.mapService.L.tileLayer.wms("https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?service=WMS&", {
      layers: "NZ.Flood.1C",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad asociada a las Zonas Inundables por inundación fluvial, correspondientes a un escenario de probabilidad media de inundación (periodo de retorno de 100 años). Primer Ciclo"
    });
    const inundablec500 = this.mapService.L.tileLayer.wms("https://servicios.idee.es/wms-inspire/riesgos-naturales/inundaciones?service=WMS&", {
      layers: "NZ.Flood.1C.FluvialT500",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad asociada a las Zonas Inundables por inundación fluvial, correspondientes a un escenario de probabilidad baja de inundación (periodo de retorno de 500 años). Primer Ciclo"
    });
    const peligrosismico = this.mapService.L.tileLayer.wms("https://www.ign.es/wms-inspire/geofisica?service=WMS&", {
      layers: "NZ.HazardArea",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad sísmica. Pertenece al Tema \"Zonas de Riesgos Naturales\" del Anexo III de INSPIRE y al Anexo II de LISIGE, tema 12 \"Zonas de riesgos naturales y antrópicos\". Expresa en relación al valor de la gravedad, g, la aceleración sísmica básica, a (un valor característico de la aceleración horizontal de la superficie del terreno) y el coeficiente de contribución K, que tiene en cuenta la influencia de los distintos tipos de terremotos esperados en la peligrosidad sísmica de cada punto. La capa NZ.HazardArea muestra los valores de la aceleración sísmica y los municipios. Tiene asociados dos estilos de simbolización: uno definido por el IGN y otro definido por Inspire"
    });
    const terremoto30 = this.mapService.L.tileLayer.wms("https://www.ign.es/wms-inspire/geofisica?service=WMS&", {
      layers: "Ultimos30dias",//nombre de la capa (ver get capabilities)
      format: 'image/png',
      transparent: true,
      version: '1.3.0',//wms version (ver get capabilities)
      attribution: "Peligrosidad sísmica. Pertenece al Tema \"Zonas de Riesgos Naturales\" del Anexo III de INSPIRE y al Anexo II de LISIGE, tema 12 \"Zonas de riesgos naturales y antrópicos\". Expresa en relación al valor de la gravedad, g, la aceleración sísmica básica, a (un valor característico de la aceleración horizontal de la superficie del terreno) y el coeficiente de contribución K, que tiene en cuenta la influencia de los distintos tipos de terremotos esperados en la peligrosidad sísmica de cada punto. La capa NZ.HazardArea muestra los valores de la aceleración sísmica y los municipios. Tiene asociados dos estilos de simbolización: uno definido por el IGN y otro definido por Inspire"
    });





    var overlayMaps = {
      "Relieve": relieve,
      "Inundacion10": inundable10,
      "Inundacion100": inundable100,
      "Inundacion500": inundable500,
      "InundacionM10": inundablec10,
      "InundacionM100": inundablec100,
      "InundacionM500": inundablec500,
      "fallas0": fallas0,
      "fallas1": fallas1,
      "fallas2": fallas2,
      "fallas3": fallas3,
      "RiesgoSismico": peligrosismico,
      "Terremoto último30": terremoto30
    };
    var baseMaps = {
      "OpenStreetMap": tiles

    };
    this.mapService.L.control.layers(baseMaps, overlayMaps).addTo(this.map);

    tiles.addTo(this.map);


  }

}

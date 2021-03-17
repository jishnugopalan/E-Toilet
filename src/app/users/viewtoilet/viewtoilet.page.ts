import { AuthService } from './../../services/auth.service';
import { AfterContentInit, Component, ElementRef, NgZone, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { AlertController, ToastController } from '@ionic/angular';
//import { AuthService } from 'src/app/services/auth.service';
import { NativeGeocoder, NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';
declare var google;

@Component({
  selector: 'app-viewtoilet',
  templateUrl: './viewtoilet.page.html',
  styleUrls: ['./viewtoilet.page.scss'],
})
export class ViewtoiletPage implements OnInit,AfterContentInit {
  map;
  loc:any;
  myLatlng = { lat: -25.363, lng: 131.044 };
  pos:any
  userCity:any
  latLngResult;
    @ViewChild('mapElement',{ static: true }) mapNativeElement: ElementRef;
  constructor(public zone: NgZone,private authService: AuthService,private geolocation: Geolocation,private router:Router,public alertController: AlertController) { }
  ngAfterContentInit(): void {
    this.geolocation.getCurrentPosition().then((resp) => {
      // resp.coords.latitude
      // resp.coords.longitude
      this.map=new google.maps.Map(this.mapNativeElement.nativeElement,{
        center:{lat:resp.coords.latitude,lng:resp.coords.longitude},
        zoom: 6,
        restriction: {
          latLngBounds: {
            north:20.5937,
            east:78.9629
          },
          strictBounds: false,
        }
        
       });
       const infoWindow = new google.maps.InfoWindow;
      const pos = {
        lat: resp.coords.latitude,
        lng: resp.coords.longitude
      };
      infoWindow.setPosition(pos);
      infoWindow.setContent('You are here');
      const cityCircle = new google.maps.Circle({
        strokeColor: "#FF0000",
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: "#FF0000",
        fillOpacity: 0.35,
        infoWindow,
        center: {lat:resp.coords.latitude,lng:resp.coords.longitude},
        radius: Math.sqrt(5000) * 100,
      });
      //cityCircle.open(this.map)
      infoWindow.open(this.map);
      cityCircle.setMap(this.map);

      this.map.setCenter(pos);
     }).catch((error) => {
       console.log('Error getting location', error);
     });
    
   
     this.authService.viewtoilet({}).subscribe((res:any) => {
       console.log(res)
      // const infoWindow = new google.maps.InfoWindow;

       for(let i=0; i<res.length; i++) {
        // this.pos = {
        //   lat: parseFloat(res[i].lat),
        //   lng: parseFloat(res[i].lng)
        // };
        this.addMarkersToMap(res[i]);
        //attachSecretMessage(res[i], secretMessages[i]);
       }
       
      //  infoWindow.setPosition(this.pos);
      //   infoWindow.setContent('Location found.');
      //   infoWindow.open(this.map);
      //   this.map.setCenter(this.pos);
     })
     
     
   
   // throw new Error('Method not implemented.');
  }
  async gotolocation(){
    console.log("inn")
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: ['OK']
    });

    await alert.present();
    //this.router.navigateByUrl("/addreview")
  }
  async addMarkersToMap(m) {
    const infoWindow = new google.maps.InfoWindow;
    this.pos = {
        lat: parseFloat(m.lat),
        lng: parseFloat(m.lng)
      };
      infoWindow.setPosition(this.pos);
        //infoWindow.setContent('../../assets/img/photo1.jpg');
       // infoWindow.marker(this.pos)
        const museumMarker = new google.maps.Marker({position:this.pos});
        //const service = new google.maps.places.PlacesService(this.map);
        
       // museumMarker.setContent('Etoilet')
       // museumMarker.setCenter(this.pos);
      //  this.map.on(google.map.dblclick).subscribe(
      //   (data) => {
      //       console.log("Click MAP");
      //   }
      //  );
    
       museumMarker.addListener("click", function(){
        if (museumMarker.getAnimation() !== null) {
          museumMarker.setAnimation(null);
        } else {
          museumMarker.setAnimation(google.maps.Animation.BOUNCE);
        }
       });
       museumMarker.addListener("dblclick",function(){
         console.log("dblclick")
         
         
       });

        museumMarker.setMap(this.map);
        //this.attachSecretMessage(m, m);
        const infowindow = new google.maps.InfoWindow({
          
          content: m.cityname+'<br><b>Etoilet</b><br>',
        });
        museumMarker.addListener("click", () => {
          infowindow.open(museumMarker.get("map"), museumMarker);
        });
      
        // let geocoder = await new google.maps.Geocoder();
        // let latlng = await new google.maps.LatLng(m.lat, m.lng);
        // let request = { latLng: latlng };
        // geocoder.geocode(request, (results, status) => {
        //   if (status == google.maps.GeocoderStatus.OK) {
        //     let result = results[0];
        //     this.zone.run(() => {
        //       if (result != null) {
        //         this.userCity = result.formatted_address;
        //        console.log(this.userCity);
        //           this.latLngResult = result.formatted_address;
                
        //       }
        //     })
        //   }
        // });
        
        //infoWindow.open(this.map);
       // museumMarker.open(this.map);
        //this.map.setCenter(this.pos);
  }

  ngOnInit() {
  }

}

import { AfterContentInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

declare var google;
@Component({
  selector: 'app-location',
  templateUrl: './location.page.html',
  styleUrls: ['./location.page.scss'],
})
export class LocationPage implements OnInit,AfterContentInit {
map;
loc:any;
city=""
myLatlng = { lat: 10.8505, lng: 76.2711 };
  @ViewChild('mapElement',{ static: true }) mapNativeElement: ElementRef;

  constructor(private geolocation: Geolocation,private authService: AuthService,private toastController: ToastController,private router:Router) { }
  ngAfterContentInit(): void {
    this.map=new google.maps.Map(this.mapNativeElement.nativeElement,{
      center:{lat:-34.397,lng:150.644},
      zoom: 8
      
     });
    // const infoWindow = new google.maps.InfoWindow;
     let infoWindow = new google.maps.InfoWindow({
      content: "Click the map to get Lat/Lng!",
      position: this.myLatlng,
    });
    infoWindow.open(this.map);
    //throw new Error('Method not implemented.');
    this.map.addListener("click", (mapsMouseEvent) => {
      // Close the current InfoWindow.
      infoWindow.close();
  
      // Create a new InfoWindow.
      infoWindow = new google.maps.InfoWindow({
      content: "Latitude and Longitude od the location",
        position: mapsMouseEvent.latLng,
      });
      infoWindow.setContent(
        JSON.stringify(mapsMouseEvent.latLng.toJSON(), null, 2),
        console.log(mapsMouseEvent),
        this.loc=mapsMouseEvent.latLng.toJSON(),
        console.log(this.loc)

      );
      infoWindow.open(this.map);
    });
  
  
  }

  async registerToilet(){
    console.log(this.loc)
    if(this.loc=='undefined'){
      console.log("in else")
      const toast = await this.toastController.create({
        message: 'Please add select location',
        duration: 2000
      });
      toast.present();
    }
    if(this.city.length!=0){
      let data=Object.assign(this.loc,{"userid":this.authService.userid,"cityname":this.city})
    
      this.authService.registertoilet(data).subscribe(async (res:any)=>{
        console.log(res)
        const toast = await this.toastController.create({
          message: 'Toilet Registered Successfully',
          duration: 2000
        });
        toast.present();
        this.router.navigateByUrl('/viewmytoilet')
    })
    }
    else{
      console.log("in else")
      const toast = await this.toastController.create({
        message: 'Please add city name',
        duration: 2000
      });
      toast.present();
      console.log("err")
    }
    
  }
  

  ngOnInit() {
  }

}

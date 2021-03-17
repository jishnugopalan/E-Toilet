import { Component, OnInit } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user=true
  mun=false
  admin=false
count=""
  constructor(private authService: AuthService, private storage: Storage, public alertController:AlertController,private toastController: ToastController,private router:Router) { }
  gotolocation(){
this.router.navigateByUrl("/location")
  }
  viewtoilet(){
this.router.navigateByUrl("/viewmytoilet")

  }
  viewusertoilet(){
    this.router.navigateByUrl("/viewtoilet")
    
      }
      viewnotification(){
        this.router.navigateByUrl("/notification")
        
          }
          viewcomplaint(){
            this.router.navigateByUrl("/viewcomplaint")
            
              }
              gotoreview(){
this.router.navigateByUrl("/viewreview")

              }
              addreview(){
                this.router.navigateByUrl("/addreview")
              }
              approvemun(){
                this.router.navigateByUrl("/munapprove")
              }
              gotoadminloc(){
                this.router.navigateByUrl("/adminviewmytoilet")
              }
              gotoallmun(){
                this.router.navigateByUrl("/adminhome")
              }
              changepassword(){
                this.router.navigateByUrl("/changepassword")

              }
              viewreview(){
                this.router.navigateByUrl("/viewreview")

              }
              deletetoilet(){
                this.router.navigateByUrl("deletetoilet")

              }
              viewabout(){
                this.router.navigateByUrl("about")

              }
  ionViewWillEnter(){

  }

  ngOnInit() {
    this.authService.viewallmun({"admin_status":'0'}).subscribe((res:any)=>{
      console.log(res);
      this.count=res.length
    })
    let userid=this.authService.user.email
   console.log(userid)
   this.authService.finduser({"email":userid}).subscribe((res:any)=>{
     this.authService.userid=res._id;
     console.log(this.authService.userid)
     console.log(res)
     if(res.usertype=='muncipality'){
this.authService.viewmun({"userid":this.authService.userid}).subscribe(async (res:any)=>{
  console.log(res);
  if(res.admin_status!=1){
    console.log("Not")
    const alert = await this.alertController.create({
      header: 'OOPs!',
      subHeader: 'Sorry',
      message: 'You ar not approved by Admin',
      buttons: ['OK']
    });
    await alert.present();
  
  
  
    //this.toastController.present();
    this.authService.logout();
  }
})
this.user=false
  this.mun=true
  this.admin=false
     }
     else if(res.usertype=='admin'){
      this.user=false
      this.mun=false
      this.admin=true
    }
   })

  }
  logout() {
    this.authService.logout();
  }

}

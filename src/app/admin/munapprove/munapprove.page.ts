import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var c:any

@Component({
  selector: 'app-munapprove',
  templateUrl: './munapprove.page.html',
  styleUrls: ['./munapprove.page.scss'],
})
export class MunapprovePage implements OnInit {
mun=[]
  constructor(public toastController: ToastController,private authService: AuthService, public alertController:AlertController,private router:Router) { }
approve(id){
  console.log(id)
  this.authService.approvemun({"userid":id}).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'Approved successfully',
      duration: 2000
    });
    toast.present();
    this.router.navigateByUrl("/adminhome")
  
  })
}

  ngOnInit() {
    this.authService.viewallmun({"admin_status":'0'}).subscribe((res:any)=>{
      console.log(res);
      c=res
      this.mun=c
      //.count=res.length
    })
  }

}

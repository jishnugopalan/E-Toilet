import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var t:any
@Component({
  selector: 'app-deletetoilet',
  templateUrl: './deletetoilet.page.html',
  styleUrls: ['./deletetoilet.page.scss'],
})
export class DeletetoiletPage implements OnInit {
toilet=[]
  constructor(private authService: AuthService,private toastController: ToastController,private router:Router) { }
delete(id){
  console.log(id)
  this.authService.deletetoilet({"toiletid":id}).subscribe(async (res:any)=>{
    console.log(res)
    const toast = await this.toastController.create({
      message: 'E-Toilet Deleted Successfully',
      duration: 2000
    });
    toast.present();
    this.ngOnInit()
  })

}
  ngOnInit() {
    this.authService.viewtoilets({"userid":this.authService.userid}).subscribe((res:any)=>{
      console.log(res);
      t=res
      this.toilet=t
    })
  }

}

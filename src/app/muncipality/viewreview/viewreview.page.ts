import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var t:any
var c:any
@Component({
  selector: 'app-viewreview',
  templateUrl: './viewreview.page.html',
  styleUrls: ['./viewreview.page.scss'],
})
export class ViewreviewPage implements OnInit {
  toilet=[]
  toiletid
  cmp=[]
  constructor(private authService: AuthService,private toastController: ToastController,private router:Router) { }
  viewcmp(){ 
    this.authService.viewreview({"toiletid":this.toiletid}).subscribe(async (res:any)=>{
      console.log(res)
      c=res
      this.cmp=c
      if(res.length==0){
        const toast = await this.toastController.create({
          message: 'No Review found',
          duration: 2000
        });
        toast.present();
      
      }
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

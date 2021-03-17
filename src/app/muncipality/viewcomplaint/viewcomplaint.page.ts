import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var t:any
var c:any
@Component({
  selector: 'app-viewcomplaint',
  templateUrl: './viewcomplaint.page.html',
  styleUrls: ['./viewcomplaint.page.scss'],
})
export class ViewcomplaintPage implements OnInit {
toilet=[]
toiletid
cmp=[]
  constructor(private authService: AuthService,private toastController: ToastController,private router:Router) { }
viewcmp(){ 
  this.authService.viewcomplaint({"toiletid":this.toiletid}).subscribe(async (res:any)=>{
    console.log(res)
    c=res
    this.cmp=c
    if(res.length==0){
      const toast = await this.toastController.create({
        message: 'No Complaint found',
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

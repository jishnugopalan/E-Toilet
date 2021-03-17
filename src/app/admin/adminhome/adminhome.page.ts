import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var c:any
@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.page.html',
  styleUrls: ['./adminhome.page.scss'],
})
export class AdminhomePage implements OnInit {
mun=[]
  constructor(private authService: AuthService, public alertController:AlertController,private router:Router) { }
  gotoapprove(){
    this.router.navigateByUrl("/munapprove")
  }
  ngOnInit() {
    this.authService.viewadminallmun({"admin_status":"1"}).subscribe((res:any)=>{
      console.log(res);
      c=res
      this.mun=c
      //.count=res.length
    })
  }

}

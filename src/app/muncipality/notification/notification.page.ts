import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var n:any
@Component({
  selector: 'app-notification',
  templateUrl: './notification.page.html',
  styleUrls: ['./notification.page.scss'],
})
export class NotificationPage implements OnInit {
not=[]
  constructor(private authService: AuthService,private toastController: ToastController,private router:Router) { }
goto(t){
console.log(t)
if(t=='review'){
this.router.navigateByUrl("/viewreview")
}
else{
  this.router.navigateByUrl("/viewcomplaint")

}
}
  ngOnInit() {
    this.authService.viewnotification({"userid":this.authService.userid}).subscribe((res:any)=>{
      console.log(res);
      n=res
      this.not=n
    })
    
  }

}

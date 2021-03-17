import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {
  activatedRouter: any;
  passwordForm: any;
  first=true
  second=false
  pass1=''
  pass2=''
  passwordType: string = 'password';
  passwordIcon: string = 'eye-off';
  cpasswordForm: any;
 
  constructor(public alertController: AlertController,private formBuilder: FormBuilder,private authService:AuthService,private router:Router,public toastController:ToastController) { }
  
  
 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
 }
 get cpassword(){
  return this.cpasswordForm.get('cpassword');
}
  get password(){
    return this.passwordForm.get('password');
  }
  get repassword(){
    return this.passwordForm.get('repassword');
  }
  public errorMessages1 = {
    password: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    repassword: [
      { type: 'required', message: 'password is required' },
      { type: 'minlength', messages: 'password cannot be longer than 8 charetors' }
    ],
    
  };
  submitcpassword(){
    console.log(this.cpasswordForm.value);
    this.authService.checkpassword({"userid":this.authService.userid,"password":this.cpasswordForm.value.cpassword}).subscribe((res:any)=>{
      console.log(res)
      this.first=false;
      this.second=true;
    })

  }
  public async submitpassword(){
    console.log(this.passwordForm.get('password')) 
    if(this.pass1==this.pass2){
    console.log(this.passwordForm.value);
    this.authService.updatepassword({"userid":this.authService.userid,"password":this.passwordForm.value.repassword}).subscribe(async (res:any)=>{
      console.log(res);
      const alert = await this.alertController.create({
        cssClass: 'my-custom-class',
        header: 'Password Changed',
        //subHeader: 'Subtitle',
        message: 'Your password updated successfully',
        buttons: [
          {
            text:'OK',
            handler:()=>{
              this.router.navigateByUrl("/userhome")
            }
          }
        ]
      });
  
      await alert.present();
    })
     
     
     
    }
    else{
     const toast = await this.toastController.create({
       message: 'Please enter the correct password',
       duration: 2000
     });
     toast.present();
    }
    
        
     }
  ngOnInit() {
    this.passwordForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength(8)]],
      repassword: ['', [Validators.required, Validators.minLength(8)]]
    });
    this.cpasswordForm = this.formBuilder.group({
      cpassword: ['', [Validators.required, Validators.minLength(8)]],
      //repassword: ['', [Validators.required, Validators.minLength(8)]]
    });

  }

}

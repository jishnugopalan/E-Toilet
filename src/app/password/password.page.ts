import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

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
 
  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder,private authService:AuthService,private router:Router,public toastController:ToastController) { }
  
  
 hideShowPassword() {
     this.passwordType = this.passwordType === 'text' ? 'password' : 'text';
     this.passwordIcon = this.passwordIcon === 'eye-off' ? 'eye' : 'eye-off';
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
  public async submitpassword(){
    console.log(this.passwordForm.get('password')) 
    if(this.pass1==this.pass2){
    // console.log(this.passwordForm.value);
     
     var data=this.passwordForm.value;
    console.log(this.authService.regform)
     var u=this.authService.regform;
     console.log(u.usertype)
     if(u.usertype=='muncipality'){

      data=Object.assign(this.authService.regform,{"password":this.pass2})
      console.log(data)
      this.authService.register(data).subscribe((res:any) => {
         console.log(res._id)
      let formdata=Object.assign(this.authService.regmun,{"userid":res._id})

         this.authService.registermun(formdata).subscribe(async (res:any) => {
          console.log(res)
          this.authService.login(data).subscribe();
          const loading = await this.loadingController.create({
            cssClass: 'my-custom-class',
            message: 'Please wait...',
            duration: 3000
          });
          await loading.present()
         })
        
        
       });
     }
     else{
      data=Object.assign(this.authService.regform,{"password":this.pass2})
      console.log(data)
      this.authService.register(data).subscribe(async (res:any) => {
         console.log(res)
        
         this.authService.login(data).subscribe();
         const loading = await this.loadingController.create({
          cssClass: 'my-custom-class',
          message: 'Please wait...',
          duration: 3000
        });
        await loading.present()
       });

     }
     
      
      //  data=Object.assign(data,{"uid":this.authService.uid})
      //  this.authService.logid=this.authService.uid;
      //  console.log(this.authService.logid)
      //  console.log(data)
       
         console.log("err")
    //      this.authService.password(data).subscribe(res=>{
    //        console.log(res)
    //        this.router.navigateByUrl("/login");
    //  })
     
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
  }

}

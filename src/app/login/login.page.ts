import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ActivatedRoute, Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
var email:any
var password:any

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  credentialsForm: any;
  
  user=''
  

  constructor(private FormBuilder: FormBuilder , private authService: AuthService,private router:Router,public loadingController: LoadingController) {}
  get email(){
    return this.registrationForm.get('email');
  }
  get password(){
    return this.registrationForm.get('password');

  }

 
  // onSubmit() {
  //   this.authService.login(this.credentialsForm.value).subscribe();
  // }
 
  
  public errorMessages = {
    
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    password: [
      { type: 'required', message: 'Password is required' }
    ]
  };
  registrationForm = this.FormBuilder.group({
   
    email: [
      '',
      [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
      ]
    ],
    password: [
      '',
      [
        Validators.required
        
      ]
    ]
  });

  
  public async submit(){
   var a= this.registrationForm.value;
   console.log(a);
   var e=a.email;
   var p=a.password;
   this.authService.login(this.registrationForm.value).subscribe();
   const loading = await this.loadingController.create({
    cssClass: 'my-custom-class',
    message: 'Please wait...',
    duration: 3000
  });
  await loading.present();
  //  if(e=='admin@gmail.com' && p=='admin'){
  //    this.router.navigateByUrl("/admin")
  //  }
  
   
    // this.authService.login(this.registrationForm.value).subscribe(async (res:any)=>{
    //   console.log(res);
     
    //    var uid=res.user;
    //    //email=res.email;
    //    //password=res.password;

    //    var logid=uid._id;
    //    this.authService.name=uid.name;
    //    this.authService.uid=logid;
      
    //   //console.log(uid)
    //   console.log(this.authService.name)
    //   console.log(this.authService.uid)
     
    //  if(this.authService.name=='admin'){
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //     duration: 2000
    //   });
    //   await loading.present();
    
    //   const { role, data } = await loading.onDidDismiss();
    //   console.log('Loading dismissed!');
    //   this.router.navigateByUrl("/admin")
    //  }
    //  else
    //  {
    //   const loading = await this.loadingController.create({
    //     message: 'Please wait...',
    //     duration: 2000
    //   });
    //   await loading.present();
    
    //   const { role, data } = await loading.onDidDismiss();
    //   console.log('Loading dismissed!');
    //   this.router.navigateByUrl("/mainpage");

    //  }
      
      
    // })
   
   
    
    
  
}

  ngOnInit() {
  }

}

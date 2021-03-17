import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  credentialsForm: FormGroup;

  constructor(public loadingController: LoadingController,private formBuilder: FormBuilder, private authService: AuthService,private router:Router) { }
  get name(){
    return this.credentialsForm.get('name');
  }
  get email(){
    return this.credentialsForm.get('email');
  }
  get phone(){
    return this.credentialsForm.get('phone');
  }
  get usertype(){
    return this.credentialsForm.get('usertype');
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
    email: [
      { type: 'required', message: 'Email is required' },
      { type: 'pattern', message: 'Please enter a valid email address' }
    ],
    phone: [
      { type: 'required', message: 'Phone number is required' },
      { type: 'pattern', message: 'Please enter a valid phone number' },
      { type: 'maxlength', messages: 'Please enter a valid phone number' }
    ]
  };
  ngOnInit() {
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,4}$')
        ]
      ],
      phone: [
        '',
        [
          Validators.required,
          Validators.pattern('^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-s./0-9]*$'),
          Validators.maxLength(10),
          Validators.minLength(10)
          
        ]
      ],
      usertype: ['',Validators.required]
    });
  }
 
  onSubmit() {
    this.authService.login(this.credentialsForm.value).subscribe();
  }
 
  register() {
    console.log(this.credentialsForm.value)
    this.authService.regform=this.credentialsForm.value
    if(this.credentialsForm.value.usertype=='user'){
      this.router.navigateByUrl("/password")
    }
    else if(this.credentialsForm.value.usertype=='muncipality'){
    this.authService.regform=this.credentialsForm.value
      this.router.navigateByUrl("/registermun")
      console.log('Municipality')
    }
    
    // this.authService.register(this.credentialsForm.value).subscribe((res:any) => {
    //   console.log(res)
    //   var uid=res._id
    //   this.authService.uid=uid;
    //   this.router.navigateByUrl("/password")
     
    //   //this.authService.login(this.credentialsForm.value).subscribe();
    // });
  }
 
  }


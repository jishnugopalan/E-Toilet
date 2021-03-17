import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
var c:any
var star:any
var r:any
@Component({
  selector: 'app-addreview',
  templateUrl: './addreview.page.html',
  styleUrls: ['./addreview.page.scss'],
})
export class AddreviewPage implements OnInit {
  credentialsForm: FormGroup;
  city=[]
  review=[]
  cmp=false
  rev=false
  toiletid=''
  munid:any
  constructor(private toastController: ToastController,private formBuilder: FormBuilder, private authService: AuthService,private router:Router) {
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      mode: ['',Validators.required],
      city: ['',Validators.required],
     



    });
   }
   public starmark(item)
   {
     star=item
     var count
     console.log(item)
   count=item;
   sessionStorage.starRating = count;
   var subid= item;
   for(var i=0;i<5;i++)
   {
   if(i<count)
   {
     //var s=document.getElementById((i+1)+subid)
     //console.log(s)
     //console.log((i+1)+'rt')
   document.getElementById((i+1)+'rt').style.color="orange";
   }
   else
   {
   document.getElementById((i+1)+'rt').style.color="black";
   }
   
   
   }
   
   }
changed(){
  console.log("Changed")
  console.log(this.credentialsForm.value.city);
  this.authService.viewreview({"toiletid":this.toiletid}).subscribe(async (res:any)=>{
    console.log(res)
    if(res.length==0){
      const toast = await this.toastController.create({
        message: 'No reviews found',
        duration: 2000
      });
      toast.present();
    
    }
    //this.munid=res.userid;

    r=res;
    this.review=r

  })
}
   ionViewWillEnter(){
     this.authService.viewtoilet({}).subscribe((res:any)=>{
       console.log(res);
       c=res;
       this.city=c
     })
   }
   get name(){
    return this.credentialsForm.get('name');
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Review is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
  }
  submit(){
    console.log(this.credentialsForm.value)
    if(this.credentialsForm.value.mode=='r'){
this.authService.addreview({"userid":this.authService.userid,"toiletid":this.credentialsForm.value.city,"star":star,"content":this.credentialsForm.value.name}).subscribe((res:any)=>{
  console.log(res)
  this.authService.viewtoiletbyid({"toiletid":this.credentialsForm.value.city}).subscribe((res:any)=>{
    console.log(res)
    this.munid=res.userid
    this.authService.addnotification({"userid":this.munid,"content":"A person reviewed your E-Toilet","ntype":"review",}).subscribe((res:any)=>{
      console.log(res)
    })
  })
  
})
    }
    else{
      this.authService.addcomplaint({"userid":this.authService.userid,"toiletid":this.credentialsForm.value.city,"content":this.credentialsForm.value.name}).subscribe((res:any)=>{
        console.log(res)
        this.authService.viewtoiletbyid({"toiletid":this.credentialsForm.value.city}).subscribe((res:any)=>{
          console.log(res)
          this.munid=res.userid
          this.authService.addnotification({"userid":this.munid,"content":"A person added a complaint about your E-Toilet","ntype":"complaint",}).subscribe((res:any)=>{
            console.log(res)
          })
        })
      })

    }
  }


  ngOnInit() {
  }

}

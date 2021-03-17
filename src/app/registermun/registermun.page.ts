import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Chooser } from '@ionic-native/chooser/ngx';
import { ChooserResult } from '@ionic-native/chooser';
import { AlertController, ToastController } from '@ionic/angular';
var image: any;
@Component({
  selector: 'app-registermun',
  templateUrl: './registermun.page.html',
  styleUrls: ['./registermun.page.scss'],
})
export class RegistermunPage implements OnInit {
  credentialsForm: FormGroup;
  fileObj:ChooserResult

  constructor(private formBuilder: FormBuilder, private authService: AuthService,private router:Router,private chooser: Chooser,public toastController: ToastController,public alertController: AlertController) {
    this.credentialsForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(100)]],
      district: ['',Validators.required],
      city: ['',Validators.required],
      idproof: ['',Validators.required],



    });
   }
  get name(){
    return this.credentialsForm.get('name');
  }
  public errorMessages = {
    name: [
      { type: 'required', message: 'Name is required' },
      { type: 'maxlength', messages: 'Name cannot be longer than 100 charetors' }
    ],
  }
  async encodeImageFileAsURL() {
    console.log("err")
    console.log("err")
    var fileExtension = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
    var filesSelected = document.getElementById("inputFileToLoad")["files"];
    var fileInput = document.getElementById('inputFileToLoad');
    var filePath = fileInput["value"];
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;
    if(!allowedExtensions.exec(filePath)){
        // alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        fileInput["value"] = '';
       // return false;
        const toast = await this.toastController.create({
          message: 'Please upload file having extensions .jpeg/.jpg/.png/.gif only.',
          duration: 2000
        });
        toast.present();
    
      }
      else{
        console.log(filesSelected.length)
        if (filesSelected.length > 0) {
          var fileToLoad = filesSelected[0];
    
          var fileReader = new FileReader();
    
          fileReader.onload = function(fileLoadedEvent) {
            var srcData = fileLoadedEvent.target["result"]; // <--- data: base64
            image=srcData;
            console.log(image)
          }
          fileReader.readAsDataURL(fileToLoad);
        }
      }
  }
  chooseFile(){
    this.chooser.getFile("image/jpeg").then((value:ChooserResult) =>{
      this.fileObj=value;
    })
  .catch((error: any) => console.error(error));
  }
  register() {
    console.log(this.credentialsForm.value)
    this.authService.regmun={
      "name":this.credentialsForm.value.name,
      "district":this.credentialsForm.value.district,
      "city":this.credentialsForm.value.city,
      "idproof":image
    }
    console.log(this.authService.regmun)
    this.router.navigateByUrl("/password")

  }
  ngOnInit() {
    
  }

}

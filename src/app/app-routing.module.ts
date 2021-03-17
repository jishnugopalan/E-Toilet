import { NgModule } from '@angular/core';
import { AuthGuardService } from './services/auth-guard.service';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: '',
    redirectTo: 'userhome',
    pathMatch: 'full'
  },
  {
    path: 'registration',
    loadChildren: () => import('./registration/registration.module').then( m => m.RegistrationPageModule)
  },
  {
    path: 'userhome',
    loadChildren: () => import('./users/home/home.module').then( m => m.HomePageModule),
    //canActivate: [AuthGuardService]
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'registermun',
    loadChildren: () => import('./registermun/registermun.module').then( m => m.RegistermunPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'changepassword',
    loadChildren: () => import('./changepassword/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'forgotpassword',
    loadChildren: () => import('./forgortpassword/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./muncipality/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'viewtoilet',
    loadChildren: () => import('./users/viewtoilet/viewtoilet.module').then( m => m.ViewtoiletPageModule)
  },
  {
    path: 'viewmytoilet',
    loadChildren: () => import('./muncipality/viewmytoilet/viewmytoilet.module').then( m => m.ViewmytoiletPageModule)
  },
  {
    path: 'adminviewmytoilet',
    loadChildren: () => import('./admin/viewmytoilet/viewmytoilet.module').then( m => m.ViewmytoiletPageModule)
  },
  {
    path: 'addreview',
    loadChildren: () => import('./users/addreview/addreview.module').then( m => m.AddreviewPageModule)
  },
  {
    path: 'viewreview',
    loadChildren: () => import('./users/viewreview/addreview.module').then( m => m.AddreviewPageModule)
  },
  {
    path: 'notification',
    loadChildren: () => import('./muncipality/notification/notification.module').then( m => m.NotificationPageModule)
  },
  {
    path: 'viewcomplaint',
    loadChildren: () => import('./muncipality/viewcomplaint/viewcomplaint.module').then( m => m.ViewcomplaintPageModule)
  },
  {
    path: 'viewreview',
    loadChildren: () => import('./muncipality/viewreview/viewreview.module').then( m => m.ViewreviewPageModule)
  },
  {
    path: 'adminhome',
    loadChildren: () => import('./admin/adminhome/adminhome.module').then( m => m.AdminhomePageModule)
  },
  {
    path: 'munapprove',
    loadChildren: () => import('./admin/munapprove/munapprove.module').then( m => m.MunapprovePageModule)
  },
  {
    path: 'deletetoilet',
    loadChildren: () => import('./muncipality/deletetoilet/deletetoilet.module').then( m => m.DeletetoiletPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

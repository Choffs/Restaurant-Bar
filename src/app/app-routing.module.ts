import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { PageContainerComponent } from './page-container/page-container.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { SignInComponent } from './sign-in/sign-in.component';
const routes: Routes = [
  {path: '',redirectTo:'/home',pathMatch: 'full'},
  {path: 'home',component: MenuListComponent},
  {path: 'my-table/:table-id',component: PageContainerComponent},
  {path: 'my-account/:acc-id',component: PageContainerComponent},
  {path: 'my-order/:order-id',component: PageContainerComponent},
  {path: 'sign-in',component: SignInComponent},
  {path: 'sign-out',component: PageContainerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

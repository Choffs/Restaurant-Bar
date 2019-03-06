import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuObjectComponent } from './menu-list/menu-object/menu-object.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { PageContainerComponent } from './page-container/page-container.component';
import { MenuCategoryComponent } from './menu-list/menu-category/menu-category.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { HeaderComponent } from './header/header.component';
import { PromoShowcaseComponent } from './promo-showcase/promo-showcase.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuListComponent,
    MenuObjectComponent,
    SidebarComponent,
    PageContainerComponent,
    MenuCategoryComponent,
    SignInComponent,
    HeaderComponent,
    PromoShowcaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

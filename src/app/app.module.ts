import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

import { registerLocaleData } from '@angular/common';
import localeHu from '@angular/common/locales/hu';

import { NgxSmartModalModule } from 'ngx-smart-modal';
import { ListProductsComponent } from './list-products/list-products.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductComponent } from './product/product.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';

registerLocaleData(localeHu, 'hu');

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ListProductsComponent,
    EditProductComponent,
    ProductComponent,
    SidebarComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'hu' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { AppRoutingModule } from './app-routing.module';
import { NgModule , CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserModule } from '@angular/platform-browser';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { SigninComponent } from './components/signin/signin.component';
import { RegisterComponent } from './components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import {PanelMenuModule} from 'primeng/panelmenu';
import { AdminuserComponent } from './components/adminuser/adminuser.component';

@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    RegisterComponent,
    AdminuserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    PanelMenuModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }

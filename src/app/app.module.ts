import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageCropperModule } from 'ngx-image-cropper';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageModuleModule } from './image-module/image-module.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ImageModuleModule,
    ImageCropperModule,
    ButtonModule,
    RippleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

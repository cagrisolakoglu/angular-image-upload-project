import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UbysImageUploaderComponent } from './ubys-image-uploader/ubys-image-uploader.component';
import { ImageCropperModule } from 'ngx-image-cropper';



@NgModule({
  declarations: [
    UbysImageUploaderComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule
  ],
  exports: [
    UbysImageUploaderComponent
  ]
})
export class ImageModuleModule { }

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageCropperModule } from 'ngx-image-cropper';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ImageModule } from 'primeng/image';
import { RippleModule } from 'primeng/ripple';
import { UbysImageUploaderComponent } from './ubys-image-uploader/ubys-image-uploader.component';

import { MegaMenuModule } from 'primeng/megamenu';
import { SplitterModule } from 'primeng/splitter';

@NgModule({
  declarations: [
    UbysImageUploaderComponent
  ],
  imports: [
    CommonModule,
    ImageCropperModule,
    ButtonModule,
    RippleModule,
    DialogModule,
    ImageModule,
    MegaMenuModule,
    SplitterModule
  ],
  exports: [
    UbysImageUploaderComponent
  ]
})
export class ImageModuleModule { }

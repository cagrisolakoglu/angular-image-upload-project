import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { base64ToFile, Dimensions, ImageCroppedEvent, ImageTransform } from 'ngx-image-cropper';
import { MegaMenuItem } from 'primeng/api';

interface Image {
  name: string;
  url: string;
  file: File;
}

@Component({
  selector: 'ubys-image-uploader',
  templateUrl: './ubys-image-uploader.component.html',
  styleUrls: ['./ubys-image-uploader.component.scss'],
})
export class UbysImageUploaderComponent implements OnInit {
  @Input() images: Image[] = [];
  @Input() multiple: boolean = false;
  @Input() set image(image: Image) {
    this.images.push(image);
  }

  public imageChangedEvent: any = '';
  public croppedImage: any = '';
  public canvasRotation = 0;
  public rotation = 0;
  public scale = 1;
  public showCropper = false;
  public containWithinAspectRatio = false;
  public transform: ImageTransform = {};

  public imageBase64String: any = "";
  public displayModal: boolean = false;

  cropMenuItems: MegaMenuItem[] = [
    {
      label: 'Sola Döndür',
      icon: 'pi pi-directions-alt',
      command: (event) => {
        this.rotateLeft();
      }
    },
    {
      label: 'Sağa Döndür',
      icon: 'pi pi-directions',
      command: (event) => {
        this.rotateRight();
      }
    },
    {
      label: 'Yatay Çevir',
      icon: 'pi pi-ellipsis-h',
      command: (event) => {
        this.flipHorizontal();
      }
    },
    {
      label: 'Dikey Çevir',
      icon: 'pi pi-ellipsis-v',
      command: (event) => {
        this.flipVertical();
      }
    },

    {
      label: 'Küçült',
      icon: 'pi pi-search-minus',
      command: (event) => {
        this.zoomOut();
      }
    },
    {
      label: 'Büyüt',
      icon: 'pi pi-search-plus',
      command: (event) => {
        this.zoomIn();
      }
    },
    {
      label: "En Boy Oranı Değiştir",
      icon: "pi pi-times",
      command: (event) => {
        this.containWithinAspectRatio = !this.containWithinAspectRatio;
      },
    },
    {
      label: 'Reset',
      icon: 'pi pi-refresh',
      command: (event) => {
        this.resetImage();
      }
    },
  ];

  @ViewChild('fileInput') fileInput: any;
  constructor() {

  }

  get image(): Image {
    this.imageLoaded();
    return this.images[this.images.length - 1];
  }

  selectImageForCrop(image: any) {
    const reader = new FileReader();
    reader.readAsDataURL(image);
    reader.onload = () => {
      this.imageBase64String = reader.result as string;
      this.displayModal = true;
    };

  }


  removeImage(image: Image) {
    this.images.splice(this.images.indexOf(image), 1);
  }

  removeAllImages() {
    this.images = [];
  }


  ngOnInit(): void {
  }


  onFileChange(event: any): void {

    // this.imageChangedEvent = event;

    if (event.target.files && event.target.files.length > 0) {
      Array.from(event.target.files).forEach((file: any) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          this.images.push({
            file: file,
            name: file.name,
            url: reader.result as string,
          });
        };
      });
      console.log(this.images);
    }
  }

  uploadFile(event: any) {
    this.fileInput.nativeElement.click();
  }
  clearFiles(event: any) {
    this.images = [];
  }


  crop() {
    this.images.push({
      file: base64ToFile(this.croppedImage) as File,
      name: this.image.name,
      url: this.croppedImage,
    });
    // this.showCropper = false;
    this.displayModal = false;
  }

  fileChangeEvent(event: any): void {
    this.imageChangedEvent = event;
  }

  imageCropped(event: ImageCroppedEvent) {
    this.croppedImage = event.base64;
    console.log(event, base64ToFile(event.base64 ? event.base64 : ''));
  }

  imageLoaded() {
    this.showCropper = true;
    console.log('Image loaded');
  }

  cropperReady(event: any) {
    const sourceImageDimensions: Dimensions = { width: event.width, height: event.height };
    console.log('Cropper ready', sourceImageDimensions);
  }

  loadImageFailed() {
    console.log('Load failed');
  }

  rotateLeft() {
    this.canvasRotation--;
    this.flipAfterRotate();
  }

  rotateRight() {
    this.canvasRotation++;
    this.flipAfterRotate();
  }

  private flipAfterRotate() {
    const flippedH = this.transform.flipH;
    const flippedV = this.transform.flipV;
    this.transform = {
      ...this.transform,
      flipH: flippedV,
      flipV: flippedH
    };
  }


  flipHorizontal() {
    this.transform = {
      ...this.transform,
      flipH: !this.transform.flipH
    };
  }

  flipVertical() {
    this.transform = {
      ...this.transform,
      flipV: !this.transform.flipV
    };
  }

  resetImage() {
    this.scale = 1;
    this.rotation = 0;
    this.canvasRotation = 0;
    this.transform = {};
  }

  zoomOut() {
    this.scale -= .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  zoomIn() {
    this.scale += .1;
    this.transform = {
      ...this.transform,
      scale: this.scale
    };
  }

  toggleContainWithinAspectRatio() {
    this.containWithinAspectRatio = !this.containWithinAspectRatio;
  }

  updateRotation() {
    this.transform = {
      ...this.transform,
      rotate: this.rotation
    };
  }

}

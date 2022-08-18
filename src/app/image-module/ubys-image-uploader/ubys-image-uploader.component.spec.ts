import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbysImageUploaderComponent } from './ubys-image-uploader.component';

describe('UbysImageUploaderComponent', () => {
  let component: UbysImageUploaderComponent;
  let fixture: ComponentFixture<UbysImageUploaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbysImageUploaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbysImageUploaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

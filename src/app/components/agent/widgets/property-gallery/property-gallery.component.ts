import { Component, EventEmitter, Output } from '@angular/core';
import { DropzoneConfigInterface, DropzoneModule } from 'ngx-dropzone-wrapper';

@Component({
  selector: 'app-property-gallery',
  standalone: true,
  imports: [DropzoneModule],
  templateUrl: './property-gallery.component.html',
  styleUrls: ['./property-gallery.component.scss'],
})

export class PropertyGalleryComponent {

  @Output() activeSteps = new EventEmitter<number>();
  public activeStep: number = 3;
  public file: File[] = [];
  public fileError: string | null = null;

  public dropzoneConfig: DropzoneConfigInterface = {
    maxFiles: 1,
    maxFilesize: 2, // Maximum file size in MB
    acceptedFiles: 'image/*', // Adjust as needed
    autoReset: null,
    errorReset: null,
    cancelReset: null,
    addRemoveLinks: true,
    clickable: true,
    url: 'https://httpbin.org/post',
  };

  // public imageConfig: DropzoneConfigInterface = {
  //   clickable: true,
  //   url: 'https://httpbin.org/post',
  //   acceptedFiles: 'image/*',
  //   addRemoveLinks: true,
  //   parallelUploads: 1,
  // };

  public validation: boolean = false;
  public text = '<i class="fas fa-cloud-upload-alt"></i><h6>Drop files here or click to upload.</h6><span class="note">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>';

  onFileAdded(event: any) {
    this.file.push(...event.upload.filename);
  }

  onFileRemoved(event: any) {
    this.file.splice(this.file.indexOf(event), 1);
  }

  previous() {
    const number = this.activeStep - 1;
    this.activeSteps.emit(number);
  }

  next() {
    if (this.file.length >= 1) {
      const number = this.activeStep + 1;
      this.activeSteps.emit(number);
      this.validation = true;
    } else {
      this.validation = true;
    }
  }
}

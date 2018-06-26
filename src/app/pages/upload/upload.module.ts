import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { UploadComponent } from './upload.component';

import { NgxUploaderModule } from 'ngx-uploader';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    
    //Feature
    NgxUploaderModule,
  ],
  declarations: [
    UploadComponent,
  ]
})
export class UploadModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { UploadComponent } from './upload.component';

import { NgUploaderModule } from '../ngx-uploader/module/ngx-uploader.module';

@NgModule({
  imports: [
    CommonModule,
    ThemeModule,
    
    //Feature
    NgUploaderModule,
  ],
  declarations: [
    UploadComponent,
  ]
})
export class UploadModule {}

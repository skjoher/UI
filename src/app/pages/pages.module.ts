import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { PagesRoutingModule } from './pages-routing.module';
import { ThemeModule } from '../@theme/theme.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
// import { UploadComponent } from './upload/upload.component';
import { UploadModule } from './upload/upload.module';

const PAGES_COMPONENTS = [
  PagesComponent,
];

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    DashboardModule,
    MiscellaneousModule,
    UploadModule,
  ],
  declarations: [
    ...PAGES_COMPONENTS,
    // UploadComponent,
  ],
})
export class PagesModule {
}

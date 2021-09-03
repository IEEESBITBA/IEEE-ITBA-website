import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { CommonModule } from '@angular/common';
import { ProfileComponent } from './pages/profile/profile.component';
import {SharedModule} from '../../shared/shared.module';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from '../../app.module';
import { HttpClient } from '@angular/common/http';

const routes: Routes = [
  {path: '', component: ProfileComponent}
];

export const routing = RouterModule.forChild(routes);

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    routing,
    CommonModule,
    SharedModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ]
})
export class ProfileModule { }

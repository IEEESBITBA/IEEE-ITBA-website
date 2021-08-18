import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { MatTabsModule } from '@angular/material/tabs';
import { MatExpansionModule } from '@angular/material/expansion';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from './../environments/environment';

import { CarouselModule } from 'ngx-owl-carousel-o';

// contact-page
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
// Translations
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxPageScrollCoreModule } from 'ngx-page-scroll-core';
import { myEasing } from './easing';
import { SponsorsComponent } from './sponsors/sponsors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CursoPythonComponent } from './curso-python/curso-python.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { FooterComponent } from './core/footer/footer.component';
import { TeamComponent } from './team/team.component';
import { config } from 'rxjs';
import { firebaseConfig } from './secrets';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { IeeeMeetupComponent } from './ieee-meetup/ieee-meetup.component';
import { NoticiaComponent } from './noticia/noticia.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { EditarAnuncioComponent } from './editar-anuncio/editar-anuncio.component';
import { TeamCardComponent } from './team-card/team-card.component';
import { IeeextremeComponent } from './ieeextreme/ieeextreme.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSelectModule } from '@angular/material/select';
import { WriteNewsComponent } from './write-news/write-news.component';
import { QuillModule } from 'ngx-quill';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmojiModule } from '@ctrl/ngx-emoji-mart/ngx-emoji';
import { BarRatingModule } from 'ngx-bar-rating';
import { MatChipsModule } from '@angular/material/chips';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { EventsComponent } from './events/events.component';
import { Error401Component } from './error401/error401.component';



export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

@NgModule({
  declarations: [
    AppComponent,
    SponsorsComponent,
    CursoPythonComponent,
    MainpageComponent,
    FooterComponent,
    TeamComponent,
    IeeeMeetupComponent,
    NoticiaComponent,
    EditarAnuncioComponent,
    NoticiasComponent,
    TeamCardComponent,
    IeeextremeComponent,
    NavbarComponent,
    WriteNewsComponent,
    LoadingSpinnerComponent,
    ContactPageComponent,
    EventsComponent,
    Error401Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    MDBBootstrapModule.forRoot(),
    NgxPageScrollCoreModule.forRoot({ duration: 500, easingLogic: myEasing }),
    BrowserAnimationsModule,
    MatTabsModule,
    MatExpansionModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    AngularFireAuthModule,
    HttpClientModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonToggleModule,
    MatCardModule,
    MatGridListModule,
    MatSelectModule,
    MatSnackBarModule,
    QuillModule.forRoot(),
    ReactiveFormsModule,
    EmojiModule,
    BarRatingModule,
    MatChipsModule,
    NoopAnimationsModule,
    CarouselModule
    // AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


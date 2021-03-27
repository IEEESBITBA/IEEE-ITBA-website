import { Component, OnInit, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { IEEEuser } from '../data-types';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<IEEEuser>;
  logguedIn: boolean = false;

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, public translate: TranslateService, private authService: AuthService) {
    translate.addLangs(['en','es']);
    translate.setDefaultLang('es');
    const browserLang = translate.getBrowserLang();
    translate.use(browserLang.match(/es|en/)? browserLang:'en');
  }

  //----------Methods----------

  //Translator
  useLanguage(language: string) {
    this.translate.use(language);
  }

  //Set Up
  ngOnInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#home',
    });

    //Load name
    this.user = this.authService.getCurrentUser();
    this.user.subscribe( (usuario: IEEEuser) => {

      if (usuario){
        document.getElementById('account').innerText=' Welcome back, ' + usuario.fname;
        this.logguedIn = true;
      }
      else {
        document.getElementById('account').innerText=' Log In';
      }

    })
  }

  //Scroll
  ngAfterViewInit() {
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: '#home',
    });
  }

  //Scroll
  scrollTo(target: string){
    console.log(target);
    this.pageScrollService.scroll({
      document: this.document,
      scrollTarget: target,
    });
  }

}

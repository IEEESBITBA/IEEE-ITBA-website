import { Component, OnInit, Inject } from '@angular/core';

import { DOCUMENT } from '@angular/common';
import { PageScrollService } from 'ngx-page-scroll-core';

import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { IEEEuser , roles } from '../data-types';

import {UserService} from '../core/services/user.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: Observable<IEEEuser>;
  logguedIn: boolean = false;
  journalist: boolean = false;

  newsRoles: roles[] = [roles.admin, roles.contentCreator]

  constructor(private pageScrollService: PageScrollService, @Inject(DOCUMENT) private document: any, public translate: TranslateService, private authService: AuthService, private userService: UserService) {
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
    this.user.subscribe( async (usuario: IEEEuser) => {

      if (usuario){
        document.getElementById('account').innerText=' Welcome back, ' + usuario.fname;
        this.logguedIn = true;
        let aux: number = await this.userService.getCurrentUserRole(usuario.email);
        if(this.newsRoles.includes(aux)){
          this.journalist = true;
        }
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

  logoutUser(){
    this.authService.logout();
    window.location.reload();
  }

}

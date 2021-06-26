import { Component, OnInit } from '@angular/core';
import { UserService } from '../service/user.service';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../auth.service';
import { Observable } from 'rxjs';
import { IEEEuser , roles } from '../data-types';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Observable<IEEEuser>;

  constructor(private authService: AuthService, private userService: UserService) { }

  ngOnInit(): void { 
    //Load name
    this.user = this.authService.getCurrentUser();
    this.user.subscribe( async (usuario: IEEEuser) => {

      if (usuario){
        document.getElementById('profile_title').innerText=usuario.fname;
        document.getElementById('profile_email').innerText=usuario.email;
        
         
      } 

    })
     
  } 

}
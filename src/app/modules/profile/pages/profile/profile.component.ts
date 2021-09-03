import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from 'src/app/core/services/authorization/auth.service';
import { UserService } from 'src/app/core/services/user/user.service';
import { IEEEuser } from 'src/app/shared/models/ieee-user/ieee-user';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user: Observable<IEEEuser>;
  data: IEEEuser = null;

  constructor(private authService: AuthService, private userService: UserService) {
    //load name
    this.user = this.authService.getCurrentUser();
    this.user.subscribe( async (usuario: IEEEuser) => {
      if(usuario){
        console.log("user loaded...");
        this.data = usuario;
/*
        document.getElementById('profile_title').innerText = usuario.fname;
        document.getElementById('profile_email').innerText = usuario.email;
*/
      }
    })
  }

  ngOnInit(): void {

  }

}

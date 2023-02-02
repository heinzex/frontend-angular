import { ImageLoader, IMAGE_LOADER } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-bg',
  templateUrl: './profile-bg.component.html',
  styleUrls: ['./profile-bg.component.css']
})
export class ProfileBgComponent {
  Login:boolean = false;
  profile_bg:string = ''
}

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header/header.component';
import { ProfileBgComponent } from './profile_bg/profile-bg/profile-bg.component';
import { ProfileComponent } from './profile/profile/profile.component';
import { ProfilePicComponent } from './profile_pic/profile-pic/profile-pic.component';
import { AboutComponent } from './about/about/about.component';
import { ExpEduComponent } from './exp_edu/exp-edu/exp-edu.component';
import { ExpEduItemComponent } from './exp_edu_item/exp-edu-item/exp-edu-item.component';
import { ButtonComponent } from './button/button/button.component';
import { SkillsComponent } from './skills/skills/skills.component';
import { ProyectsComponent } from './proyects/proyects/proyects.component';
import { ProyectsItemsComponent } from './proyects_items/proyects-items/proyects-items.component';
import { LoginComponent } from './login/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { ContainerComponent } from './container/container/container.component';
import { BioComponent } from './bio/bio.component';
import { InfoComponent } from './info/info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [ 
    BrowserModule, 
    FormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    ReactiveFormsModule
  ],
  declarations: [ 
    AppComponent, HeaderComponent, ProfileBgComponent, ProfileComponent, ProfilePicComponent, AboutComponent, ExpEduComponent, ExpEduItemComponent, ButtonComponent, SkillsComponent, ProyectsComponent, ProyectsItemsComponent, LoginComponent, ContainerComponent, BioComponent, InfoComponent 
  ],
  bootstrap: [ 
    AppComponent, HeaderComponent
  ]
})
export class AppModule { }

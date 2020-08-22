import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReadComponent } from './components/read/read.component';
import { SettingsComponent } from './components/settings/settings.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LibraryComponent } from './components/library/library.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { BlankComponent } from './components/blank/blank.component';

@NgModule({
  declarations: [
    AppComponent,
    ReadComponent,
    SettingsComponent,
    ProfileComponent,
    LibraryComponent,
    NavbarComponent,
    SidebarComponent,
    BlankComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReadComponent } from './components/read/read.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LibraryComponent } from './components/library/library.component';
import { SettingsComponent } from './components/settings/settings.component';
import { BlankComponent } from './components/blank/blank.component';

const routes: Routes = [
    {path: '', component: BlankComponent, children: [
    {path: 'read', component: ReadComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'library', component: LibraryComponent},
    {path: 'settings', component: SettingsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

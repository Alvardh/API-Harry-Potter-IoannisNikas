import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListEtudiantsComponent } from './list-etudiants/list-etudiants.component';
import { RouterModule, Routes } from '@angular/router';
import { EtudiantService } from './services/etudiant.service';
import { ListEnseignantsComponent } from './list-enseignants/list-enseignants.component';
import { ListAllcharsComponent } from './list-allchars/list-allchars.component';
import { ErrorPageComponent } from './error-page/error-page.component';

const appRoutes: Routes = [
  { path: 'etudiants', component: ListEtudiantsComponent },
  { path: 'enseignants', component: ListEnseignantsComponent },
  { path: 'personnages', component: ListAllcharsComponent },
  { path: '', component: ListAllcharsComponent },
  { path: 'not-found', component: ErrorPageComponent },
  { path: '**', redirectTo: '/not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    ListEtudiantsComponent,
    ListEnseignantsComponent,
    ListAllcharsComponent,
    ErrorPageComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [EtudiantService],
  bootstrap: [AppComponent]
})
export class AppModule { }

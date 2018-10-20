import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';


@Component({
  selector: 'app-list-etudiants',
  templateUrl: './list-etudiants.component.html',
  styleUrls: ['./list-etudiants.component.css']
})
export class ListEtudiantsComponent implements OnInit {

  constructor(private etudiantService : EtudiantService) { }

  public etudiants :  any[];

  ngOnInit() {
    
    this.etudiantService.getStudent().subscribe(
      data => {this.etudiants = data});
  }
}

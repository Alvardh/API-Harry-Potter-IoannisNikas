import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-list-enseignants',
  templateUrl: './list-enseignants.component.html',
  styleUrls: ['./list-enseignants.component.css']
})
export class ListEnseignantsComponent implements OnInit {

constructor(private etudiantService : EtudiantService) { }

public enseignants :  any[];

ngOnInit() {
    
  this.etudiantService.getTeacher().subscribe(
    data => {this.enseignants = data});
  }
}
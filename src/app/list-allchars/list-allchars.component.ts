import { Component, OnInit } from '@angular/core';
import { EtudiantService } from '../services/etudiant.service';

@Component({
  selector: 'app-list-allchars',
  templateUrl: './list-allchars.component.html',
  styleUrls: ['./list-allchars.component.css']
})
export class ListAllcharsComponent implements OnInit {

  constructor(private etudiantService : EtudiantService) { }

  public chars :  any[];

  ngOnInit() {
    this.etudiantService.getChar().subscribe(
      data => {this.chars = data});
  }

}

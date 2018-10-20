import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etudiants } from '../etudiants';
import { Observable } from 'rxjs';
 
 
@Injectable({
    providedIn: 'root'
})
export class EtudiantService {
 
    private urlStudent: string = 'http://hp-api.herokuapp.com/api/characters/students';
    private urlTeacher: string = 'http://hp-api.herokuapp.com/api/characters/staff'
    private urlChar: string = 'http://hp-api.herokuapp.com/api/characters'

    constructor(private http :HttpClient) {}
 
    
    getStudent(): Observable<Etudiants[]> {
        return this.http.get<Etudiants[]>(this.urlStudent);
    }

    getTeacher(): Observable<Etudiants[]> {
        return this.http.get<Etudiants[]>(this.urlTeacher);
    }

    getChar(): Observable<Etudiants[]> {
        return this.http.get<Etudiants[]>(this.urlChar);
    }
}
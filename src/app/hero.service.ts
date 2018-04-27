import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class HeroService {

    private heroesAPIUrl = 'https://guarded-mesa-24051.herokuapp.com/api';  // URL de base de l'api

    constructor(private http: HttpClient) { }

    getHeros(): Observable<Hero[]> {
        return this.http.get<Hero[]>(this.heroesAPIUrl + '/heros');
    }

    /** POST: ajout d'un héros */
    addHero (hero: Hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroesAPIUrl + '/hero', hero, httpOptions);
    }

    /** PUT: mise à jour du héros */
    updateHero (hero: Hero): Observable<any> {
        const id = typeof hero === 'number' ? hero : hero._id;
        const url = `${this.heroesAPIUrl}/hero/${id}`;   // ajouter l'id à l'URL de base

        return this.http.put<Hero>(url, hero, httpOptions);
    }

    /** DELETE: suppression du héros */
    deleteHero (hero: Hero | number): Observable<Hero> {
        const id = typeof hero === 'number' ? hero : hero._id;
        const url = `${this.heroesAPIUrl}/hero/${id}`;   // ajouter l'id à l'URL de base

        return this.http.delete<Hero>(url, httpOptions);
    }

}

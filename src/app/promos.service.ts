import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PromosService {
  constructor(private http: HttpClient) { }

  public getJSON(fileName:string): Observable<any> {
    return this.http.get("./assets/"+fileName+".json")
  }
}
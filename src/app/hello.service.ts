import { Injectable } from '@angular/core';
import { HttpClient }  from "@angular/common/http";
import { Observable }  from "rxjs";

import Mymodel from "./models/mymodel.model"

@Injectable({
  providedIn: 'root'
})
export class HelloService {

  private _url: string = '/assets/data/data.json'

  constructor(private http: HttpClient) { }

  getData(): Observable<Mymodel[]>{

  	return this.http.get<Mymodel[]>(this._url);
  }




  
}

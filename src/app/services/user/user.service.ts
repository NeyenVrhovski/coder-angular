import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient
  ) { 

  }

  getAll(): Observable<any>{
      return this.http.get('https://reqres.in/api/users').pipe(map((res: any) => res.data))
  }
}

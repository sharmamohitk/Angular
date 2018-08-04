import { Injectable } from '@angular/core';
import {User} from './user';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map'
import { Headers, Http, RequestOptions, Response } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _http: Http) { }

   public async getUsersByPromiseFromService() : Promise<User[]>{
   return await this._http.get('./assets/promise_users.json').toPromise()
        .then((res) => {
            return res.json() as User[];
      });
    }

    public getUsersByObservableFromService() : Observable<User[]>{
      return this._http.get('./assets/observables_users.json')
          .map( (res:Response) => {
             return  res.json() as User[];
         });
    }

    public getUsersByObservableAsyncFromService() : Observable<User[]>{
      return this._http.get('./assets/observable_async_users.json')
          .map( (res:Response) => {
              return  res.json() as User[];
          });
    }

         
  }

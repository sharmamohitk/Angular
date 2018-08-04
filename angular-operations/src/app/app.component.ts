import { Component,OnInit } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-operations';
  userCompany: string;
  usersByPromise : User[];
  usersByObservable : User[];
  usersByObservableAsync : Observable<User[]>;

  constructor(private _userService: UserService){
  }
  
  ngOnInit(){
    this.userCompany = "Software Solutions Ltd.";
    this._userService.getUsersByPromiseFromService().then((users) => {
      console.log(users);
      this.usersByPromise = users;
    });
    this._userService.getUsersByObservableFromService().subscribe(
      (users) => {
        this.usersByObservable = users as User[];
        console.log(this.usersByObservable);
      },
      (err) => {console.log(err)},
      () => {console.log("complete")}
  
    );

  }

  public updateOrganization(updatedName){
    this.userCompany = updatedName;
  }

  public upDateDataSharedToChildComponent() : void {
    this.userCompany = "Data Servives Ltd."
  }

 public getUsersByObservableWithAsyncPipe() : Observable<User[]> {
   return this.usersByObservableAsync =  this._userService.getUsersByObservableAsyncFromService();
   }


}

import { Component,OnInit , AfterViewInit, ElementRef, ViewChild } from '@angular/core';
import {UserService} from './user.service';
import {User} from './user';
import { Observable } from 'rxjs';
import {ColorPickerDirective} from 'ngx-color-picker';
import {ColorSampleComponent} from './color-sample/color-sample.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit , AfterViewInit {

  title = 'angular-operations';
  primary = '#1976d2';
  userCompany: string;
  usersByPromise : User[];
  usersByObservable : User[];
  usersByObservableAsync : Observable<User[]>;

  constructor(private _userService: UserService) {
  }

  @ViewChild('primaryColorSample')
  primarySampleComponent: ColorSampleComponent;

  @ViewChild('primaryColorSample', {read: ElementRef})
  primarySampleDiv: ElementRef;

  @ViewChild('primaryInput')
  primaryInput: ElementRef;

  @ViewChild('primaryInput', {read:ColorPickerDirective})
  colorPickerDirective: ColorPickerDirective;

  ngAfterViewInit() {
    console.log("ViewChild primaryColorSample:", this.primarySampleComponent);
    console.log("ViewChild primarySampleDiv:", this.primarySampleDiv);
    console.log("ViewChild primaryInput:", this.primaryInput);
    this.primarySampleDiv.nativeElement.insertAdjacentHTML('beforeend', '<div style="margin-left: 60px;color:red;">This div has been added dynamically</div>');
  }

 public openColorPicker():void {
    this.colorPickerDirective.openDialog();
  }

  
  ngOnInit(){
    this.userCompany = "Software Solutions Ltd.";
    this._userService.getUsersByPromiseFromService().then((users) => {
         this.usersByPromise = users;
    });
    this._userService.getUsersByObservableFromService().subscribe(
      (users) => {
        this.usersByObservable = users as User[];
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

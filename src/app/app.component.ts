import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'list-inputoutput';

  userlist: User[] = [
    {firstname: 'Mary',
    lastname: 'Habibi',
    age: 38},
  {firstname: 'Mome',
    lastname: 'Sana',
    age: 42}
  ]
  loginUser(item:any){
    console.log(item)
  }

  form = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.pattern('[a-zA-Z]+$')]),
    lastname: new FormControl(),

    address: new FormGroup({
    city: new FormControl(),
    street: new FormControl(),
    homenumber: new FormControl()
    })
  })

  onSubmitReactiveForm(){
    console.log(this.form.value)
  }

  // public deleteUser(index: number) {
  //   // this.userList.splice(index, 1)
  // }








}






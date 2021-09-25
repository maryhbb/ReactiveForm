import { Component, Input, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input()
  list: User[]=[];

}

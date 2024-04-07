import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'table';

  student=[
    {id:1,name:"angular"},
    {id:2,name:"react"},
    {id:3,name:"vue"},
    {id:4,name:"bootstrap"},
    {id:5,name:"foundation"},
    {id:6,name:"nextjs"},


  ]
  Searchtext=""
  
}

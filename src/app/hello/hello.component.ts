import { Component, OnInit } from '@angular/core';
import  {HelloService}  from '../hello.service'


@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.scss']
})
export class HelloComponent implements OnInit {

  public data= [] ;
  public displayedColumns: string[] = ['h1','h2','h3','h4'];


  constructor(private _projectService: HelloService) { }


  ngOnInit() {
    this._projectService.getData().subscribe( 
        (data) => {

              this.data= data.reduce((current, next) => {
                    next.descriptions.forEach(descriptions => {
                    current.push({'code': next.code,
                              'voyage': next.voyage,
                              'descriptions': descriptions})
                      });
        
        return current;
        
        }, []);  
         });
   
  }


}

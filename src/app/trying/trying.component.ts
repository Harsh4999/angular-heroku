import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { alien } from '../alien';
import { AppservService } from '../appserv.service';

@Component({
  selector: 'app-trying',
  templateUrl: './trying.component.html',
  styleUrls: ['./trying.component.css']
})
export class TryingComponent implements OnInit {
  public aliens:alien[]=[];
  public view:string='no';
  constructor(private appservice:AppservService) { }

  ngOnInit(): void {
  }
  public getall(){
    this.appservice.getAll().subscribe(
      (resposne:alien[])=>{
        this.aliens=resposne;
        console.log(resposne);
        this.view='yes';
      },
      (error:HttpErrorResponse)=>{
        console.log(error);
      }
    )
  }

}

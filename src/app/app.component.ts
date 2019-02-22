import { Component,OnInit } from '@angular/core';
import {ApiService} from './api.service';
import { Persona } from './persona';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../assets/css/style.css']
})

export class AppComponent implements OnInit {
  title = 'Persona Meetup';
  personainput = "";
  output:any;
  persona:Persona;
  error: any;
  outPut1:JSON;
  constructor(private apiService: ApiService) { }
 
  ngOnInit() {
    //this.getHeroes();
  }
 
  getPersona(msg :string): void {
    console.log(this.personainput);
    console.log('sohel service' + msg);
    this.persona = {
      message: msg,
      persona: "djdj"
    };
   
    
    this.apiService.postPersona(this.persona).subscribe(data => {
      console.log(".... data"+data);
      data=data.replace("'","\"");
      data=data.replace("'","\"");
      console.log(".... data"+data);
      this.outPut1=JSON.parse(data);
     // console.log(JSON.stringify(data));
      console.log( this.outPut1);
      this.output=this.outPut1['MODEL_RESPONSE'];
    }, error => (this.error = error)); // TODO: Display error message
  }
 

}

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-meteo-actuelle',
  templateUrl: './meteo-actuelle.component.html',
  styleUrls: ['./meteo-actuelle.component.scss']
})
export class MeteoActuelleComponent implements OnInit {
  public listes;
  public infos;
  public infoSupplementaires;
  public tab = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
  public jour = new Date();
  public jours = this.tab[this.jour.getDay()];
  public dates:string[];
  
  public jourSuivant:string[];
  AddDay(journee:string)
  {
    if(journee == "Sunday")
    {
        this.dates = ["Monday","Tuesday","Wednesday","Thursday","Friday"];
    }
    if(journee == "Monday")
    {
      this.dates = ["Tuesday","Wednesday","Thursday","Friday","Saturday"];
    }
    if(journee == "Tuesday")
    {
      this.dates = ["Wednesday","Thursday","Friday","Saturday","Sunday"];
    }
    if(journee == "Wednesday")
    {
      this.dates = ["Thursday","Friday","Saturday","Sunday","Monday"];
    }
    if(journee == "Thursday")
    {
      this.dates = ["Friday","Saturday","Sunday","Monday","Tuesday"];
    }
    if(journee == "Friday")
    {
      this.dates = ["Saturday","Sunday","Monday","Tuesday","Wednesday"];
    }
    if(journee == "Saturday")
    {
      this.dates = ["Sunday","Monday","Tuesday","Wednesday","Thursday"];
    }
    if(journee == "Sunday")
    {
      this.dates = ["Monday","Tuesday","Wednesday","Thursday","Wednesday"];
    }
    return this.dates;
  }
  public dateEntiere = (new Date().getDay() + 1)+'/'+(new Date().getMonth() + 1)+'/'+new Date().getFullYear();
  constructor(private http:HttpClient){ }

  ngOnInit() {
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Lome&appid=2a99f859477d9450954dbd2d7df7085f").subscribe(
      data=>{this.listes = data},err =>{console.log(err)}
    );
    this.jourSuivant = this.AddDay(this.jours);

    this.http.get("http://api.openweathermap.org/data/2.5/forecast?q=Lome&appid=2a99f859477d9450954dbd2d7df7085f&cnt=5").subscribe(
      data=>{this.infos = data["list"]},err=>{console.log(err)}
    );
  } 
  onShow()
  {
    this.http.get("http://api.openweathermap.org/data/2.5/weather?q=Lome&appid=2a99f859477d9450954dbd2d7df7085f").subscribe(
      data=>{this.infoSupplementaires = data},err=>{console.log(err)}
    );
  } 

}

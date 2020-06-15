import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.scss' ]
})
export class AppComponent  {

  constructor() {}
  
  countries: any = [
    {
      full: "Great Britain",
      short: "GB"
    },
    {
      full: "United States",
      short: "US"
    },
    {
      full: "Canada",
      short: "CA"
    }
  ];
  selectedCountry: string = this.countries[0].full;
  
  selectedCountryControl = new FormControl(this.selectedCountry);

  ngOnInit() {
    this.selectedCountryControl.valueChanges.subscribe(
      country => {
        console.log(country);
      }
    );
  }

  test() {
    console.log(this.selectedCountry);
  }
}

import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service';
import { Router, ActivatedRoute  } from '@angular/router';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.scss']
})
export class WeatherDetailsComponent implements OnInit {
	private all_weather_object: any;
	private woeid: string;
	private command :string;
	private city: string;
	private icon_url = "https://www.metaweather.com/static/img/weather/";

	getCityWeatherAll(location, woeid) {
        
        this.command = "location";
        this.weatherService.getCityWeather(this.command, this.woeid)
        .subscribe(response => {

            if(response)  {
                this.all_weather_object = this.makeAllWeatherObj(response);
            }
           
           
           
        }
      );//end signup subscription
    }

	makeAllWeatherObj(response) {
        this.all_weather_object = [];
        let str = JSON.stringify(response);
        let obj = JSON.parse(str);
        this.city = obj.title;
        let consolidated_weather = obj.consolidated_weather;
        return consolidated_weather;
       /*//Remove the integer keys
        for (var i = consolidated_weather.length - 1; i >= 0; i--) {
            
            let weather_obj = consolidated_weather[i];
            this.all_weather_object.push(weather_obj);
        }*/
    }

    constructor(private weatherService: WeatherService, private activeRoute: ActivatedRoute) { }

	ngOnInit() {
		 this.activeRoute.queryParams.subscribe(queryParams => {
            this.activeRoute.params.subscribe(routeParams => {
                let param_woeid    = routeParams.woeid;
                
                //If there is no param_woeid defined, we don't try to fetch any data
                if(param_woeid != undefined) {
                	this.woeid = param_woeid;
                	this.getCityWeatherAll("", this.woeid);
                }
            });
        });
 	}

}

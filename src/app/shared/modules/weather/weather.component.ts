import { Component, OnInit, Input } from '@angular/core';
import { WeatherService } from './weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.scss']
})
export class WeatherComponent implements OnInit {
    //inputs the component expects
    @Input() city: string;
  
    //private variables
    private temperature: any;
    private maximum_temperature: any;
    private minimum_temperature: any;
    private icon_url = "https://www.metaweather.com/static/img/weather/";
    private today_weather_object: any;
    private woeid: string;
    private command :string;
    private loading = true;
    private no_woeid = false;
    private no_woeid_message = "No results were found. Try changing the keyword!";;

    getWoeid() {
        this.command = "search";
        this.weatherService.getWoeid(this.command, this.city)
        .subscribe(response => {
            //assign woeid and city here
            this.city = response[0].title
            this.woeid = response[0].woeid

            if(this.woeid != null){
                this.getCityWeatherToday(this.city, this.woeid);
                this.loading = false;
            }else{
                this.no_woeid = true;
            }
        }
      );//end signup subscription
    }

    getCityWeatherToday(location, woeid) {
        
        this.command = "location";
        this.weatherService.getCityWeather(this.command, this.woeid)
        .subscribe(response => {
            
            this.today_weather_object = this.getTodayWeatherObj(response);
            this.temperature = this.today_weather_object.the_temp;
            this.maximum_temperature = this.today_weather_object.max_temp;
            this.minimum_temperature = this.today_weather_object.min_temp;
            this.icon_url = this.icon_url+this.today_weather_object.weather_state_abbr+".svg";
           
        }
      );//end signup subscription
    }

    getTodayWeatherObj(response) {
        let str = JSON.stringify(response);
        let obj = JSON.parse(str);
        let today_weather_object = obj.consolidated_weather[0];

        return today_weather_object;

    }

    constructor(private weatherService: WeatherService) { }

    ngOnInit() {

        this.getWoeid();

    }

}

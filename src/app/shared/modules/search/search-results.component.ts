import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute  } from '@angular/router';
import { WeatherService } from '../weather/weather.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.scss']
})
export class SearchResultsComponent implements OnInit {
	private city: string;
    private is_results = false;

	constructor(private activeRoute: ActivatedRoute) { }


	ngOnInit() {
		 this.activeRoute.queryParams.subscribe(queryParams => {
            this.activeRoute.params.subscribe(routeParams => {
                let param_city    = routeParams.city;
                
                //If there is no param_woeid defined, we don't try to fetch any data
                if(param_city != undefined) {
                	this.city = param_city;
                }
            });
        });
 	}
}

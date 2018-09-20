import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Router, NavigationExtras, Resolve, ActivatedRoute, ActivatedRouteSnapshot  } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {
	private city: string;
	m_search_text= "";

	@ViewChild('myForm') search_form: any;
  	constructor(private router: Router) { }

  	loadSearchResults(form) {
      console.log("Running loadSearchResults ... with ", form.value.search_text);
  		if(form.value.search_text != null){
  			this.router.navigate(['/search/'+form.value.search_text]);
  		}
  	}

	ngOnInit() {

	}

}

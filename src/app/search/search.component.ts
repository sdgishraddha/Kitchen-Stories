import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
@Input('mitems') LIST=Object;

  constructor() { }

  ngOnInit(): void {
  }
  searchItems() {
    var input, filter, li, a, i;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    li = this.LIST.length;
    for (i = 0; i < li; i++) {
      a = this.LIST[i].description;
      if (a.toUpperCase().indexOf(filter) > -1) {
        document.getElementById(a).classList.remove("d-none");
      } else {
        document.getElementById(a).classList.add("d-none");
      }
    }
  }
}

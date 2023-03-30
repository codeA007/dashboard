import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBars,faCameraRetro,faPoll,faList,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component {
  menu = faBars;
  faCameraRetro = faCameraRetro;
  faPoll = faPoll;
  faList = faList;
  search = faSearch;
}

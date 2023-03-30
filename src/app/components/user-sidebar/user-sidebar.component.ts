import { Component ,OnInit} from '@angular/core';
import { faBars,faCameraRetro,faPoll,faList,faSearch} from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent {
  show =false;
  faPoll = faPoll;
  faList = faList;
  search = faSearch;
  
}

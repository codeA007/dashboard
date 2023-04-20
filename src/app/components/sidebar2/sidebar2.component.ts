import { Component,OnInit ,Input} from '@angular/core';
// import { Router } from '@angular/router';
import { faBars,faCameraRetro,faPoll,faList,faSearch,faHome,faMailBulk} from '@fortawesome/free-solid-svg-icons';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
// import { Input } from '@angular/core';

@Component({
  selector: 'app-sidebar2',
  templateUrl: './sidebar2.component.html',
  styleUrls: ['./sidebar2.component.css']
})
export class Sidebar2Component implements OnInit {
  constructor(private router: Router,private route:ActivatedRoute){ }
  addCamera= true;
  @Input() searchRoute='';
  @Input() viewCameraRoute='';
  @Input() resultsRoute='';
  @Input() homepage='';
  ngOnInit(): void {
    if(this.router.url == '/user/search'||this.router.url =='/user/viewCamera'|| this.router.url =='/user/results'){
      console.log(this.router.url,"url");
      this.addCamera = false;
    }
  }

  menu = faBars;
  faCameraRetro = faCameraRetro;
  faPoll = faPoll;
  faList = faList;
  search = faSearch;
  home=faHome;
  mail=faMailBulk;
}

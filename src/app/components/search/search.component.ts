import { Component,OnInit } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { JsonPipe } from '@angular/common';
import{CameraService} from '../../services/camera.service';
import dayjs from 'dayjs/esm';
import { faBars,faCameraRetro,faPoll,faList,faSearch} from '@fortawesome/free-solid-svg-icons';
import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent  implements OnInit{
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs }; 
  search = faSearch;
  showSideBar= true;
  name='Admin'
  
constructor(private router: Router,private route:ActivatedRoute){
  
  this.selected = {
    startDate: dayjs('2023-01-01T00:00Z'),
    endDate: dayjs('2023-02-20T00:00Z')
  };
}
ngOnInit(): void {
  if(this.router.url == '/user/search'||this.router.url =='/user/viewCamera'|| this.router.url =='/user/results'){
    console.log(this.router.url,"url");
    this.showSideBar = false;
    this.name = 'User'
  }
}
submit(){
  console.log(this.selected); 
}
}

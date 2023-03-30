import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { JsonPipe } from '@angular/common';
import{CameraService} from '../../services/camera.service';
import dayjs from 'dayjs/esm';
import { faBars,faCameraRetro,faPoll,faList,faSearch} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs }; 
  search = faSearch;
constructor(){
  this.selected = {
    startDate: dayjs('2023-01-01T00:00Z'),
    endDate: dayjs('2023-02-20T00:00Z')
  };
}
submit(){
  console.log(this.selected); 
}
}

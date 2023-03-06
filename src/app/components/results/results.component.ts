import { Component } from '@angular/core';
import { NgbDate, NgbCalendar, NgbDateParserFormatter, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NgxDaterangepickerMd} from 'ngx-daterangepicker-material';
import { JsonPipe } from '@angular/common';
import dayjs from 'dayjs/esm';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent {
  
fileUpload(event:any){
  // this.file =event.target.files[0]; 
  console.log(event.target.files);
}
selected: { startDate: dayjs.Dayjs; endDate: dayjs.Dayjs };
  constructor() {
    this.selected = {
      startDate: dayjs('2023-01-01T00:00Z'),
      endDate: dayjs('2023-02-20T00:00Z')
    };
  }
submit(){
  let data = {
    // file:this.file,
    // date:this.model
  }
  console.log(this.selected);
  
}

}

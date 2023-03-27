import { Component } from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { faBars} from '@fortawesome/free-solid-svg-icons';

import { faBars,faCameraRetro,faPoll,faList,faArrowRight} from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  closeResult = '';
menu = faBars;
faCameraRetro = faCameraRetro;
faPoll = faPoll;
faList = faList;
arrow = faArrowRight;
	constructor(private offcanvasService: NgbOffcanvas) {
  }

	open(content: any) {
		this.offcanvasService.open(content, { ariaLabelledBy: 'offcanvas-basic-title' }).result.then(
			(result) => {
				this.closeResult = `Closed with: ${result}`;
			},
			(reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			},
		);
	}

  private getDismissReason(reason: any): string {
		if (reason === OffcanvasDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === OffcanvasDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on the backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


}

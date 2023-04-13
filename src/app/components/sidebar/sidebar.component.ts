import { Component ,Input} from '@angular/core';
import { NgbDatepickerModule, NgbOffcanvas, OffcanvasDismissReasons } from '@ng-bootstrap/ng-bootstrap';
// import { faBars} from '@fortawesome/free-solid-svg-icons';

import { Router,ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';

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
show=false;
// @Input() searchRoute='';
  @Input() viewCameraRoute='';
  @Input() resultsRoute='';
  @Input() homepage='';
	constructor(private offcanvasService: NgbOffcanvas,private router: Router,private route:ActivatedRoute) {
  }
ngOnInit(): void {
  if(this.router.url == '/user'){
	this.show = false;
  }
  else{
	this.show = true;
  }
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

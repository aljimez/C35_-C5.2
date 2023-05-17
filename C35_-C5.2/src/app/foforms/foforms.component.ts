import { Component, OnInit,Output, EventEmitter} from '@angular/core';
import { Data } from './data-to-send';

@Component({
  selector: 'app-foforms',
  templateUrl: './foforms.component.html',
  styleUrls: ['./foforms.component.css']
})
export class FoformsComponent  implements OnInit{

	sum1: number = 0;
	sum2: number = 0;
	ans: number = 0;
	usercaptcha: string = '';

	nomapels: string = '';
	email: string = '';
	message: string = '';

	captchamessage: string = '';

	@Output() dataEmitterParam = new EventEmitter<Data>();

	ngOnInit(): void {
		this.calcNum();
	}

	calcNum(): void {
this.sum1 = 1;		this.sum2 =5;

		this.ans = this.sum1 + this.sum2;
	}

	sendDataToParent(): void {

	    if (Number(this.usercaptcha) == Number(this.ans)) {
			let local_data = new Data();
			local_data.eemail = this.email;
			local_data.emessage = this.message;
			local_data.ename = this.nomapels;
			this.dataEmitterParam.emit(local_data);
			this.captchamessage = '';
		}
		this.calcNum();
	}


}

import { Component ,Input,SimpleChanges,OnChanges} from '@angular/core';

@Component({
  selector: 'app-salidadata',
  templateUrl: './salidadata.component.html',
  styleUrls: ['./salidadata.component.css']
})
export class SalidadataComponentexport  implements OnChanges {

	@Input() nomapels: string = '';
	@Input() email: string = '';
	@Input() message: string = '';


	ngOnChanges(changes: SimpleChanges): void {
		console.log("hey");
	}

}

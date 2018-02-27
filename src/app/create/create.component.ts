import { Component, OnInit } from '@angular/core';
import { CreateService } from './create.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})

export class CreateComponent implements OnInit {

  constructor(private createService: CreateService) {}

  ngOnInit() {
    this.createService.getApi().subscribe( 
      (data) => {
        console.log('data ', data)
      },
      (err) => {
        console.log('err ', err)
      } 
    )

    // console.log(this.createService.createData);
    // console.log(this.createService.getApi());
  }

}

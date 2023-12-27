import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-homes',
  templateUrl: './homes.component.html',
  styleUrl: './homes.component.css'
})
export class HomesComponent implements OnInit {

  homes$;

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.homes$ = this.dataService.getHomes$();
  }

}

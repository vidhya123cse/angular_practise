import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  template:`
  <div class="container">
      <div class="row">
          <div class="col-lg-12 bg-light text-center">
              <p>This is a Warning Alert</p>
                  </div>
      </div>
  </div>
  `,
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}

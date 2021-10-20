import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-support',
  templateUrl: './support.page.html',
  styleUrls: ['./support.page.scss'],
})
export class SupportPage implements OnInit {

  constructor(private router: Router) { }
  submit(){
    this.router.navigate(['/tabs'])
  }
  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sample2-page',
  templateUrl: './sample2-page.component.html',
  styleUrls: ['./sample2-page.component.css']
})
export class Sample2PageComponent implements OnInit {

  currentName: string;
  sampleArray: string[] = [];

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  redirectToSamplePage(): void {
    this.router.navigateByUrl('sample');
  }

  readNameFromParams(): void {
    this.activatedRoute.queryParams.subscribe(
      param => this.currentName = param.name
    );
  }

  ngOnInit(): void {
    this.readNameFromParams();
  }

}

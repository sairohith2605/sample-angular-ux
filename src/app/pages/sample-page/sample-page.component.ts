import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SampleService } from '../../services/sample.service';

@Component({
  selector: 'app-sample-page',
  templateUrl: './sample-page.component.html',
  styleUrls: ['./sample-page.component.css']
})
export class SamplePageComponent implements OnInit {

  sampleVariable = 'This is sample text!';
  messageResponse: string;

  constructor(private router: Router, private service: SampleService) { }

  navigateToSample2(): void {
    this.router.navigateByUrl('sample2');
  }

  sendSampleRequest(): void {
    this.service.getSampleText().subscribe({
      next: (response) => {
        this.messageResponse = response.message;
      },
      error: (error: HttpErrorResponse) => {
        console.log(error);
      }
    });
  }

  ngOnInit(): void {
  }

}

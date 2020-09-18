import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SampleService {

  private url: string = 'https://localhost:44357/';

  constructor(private http: HttpClient) { }

  getSampleText(): Observable<any> {
    return this.http.get(this.url + 'sampleapi/text');
  }
}

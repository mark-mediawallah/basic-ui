import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class CreateService {
  constructor(private http: HttpClient) { }
  // constructor() { }

  createData = [1,2,3,4,5]
  
  getApi() {
    return this.http.get('/api')
    // return 'method'
  }
}
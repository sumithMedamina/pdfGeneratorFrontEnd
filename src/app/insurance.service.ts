import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InsuranceService {


  constructor(private http: HttpClient) {}

  private apiUrl = 'http://localhost:8989/api/convert';

  saveForm(data: any): Observable<any> {
    console.log(data);
    return this.http.post<any>(this.apiUrl, data);
  }
}

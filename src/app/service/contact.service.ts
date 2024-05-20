import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Contact} from "../models/contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "https://nbrryena6b.execute-api.us-east-1.amazonaws.com/Dev/contact";

  constructor(private httpClient: HttpClient) { }



  createContact(data: Contact) : Observable<Contact> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const options = { headers: headers };
    return this.httpClient.post<Contact>(this.baseUrl, data, options);
  }
}

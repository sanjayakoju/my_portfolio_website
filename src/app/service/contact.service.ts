import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Contact} from "../models/contact";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  baseUrl = "";

  constructor(private httpClient: HttpClient) { }

  createContact(data: Contact) : Observable<Contact> {
    return this.httpClient.post<Contact>(this.baseUrl, data);
  }
}

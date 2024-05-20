import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ContactService} from "../../service/contact.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  contactForm! : FormGroup
  showFailure: boolean = false;
  showSuccess: boolean = false;
  errorMessage: String = "";
  successMessage: String = "";
  isSubmitted: boolean = false;

  constructor(private formBuilder: FormBuilder, private contactService: ContactService) {
  }
  ngOnInit(): void {
    this.createForm();
  }

  private createForm() {
    this.contactForm = this.formBuilder.group({
      email: ['', [Validators.email, Validators.required]],
      name: ['', Validators.required],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    })
  }

  get controls() {
    return this.contactForm.controls;
  }

  onSubmit() {
    this.isSubmitted = true;
    if(this.contactForm.valid) {
      const data = {
        contactUsId: new Date().getTime().toString(),
        name: this.contactForm.value.name,
        email: this.contactForm.value.email,
        subject: this.contactForm.value.subject,
        message: this.contactForm.value.message,
      }
      console.log('Form Data : ', data);
      this.contactService.createContact(data).subscribe((res) => {
        this.showSuccess = true;
        this.successMessage = "Message send successfully. Will get you back soon. Thank you";
        console.log("The Success response "+res);
        this.contactForm.reset();
      }, (error) => {
        this.showFailure = true;
        this.errorMessage = "Message send failed. please try again";
        console.log("The error response "+error);
      })
      this.isSubmitted = false;
    }
  }



}

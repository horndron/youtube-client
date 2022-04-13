import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import isValidUrl from '../../validators/isValidUrl';
import futureDate from '../../validators/futureDate';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass'],
})
export default class AdminComponent implements OnInit {
  formCreateVideo!: FormGroup;

  ngOnInit(): void {
    this.formCreateVideo = new FormGroup({
      title: new FormControl(
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(20),
        ],
      ),
      description: new FormControl('', Validators.maxLength(255)),
      imageLink: new FormControl('', [Validators.required, isValidUrl]),
      videoLink: new FormControl('', [Validators.required, isValidUrl]),
      date: new FormControl('', [Validators.required, futureDate]),
    });
  }

  get title() { return this.formCreateVideo.get('title'); }

  get description() { return this.formCreateVideo.get('description'); }

  get imageLink() { return this.formCreateVideo.get('imageLink'); }

  get videoLink() { return this.formCreateVideo.get('videoLink'); }

  get date() { return this.formCreateVideo.get('date'); }

  formCreateVideoSubmit() {
    if (this.formCreateVideo.valid) {
      console.log(this.formCreateVideo.value);
      alert('Video created! Form value in console)');
      this.formCreateVideo.reset();
    }
  }
}

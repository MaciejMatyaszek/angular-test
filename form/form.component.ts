import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent {
  form: FormGroup;

  constructor(
    private readonly formBuilder: FormBuilder,
    private readonly router: Router
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      name: this.formBuilder.control(null, [
        Validators.pattern(/(?=(?:^\w))([-A-Za-ząśćżńęłó]+)(?:[^ ])$/),
      ]),
    });

    console.log(this.form);
  }
}

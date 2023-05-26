import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
})
export class StartComponent {
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
  }
  goTo() {
    console.log('aaaa');
    this.router.navigate(['test']);
  }
}

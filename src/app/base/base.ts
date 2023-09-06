import { Injector } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';

// Base Class containing all services for the app
export abstract class BasePage {
  public formBuilder: FormBuilder;
  public storageService: StorageService;
  public router: Router;

  constructor(injector: Injector) {
    this.formBuilder = injector.get(FormBuilder);
    this.storageService = injector.get(StorageService);
    this.router = injector.get(Router);
  }
}

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarLanguagesComponent } from './navbar-languages.component';

describe('NavbarLanguagesComponent', () => {
  let component: NavbarLanguagesComponent;
  let fixture: ComponentFixture<NavbarLanguagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarLanguagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarLanguagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

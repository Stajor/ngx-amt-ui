import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarThemeComponent } from './navbar-theme.component';

describe('NavbarThemeComponent', () => {
  let component: NavbarThemeComponent;
  let fixture: ComponentFixture<NavbarThemeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarThemeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

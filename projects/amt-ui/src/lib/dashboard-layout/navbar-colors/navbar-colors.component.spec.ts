import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarColorsComponent } from './navbar-colors.component';

describe('NavbarColorsComponent', () => {
  let component: NavbarColorsComponent;
  let fixture: ComponentFixture<NavbarColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarColorsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

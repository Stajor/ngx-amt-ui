import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarFullscreenComponent } from './navbar-fullscreen.component';

describe('NavbarFullscreenComponent', () => {
  let component: NavbarFullscreenComponent;
  let fixture: ComponentFixture<NavbarFullscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarFullscreenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarFullscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

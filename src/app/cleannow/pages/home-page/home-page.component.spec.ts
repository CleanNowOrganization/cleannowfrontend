import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HomePageComponent } from './home-page.component';
import { UserProfileModule } from '../../users/user-profile/user-profile.module';

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [HomePageComponent],
        imports: [UserProfileModule] // Añade UserProfileModule a los imports
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

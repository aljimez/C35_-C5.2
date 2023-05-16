import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoformsComponent } from './foforms.component';

describe('FoformsComponent', () => {
  let component: FoformsComponent;
  let fixture: ComponentFixture<FoformsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FoformsComponent]
    });
    fixture = TestBed.createComponent(FoformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

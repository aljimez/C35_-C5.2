import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalidadataComponent } from './salidadata.component';

describe('SalidadataComponent', () => {
  let component: SalidadataComponent;
  let fixture: ComponentFixture<SalidadataComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SalidadataComponent]
    });
    fixture = TestBed.createComponent(SalidadataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

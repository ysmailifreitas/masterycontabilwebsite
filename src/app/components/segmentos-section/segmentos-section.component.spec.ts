import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegmentosSectionComponent } from './segmentos-section.component';

describe('SegmentosSectionComponent', () => {
  let component: SegmentosSectionComponent;
  let fixture: ComponentFixture<SegmentosSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SegmentosSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SegmentosSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

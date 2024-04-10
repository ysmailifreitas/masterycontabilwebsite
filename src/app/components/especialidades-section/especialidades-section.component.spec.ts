import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EspecialidadesSectionComponent } from './especialidades-section.component';

describe('EspecialidadesSectionComponent', () => {
  let component: EspecialidadesSectionComponent;
  let fixture: ComponentFixture<EspecialidadesSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EspecialidadesSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EspecialidadesSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

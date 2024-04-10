import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VantagensSectionComponent } from './vantagens-section.component';

describe('VantagensSectionComponent', () => {
  let component: VantagensSectionComponent;
  let fixture: ComponentFixture<VantagensSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VantagensSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VantagensSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

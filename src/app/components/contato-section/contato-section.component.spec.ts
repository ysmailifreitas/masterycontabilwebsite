import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContatoSectionComponent } from './contato-section.component';

describe('ContatoSectionComponent', () => {
  let component: ContatoSectionComponent;
  let fixture: ComponentFixture<ContatoSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContatoSectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContatoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

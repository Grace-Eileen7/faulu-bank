import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TermsAndConditionsComponent } from './TermsAndconditions.component';  // Ensure this path is correct

describe('TermsAndConditionsComponent', () => {
  let component: TermsAndConditionsComponent;
  let fixture: ComponentFixture<TermsAndConditionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TermsAndConditionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TermsAndConditionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});


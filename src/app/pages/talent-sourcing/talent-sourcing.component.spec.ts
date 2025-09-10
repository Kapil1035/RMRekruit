import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TalentSourcingComponent } from './talent-sourcing.component';

describe('TalentSourcingComponent', () => {
  let component: TalentSourcingComponent;
  let fixture: ComponentFixture<TalentSourcingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TalentSourcingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TalentSourcingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecruitmentProcessComponent } from './recruitment-process.component';

describe('RecruitmentProcessComponent', () => {
  let component: RecruitmentProcessComponent;
  let fixture: ComponentFixture<RecruitmentProcessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RecruitmentProcessComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecruitmentProcessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

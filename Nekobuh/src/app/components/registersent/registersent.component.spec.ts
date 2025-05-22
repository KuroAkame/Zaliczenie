import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistersentComponent } from './registersent.component';

describe('RegistersentComponent', () => {
  let component: RegistersentComponent;
  let fixture: ComponentFixture<RegistersentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistersentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistersentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

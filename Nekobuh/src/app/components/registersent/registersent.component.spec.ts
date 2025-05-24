import { ComponentFixture, TestBed } from '@angular/core/testing';
import {RegisterSentComponent} from './registersent.component';



describe('RegisterSentComponent', () => {
  let component: RegisterSentComponent;
  let fixture: ComponentFixture<RegisterSentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterSentComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(RegisterSentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

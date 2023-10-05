import { RecieverComponent } from './reciever.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('RecieverComponent', () => {
  let component: RecieverComponent;
  let fixture: ComponentFixture<RecieverComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecieverComponent]
    });
    fixture = TestBed.createComponent(RecieverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

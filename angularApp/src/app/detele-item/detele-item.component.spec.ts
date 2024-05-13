import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeteleItemComponent } from './detele-item.component';

describe('DeteleItemComponent', () => {
  let component: DeteleItemComponent;
  let fixture: ComponentFixture<DeteleItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeteleItemComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DeteleItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

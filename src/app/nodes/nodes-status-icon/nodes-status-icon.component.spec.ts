import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesStatusIconComponent } from './nodes-status-icon.component';

describe('NodesStatusIconComponent', () => {
  let component: NodesStatusIconComponent;
  let fixture: ComponentFixture<NodesStatusIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodesStatusIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NodesStatusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

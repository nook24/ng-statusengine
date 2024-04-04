import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodeChecksComponent } from './node-checks.component';

describe('NodeChecksComponent', () => {
  let component: NodeChecksComponent;
  let fixture: ComponentFixture<NodeChecksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodeChecksComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NodeChecksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

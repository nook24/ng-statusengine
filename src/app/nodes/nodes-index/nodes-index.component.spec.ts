import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodesIndexComponent } from './nodes-index.component';

describe('NodesIndexComponent', () => {
  let component: NodesIndexComponent;
  let fixture: ComponentFixture<NodesIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NodesIndexComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(NodesIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

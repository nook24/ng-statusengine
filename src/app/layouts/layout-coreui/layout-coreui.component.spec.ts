import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCoreuiComponent } from './layout-coreui.component';

describe('LayoutCoreuiComponent', () => {
  let component: LayoutCoreuiComponent;
  let fixture: ComponentFixture<LayoutCoreuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutCoreuiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutCoreuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

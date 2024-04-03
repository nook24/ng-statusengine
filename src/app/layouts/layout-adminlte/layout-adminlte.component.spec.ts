import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutadminlteComponent } from './layout-adminlte.component';

describe('LayoutAdminlteComponent', () => {
  let component: LayoutAdminlteComponent;
  let fixture: ComponentFixture<LayoutAdminlteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutAdminlteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LayoutAdminlteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

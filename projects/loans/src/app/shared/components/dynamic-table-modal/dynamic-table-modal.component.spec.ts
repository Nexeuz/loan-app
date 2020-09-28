import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTableModalComponent } from './dynamic-table-modal.component';

describe('DynamicTableModalComponent', () => {
  let component: DynamicTableModalComponent;
  let fixture: ComponentFixture<DynamicTableModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicTableModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicTableModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

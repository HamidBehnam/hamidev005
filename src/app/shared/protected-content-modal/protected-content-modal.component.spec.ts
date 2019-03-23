import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProtectedContentModalComponent } from './protected-content-modal.component';

describe('ProtectedContentModalComponent', () => {
  let component: ProtectedContentModalComponent;
  let fixture: ComponentFixture<ProtectedContentModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProtectedContentModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProtectedContentModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsServicesPopoverComponent } from './organizations-services-popover.component';

describe('OrganizationsServicesPopoverComponent', () => {
  let component: OrganizationsServicesPopoverComponent;
  let fixture: ComponentFixture<OrganizationsServicesPopoverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsServicesPopoverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsServicesPopoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

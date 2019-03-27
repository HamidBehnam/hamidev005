import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrganizationsListItemComponent } from './organizations-list-item.component';

describe('OrganizationsListItemComponent', () => {
  let component: OrganizationsListItemComponent;
  let fixture: ComponentFixture<OrganizationsListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrganizationsListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrganizationsListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

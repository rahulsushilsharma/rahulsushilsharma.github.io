import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OwlApiComponent } from './owl-api.component';

describe('OwlApiComponent', () => {
  let component: OwlApiComponent;
  let fixture: ComponentFixture<OwlApiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OwlApiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OwlApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

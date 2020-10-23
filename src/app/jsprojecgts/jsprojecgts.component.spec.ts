import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsprojecgtsComponent } from './jsprojecgts.component';

describe('JsprojecgtsComponent', () => {
  let component: JsprojecgtsComponent;
  let fixture: ComponentFixture<JsprojecgtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsprojecgtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsprojecgtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

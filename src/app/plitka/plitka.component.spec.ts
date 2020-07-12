import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlitkaComponent } from './plitka.component';

describe('PlitkaComponent', () => {
  let component: PlitkaComponent;
  let fixture: ComponentFixture<PlitkaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlitkaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlitkaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

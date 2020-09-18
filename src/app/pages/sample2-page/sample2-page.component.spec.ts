import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Sample2PageComponent } from './sample2-page.component';

describe('Sample2PageComponent', () => {
  let component: Sample2PageComponent;
  let fixture: ComponentFixture<Sample2PageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Sample2PageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Sample2PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

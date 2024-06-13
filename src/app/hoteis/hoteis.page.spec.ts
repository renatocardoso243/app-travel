import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HoteisPage } from './hoteis.page';

describe('HoteisPage', () => {
  let component: HoteisPage;
  let fixture: ComponentFixture<HoteisPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HoteisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

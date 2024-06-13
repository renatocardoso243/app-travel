import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VoosPage } from './voos.page';

describe('VoosPage', () => {
  let component: VoosPage;
  let fixture: ComponentFixture<VoosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VoosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

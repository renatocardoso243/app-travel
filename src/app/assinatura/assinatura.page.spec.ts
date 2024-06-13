import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AssinaturaPage } from './assinatura.page';

describe('AssinaturaPage', () => {
  let component: AssinaturaPage;
  let fixture: ComponentFixture<AssinaturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AssinaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

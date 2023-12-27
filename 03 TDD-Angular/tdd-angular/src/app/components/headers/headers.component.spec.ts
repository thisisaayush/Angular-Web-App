import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadersComponent } from './headers.component';

describe('HeadersComponent', () => {
  let component: HeadersComponent;
  let fixture: ComponentFixture<HeadersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HeadersComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HeadersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show logo', () => {
    expect(fixture.nativeElement.querySelectory('[data-test="logo"]')).toBeTruthy();
  });

  it('should show search', () => {
    expect(fixture.nativeElement.querySelectory('[data-test="search"]')).toBeTruthy();
  });

  it('should show menu', () => {
    expect(fixture.nativeElement.querySelectory('[data-test="menu"]')).toBeTruthy();
  });
  
  it('should show filters', () => {

    expect(fixture.nativeElement.querySelector('[data-test="home-type"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="dates"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="guests"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="price"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="rooms"]')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('[data-test="amenities"]')).toBeTruthy();

  });
});

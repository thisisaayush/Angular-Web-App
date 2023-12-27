import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomesComponent } from './homes.component';

describe('HomesComponent', () => {
  let component: HomesComponent;
  let fixture: ComponentFixture<HomesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show home', () => {
    expect(component).toBeTruthy();
  });

});

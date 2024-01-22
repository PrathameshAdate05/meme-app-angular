import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PJokesComponent } from './p-jokes.component';

describe('PJokesComponent', () => {
  let component: PJokesComponent;
  let fixture: ComponentFixture<PJokesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PJokesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PJokesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

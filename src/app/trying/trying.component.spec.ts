import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryingComponent } from './trying.component';

describe('TryingComponent', () => {
  let component: TryingComponent;
  let fixture: ComponentFixture<TryingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TryingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

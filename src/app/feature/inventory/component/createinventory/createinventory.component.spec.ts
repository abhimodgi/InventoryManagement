import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateinventoryComponent } from './createinventory.component';

describe('CreateinventoryComponent', () => {
  let component: CreateinventoryComponent;
  let fixture: ComponentFixture<CreateinventoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateinventoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateinventoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

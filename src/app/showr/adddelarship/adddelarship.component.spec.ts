import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdddelarshipComponent } from './adddelarship.component';

describe('AdddelarshipComponent', () => {
  let component: AdddelarshipComponent;
  let fixture: ComponentFixture<AdddelarshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdddelarshipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdddelarshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

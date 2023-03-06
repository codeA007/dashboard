import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FabricjsComponent } from './fabricjs.component';

describe('FabricjsComponent', () => {
  let component: FabricjsComponent;
  let fixture: ComponentFixture<FabricjsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FabricjsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FabricjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

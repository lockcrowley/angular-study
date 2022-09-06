import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentRicardoComponent } from './component-ricardo.component';

describe('ComponentRicardoComponent', () => {
  let component: ComponentRicardoComponent;
  let fixture: ComponentFixture<ComponentRicardoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponentRicardoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponentRicardoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

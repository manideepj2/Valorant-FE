import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentsContainerComponent } from './agents-container.component';

describe('AgentsContainerComponent', () => {
  let component: AgentsContainerComponent;
  let fixture: ComponentFixture<AgentsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AgentsContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgentsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

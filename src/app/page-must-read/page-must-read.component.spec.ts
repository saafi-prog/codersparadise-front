import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMustReadComponent } from './page-must-read.component';

describe('PageMustReadComponent', () => {
  let component: PageMustReadComponent;
  let fixture: ComponentFixture<PageMustReadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageMustReadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMustReadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

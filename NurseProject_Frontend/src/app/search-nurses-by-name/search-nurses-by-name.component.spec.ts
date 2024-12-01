import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchNursesByNameComponent } from './search-nurses-by-name.component';

describe('SearchNursesByNameComponent', () => {
  let component: SearchNursesByNameComponent;
  let fixture: ComponentFixture<SearchNursesByNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchNursesByNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchNursesByNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

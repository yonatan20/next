import { TestBed, ComponentFixture } from '@angular/core/testing';
import { EventEmitter } from '@angular/core';
import { SearchComponent } from './search.component';
import { SearchOptions } from './search.typings';

fdescribe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent]
    });
    fixture = TestBed.createComponent(SearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('options', () => {
    it('should initialize _options with default values if no options are provided', () => {
      expect(component._options.placeholder).toBe('Search');
    });

    it('should merge provided options with default options', () => {
      const customOptions: SearchOptions = {
        placeholder: 'Custom Placeholder'
      };
      component.options = customOptions;
      expect(component._options.placeholder).toBe(customOptions.placeholder);
    });
  });
});

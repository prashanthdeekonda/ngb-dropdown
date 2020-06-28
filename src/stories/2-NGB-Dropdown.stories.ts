import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownComponent } from 'src/app/ngb-dropdown/ngb-dropdown.component';
import { action } from '@storybook/addon-actions';

export const items1 = [
    { id: 1, displayText: 'option 1', selected: true },
    { id: 2, displayText: 'option 2', selected: false },
    { id: 3, displayText: 'option 3', selected: false },
  ];

storiesOf('NGB DROPDOWN', module)
  .addDecorator(
    moduleMetadata({
      imports: [NgbModule],
      declarations: [NgbDropdownComponent],
    })
  )
  .add('sample', () => ({
      component: NgbDropdownComponent,
      props: {
          items: items1,
          selectedItem: action('selected Item: ')
      }
  }));

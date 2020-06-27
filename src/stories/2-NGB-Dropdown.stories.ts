import { storiesOf, moduleMetadata } from '@storybook/angular';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbDropdownComponent } from 'src/app/ngb-dropdown/ngb-dropdown.component';

storiesOf('NGB DROPDOWN', module)
  .addDecorator(
    moduleMetadata({
      imports: [NgbModule],
      declarations: [NgbDropdownComponent],
    })
  )
  .add('sample', () => ({
      component: NgbDropdownComponent,
  }));

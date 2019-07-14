import { storiesOf } from '@storybook/angular';
import { BbDatepickerComponent } from 'bb-datepicker';

storiesOf('DatePicker', module)
    .add('Basic', () => ({
        component: BbDatepickerComponent
    }), {
            notes: 'The DatePicker component',
        });
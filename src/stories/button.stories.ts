import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from 'button';

storiesOf('Button', module)
    .add('Basic', () => ({
        component: ButtonComponent,
        props: {
            text: 'hello'
        }
    }), {
            notes: 'The Hello Button',
        })
    .add('Disabled', () => ({
        component: ButtonComponent,
        props: {
            text: 'disabled',
            disabled: true
        }
    }), {
            notes: 'The Disabled Button',
        });
import { storiesOf } from '@storybook/angular';
import { ButtonComponent } from 'button';

storiesOf('button', module)
    .add('basic', () => ({
        component: ButtonComponent,
        props: {
            text: 'hello'
        }
    }), {
            notes: 'The Hello Button',
        })
    .add('disabled', () => ({
        component: ButtonComponent,
        props: {
            text: 'disabled',
            disabled: true
        }
    }), {
            notes: 'The Disabled Button',
        });
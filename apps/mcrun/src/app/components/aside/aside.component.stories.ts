import type { Meta, StoryObj } from '@storybook/angular';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import {AsideComponent} from "./aside.component";

const meta: Meta<AsideComponent> = {
    component: AsideComponent,
    title: 'AsideComponent',
};
export default meta;
type Story = StoryObj<AsideComponent>;

export const Primary: Story = {
    args: {},
};

export const Heading: Story = {
    args: {},
    // play: async ({ canvasElement }) => {
    //     const canvas = within(canvasElement);
    //     expect(canvas.getByText(/header works!/gi)).toBeTruthy();
    // },
};

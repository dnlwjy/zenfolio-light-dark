import "../app/globals.css";
import type { Meta } from '@storybook/react'
import Button from '../components/Button'
import { Home } from '../components/IconLibrary'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary'],
    },
    additionalHoverLogic: {
      control: 'boolean',
    },
    click: { action: 'clicked' },
  },
}

export default meta

export const variantsButton = {
  render: (args: any) => (
    <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
      <Button title="Primary" variant="primary" {...args} />
      <Button title="Secondary" variant="secondary" {...args} />
      <Button title="Primary" variant="primary" icon={Home} {...args} />
      <Button title="Secondary" variant="secondary" icon={Home} {...args} />
    </div>
  ),
  args: {},
};
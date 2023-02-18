import { Meta, Story } from '@storybook/vue3'
import batteryStatusCircle from './index.vue'
export default {
  title: 'Components/batteryStatusCircle',
  component: batteryStatusCircle,
  argTypes: {
    showLabel: {
      control: 'boolean',
      defaultValue: false
    },
    showPercentage: {
      control: 'boolean',
      defaultValue: false
    },
    dark: {
      control: 'boolean',
      defaultValue: false
    },
    colored: {
      control: 'boolean',
      defaultValue: true
    }
  }
} as Meta

const Template: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { batteryStatusCircle },
  template: '<battery-status-circle v-bind="$props" />'
})

const TemplateDark: Story = (_args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { batteryStatusCircle },
  template: '<div style="padding: 50px; background-color: black"><battery-status-circle v-bind="$props" /></div>'
})

export const Default = Template.bind({})
Default.args = {
}
export const showLabel = Template.bind({})
showLabel.args = {
  showLabel: true
}

export const showPercentage = Template.bind({})
showPercentage.args = {
  showPercentage: true
}

export const notColored = Template.bind({})
notColored.args = {
  colored: false
}

export const darkDefault = TemplateDark.bind({})
darkDefault.args = {
  dark: true
}
export const darkShowLabel = TemplateDark.bind({})
darkShowLabel.args = {
  showLabel: true,
  dark: true
}

export const darkShowPercentage = TemplateDark.bind({})
darkShowPercentage.args = {
  showPercentage: true,
  dark: true
}

export const darkNotColored = TemplateDark.bind({})
darkNotColored.args = {
  colored: false,
  dark: true
}

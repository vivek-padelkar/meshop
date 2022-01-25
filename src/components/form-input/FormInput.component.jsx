import { Group, InputForm } from './FormInput.style.js'

const FormInput = ({ handleChange, label, ...otherProps }) => {
  return (
    <Group>
      <InputForm
        onChange={handleChange}
        label={label}
        {...otherProps}
        fullWidth
        size="small"
      />
    </Group>
  )
}

export default FormInput

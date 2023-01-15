import { DatePickerProps } from './types'
import styled from 'styled-components'
const StyledDatePicker = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  label {
    font-weight: bold;
  }
  input {
    margin: 0;
    padding: 0.4rem;
  }
`

const DatePicker = ({
  maxDate,
  minDate = '',
  handleInput,
  value,
  name,
  label = '',
}: DatePickerProps) => {
  return (
    <StyledDatePicker>
      <label data-testid="test-date-label">{label}</label>
      <input
        type="date"
        max={maxDate}
        min={minDate}
        value={value}
        onChange={handleInput}
        name={name}
      />
    </StyledDatePicker>
  )
}

export default DatePicker

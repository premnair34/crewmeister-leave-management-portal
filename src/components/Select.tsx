import styled from 'styled-components'
const SelectWrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  > label {
    font-weight: bold;
  }
  select {
    margin: 0;
    padding: 0.4rem;
  }
`

const Select = ({
  handleChange,
  name,
  leaveType,
  options = [],
  label,
}: any) => {
  return (
    <SelectWrapper>
      <label>{label}</label>
      <select onChange={handleChange} name={name} value={leaveType}>
        {options?.map(({ label, value }: any, index: number) => (
          <option key={index} value={value}>
            {label}
          </option>
        ))}
      </select>
    </SelectWrapper>
  )
}

export default Select

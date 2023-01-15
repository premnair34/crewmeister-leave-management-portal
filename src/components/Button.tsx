import styled from 'styled-components'
const Button = styled.button`
  border-radius: 4px;
  padding: 0.5rem 1rem;
  border: none;
  background-color: var(--color-primary-dark);
  color: var(--color-white);
  cursor: pointer;
`
const CustomButton = ({ children, ...rest }: any) => {
  return <Button {...rest}>{children}</Button>
}

export default CustomButton

import React from 'react'
import DatePicker from '../components/DatePicker'
import { render } from '@testing-library/react'


describe('DatePicker', () => {
    it('should render correctly', () => {
      const { getByTestId } = render(<DatePicker label="test date" value="01-01-2023" 
      name="test-date-input" handleInput={jest.fn()} />)  
      const labelText = getByTestId('test-date-label')
      
      expect(labelText.textContent).toBe('test date');
      
    })
  })
  
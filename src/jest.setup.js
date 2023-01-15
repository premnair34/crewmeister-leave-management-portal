import "@testing-library/jest-dom/extend-expect";
import "jest-styled-components";
import { configure } from 'enzyme'
import Adapter from '@cfaester/enzyme-adapter-react-18'

// https://www.npmjs.com/package/enzyme-adapter-react-16
// Configure enzyme to use the adapter you want it to use

configure({ adapter: new Adapter() })

jest.mock('next/dynamic', () => () => {
  const DynamicComponent = () => null
  DynamicComponent.displayName = 'LoadableComponent'
  DynamicComponent.preload = jest.fn()
  return DynamicComponent
})

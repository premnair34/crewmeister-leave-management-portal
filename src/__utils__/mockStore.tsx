import React from 'react'
import { Provider } from 'react-redux'
import store from '../redux/Store'
import { configure, mount } from 'enzyme'
import configureMockStore  from 'redux-mock-store'
import Adapter from '@cfaester/enzyme-adapter-react-18'
configure({ adapter: new Adapter() })
export const mountWithMock = (
  Component:any,
  initialStoreState:any,
  initialProps = {}
) => {
  React.useLayoutEffect = React.useEffect
  const initStore = configureMockStore()
  const mockStore = initStore(initialStoreState)
  return mount(
    <Provider store={initialStoreState ? mockStore : store}>
      <Component {...initialProps} />
    </Provider>,
  )
}

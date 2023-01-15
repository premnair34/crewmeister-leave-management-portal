import Table from '../components/Table'
import { mountWithMock } from '../__utils__/mockStore'
const mockData = {
  headers: [
    {
      label: 'Member name',
      fieldName: 'name',
      width: '15%',
    },
    {
      label: 'Type of absence',
      fieldName: 'type',
      width: '15%',
    },
  ],
  filteredAbsentees: [
    {
      name: 'John',
      type: 'vacation',
    },
    {
      name: 'Alex',
      type: 'vacation',
    },
  ],
}

describe('Table', () => {
  it('should render table correctly', () => {
    const wrapper = mountWithMock(Table, {
      absence: mockData,
    })
    expect(wrapper.text()).toContain('John')
    expect(wrapper.text()).toContain('vacation')
    expect(wrapper.text()).toContain('Alex')
    expect(wrapper.text()).toContain('Member name')
    expect(wrapper.text()).toContain('Type of absence')
    expect(wrapper.html()).toBeTruthy()
  })
})

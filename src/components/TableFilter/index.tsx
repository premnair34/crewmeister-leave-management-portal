import moment from 'moment'
import Button from '../Button'
import DatePicker from '../DatePicker'
import Select from '../Select'
import { useSelector, useDispatch } from 'react-redux'
import { State } from 'src/redux/types'
import { absenceSlice } from 'src/redux/slicers'
import { FilterWrapper, Count } from './styles'
import { DATE_FORMAT, paginate } from 'src/utils'
// Table Filter Component
const TableFilter = () => {
  const dispatch = useDispatch()
  const minDate = '01-01-2020'
  const maxDate = moment().format(DATE_FORMAT)
  const {
    filter: { startDate, endDate, leaveType },
    totalAbsentees = 0,
    limit,
    leaveTypes = [],
    filter,
    rawData,
  } = useSelector((state: State) => state.absence)
  const handleFilterChange = ({ target: { name, value } }: any) => {
    dispatch(
      absenceSlice.actions.setFilter({
        ...filter,
        [name]: value,
      })
    )
  }
  const onFilterSubmit = () => {
    const newAbsentees = rawData?.filter((absence: any) => {
      const isSameLeaveType =
        leaveType !== '' ? absence.type.includes(leaveType) : true
      const isStartDateFound =
        startDate !== '' ? moment(absence.startDate).isAfter(startDate) : true
      const isEndStartDateFound =
        endDate !== '' ? moment(absence.endDate).isBefore(endDate) : true
      if (isSameLeaveType && isStartDateFound && isEndStartDateFound)
        return absence
    })
    const newPage = 1
    dispatch(absenceSlice.actions.setPage(newPage))
    const filteredAbsentees = paginate(newAbsentees, limit, newPage)
    dispatch(absenceSlice.actions.setTotal(newAbsentees?.length))
    dispatch(absenceSlice.actions.setAbsentees(newAbsentees))
    dispatch(absenceSlice.actions.setFilteredAbsentees(filteredAbsentees))
  }
  return (
    <FilterWrapper>
      <Count>
        Total absentees found - <label>{totalAbsentees}</label>
      </Count>
      <Select
        options={leaveTypes}
        label={'Leave Type'}
        name="leaveType"
        value={leaveType}
        handleChange={handleFilterChange}
      />
      <DatePicker
        name="startDate"
        maxDate={endDate || maxDate}
        value={startDate}
        handleInput={handleFilterChange}
        label={'Start Date'}
        minDate={minDate}
      />
      <DatePicker
        name="endDate"
        minDate={startDate}
        value={endDate}
        maxDate={maxDate}
        handleInput={handleFilterChange}
        label={'End Date'}
      />
      <Button onClick={onFilterSubmit}>Search</Button>
    </FilterWrapper>
  )
}

export default TableFilter

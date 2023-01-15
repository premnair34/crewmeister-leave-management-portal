export type AbsenceState = {
  rawData: []
  absentees: []
  totalAbsentees: number
  loading: boolean
  filter: TableFilter
  headers: Header[]
  filteredAbsentees: any[]
  leaveTypes: leaveType[]
  page: number
  limit: number
}

type TableFilter = {
  startDate: string
  endDate: string
  leaveType: string
}

type Header = {
  label: string
  fieldName: string
  width: string
}

type leaveType = {
  label: string
  value: string
}

export const STATUS = {
  CONFIRMED: 'Confirmed',
  REQUESTED: 'Requested',
  REJECTED: 'Rejected',
}

export const LEAVE_TYPES = [
  {
    label: 'All',
    value: '',
  },
  {
    label: 'Sickness',
    value: 'sickness',
  },
  {
    label: 'Vacation',
    value: 'vacation',
  },
]

export const HEADERS = [
  {
    label: 'Member name',
    fieldName: 'name',
    width: '10%',
  },
  {
    label: 'Type of absence',
    fieldName: 'type',
    width: '10%',
  },
  {
    label: 'Period',
    fieldName: 'period',
    width: '15%',
  },
  {
    label: 'Member note',
    fieldName: 'memberNote',
    width: '25%',
  },
  {
    label: 'Status',
    fieldName: 'status',
    width: '15%',
  },
  {
    label: 'Admitter note',
    fieldName: 'admitterNote',
    width: '25%',
  },
]

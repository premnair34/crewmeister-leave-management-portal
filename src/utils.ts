import { STATUS } from 'src/constants'
import moment from 'moment'
export const paginate = (
  array: any[],
  page_size: number,
  page_number: number
) => {
  // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
  return array.slice((page_number - 1) * page_size, page_number * page_size)
}

const formUsersObj = (members = []) =>
  members?.reduce((users: any, member: any) => {
    users[member.userId] = member
    return users
  }, {})

export const mapAbsenteesByuserId = (absentees = [], members = []) => {
  const users = formUsersObj(members)
  return absentees?.map((absentee: any) => ({
    ...absentee,
    period:
      absentee?.startDate && absentee?.startDate
        ? `${moment(absentee?.startDate).format('DD-MM-YYYY')} to ${moment(
            absentee?.endDate
          ).format('DD-MM-YYYY')}`
        : '',
    status: absentee?.confirmedAt
      ? STATUS.CONFIRMED
      : absentee?.rejectedAt
      ? STATUS.REJECTED
      : STATUS.REQUESTED,
    ...users[absentee.userId],
  }))
}

export const DATE_FORMAT = 'yyyy-MM-DD'

import React, { Fragment, useEffect } from 'react'
import type { GetServerSideProps } from 'next'
import { getApiUrl, mapAbsenteesByuserId, paginate } from 'src/utils'
import { Table, Pagination, Loading, TableFilter } from 'src/components'
import { absenceSlice } from 'src/redux/slicers'
import { State } from 'src/redux/types'
import styled from 'styled-components'
import { useSelector, useDispatch } from 'react-redux'
const Wrapper = styled.div`
  width: 100%;
`

export default function Absentees({ data, error }: any) {
  const { loading, limit, page } = useSelector((state: State) => state.absence)
  const loadAbsentees = () => {
    dispatch(absenceSlice.actions.setTotal(data?.length))
    dispatch(absenceSlice.actions.setRawData(data))
    dispatch(absenceSlice.actions.setAbsentees(data))
    const filteredAbsentees = paginate(data, limit, page)
    dispatch(absenceSlice.actions.setFilteredAbsentees(filteredAbsentees))
    dispatch(absenceSlice.actions.setPageLoading(false))
  }
  const dispatch = useDispatch()
  useEffect(() => {
    loadAbsentees()
  }, [data])
  if (loading) return <Loading>Loading absentees...</Loading>
  if(error) return 'Something went wrong'
  return (
    <Fragment>
      <Wrapper>
        <TableFilter />
        <Table />
        <Pagination />
      </Wrapper>
    </Fragment>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  try{
    const BASE_URL = getApiUrl()
    const absencesResponses = await fetch(`${BASE_URL}/api/absences`)
    const { payload: absentees } = await absencesResponses.json()
    const membersResponse = await fetch(`${BASE_URL}/api/members`)
    const { payload: members } = await membersResponse.json()
    const data = mapAbsenteesByuserId(absentees, members)
    return {
      props: {
        error: false,
        data,
      },
    }
  }catch{
    return {
      props:{
        error: true,
        data:[]
      }
    }
  }
}

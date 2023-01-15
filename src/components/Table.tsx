import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'
import { State } from 'src/redux/types'
const StyledTable = styled.table`
  caption-side: top;
  width: 100%;
  border: 1px solid var(--color-primary-light);
  border-collapse: collapse;
  border-spacing: 5px 10px;
  tbody {
    vertical-align: top;
  }
  td,
  th {
    text-align: left;
    border: none;
    padding: 5px 10px;
  }

  tbody tr {
    :nth-of-type(odd) {
      background-color: var(--color-primary-light);
    }
    :hover {
      background-color: var(--color-primary);
    }
  }
  thead > tr {
    background-color: var(--color-primary-dark);
    th {
      color: var(--color-white);
    }
  }
  caption {
    font-size: 0.9em;
    padding: 5px;
    font-weight: bold;
  }
`

const TableCell = styled.td`
  width: ${(props) => (props.width ? `${props.width}em` : 'auto')};
`

const Table = () => {
  // headers and data for table
  const { headers = [], filteredAbsentees = [] } = useSelector(
    (state: State) => state.absence
  )
  return (
    <StyledTable>
      <thead>
        <tr>
          {headers?.map(
            ({ label = '', width = 'auto' }: any, index: number) => (
              <th key={index} style={{ width }}>
                {label}
              </th>
            )
          )}
        </tr>
      </thead>
      <tbody>
        {filteredAbsentees.map((item: any, index: number) => (
          <tr key={index}>
            {headers?.map(({ fieldName }, index: number) => (
              <TableCell key={index}>{item[fieldName]}</TableCell>
            ))}
          </tr>
        ))}
        {!filteredAbsentees.length && (<tr><TableCell colSpan={6}>No Absentees found</TableCell></tr>)}
      </tbody>
    </StyledTable>
  )
}

export default Table

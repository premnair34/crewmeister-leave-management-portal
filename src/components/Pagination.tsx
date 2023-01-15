import styled from 'styled-components'
import { State } from 'src/redux/types'
import { paginate } from 'src/utils'
import { useSelector, useDispatch } from 'react-redux'
import { absenceSlice } from 'src/redux/slicers'
const PaginationContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: end;
  margin-top: 8px;
  > * {
    margin-right: 0.8rem;
  }
`

const PaginationButton = styled.button`
  display: flex;
  align-items: center;
  outline: none;
  border: none;
  border-radius: 50px;
  img {
    filter: invert(100%) sepia(0%) saturate(7500%) hue-rotate(175deg)
      brightness(121%) contrast(114%);
  }
  ${(props) => (props.disabled ? disabled : enabled)};
`

const enabled = `
cursor: pointer;
background-color: var(--color-primary);
transition: background-color 0.2s;

&:hover {
  background-color: var(--color-primary-dark);
}

&:active {
  background-color: var(--color-primary-light);
}
`

const disabled = `
  background-color: var(--color-primary-disabled);
`

const PaginationLabel = styled.label`
  font-size: 1rem;
`

const Pagination = () => {
  const { limit, page, totalAbsentees, absentees } = useSelector(
    (state: State) => state.absence
  )
  const dispatch = useDispatch()
  const setPage = (newPage: number) => {
    dispatch(absenceSlice.actions.setPage(newPage))
    const filteredAbsentees = paginate(absentees, limit, newPage)
    dispatch(absenceSlice.actions.setFilteredAbsentees(filteredAbsentees))
  }
  const goToFirstPage = () => setPage(1)

  const goToLastPage = () => setPage(getLastPage())

  const incrementPage = () => page < getLastPage() && setPage(page + 1)

  const decrementPage = () => page > 1 && setPage(page - 1)

  const atFirstPage = () => page === 1

  const atLastPage = () => page === getLastPage()

  const getLastPage = () => Math.ceil(totalAbsentees / limit)
  if (!totalAbsentees) return null
  return (
    <PaginationContainer>
      <PaginationButton
        onClick={() => goToFirstPage()}
        disabled={atFirstPage()}
      >
        <img src={'/images/chevrons-left.svg'} alt="go to first page icon" />
      </PaginationButton>
      <PaginationButton
        onClick={() => decrementPage()}
        disabled={atFirstPage()}
      >
        <img src={'/images/chevron-left.svg'} alt="go to previous page icon" />
      </PaginationButton>
      <PaginationLabel>{page}</PaginationLabel>
      <PaginationButton onClick={incrementPage} disabled={atLastPage()}>
        <img src={'/images/chevron-right.svg'} alt="go to next page icon" />
      </PaginationButton>
      <PaginationButton onClick={goToLastPage} disabled={atLastPage()}>
        <img src={'/images/chevrons-right.svg'} alt="go to last page icon" />
      </PaginationButton>
    </PaginationContainer>
  )
}

export default Pagination

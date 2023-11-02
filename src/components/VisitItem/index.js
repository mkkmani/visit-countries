import {Container, Text, BtnItem} from './styledComponents'

const VisitItem = props => {
  const {onClickVisit, visitItemDetails} = props

  const {id, name, isVisited} = visitItemDetails

  const clickVisit = () => {
    onClickVisit(id)
  }

  return (
    <Container>
      <Text>{name}</Text>
      {isVisited ? (
        <Text>Visited</Text>
      ) : (
        <BtnItem type="button" onClick={clickVisit}>
          Visit
        </BtnItem>
      )}
    </Container>
  )
}

export default VisitItem

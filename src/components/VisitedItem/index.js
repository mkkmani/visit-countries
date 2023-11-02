import {
  Container,
  Image,
  TextBtnContainer,
  Text,
  BtnItem,
} from './styledComponents'

const VisitedItem = props => {
  const {visitedItemDetails, onClickRemove} = props
  const {id, name, imageUrl} = visitedItemDetails

  const clickRemove = () => {
    onClickRemove(id)
  }

  return (
    <Container>
      <Image src={imageUrl} alt="thumbnail" />
      <TextBtnContainer>
        <Text>{name}</Text>
        <BtnItem type="button" onClick={clickRemove}>
          Remove
        </BtnItem>
      </TextBtnContainer>
    </Container>
  )
}

export default VisitedItem

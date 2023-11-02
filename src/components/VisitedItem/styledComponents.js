import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 280px;
  margin: 10px;
`
export const Image = styled.img`
  width: 350px;
  height: 240px;
`
export const TextBtnContainer = styled.div`
  display: flex;
  height: 60px;
  flex-direction: row;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 10px;
  align-items: center;
  background-color: #1f1f2f;
`
export const Text = styled.p`
  color: #cbd5e1;
  font-size: 14px;
`
export const BtnItem = styled.button`
  border: 1px solid #cbd5e1;
  border-radius: 3px;
  padding: 4px 8px 4px 8px;
  background: transparent;
  color: #cbd5e1;
`

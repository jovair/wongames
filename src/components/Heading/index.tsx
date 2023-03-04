import React from 'react'
import * as S from './styles'

export type headingProps = {
  children: React.ReactNode
  color?: 'black' | 'white'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: headingProps) => (
  <S.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </S.Wrapper>
)

export default Heading

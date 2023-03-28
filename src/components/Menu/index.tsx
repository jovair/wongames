import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCartOutline as ShoppingCartIcon } from '@styled-icons/evaicons-outline/ShoppingCartOutline'
import { SearchOutline as SearchIcon } from '@styled-icons/evaicons-outline/SearchOutline'

import Logo from 'components/Logo'
import * as S from './styles'

const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open Menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile aria-label="Won Games" />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open Shopping Cart" />
      </S.IconWrapper>
      <S.IconWrapper>
        <SearchIcon aria-label="Search" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)

export default Menu

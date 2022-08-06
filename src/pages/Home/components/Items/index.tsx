import { ShoppingCart, IconProps } from 'phosphor-react'
import React, { ReactNode } from 'react'
import { IconContainer, ItemsContainer } from './styles'

interface ItemsProps {
  title: string | ReactNode
  icon: React.ElementType<IconProps>
  bgColor: 'yellow_dark' | 'yellow_light' | 'gray' | 'purple_light'
}

export function Items({ title, icon: Icon, bgColor }: ItemsProps) {
  return (
    <ItemsContainer>
      <div>
        <IconContainer typesColors={bgColor}>
          <Icon size={16} color="#E1E1E6" weight="fill" />
        </IconContainer>
        <span>{title}</span>
      </div>
    </ItemsContainer>
  )
}

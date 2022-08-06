import { ReactNode } from 'react'
import { SectionTitleContainer } from './styles'

interface SectionTitleProps {
  title: string
  subTitle: string
  icon: ReactNode
}

export function SectionTitle({ title, subTitle, icon }: SectionTitleProps) {
  return (
    <SectionTitleContainer>
      {icon}
      <div>
        <p>{title}</p>
        <span>{subTitle}</span>
      </div>
    </SectionTitleContainer>
  )
}

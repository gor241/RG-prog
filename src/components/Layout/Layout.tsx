import React, { ReactNode } from 'react'
import { Header } from './Header/Header'

interface LayoutProps {
  children: ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header backLink='/' />
      {children}
    </div>
  )
}

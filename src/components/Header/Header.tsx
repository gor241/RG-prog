import React from 'react'
import { CiUser } from 'react-icons/ci'
import { VscListFlat } from 'react-icons/vsc'
import style from './Header.module.scss'

export const Header = () => {
  return (
    <header className={style.header}>
      <div className={style.item}>
        <CiUser className={style.img} />
      </div>
      <div className={style.item}>
        <VscListFlat className={style.img} />
      </div>
    </header>
  )
}

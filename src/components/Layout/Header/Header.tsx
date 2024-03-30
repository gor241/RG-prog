import React, { useState } from 'react'
import { CiUser } from 'react-icons/ci'
import { VscListFlat } from 'react-icons/vsc'
import { RxCross1 } from 'react-icons/rx'
import style from './Header.module.scss'
import { useSpring, animated, useTransition } from 'react-spring'
import { IoIosArrowRoundBack } from 'react-icons/io'
import { useAuth } from '../../Hooks/useAuth'

const arrMenu = [
  { title: 'Workouts', link: '/workouts' },
  { title: 'Create new', link: '/new-workout' },
  { title: 'Profile', link: '/profile' }
]

export const Header: React.FC<{ backLink: string }> = ({ backLink }) => {
  const [openMenu, setOpenMenu] = useState(false)
  const [openProfile, setProfile] = useState(false)

  const { isAuth } = useAuth()

  const buttonAnimationProps = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 500 }
  })

  const transitionsFirst = useTransition(!openProfile, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 }
  })

  const transitionsSecond = useTransition(!openMenu, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 500 }
  })

  const menuAnimationProps = useSpring({
    opacity: openMenu ? 1 : 0,
    config: { duration: 500 }
  })

  const handlerClick = () => {
    if (openProfile) {
      console.log(backLink)
    } else {
      console.log(isAuth)
    }
    setProfile(!openProfile)
  }

  const handleLogout = () => {
    console.log('logout')
  }

  return (
    <header className={style.header}>
      <button onClick={handlerClick} className={style.item}>
        <animated.div style={buttonAnimationProps}>
          {transitionsFirst((styles, item) =>
            item ? (
              <animated.div
                style={{
                  ...styles,
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px'
                }}
              >
                <CiUser className={style.img} />
              </animated.div>
            ) : (
              <animated.div
                style={{
                  ...styles,
                  position: 'absolute',
                  top: '-20px',
                  left: '-20px'
                }}
              >
                <IoIosArrowRoundBack className={style.img} />
              </animated.div>
            )
          )}
        </animated.div>
      </button>
      <button onClick={() => setOpenMenu(!openMenu)} className={style.item}>
        {transitionsSecond((styles, item) =>
          item ? (
            <animated.div
              style={{
                ...styles,
                position: 'absolute',
                top: '-20px',
                left: '-20px'
              }}
            >
              <VscListFlat className={style.img} />
            </animated.div>
          ) : (
            <animated.div
              style={{
                ...styles,
                position: 'absolute',
                top: '-20px',
                left: '-20px'
              }}
            >
              <RxCross1 className={style.img} />
            </animated.div>
          )
        )}
      </button>
      {openMenu && (
        <animated.nav className={style.menu} style={menuAnimationProps}>
          <ul>
            {arrMenu.map((el, i) => (
              <li className={style.paragraph} key={i}>
                {el.title}
              </li>
            ))}
            <li className={style.paragraph}>
              <button className={style.logout} onClick={handleLogout}>
                Logout
              </button>
            </li>
          </ul>
        </animated.nav>
      )}
    </header>
  )
}

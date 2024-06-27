import style from './AsideFeed.module.css'
import { GoHomeFill } from 'react-icons/go'
import { BsInfoLg } from 'react-icons/bs'
import { FaRankingStar } from 'react-icons/fa6'
import { TiStarFullOutline } from 'react-icons/ti'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Collapse } from 'react-bootstrap'
import { useState } from 'react'

const AsideFeed = () => {
  const [open, setOpen] = useState(false)

  return (
    <div className={style.container}>
      <div className={style.info}>
        <span className={style.span}>
          <GoHomeFill /> Inicio
        </span>
        <span className={style.span}>
          <BsInfoLg /> Sobre Criomore
        </span>
        <span className={style.span}>
          <FaRankingStar /> Ranking
        </span>
        <span className={style.span}>
          <TiStarFullOutline /> Meta
        </span>
      </div>

      <div>
        <div className={style.subtitle}>TEMAS</div>
        <div className={style.contain_thems}>
          <div onClick={() => setOpen(!open)} className={style.btn}>
            {open ? (
              <div className={style.subtitle_themes}>
                VIDEOJUEGOS <IoIosArrowUp className={style.icon} />
              </div>
            ) : (
              <div className={style.subtitle_themes}>
                VIDEOJUEGOS <IoIosArrowDown className={style.icon} />
              </div>
            )}
          </div>
          <Collapse in={open}>
            <div>
              <div className={style.thems_item}>
                Minecraftjjadshkajsdjkasjkaksaknckjsbdhaksajwlialjslanlsjalcjajscnaslsnalj
              </div>
              <div className={style.thems_item}>Minecraft</div>
              <div className={style.thems_item}>Minecraft</div>
              <div className={style.thems_item}>Minecraft</div>
              <div className={style.thems_item}>Minecraft</div>
            </div>
          </Collapse>
          <div onClick={() => setOpen(!open)} className={style.btn}>
            {open ? (
              <div className={style.subtitle_themes}>
                VIDEOJUEGOS <IoIosArrowUp className={style.icon} />
              </div>
            ) : (
              <div className={style.subtitle_themes}>
                VIDEOJUEGOS <IoIosArrowDown className={style.icon} />
              </div>
            )}
          </div>
          <Collapse in={open}>
            <div>
              <div className={style.thems_item}>
                Minecraftjjadshkajsdjkasjkaksaknckjsbdhaksajwlialjslanlsjalcjajscnaslsnalj
              </div>
              <div className={style.thems_item}>Minecraft</div>
              <div className={style.thems_item}>Minecraft</div>
              <div className={style.thems_item}>Minecraft</div>
              <div className={style.thems_item}>Minecraft</div>
            </div>
          </Collapse>
        </div>
      </div>
    </div>
  )
}

export default AsideFeed

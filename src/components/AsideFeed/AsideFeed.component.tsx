import style from './AsideFeed.module.css'
import { GoHomeFill } from 'react-icons/go'
import { BsInfoLg } from 'react-icons/bs'
import { FaRankingStar } from 'react-icons/fa6'
import { TiStarFullOutline } from 'react-icons/ti'
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io'
import { Collapse } from 'react-bootstrap'
import { useState } from 'react'

const AsideFeed = () => {
  const [videojuegos, setVideojuegos] = useState(false)
  const [tecnologia, setTecnologia] = useState(false)
  const [economia, setEconomia] = useState(false)
  const [creatividad, setCreatividad] = useState(false)

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

        <div className={style.contain_thems_VG}>
          <div
            onClick={() => setVideojuegos(!videojuegos)}
            className={style.btn}
          >
            {videojuegos ? (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>VIDEOJUEGOS</div>
                <IoIosArrowUp className={style.icon} />
              </div>
            ) : (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>VIDEOJUEGOS</div>
                <IoIosArrowDown className={style.icon} />
              </div>
            )}
          </div>
          <Collapse in={videojuegos}>
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

        <div className={style.contain_thems_TEC}>
          <div onClick={() => setTecnologia(!tecnologia)} className={style.btn}>
            {tecnologia ? (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>TECNOLOGIA</div>
                <IoIosArrowUp className={style.icon} />
              </div>
            ) : (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>TECNOLOGIA</div>
                <IoIosArrowDown className={style.icon} />
              </div>
            )}
          </div>
          <Collapse in={tecnologia}>
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

        <div className={style.contain_thems_EC}>
          <div onClick={() => setEconomia(!economia)} className={style.btn}>
            {economia ? (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>ECONOMIA</div>
                <IoIosArrowUp className={style.icon} />
              </div>
            ) : (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>ECONOMIA</div>
                <IoIosArrowDown className={style.icon} />
              </div>
            )}
          </div>
          <Collapse in={economia}>
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

        <div className={style.contain_thems_CR}>
          <div
            onClick={() => setCreatividad(!creatividad)}
            className={style.btn}
          >
            {creatividad ? (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>CREATIVIDAD</div>
                <IoIosArrowUp className={style.icon} />
              </div>
            ) : (
              <div className={style.subtitle_themes}>
                <div className={style.theme}>CREATIVIDAD</div>
                <IoIosArrowDown className={style.icon} />
              </div>
            )}
          </div>
          <Collapse in={creatividad}>
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

      <div>
        <div>laskjdlak</div>
      </div>



    </div>
  )
}

export default AsideFeed

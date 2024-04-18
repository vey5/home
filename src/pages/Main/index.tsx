import styles from './styles.module.scss'
import { FC } from 'react'
import { Title } from './Title'
import { Description } from './Description'
import { WallTitle } from './WallTitle'
import { WallLink } from './WallLink'
import { Card } from './Card'
import { Desc } from './Description/Desc'
import { Avatar } from './Avatar'
import content from '../../assets/Content.png'
import { Title2 } from './Description/Title2'
import { Desc2 } from './Description/Title2/Desc2'
import classNames from 'classnames'
import { Layout } from '../../components/Layout'
import { Button } from '@mui/material'

const MainPage: FC = () => {
  const сards = [
    {
      title: 'Malto House',
      param1: 4,
      param2: 2,
      param3: 2,
      img: 'https://res.cloudinary.com/onmap-prod/image/upload/c_scale,w_350,h_264,c_fill,f_auto,q_auto/nyk76bdhkc1hb6k74zhn',
    },
    {
      title: 'Malto House',
      param1: 4,
      param2: 2,
      param3: 2,
      img: 'https://imagens.supercasa.pt/Z360x270/OAYES/S5/C1320/P23480843/Tphoto/ID0b4a6601-0000-0500-0000-000010dd722d.jpg',
    },
    {
      title: 'Malto House',
      param1: 4,
      param2: 2,
      param3: 2,
      img: 'https://lh3.googleusercontent.com/bJqYjsRVfGfkMdnfyt_KaAFmwUU8VpUCB8DedROAmsg8nJvKCVj9DOuAXj07g72g1UDBXU3lsts9ST-Wmh7IhG4NYjt96eHHBAA8=rj-w388-h266-n-l70',
    },
    {
      title: 'Malto House',
      param1: 4,
      param2: 2,
      param3: 2,
      img: 'https://www.propertyfinder.eg/property/c904bd8800148a4490a095b13bd7f92e/416/272/MODE/97b82a/4996269-351ado.webp?ctr=eg',
    },
    {
      title: 'Malto House',
      param1: 4,
      param2: 2,
      param3: 2,
      img: 'https://img.jamesedition.com/listing_images/2022/06/02/15/44/40/7dbef73d-3e27-4fdb-8d7a-b409b5af5fa5/je/507x312xc.jpg',
    },
    {
      title: 'Malto House',
      param1: 4,
      param2: 2,
      param3: 2,
      img: 'https://www.quicklets.com.mt/web/uploads/property/52621/202006041642115ed908437b680.jpeg',
    },
  ]
  return (
    <Layout>
      <main className={styles.main}>
        {/* <HeaderSection /> */}
        <section className={styles.wallSection}>
          <img className={styles.contentImg} src={content} alt="content" />
          <div className={styles.text}>
            <Title />
            <Description />
            <Button>Learn more</Button>
          </div>
        </section>
        <div className={styles.wallContainer}>
          <section className={styles.wallPlace}>
            <WallTitle />
            <WallLink />
            <div className={styles.container}>
              {сards.map((item) => (
                <Card
                  title={item.title}
                  img={item.img}
                  param1={item.param1}
                  param2={item.param2}
                  param3={item.param3}
                  key={item.title}
                />
              ))}
            </div>
          </section>
        </div>
        <section className={classNames(styles.wallSection, styles.flexSection)}>
          <div className={styles.text}>
            <Title />
            <Description />
            <Button>Learn more</Button>
          </div>
          <img className={styles.contentImg2} src={content} alt="content" />
        </section>
        <div className={styles.postContainer}>
          <section className={styles.postSection}>
            <Title2 />
            <Desc2 />
            <Button>Learn more</Button>
          </section>
        </div>
        <section className={styles.avatarSection}>
          <Desc />
          <Avatar />
        </section>
      </main>
    </Layout>
  )
}

export { MainPage }

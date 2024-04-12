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
            <Card />
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

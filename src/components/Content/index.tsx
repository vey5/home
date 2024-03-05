import styles from './styles.module.scss'
import { FC } from 'react'
import { Layout } from '../Layout'
import { Title } from './Title'
import { Description } from './Description'
import { Button } from '../UI/Button'
import { WallTitle } from './WallTitle'
import { WallLink } from './WallLink'
import { Card } from './Card'
import { Desc } from './Description/Desc'
import { Avatar } from './Avatar'
import content from '../../assets/Content.png'

const Content: FC = () => {
  return (
    <Layout>
      <main className={styles.main}>
        {/* <HeaderSection /> */}
        <section className={styles.wallSection}>
          <img className={styles.contentImg} src={content} alt="content" />
          <div className={styles.text}>
            <Title />
            <Description />
            <Button />
          </div>
        </section>
        <div className={styles.wallContainer}>
          <section className={styles.wallPlace}>
            <WallTitle />
            <WallLink />
            <Card />
          </section>
        </div>
        <section className={styles.wallSection}>
          <div className={styles.text}>
            <Title />
            <Description />
            <Button />
          </div>
          <img className={styles.contentImg2} src={content} alt="content" />
        </section>
        <section className={styles.postSection}>
          <Title />
          <Description />
          <Button />
        </section>
        <section className={styles.avatarSection}>
          <Desc />
          <Avatar />
        </section>
      </main>
    </Layout>
  )
}

export { Content }

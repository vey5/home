import styles from './styles.module.scss'
import { FC } from 'react'
import { Title } from './Title'
import { Description } from './Description'
import { WallLink } from './WallLink'
import { Card } from './Card'
import { Avatar } from './Avatar'
import content from '../../assets/Content.png'
import classNames from 'classnames'
import { Layout } from '../../components/Layout'
import { Button } from '@mui/material'
import { TrendingFlat } from '@mui/icons-material'
import { Banner } from './Banner'
import сards from '../../types/cards'
import avatars from '../../types/avatar'

const MainPage: FC = () => {
  return (
    <Layout>
      <Banner />
      <main className={styles.main}>
        {/* <HeaderSection /> */}
        <section className={styles.wallSection}>
          <img className={styles.contentImg} src={content} alt="content" />
          <div className={styles.text}>
            <Title h2>You’re in good hands</Title>
            <Description>
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem
              se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante
              itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem
              accusantium doloremque.
            </Description>
            <Button
              className={styles.background}
              endIcon={<TrendingFlat className={styles.orangeArrow} />}>
              Learn more
            </Button>
          </div>
        </section>
        <div className={styles.wallContainer}>
          <section className={styles.wallPlace}>
            <Title h2>Find your next place to live</Title>
            <WallLink />
            <div className={styles.container}>
              {сards.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </section>
        </div>
        <section className={classNames(styles.wallSection, styles.flexSection)}>
          <div className={styles.text}>
            <Title h2>You’re in good hands</Title>
            <Description>
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem
              se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante
              itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem
              accusantium doloremque.
            </Description>
            <Button
              className={styles.background}
              endIcon={<TrendingFlat className={styles.orangeArrow} />}>
              Learn more
            </Button>
          </div>
          <img className={styles.contentImg2} src={content} alt="content" />
        </section>
        <div className={styles.postContainer}>
          <section className={styles.postSection}>
            {<Title h2>You’re in good hands</Title>}
            <Description>
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem
              se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante
              itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem
              accusantium doloremque.
            </Description>
            <Button
              className={classNames(styles.background, styles.foot)}
              endIcon={<TrendingFlat className={styles.whiteArrow} />}>
              Learn more
            </Button>
          </section>
        </div>
        <section className={styles.avatarSection}>
          <Description>
            “Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de
            quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”
          </Description>
          <div className={styles.avatar}>
            {avatars.map((item) => (
              <Avatar param1={item.param1} param2={item.param2} key={item.id} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export { MainPage }

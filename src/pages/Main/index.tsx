import styles from './styles.module.scss'
import { FC } from 'react'
import { Title } from '../../components/Title'
import { Text } from '../../components/Text'
import { WallLink } from './WallLink'
import { Card } from '../../components/Card'
import { Avatar } from '../../components/Avatar'
import content from '../../assets/Content.png'
import classNames from 'classnames'
import { Layout } from '../../components/Layout'
import { Button } from '../../components/Button'
import { TrendingFlat } from '@mui/icons-material'
import { Banner } from './Banner'
import { AVATARS } from '../../constants/constants'
import { CARDS } from '../../constants/constants'

const MainPage: FC = () => {
  return (
    <Layout>
      <Banner />
      <main className={styles.main}>
        <section className={styles.wallSection}>
          <img className={styles.contentImg} src={content} alt="content" />
          <div className={styles.wrapper}>
            <Title h2 color="black" className={styles.title}>
              You’re in good hands
            </Title>
            <Text color="gray" className={styles.text}>
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem
              se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante
              itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem
              accusantium doloremque.
            </Text>
            <Button
              size="large"
              variant="dark"
              endIcon={<TrendingFlat className={styles.orangeArrow} />}>
              Learn more
            </Button>
          </div>
        </section>
        <div className={styles.wallContainer}>
          <section className={styles.wallPlace}>
            <Title h2 color="black" className={styles.title}>
              Find your next place to live
            </Title>
            <WallLink />
            <div className={styles.container}>
              {CARDS.map((item) => (
                <Card key={item.id} {...item} />
              ))}
            </div>
          </section>
        </div>
        <section className={classNames(styles.wallSection, styles.flexSection)}>
          <div className={styles.wrapper}>
            <Title h2 color="black" className={styles.title}>
              You’re in good hands
            </Title>
            <Text color="gray" className={styles.text}>
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem
              se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante
              itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem
              accusantium doloremque.
            </Text>
            <Button endIcon={<TrendingFlat className={styles.orangeArrow} />}>Learn more</Button>
          </div>
          <img className={styles.contentImg2} src={content} alt="content" />
        </section>
        <div className={styles.postContainer}>
          <section className={styles.postSection}>
            {
              <Title h2 color="white" className={styles.title}>
                You’re in good hands
              </Title>
            }
            <Text color="gray" className={styles.text}>
              Torquatos nostros? quos dolores eos, qui dolorem ipsum per se texit, ne ferae quidem
              se repellere, idque instituit docere sic: omne animal, simul atque integre iudicante
              itaque aiunt hanc quasi involuta aperiri, altera occulta quaedam et voluptatem
              accusantium doloremque.
            </Text>
            <Button
              variant="light"
              size="large"
              endIcon={<TrendingFlat className={styles.whiteArrow} />}>
              Learn more
            </Button>
          </section>
        </div>
        <section className={styles.avatarSection}>
          <div className={styles.avatarText}>
            <Text color="black" className={styles.text}>
              “Certe, inquam, pertinax non existimant oportere exquisitis rationibus conquisitis de
              quo enim ipsam. Torquem detraxit hosti et quidem faciunt, ut aut.”
            </Text>
          </div>
          <div className={styles.avatar}>
            {AVATARS.map((item) => (
              <Avatar param1={item.param1} param2={item.param2} key={item.id} />
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

export { MainPage }

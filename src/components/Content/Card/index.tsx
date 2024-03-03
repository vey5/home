import styles from './styles.module.scss'
import { FC } from 'react'
import { Card as MaterialCard } from '@mui/material'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import house1 from '../../../assets/House Example 1.png'
import house2 from '../../../assets/House Example 2.png'
import house3 from '../../../assets/House Example 3.png'
import house4 from '../../../assets/House Example 4.png'
import house5 from '../../../assets/House Example 5.png'
import CountertopsIcon from '@mui/icons-material/Countertops'
import BedIcon from '@mui/icons-material/Bed'
import FlareIcon from '@mui/icons-material/Flare'

const Card: FC = () => {
  return (
    <div className={styles.wallCard}>
      <MaterialCard className={styles.card} sx={{ maxWidth: 336 }}>
        <CardActionArea>
          <CardMedia component="img" height="266" image={house1} alt="house1" />
          <CardContent>
            <Typography className={styles.title} gutterBottom variant="h5" component="div">
              Multo House
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className={styles.icons}>
                <div className={styles.Icon}>
                  <BedIcon />
                  <p className={styles.num}>4</p>
                </div>
                <div className={styles.Icon}>
                  <CountertopsIcon />
                  <p className={styles.num}>2</p>
                </div>
                <div className={styles.Icon}>
                  <FlareIcon />
                  <p className={styles.num}>2</p>
                </div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </MaterialCard>
      <MaterialCard className={styles.card} sx={{ maxWidth: 336 }}>
        <CardActionArea>
          <CardMedia component="img" height="266" image={house2} alt="green iguana" />
          <CardContent>
            <Typography className={styles.title} gutterBottom variant="h5" component="div">
              Multo House
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className={styles.icons}>
                <div className={styles.Icon}>
                  <BedIcon />
                  <p className={styles.num}>4</p>
                </div>
                <div className={styles.Icon}>
                  <CountertopsIcon />
                  <p className={styles.num}>2</p>
                </div>
                <div className={styles.Icon}>
                  <FlareIcon />
                  <p className={styles.num}>2</p>
                </div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </MaterialCard>
      <MaterialCard className={styles.card} sx={{ maxWidth: 336 }}>
        <CardActionArea>
          <CardMedia component="img" height="266" image={house3} alt="green iguana" />
          <CardContent>
            <Typography className={styles.title} gutterBottom variant="h5" component="div">
              Multo House
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className={styles.icons}>
                <div className={styles.Icon}>
                  <BedIcon />
                  <p className={styles.num}>4</p>
                </div>
                <div className={styles.Icon}>
                  <CountertopsIcon />
                  <p className={styles.num}>2</p>
                </div>
                <div className={styles.Icon}>
                  <FlareIcon />
                  <p className={styles.num}>2</p>
                </div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </MaterialCard>
      <MaterialCard className={styles.card} sx={{ maxWidth: 336 }}>
        <CardActionArea>
          <CardMedia component="img" height="266" image={house4} alt="green iguana" />
          <CardContent>
            <Typography className={styles.title} gutterBottom variant="h5" component="div">
              Multo House
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className={styles.icons}>
                <div className={styles.Icon}>
                  <BedIcon />
                  <p className={styles.num}>4</p>
                </div>
                <div className={styles.Icon}>
                  <CountertopsIcon />
                  <p className={styles.num}>2</p>
                </div>
                <div className={styles.Icon}>
                  <FlareIcon />
                  <p className={styles.num}>2</p>
                </div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </MaterialCard>
      <MaterialCard className={styles.card} sx={{ maxWidth: 336 }}>
        <CardActionArea>
          <CardMedia component="img" height="266" image={house1} alt="green iguana" />
          <CardContent>
            <Typography className={styles.title} gutterBottom variant="h5" component="div">
              Multo House
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className={styles.icons}>
                <div className={styles.Icon}>
                  <BedIcon />
                  <p className={styles.num}>4</p>
                </div>
                <div className={styles.Icon}>
                  <CountertopsIcon />
                  <p className={styles.num}>2</p>
                </div>
                <div className={styles.Icon}>
                  <FlareIcon />
                  <p className={styles.num}>2</p>
                </div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </MaterialCard>
      <MaterialCard className={styles.card} sx={{ maxWidth: 336 }}>
        <CardActionArea>
          <CardMedia component="img" height="266" image={house5} alt="green iguana" />
          <CardContent>
            <Typography className={styles.title} gutterBottom variant="h5" component="div">
              Multo House
            </Typography>
            <Typography variant="body2" color="text.secondary">
              <div className={styles.icons}>
                <div className={styles.Icon}>
                  <BedIcon />
                  <p className={styles.num}>4</p>
                </div>
                <div className={styles.Icon}>
                  <CountertopsIcon />
                  <p className={styles.num}>2</p>
                </div>
                <div className={styles.Icon}>
                  <FlareIcon />
                  <p className={styles.num}>2</p>
                </div>
              </div>
            </Typography>
          </CardContent>
        </CardActionArea>
      </MaterialCard>
    </div>
  )
}

export { Card }

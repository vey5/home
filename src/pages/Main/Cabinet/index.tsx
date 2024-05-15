import styles from './styles.module.scss'
import React, { FC, useState } from 'react'
import { Layout } from '../../../components/Layout'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import { Link, useLocation } from 'react-router-dom'
import { Form } from 'react-hook-form'
import { USER } from '../../../constants/constants'

const Cabinet: FC = () => {
  const location = useLocation()
  const [value, setValue] = useState(location.pathname)
  console.log(location)

  // const fromPage = (location.state as LocationState).?from;

  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
  }

  return (
    <Layout>
      <div className={styles.wrapper}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example">
          <Tab
            className={styles.tab}
            value="/user-info"
            to="user-info"
            component={Link}
            label="user info"
          />

          <Tab className={styles.tab} value="/post" label="post" to="post" component={Link} />

          <Tab className={styles.tab} to="user" component={Link} value="/user" label="user" />
        </Tabs>
      </div>
      {location.pathname === USER && <div>one bullet</div>}
    </Layout>
  )
}

export { Cabinet }

import { Flex, Typography, Avatar, Input } from 'antd'
import { MessageOutlined, NotificationOutlined, UserOutlined } from '@ant-design/icons'
import useStyles from './style.module'

const Header = () => {
  const { Search } = Input
  const { styles } = useStyles()

  return (
    <div className={styles.headerContainer}>
      <Flex align='center' justify='space-between'>
        <Typography.Title level={2} type='secondary' style={{ color: 'white', fontWeight: 'bold' }}>
          Good afternoon
        </Typography.Title>
        <Search placeholder='Search...' allowClear style={{ width: 500 }} />
        <Flex align='center' gap={'3rem'}>
          <Flex align='center' gap={10}>
            <MessageOutlined />
            <NotificationOutlined />
            <Avatar icon={<UserOutlined />}></Avatar>
          </Flex>
        </Flex>
      </Flex>
    </div>
  )
}

export default Header

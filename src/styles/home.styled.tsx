import { createStyles } from 'antd-style'

const useStyles = createStyles(() => {
  return {
    layoutContainer: {
      height: '100vh',
      padding: '20px 300px',
      backgroundColor: '#232e58',
      color: 'white'
    },
    taskContainer: {
      marginTop: '20px'
    },
    iconAddContainer: {
      position: 'fixed',
      bottom: 50,
      right: 300,
      width: 70,
      height: 70,
      borderRadius: '100%',
      backgroundColor: '#b624ff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      zIndex: 1000
    },
    iconAdd: {
      fontSize: '50px',
      color: 'white'
    }
  }
})

export default useStyles

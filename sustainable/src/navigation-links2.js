import React from 'react'

import PropTypes from 'prop-types'

import styles from './navigation-links2.module.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={` ${styles['nav']} ${styles[props.rootClassName]} `}>
      <span className={styles['text']}>{props.text}</span>
      <span className={styles['text1']}>{props.text1}</span>
      <span className={styles['text2']}>{props.text2}</span>
      <span className={styles['text3']}>{props.text3}</span>
      <span className={styles['text4']}>{props.text4}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  text1: 'Features',
  text: 'About',
  text2: 'Success',
  text4: 'Apply',
  rootClassName: '',
  text3: 'Team',
}

NavigationLinks2.propTypes = {
  text1: PropTypes.string,
  text: PropTypes.string,
  text2: PropTypes.string,
  text4: PropTypes.string,
  rootClassName: PropTypes.string,
  text3: PropTypes.string,
}

export default NavigationLinks2

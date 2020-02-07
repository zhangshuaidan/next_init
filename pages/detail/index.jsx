import React, { Component } from 'react'
import 'isomorphic-unfetch'
// import  './index.css';
import style from './index.less'

export default class index extends Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('https://api.github.com/repos/developit/preact')
    const json = await res.json()
    console.log('json',json)
    return { stars: json.stargazers_count }
  }
  render() {
    return (
      <>
      <div className={style.detail}>
      <p>Preact has {this.props.stars} ⭐️</p>
        sasss
        </div>
      <div>
        
      </div>
      </>
    )
  }
}

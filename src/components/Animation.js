import React, { Component } from 'react'

class Animation extends Component {
  componentDidMount() {
    window.addEventListener('scroll', () => {
      const scrollTop = document.documentElement.scrollTop
      // const works__offsetTop = document.getElementById('works__title').offsetTop

      const animation_box = 'introtext'
      const animation_box_color = 'introtext__color'
      const animation_easeIn = 'up-easeIn'
      // const works__title = document.getElementById('works__title')
      // const works__list = document.getElementById('works__list')
      const project__title = document.getElementById('project__title')
      const project__list = document.getElementById('project__list')
      const about__title = document.getElementById('about__title')
      const about__textBlock = document.getElementById('about__textBlock')
      const skill__title = document.getElementById('skill__title')
      const skills__col2 = document.getElementById('skills__col2')
      const contact__title = document.getElementById('contact__title')
      const sns__title = document.getElementById('sns__title')
      const contact__text = document.getElementById('contact__text')
      const sns__text = document.getElementById('sns__text')
      const contact__btnBlock = document.getElementById('contact__btnBlock')
      const sns__list = document.getElementById('sns__list')

      // if (scrollTop > works__offsetTop - 100) {
      //   works__title.classList.add(animation_box_color)
      //   works__list.classList.add(animation_easeIn)
      // }
      if (scrollTop > 700) {
        project__title.classList.add(animation_box_color)
        project__list.classList.add(animation_easeIn)
      }
      if (scrollTop > 1600) {
        about__title.classList.add(animation_box)
        about__textBlock.classList.add(animation_easeIn)
      }
      if (scrollTop > 2200) {
        skill__title.classList.add(animation_box_color)
        skills__col2.classList.add(animation_easeIn)
      }
      if (scrollTop > 2600) {
        contact__title.classList.add(animation_box_color)
        sns__title.classList.add(animation_box_color)
        contact__text.classList.add(animation_easeIn)
        sns__text.classList.add(animation_easeIn)
        contact__btnBlock.classList.add(animation_easeIn)
        sns__list.classList.add(animation_easeIn)
      }
    })
  }

  render() {
    return <div />
  }
}

export default Animation

import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { Icon } from '@iconify/react'
import expressIcon from '@iconify/icons-logos/express'
import gitIcon from '@iconify/icons-cib/git'
import reactFill from '@iconify/icons-akar-icons/react-fill'
import reduxFill from '@iconify/icons-akar-icons/redux-fill'
import bootstrapFill from '@iconify/icons-akar-icons/bootstrap-fill'
import javascriptFill from '@iconify/icons-akar-icons/javascript-fill'
import cssFill from '@iconify/icons-akar-icons/css-fill'
import githubFill from '@iconify/icons-akar-icons/github-fill'
import nodeFill from '@iconify/icons-akar-icons/node-fill'
import materialUi from '@iconify/icons-mdi/material-ui'
import tailwindCss from '@iconify/icons-bxl/tailwind-css'
import mongodbIcon from '@iconify/icons-bxl/mongodb'
import htmlFive from '@iconify/icons-icomoon-free/html-five'
import HeyCoachLogo from '../../assets/images/HeyCoach.jfif'

import { useRef } from 'react'
import emailjs from '@emailjs/browser'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Skills = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const techTag = [
    { id: 7, Icon: javascriptFill, topic: 'Javascript' },
    { id: 1, Icon: reactFill, topic: 'Reactjs' },
    { id: 2, Icon: expressIcon, topic: 'Express' },
    { id: 3, Icon: reduxFill, topic: 'Redux' },
    { id: 10, Icon: nodeFill, topic: 'Node.js' },
    { id: 13, Icon: mongodbIcon, topic: 'MongoDB' },
    { id: 4, Icon: materialUi, topic: 'MaterialUI' },
    { id: 5, Icon: tailwindCss, topic: 'Tailwindcss' },
    { id: 6, Icon: bootstrapFill, topic: 'Bootstrap' },
    { id: 8, Icon: htmlFive, topic: 'HTML' },
    { id: 9, Icon: cssFill, topic: 'CSS' },
    { id: 11, Icon: gitIcon, topic: 'Git' },
    { id: 12, Icon: githubFill, topic: 'GitHub' },
  ]
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('gmail', 'template_YeJhZkgb', form.current, 'your-token')
      .then(
        () => {
          alert('Message successfully sent!')
          window.location.reload(false)
        },
        () => {
          alert('Failed to send the message, please try again')
        }
      )
  }

  return (
    <>
      <div className="container skills-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['S', 'k', 'i', 'i', 'l', 's']}
              idx={15}
            />
          </h1>
          <p>
            Worked on Front-end and Backend development technologies including
            like
            {techTag &&
              techTag.map((tech, i) => {
                return (
                  <>
                    <span key={i} className="tech-tag">
                      &#160;
                      {tech.topic}
                    </span>
                    ,
                  </>
                )
              })}
            <span className="tech-tag">&#160; Github</span>. Good problem
            solving skills in Data structures and Algorithms using{' '}
            <span className="tech-tag">&#160; C++</span>.
          </p>
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['E', 'x', 'p', 'i', 'e', 'r', 'e', 'n', 'c', 'e', 's']}
              idx={15}
            />
          </h1>
          <div className="expierence">
            <img className="company-logo" src={HeyCoachLogo} alt="hey-coach" />
            <div className="company-info">
              <p style={{ fontSize: 'large', fontWeight: '600' }}>
                Frontend Developer
              </p>
              <p className="company-name">
                Hey Coach | Tech Interview Coaching · Internship
              </p>
              <p className="timing" style={{ color: 'rgb(255 255 255 / 60%)' }}>
                Nov 2021 - Mar 2022 · 5 mos
              </p>
              <p
                className="location"
                style={{ color: 'rgb(255 255 255 / 60%)' }}
              >
                Delhi, India
              </p>
            </div>
          </div>
        </div>
        <div className="info-map">
          {techTag &&
            techTag.map((tech) => {
              return (
                <div key={tech.id} className="element">
                  <div className="number">
                    <Icon
                      icon={tech.Icon}
                      fontSize="4rem"
                      color="rgba(127, 255, 255, 0.7490196078431373)"
                    />
                    <br />
                    {tech.topic}
                  </div>
                </div>
              )
            })}
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Skills

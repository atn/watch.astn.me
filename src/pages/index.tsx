import { useState, useEffect } from 'react'
import styled from 'styled-components'

import VideoContainer from '../components/VideoContainer'

// Geist
import { Text, Grid, Note } from '@geist-ui/react'

const cams = ['978', '183', '7', '403', '421', '438', '19', '5']

export default function Index() {
  const [math, setMath] = useState(1)

  useEffect(() => {
    setInterval(() => {
      setMath(Math.random())
    }, 1000)
  }, [])

  return (
    <Container>
      <Text h2>watch.astn.me</Text>
      <Text p b>a react project by <a href={'https://astn.me'}>austin simon</a></Text>
      <Grid.Container gap={3}>
        {cams.map(cam => (
          <Grid key={cam}><VideoContainer name={`Camera ${cam}`} url={`https://jpg.nyctmc.org/cctv${cam}.jpg?math=${math}`} /></Grid>
        ))}
      </Grid.Container>
      <Note type="secondary" style={{marginTop: 20}}>watch.aust.nyc is not affiliated with the New York City Department of Transportation or any similar establishments.</Note>
    </Container>
  )
}

const Container = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
`
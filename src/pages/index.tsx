import { useState, useEffect } from 'react'
import styled from 'styled-components'

import VideoContainer from '../components/VideoContainer'

// Geist
import { Text, Grid, Note } from '@geist-ui/react'

const cams = [{id: '978', name: 'Broadway @ 46th St.'}, {id: '183', name: '5th Ave @ 59th St.'}, {id: '7', name: '5th Ave @ 23rd St.'}, {id: '403', name: 'Broadway @ 42nd St.'}, {id: '421', name: 'Barclays Center'}, {id: '438', name: 'Broadway @ 51st St.'}, {id: '19', name: '8th Ave @ 34th St.'}, {id: '5', name: 'Central Park S @ Columbus Cr.'}]

export default function Index() {
  const [math, setMath] = useState(1)

  useEffect(() => {
    setInterval(() => {
      setMath(Math.random())
    }, 750)
  }, [])

  return (
    <Container>
      <Text h2>watch.astn.me</Text>
      <Text style={{marginTop: -10}}>nyc traffic cams, live.</Text>
      <Text>a react project by <a href={'https://astn.me'}>austin simon</a></Text>
      <Text>view the project on <a href={'https://github.com/atn/watch.astn.me'}>github</a></Text>
      <Grid.Container gap={3}>
        {cams.map(cam => (
          <Grid key={cam.id}><VideoContainer name={cam.name} url={`https://jpg.nyctmc.org/cctv${cam.id}.jpg?math=${math}`} /></Grid>
        ))}
      </Grid.Container>
      <Note type="warning" style={{marginTop: 20}}>watch.aust.nyc/watch.astn.me is not affiliated with the New York City Department of Transportation or any similar establishments.</Note>
    </Container>
  )
}

const Container = styled.div`
  margin-left: 3rem;
  margin-right: 3rem;
  margin-bottom: 3rem;
  margin-top: 2rem;
`
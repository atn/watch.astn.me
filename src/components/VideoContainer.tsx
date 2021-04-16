import { useState } from 'react'
import styled from 'styled-components'

// Geist
import { Card, Text, Divider } from '@geist-ui/react'

type videoProps = {
  url: string,
  name: string
}

export default function VideoContainer(props: videoProps) {
  const [loaded, setLoaded] = useState(false)
  function captureLoad() {
    setLoaded(true)
  }
  return (
    <Card shadow hidden={!loaded} style={{borderRadius: 15, cursor: 'pointer'}}>
      <Text b>{props.name}</Text>
      <Divider />
      <CameraImg src={props.url} onLoad={captureLoad}/>
    </Card>
  )
}

const CameraImg = styled.img`
  border-radius: 15px;
`
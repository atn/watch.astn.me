import { useState } from 'react'
import styled from 'styled-components'

// Geist
import { Card, useToasts } from '@geist-ui/react'

type videoProps = {
  url: string,
  name: string
}

export default function VideoContainer(props: videoProps) {
  const [, setToast] = useToasts()
  const [loaded, setLoaded] = useState(false)
  function captureLoad() {
    setLoaded(true)
  }
  return (
    <Card shadow hidden={!loaded} style={{borderRadius: 20, cursor: 'pointer'}} onClick={() => setToast({text: 'coming soon'})}>
      <CameraImg src={props.url} onLoad={captureLoad}/>
    </Card>
  )
}

const CameraImg = styled.img`
  border-radius: 20px;
`
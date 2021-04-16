import styled from 'styled-components'

// Geist
import { Card, useToasts } from '@geist-ui/react'

type videoProps = {
  url: string,
  name: string
}

export default function VideoContainer(props: videoProps) {
  const [, setToast] = useToasts()
  return (
    <Card shadow style={{borderRadius: 20, cursor: 'pointer'}} onClick={() => setToast({text: 'hi!'})}>
      <CameraImg src={props.url}/>
    </Card>
  )
}

const CameraImg = styled.img`
  border-radius: 20px;
`
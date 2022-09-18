import styled from '@emotion/styled'
import { useState } from 'react'
import tw from 'twin.macro'

const StyledInput = styled.input(({ hasBorder }:any) => [
  `color: black;`,
  hasBorder && tw`border-purple-500 border`,
])
const Foo = () => {
  const [bar, setBar] = useState<string>()
  return (

    <StyledInput hasBorder value={bar} onChange={ (e:any)=>setBar(e.target.value)} />

  )
}

export default Foo
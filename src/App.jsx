import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/header"
import Input from "./TextFiled"

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const FStyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`

function App() {

  return (
    <GradientBackground>
      <GlobalStyles/>

      <FStyledDiv>
        <Header/>
        <Input placeHolder="O que você deseja aprender" />
      </FStyledDiv>
      
    </GradientBackground>
  )
}

export default App

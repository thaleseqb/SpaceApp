import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Header from "./components/header"
import AsideBar from "./components/AsideBar"
import Banner from "./components/Banner"
// import Banner from "./components/Banner"

const GradientBackground = styled.div`
  background: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const FStyledDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin-top: 20px;
`

function App() {

  return (
    <GradientBackground>
      
      <GlobalStyles/>
      <Header/>

      <FStyledDiv>
        <AsideBar/>
        <Banner 
          texto="A galeria mais completa de fotos do espaço!" 
          backgroundImage="./imagens/banner.png"
        />
      </FStyledDiv>
      
      
    </GradientBackground>
  )
}

export default App

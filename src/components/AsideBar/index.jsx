import styled from "styled-components"
import NavItem from "./NavItem"

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    width: 212px;
`



const AsideBar = () => {
    return (
        <aside>
            <nav>
                <StyledList>
                    <NavItem 
                        activeIcon="/icons/home-ativo.png"
                        inactiveIcon="/icons/home-inativo.png"
                        active={true}
                    >
                        Início
                    </NavItem>
                    <NavItem 
                        activeIcon="/icons/mais-vistas-ativo.png"
                        inactiveIcon="/icons/mais-vistas-inativo.png"
                    >
                        Mais vistos
                    </NavItem>

                </StyledList>
            </nav>
        </aside>
    )
}

export default AsideBar
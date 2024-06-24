import styled from "styled-components"
import NavItem from "./NavItem"

const StyledList = styled.ul`
    list-style: none;
    margin: 0;
    /* margin-left: -100px; */
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
                    <NavItem 
                        activeIcon="/icons/mais-curtidas-ativo.png"
                        inactiveIcon="/icons/mais-curtidas-inativo.png"
                    >
                        Mais curtidas
                    </NavItem>
                    <NavItem 
                        activeIcon="/icons/novas.png"
                        inactiveIcon="/icons/novas-inativo.png"
                    >
                        Novas
                    </NavItem>
                    <NavItem 
                        activeIcon="/icons/surpreenda-me-ativo.png"
                        inactiveIcon="/icons/surpreenda-me-inativo.png"
                    >
                        Surpreenda-me
                    </NavItem>

                </StyledList>
            </nav>
        </aside>
    )
}

export default AsideBar
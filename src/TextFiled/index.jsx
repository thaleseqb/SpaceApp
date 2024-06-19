import {styled} from "styled-components";
import search from "./search.png"

const StyledDiv = styled.div`
    position: absolute;
    display: inline-block;
`

const StyledInput = styled.input`
    height: 56px;
    background: transparent;
    border-color: #C98CF1;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 12px 16px;
    width: 566px;
    border: 2x solid;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;
`

const Icon = styled.img`
    position: absolute;
    top: 10px;
    right: 10px;
    width: 38px;
    height: 38px;
`

const Input = (props) => {
    return (
        <StyledDiv>
            <StyledInput placeholder="O que você deseja aprender ?" {...props} />
            <Icon src={search} alt="icone de lupa" />
        </StyledDiv>
    )
}

export default Input;
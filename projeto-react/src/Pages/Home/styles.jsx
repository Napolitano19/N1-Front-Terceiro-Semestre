import styled from 'styled-components'

export const ReHeader = styled.header `
    background-color: #16341A;
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;

    input {
        height: 40px;
        width: 600px;
        border-radius: 20px;
        border: none;
        outline: none;
        padding: 0 10px;
        
    }
    
`

export const Rediv = styled.div ` 
    position: relative;

    img {
        position: absolute;
        right: 10px;
        top: 10px;
    }

`

export const Resection = styled.section `
    img {
        width: 100%;
    }

`

export const Resection2 = styled.section `
    height: 600px;

    div {
        display: flex;
        justify-content: center;
    }

    img {
        border-radius: 30px;
        width: 440px;
    }
`

export const Refooter = styled.footer `
`
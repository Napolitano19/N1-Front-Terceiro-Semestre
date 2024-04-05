import styled from 'styled-components'
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet"></link>


export const ReHeader = styled.header `
    background: linear-gradient(to right,#16341A,#16341A,#16341A, #5d8a63);
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
        /* margin-top: 1px; */
        /* border-top: 1px solid black; */
        border-bottom: 1px solid black;
    }

`

export const Resection2 = styled.section `
    height: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: "Poppins";
    color: #16341A;

    img {
        margin: 10px 30px;
        border-radius: 10px;
        width: 340px;
        border-color: #000000 20px solid;
        
    }
`

// export const Resection2__div = styled.div `
//     display: flex;
//     width: 600px;
//     justify-content: space-around;
// `

export const Refooter = styled.footer `
    height: 300px;
    border-top: 1px solid black;
    background-color: rgba(22,52,26,0.75);
    
    h2 {
        color: #5d8a63;
        margin-top: 40px;
    }
    
    
`

export const Refooter__div = styled.div `
    display: flex;
    justify-content: center;
    color: #b3b3b3;
    div#esquerdo {
        img{
            width: 160px;
        }
    }
    div {
        /* background-color: #ffff; */
        width: 400px;
        height: 300px;
        margin: 0 100px;
        img{
            width: 100px;
            cursor: pointer;
        }
    }

`
export const Teste = styled.body `
    
`
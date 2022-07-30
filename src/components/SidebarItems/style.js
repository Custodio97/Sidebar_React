import styled from 'styled-components'


export const Container = styled.div`
width: 80%;
border-radius: 14px;
display: flex;
align-items: center;
justify-content: space-around;
margin: 0 15px 20px;
background-color: #ff0052;
font-size: 15px;
padding: 0.60rem;

>svg{
    margin: 0 20px;
}
a{
    text-decoration: none;
    color: #fff;
    
}
&:hover{
    background-color: #260d1d;
    transition-duration: 0.8s;
  
}
`
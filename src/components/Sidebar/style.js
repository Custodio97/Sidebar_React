import styled from "styled-components";


export const Sidebar = styled.div`
width: 300px;
height: 100vh;
background-color: #0e0d4f;

position: fixed;
right: 0;
top:0;
right: ${(props) => props.sidebar ? "0" : "-100%"};
animation: showSidebar 0.8s ease-in-out;

.close{
    color: #fff;
    position: fixed;
    top: 1rem !important;
    right: 1rem !important;
    cursor: pointer;
}


@keyframes showSidebar {
    from{
        width: 0;
        transform:translateY(-4px);
    }

    to{
        width: 300px;
        transform: translateY(0);
    }
}
`

export const Content = styled.div`
 margin-top: 2rem;
 width: 100%;
 display: flex;
 align-items: center;
 justify-content: center;
 flex-direction: column;
 height: 90vh;
cursor: pointer;
`
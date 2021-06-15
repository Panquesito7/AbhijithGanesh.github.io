
import styled from 'styled-components';

export const Container = 
 styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 2rem;
  padding: 0.5rem;
  padding-top: 0.5rem;

  
  }
`;
export const LeftSection =
 styled.div`
  grid-area: 1 / 1 / 2 / 2;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: center;
 
`
export const CenterSection = styled.div`
  grid-area: 1 / 2 / 2 / 4;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  @media only screen  and width(415px){
    grid-area: 2 / 2 / 3 / 5;
  }

    
`;
// @media ${(props) => props.theme.breakpoints.sm} {
//   grid-area: 2 / 2 / 3 / 5;
// }
export const RightSection = styled.div`
  grid-area: 1 / 5 / 2 / 6;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  

`
  // @media ${(props) => props.theme.breakpoints.sm} {
  //   align-items: center;
  //   grid-area: 1 / 4 / 2 / 6;
  // };
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: 0.4s ease;
  &:hover {
    color: #fff;
    opacity: 1;
    cursor: pointer;
  }
 
`;


export const SocialIcons = styled.a`
transition: 0.4s ease;
color: white;
border-radius: 8px;
padding: 8px;
&:hover {
  color:#ffb800;
  cursor: pointer;}
`
  // transform: scale(2);
  // &:hover {
  //   background-color: #212d45;
    
  //   cursor: pointer;
    
  // }
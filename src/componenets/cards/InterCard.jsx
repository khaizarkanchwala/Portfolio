import React from 'react'
import styled from 'styled-components'
import image from '../../assets/inter.jpeg'
const Card = styled.div`
    width:400px;
    border-radius:10px;
    box-shadow: 0 0 10px rgba(0,0,0.1);
    padding 12px 16px;
    justify-content:space-between;
    position:relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;

    &:hover{
        box-shadow: 0 0 20px rgba(0,0,0.2);
        transform: translateY(-10px);

    }
    @media (max-width: 768px){
        padding: 10px;
        gap:8px;
        width: 300px;
    }
    border: 0.1px solid #306EE8;
    box-shadow: rgba(23,92,230,0.15) 0px 4px 24px;
`;

const Top=styled.div`
    display:flex;
    gap: 12px;
    width: 100%;
`;

const Logo=styled.img`
    height:100px;
    background-color:#000;
    border-radius:10px;
    margin-top:4px;
    margin-bottom:4px;
    margin-left:4px;
    @media (max-width: 768px){
        heigth:40px;
    }
`;

const Body=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Role=styled.div`
    font-size:18px;
    font-weigth:600;
    color:#b3b3b3;
    @media (max-width: 768px){
        font-size:16px;
    }
`;

const Company=styled.div`
    font-size:16px;
    font-weigth:500;
    color:#999999;
    @media (max-width: 768px){
        font-size:12px;
    }
`;

const Duration=styled.div`
    font-size:12px;
    font-weigth:400;
    color:#808080;
    @media (max-width: 768px){
        font-size:10px;
    }
`;

const InterCard = () => {
  return (
    <Card>
        <Top>
            <Logo src={image}/>
            <Body>
                <Role>Sri Chaitanya Junior College(SSC)</Role>
                <Company>Intermediate(MPC)</Company>
                <Duration>May 2019-March 2021</Duration>
            </Body>
        </Top>
        {/* <Description></Description> */}
    </Card>
  )
}

export default InterCard
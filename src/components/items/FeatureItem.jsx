import styled from "styled-components";


const FeatureContainer = styled.div`
  position: relative;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 14px;
  color: var(--color-black_200);
  border: 1px solid var(--color-black_500);
  border-radius: 40px;
  cursor: pointer;
  `

const FeatureItem = ({content})=>{
  return(
    <FeatureContainer  className='p3'>
      {content}
    </FeatureContainer>
  )
};

export default FeatureItem;
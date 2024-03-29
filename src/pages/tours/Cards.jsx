import { Link } from 'react-router-dom';
import { styled } from 'styled-components';

import CustomText from '../../components/reusable/Text';
import { Location, NavArrow } from '../../components/SVG/Svgs';
import { tourPackagesData } from '../../data/data';

const Cards = () => {
  return (
    <CardContainer>
      {tourPackagesData?.map((item, index) => {
        return (
          <Card
            style={{ marginLeft: index === index.length - 1 && 0 }}
            key={index}
            to={`/Tours/${item.title}`}>
            <LocationContainer>
              <Icon />
              <TruncatedText
                textAlign="left"
                fontSize="14px"
                fontWeight="400"
                lineHeight="16px"
                color="#fff">
                {item.location}
              </TruncatedText>
            </LocationContainer>
            <Image src={item?.image} alt={item?.title} />
            <TextContainer>
              <CustomText
                style={{ maxWidth: 300 }}
                textAlign="left"
                fontSize="20px"
                fontWeight="500"
                lineHeight="25px"
                color="#222">
                {item?.title}
              </CustomText>
              <CustomText
                style={{ maxWidth: 300 }}
                textAlign="left"
                fontSize="14px"
                fontWeight="400"
                lineHeight="14px"
                color="#999">
                {item?.length}
              </CustomText>
              <CustomText
                textAlign="left"
                fontSize="24px"
                fontWeight="500"
                lineHeight="24px"
                color="#FA7436">
                {item?.price}
              </CustomText>
              <Div>
                <CustomText
                  textAlign="left"
                  fontSize="14px"
                  fontWeight="500"
                  lineHeight="14px"
                  color="#007A33">
                  View
                  <br /> More
                </CustomText>
                <NavArrow />
              </Div>
            </TextContainer>
          </Card>
        );
      })}
    </CardContainer>
  );
};

export default Cards;
const CardContainer = styled.div`
  display: flex;
  max-width: 1310px;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 0px 20px;
  margin: 10px auto 125px;
`;
const Card = styled(Link)`
  display: flex;
  flex-direction: column;
  border: 0.5px solid #e8e8e8;
  width: calc(50% - 15px);
  height: 430px;
  margin-top: 30px;
  position: relative;
  border-radius: 12px;
  cursor: pointer;
  margin-right: 30px;
  &:nth-child(even) {
    margin-right: 0px;
  }
  @media screen and (max-width: 700px) {
    &:nth-child(initial) {
    }
    margin-right: 0px;
    width: 100%;
  }
`;
const LocationContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  position: absolute;
  bottom: 187.5px;
  width: 100%;
  height: 56px;
  padding-left: 16px;
  background-color: #00000045;
`;
const Image = styled.img`
  width: 100%;
  height: 242px;
  min-height: 242px;
  object-fit: cover;
  border-top-right-radius: 12px;
  border-top-left-radius: 12px;
`;
const Icon = styled(Location)`
  margin-right: 10px;
  width: 24px !important;
  height: 24px !important;
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 100%;
  padding: 24px 16px;
`;
const TruncatedText = styled(CustomText)`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
  max-width: 270px;
`;
const Div = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  bottom: 24px;
  right: 20px;
  height: 26px;
`;

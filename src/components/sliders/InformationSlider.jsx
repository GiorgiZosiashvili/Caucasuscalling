/* eslint-disable react/prop-types */
import Carousel from 'react-multi-carousel';
import { styled } from 'styled-components';

import CustomText from '../reusable/Text';
import { Arrow } from '../SVG/Svgs';

const InformationSlider = ({ title, data }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 2500, min: 1530 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1530, min: 901 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 901, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
  const ButtonGroup = ({ next, previous, ...rest }) => {
    const {
      carouselState: { currentSlide },
    } = rest;

    return (
      <CarouselButtonContainer className="carousel-button-group">
        <Button className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()}>
          <StyledArrow stroke={'#333'} />
        </Button>
        <Button style={{ transform: 'rotate(180deg)' }} onClick={() => next()}>
          <StyledArrow stroke={'#333'} />
        </Button>
      </CarouselButtonContainer>
    );
  };
  return (
    <SliderContainer>
      <CustomText
        textAlign="left"
        fontSize="24px"
        fontWeight="800"
        lineHeight="30px"
        margin="0px 10px 20px"
        color="#172432">
        {title}
      </CustomText>
      <Carousel
        draggable={false}
        itemClass="item-class"
        infinite={true}
        responsive={responsive}
        removeArrowOnDeviceType={['tablet', 'mobile']}
        arrows={false}
        renderButtonGroupOutside={false}
        customButtonGroup={<ButtonGroup />}>
        {data?.map((item, index) => (
          <SlideContent key={index}>
            <Shadow />
            <Image src={item?.image} alt={item?.title} />
            <CustomText
              textAlign="left"
              fontSize="30px"
              fontWeight="600"
              lineHeight="36px"
              margin="50px 40px 10px"
              color="white">
              {item?.title}
            </CustomText>
            <CustomText
              textAlign="left"
              fontSize="14px"
              fontWeight="400"
              lineHeight="21px"
              margin="0px 40px"
              color="rgba(255, 255, 255, 1)">
              {item.info}
            </CustomText>
            {index === 0 && (
              <ViewMore
                target="_blank"
                href={
                  'https://drive.google.com/file/d/12Yzu6tLeUGqZVcoiw3_n54A_XQI3ln0G/view?pli=1'
                }>
                View More
              </ViewMore>
            )}
          </SlideContent>
        ))}
      </Carousel>
    </SliderContainer>
  );
};
const SliderContainer = styled.div`
  width: 100%;
  margin: 0px auto 125px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  padding: 0px 20px;
`;
const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  border-radius: 50px;
  background-color: #efefef;
  cursor: pointer;
  transition: all 0.3s;
  svg path {
    transition: all 0.3s;
  }
  &:hover {
    background-color: #ff6b35;
  }
  &:hover svg path {
    stroke: #fff;
  }
`;

const CarouselButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
`;
const StyledArrow = styled(Arrow)`
  &:hover {
    stroke: #fff;
  }
`;

const SlideContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 95%;
  min-height: 350px;
  position: relative;
  border-radius: 30px;
  overflow: hidden;
  position: relative;
`;
const Shadow = styled.div`
  width: 100%;
  height: 100%;
  z-index: -1;
  background-color: rgba(0, 0, 0, 0.25);
  position: absolute;
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  z-index: -2;
`;
const ViewMore = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 17px;
  width: 90%;
  height: 48px;
  margin: 10% auto 20px;
  background-color: #ffffff;
  color: #007a33;
  cursor: pointer;
`;

export default InformationSlider;

// const Contact=()=>{

import Carousel from "react-multi-carousel";
import 'react-multi-carousel/lib/styles.css';

//     return(

//         <div className="cont">

//         </div>

//     )

// }

// export default Contac
const Contact=()=>{
    return (
    <Carousel
        additionalTransfrom={0}
        arrows
        autoPlaySpeed={3000}
        centerMode={false}
        className=""
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 3,
            partialVisibilityGutter: 40
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 1,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 2,
            partialVisibilityGutter: 30
          }
        }}
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {[1,2,3,4].map((e , index)=>{
            return (
                <div>
                   hello{index}
                </div>
            )

        }) }
      </Carousel>
     
      )
}

export default Contact

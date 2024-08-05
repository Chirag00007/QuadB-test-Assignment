import { CarouselProvider, Slider, Slide } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import { Fragment } from 'react';
import { banner } from './data';

const Carousel = () => {
    return (
        <Fragment>
            <CarouselProvider
                naturalSlideWidth={10}
                naturalSlideHeight={500}
                totalSlides={3}
                isPlaying={true} // Set to true to enable automatic sliding
                interval={3000}
            >
                <Slider>
                    {
                        banner && banner?.map(e =>
                            <Slide key={e.id} className='image_fit ' >
                                <div className='w-full h-[500px] flex items-center justify-center '>
                                    <img src={e.img} alt={e.title} className='h-full w-full  object-cover' />
                                </div>
                            </Slide>)
                    }
                </Slider>

            </CarouselProvider>
        </Fragment>
    )
}

export default Carousel
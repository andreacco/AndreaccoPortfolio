import myImage from '../../../../../assets/1664093866852.png';
import '../../../../../Styles/AboutMe/BannerAboutMe.scss';
import { Swiper, SwiperSlide } from "swiper/react";
import ButtonResume from './ButtonResume';

// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BannerAboutMe = () => {

return (
    <section className="banner-about-me">
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
            delay: 7000,
            disableOnInteraction: false,
        }}
        pagination={{
            clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper">

        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src={myImage} alt='Andrea-saying-Hi!'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <p>I am a Full stack developer from Venezuela, who loves front-end development and web applications that look good and are completely useful and functional.</p>
                </div>
                <ButtonResume/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1664469898/Portfolio/About%20Me%20imgs/-5017298538429786803_121_coding_vcbnzd.jpg' alt='Andrea-saying-Hi!'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <p>I have always been passionate about technology. Since I was in high school and I had a subject called computer science (in which I learned to develop in Visual Basic), I fell in love with development and I was clear that in my career, I wanted to do something related to it.</p>
                </div>
                <ButtonResume/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1664469898/Portfolio/About%20Me%20imgs/-5017298538429786797_121_henry_v3icv5.jpg' alt='Andrea-saying-Hi!'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <p>That's how the opportunity to become a Full Stack Developer with Henry Academy appeared and I took it right away. Then, five months later, I'm making my own portfolio and you're reading this right now in it.</p>
                </div>
                <ButtonResume/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1664470740/Portfolio/About%20Me%20imgs/IMG_20210616_104516_camineg_x4tgke.jpg' alt='Andrea-saying-Hi!'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <p>I'm very committed to everything I do and persist until it's done. I'm enthusiastic, communicative, loyal, and honest person, challenge-lover and someone that absolutely loves learning new things every day.</p>
                </div>
                <ButtonResume/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='nature-img' src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1664158779/Portfolio/About%20Me%20imgs/1664094226035_livvxb.jpg' alt='Andrea-saying-Hi!'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <p>Whenever I'm not coding, I really enjoy the nature beauty, I'm a sky-lover and like to take photos of it.</p>
                </div>
                <ButtonResume/>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className='card'>
                <section className='slide-1'>
                    <img className='me' src='https://res.cloudinary.com/drdbdhlp2/image/upload/v1664158680/Portfolio/About%20Me%20imgs/IMG-20220925-WA0002_nm0nbu.jpg' alt='Andrea-saying-Hi!'/>
                </section>
            </div>
            <div className="text">
                <div>
                    <p>I also to read a book, listen to music, practice meditation or something that relaxes my mind and body, watch series and movies. And least but no last, I'm a foodie, I really love to go out to eat and enjoy with my family or friends at it.</p>
                </div>
                <ButtonResume/>
            </div>
        </SwiperSlide>
        </Swiper>
    </section>
    )
};

export default BannerAboutMe;
          {/* <SwiperSlide>
            <img src={Shingeki} alt={Shingeki} />
            <div className="text">
              <div>
                <h2>Shingeki no Kyojin</h2>
                <p>Several hundred years ago, humans were nearly exterminated by giants. Giants are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source.</p>
              </div>
              <div className="picture">
                <section className="shingeki">
                  <img src="https://res.cloudinary.com/den9jelya/image/upload/v1657554105/Drama/Drama%20Action%20Fantasy%20Historical%20Horror%20Mystery%20Shounen%20Tragedy/Shingeki_No_Kyojin_1/shingeki_no_kyojin_c6dzqx.jpg" alt="" />
                </section>
                <button onClick={() => {navigate("/mangas/detail/62c8f5e7b65f7bbce6cadcce", { replace: true })}}>Read</button>  
              </div>
            </div>
          </SwiperSlide> */}
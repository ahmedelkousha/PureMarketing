import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// Placeholder partner logos - replace with actual logos
const partners = [
  { id: 1, name: 'Partner 1' },
  { id: 2, name: 'Partner 2' },
  { id: 3, name: 'Partner 3' },
  { id: 4, name: 'Partner 4' },
  { id: 5, name: 'Partner 5' },
  { id: 6, name: 'Partner 6' },
  { id: 7, name: 'Partner 7' },
  { id: 8, name: 'Partner 8' },
];

const PartnersCarousel = () => {
  return (
    <section className="py-12 bg-muted/50 border-y border-border">
      <div className="container-custom">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={60}
          slidesPerView={2}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="partners-swiper"
        >
          {partners.map((partner) => (
            <SwiperSlide key={partner.id}>
              <div className="flex items-center justify-center h-20">
                <div className="partner-logo flex items-center justify-center bg-background rounded-lg px-8 py-4 border border-border">
                  <span className="text-muted-foreground font-medium text-sm">
                    {partner.name}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default PartnersCarousel;

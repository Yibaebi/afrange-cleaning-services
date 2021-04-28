import AboutUsImage from "../../../assets/landing-page/Ironing board.svg";

import "./aboutUs.css";

const AboutUs = () => {
  return (
    <section className="aae-landing-about-us--container container-styles">
      <section className="aae-landing-about-us--wrapper">
        <aside className="aae-landing-about-us--image">
          <img src={AboutUsImage} alt="" />
        </aside>
        <aside className="aae-landing-about-us--content">
          <aside className="landing-services--content-header">
            <h1>
              <span>We have a rich story of excellence... </span>
              Our <em>History</em>
            </h1>
          </aside>
          <aside className="aae-landing-about-us--content-description">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              corporis doloremque, tenetur reiciendis expedita similique totam
              rerum, officia necessitatibus aut tempora ab esse id provident
              nulla facilis enim dolorum aliquid!
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
              corporis doloremque, tenetur reiciendis expedita similique totam
              rerum, officia necessitatibus aut tempora ab esse id provident
              nulla facilis enim dolorum aliquid! Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Iusto, ab iste explicabo, molestias
              magnam, ad corporis sunt quasi cupiditate commodi debitis nulla
              dolorem aperiam sint obcaecati nihil provident sequi tempore?
            </p>
          </aside>
        </aside>
      </section>
    </section>
  );
};

export default AboutUs;

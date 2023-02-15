import "./SectionTwo.scss";

function SectionTwo() {
  return (
    <section className="section_two">
      <p className="sectionTwo_subtitle">CLIENT TESTIMONIALS</p>
      <div className="people_info">
        <div className="person">
          <div className="person_img emily"></div>
          <div className="person_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus unde, ut, odit voluptate dolorum eveniet dignissimos
            animi ab, quaerat doloribus accusamus
          </div>
          <div className="person_name">Emily R.</div>
          <div className="person_work">Marketing Director</div>
        </div>
        <div className="person">
          <div className="person_img thomas"></div>
          <div className="person_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus unde, ut, odit voluptate dolorum eveniet dignissimos
            animi ab, quaerat doloribus accusamus
          </div>
          <div className="person_name">Thomas S.</div>
          <div className="person_work">Chief Operating Officer</div>
        </div>
        <div className="person">
          <div className="person_img jennie"></div>
          <div className="person_text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus unde, ut, odit voluptate dolorum eveniet dignissimos
            animi ab, quaerat doloribus accusamus
          </div>
          <div className="person_name">Jennie F.</div>
          <div className="person_work">Business Owner </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;

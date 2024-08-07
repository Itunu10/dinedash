import banner_img from "../../assets/banner-img.png";
import ButtonComponent from "../../components/tags/button";
import { menuData } from "../../data/menu-data";
import restaurant_img from "../../assets/staff.png";
import {
  TextAreaComponent,
  TextInputComponent,
} from "../../components/tags/input";
import { useState } from "react";
import { connectContents, contactDetails } from "../../data/contact-data";
import { restaurantSides } from "../../data/home-data";
import { useNavigate } from "react-router";

const Homepage = () => {
  const [values, setValues] = useState({});
  const navigate = useNavigate();
  return (
    <div>
      <section className="flex md:flex-row flex-col items-center md:h-[80vh] md:max-w-[90%] mx-auto justify-between">
        <div className="flex md:w-[70%] flex-col items- justify-between gap-8">
          <h1 className="md:text-4xl text-3xl leading-tight tracking-wide">
            Experience{" "}
            <span className="text-primary-default font-semibold">Culinary</span>{" "}
            Excellence, Where Every Dish Tells a Story
          </h1>
          <p>
            Whether you're here for a casual meal or a special celebration, we
            promise an atmosphere that's as delightful as the cuisine
          </p>
          <ButtonComponent onClick={() => navigate('/login')} width="w-40" className="shadow-md">
            Order now
          </ButtonComponent>
        </div>
        <div className="bg-">
          <div>
            <img
              className=" w-full top-0 object-cover bottom-0 abslute"
              src={banner_img}
              alt="Banner Image"
            />
          </div>
        </div>
      </section>
      <section id="menu">
        <div className="flex items-center gap-3  justify-center my-10 flex-col">
          <h1 className="text-danger-default uppercase">Customer Favorites</h1>
          <h1 className="text-3xl  font-semibold">Popular Catagories</h1>
        </div>
        <ul className="grid md:grid-cols-4 grid-cols-2 gap-3  md:w-[90%] my-10 mx-auto md:gap-10">
          {menuData.map((menu) => {
            return (
              <li className="flex flex-col md:w-64 bg-white p-3 rounded-xl items-center gap-3">
                <span className="rounded-full p-3 w-36 h-36 bg-primary-light">
                  <img
                    className="w-full object-contain h-full"
                    src={menu.img}
                    alt={menu.title}
                  />
                </span>

                <div>
                  <h2>{menu.title}</h2>
                </div>
              </li>
            );
          })}
        </ul>
      </section>
      <section
        id="about"
        className=" flex flex-col  home-section-ovrlay justify-center"
      >
        <div className=" max-w-[90vw] mx-auto  z-10 gap-10 flex md:flex-row flex-col items-center justify-between">
          <div className="">
            <img
              className="w-[24rem]"
              src={restaurant_img}
              alt="section banner"
            />
          </div>
          <div className="md:max-w-[55%]">
            <h1 className="my-4 text-xl font-medium">About Us</h1>
            <h5 className="text-primary-default my-4">
              Things to know about us
            </h5>
            <div className="flex flex-col my-5 opacity-70 gap-3">
              <p className="opacity-70">
                At{" "}
                <span className="text-primary-default font-semibold">
                  DINEDASH
                </span>{" "}
                , we believe that food is not just about nourishment but about
                creating memories and experiences that last a lifetime. our
                restaurant offers a unique dining experience that combines
                delicious cuisine, exceptional service, and a warm, inviting
                atmosphere.
              </p>
              <p className="opacity-80">
                Our menu features a diverse selection of dishes that celebrate
                the rich flavors and traditions of [Cuisine Type, e.g.,
                Mediterranean, Italian, Asian fusion]. From mouth-watering
                appetizers to decadent desserts, each dish is crafted with care
                and attention to detail. We source our ingredients from local
                farmers and suppliers to ensure that every meal is fresh,
                flavorful, and sustainably prepared.
              </p>
              <p className="opacity-80">
                ur chefs are passionate artists who take pride in their craft,
                and our staff is dedicated to providing you with an
                unforgettable dining experience. We believe that great food and
                great service go hand in hand, and we strive to exceed your
                expectations every time you visit us.
              </p>
              {/* {homeServiceContent.map((service) => (
                <div
                  className="flex justify-normal  gap-3 p-0  "
                  key={service.content}
                >
                  <span className="py-1 text-secondary-default">
                    <Icon icon="clarity:circle-solid" />
                  </span>
                  <p className="opacity-80">{service.content}</p>
                </div>
              ))} */}
            </div>
          </div>
        </div>
      </section>
      <section id="service" className="my-10">
        <h1 className="text-xl text-primary-default my-8 font-semibold">
          Environment Features
        </h1>
        <div className="grid md:grid-cols-4 my-2 gap-5">
          {restaurantSides.map((data) => {
            return (
              <div
                className="flex flex-col gap-4 shadow-md bg-white "
                key={data.name}
              >
                <img
                  className="w-full h-56"
                  src={data.img}
                  alt={data.description}
                />
                <div className="p-2 flex-col flex gap-2">
                  <h1 className="text-primary-default font-semibold">
                    Description
                  </h1>
                  <p className="text-sm ">{data.description}</p>
                  <h1 className="text-primary-default font-semibold">
                    Features
                  </h1>
                  <ul className="flex flex-col gap-2 my-3 ">
                    {data.features.map((feature) => (
                      <li className="text-sm flex items-center gap-2">
                        <span className="bg-orange-600 w-1.5 h-1.5 rounded-full"></span>
                        <span> {feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <div id="contact" className="flex  flex-col justify-center my-8 h-screen">
        <section className="flex gap-10   md:flex-row flex-col justify-between">
          <div className="md:max-w-[50%]">
            <h1 className="font-semibold text-xl leading-relaxed">
              CONNECT WITH US
            </h1>
            <div className="flex flex-col gap-10 my-3 justify-between h-[40%] text-black opacity-70 text-sm">
              {connectContents.map((content) => (
                <p key={content}>{content}</p>
              ))}
            </div>
          </div>
          <div className="bg-white  shadow-xl border flex-1 border-slate-400 rounded-md p-6">
            {" "}
            <div className="flex flex-col  gap-5">
              <h1>Connect with us to discover how we can be of help to you.</h1>

              {contactDetails.map((details) =>
                details.type === "textarea" ? (
                  <TextAreaComponent
                    values={values}
                    setValues={setValues}
                    name={details.name}
                    placeholder={details.placeholder}
                    // mode="light"
                  />
                ) : (
                  <TextInputComponent
                    values={values}
                    setValues={setValues}
                    name={details.name}
                    placeholder={details.placeholder}
                    type={details.type}
                    mode="light"
                  />
                )
              )}
              <ButtonComponent className="rounded-xl">Submit</ButtonComponent>
            </div>{" "}
          </div>
        </section>
      </div>
    </div>
  );
};
export default Homepage;

import Logo from "../../logo";
import { headerData } from "../../../data/header-data";
import { footerData } from "../../../data/footer-data";

const Footer = () => {
  return (
    <footer className="bg-primary-light py-20">
      <section className="max-w-[90vw] grid gap-10 md:grid-cols-4 mx-auto">
        <div className="">
          <Logo />
          <p className="my-2">
            We want to bring healthy organic food to every people as well as
            make agriculture easy and accessible to everyone.
          </p>
        </div>

        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">Quick Links</h1>
          <ul className="flex flex-col gap-3">
            {headerData.map((route) => (
              <li>{route.title}</li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">Address</h1>
          <ul className="flex flex-col gap-3">
            <p>{footerData.address}</p>
            <p>
              <span>Email : </span> <span>{footerData.email}</span>
            </p>
            <p>
              <span>Phone : </span> <span>{footerData.phone}</span>
            </p>
          </ul>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="font-semibold">Subscribe To our Newsletter</h1>
          <input
            placeholder="Enter your email address"
            className="outline-none p-2 focus:border-2 rounded-sm border border-slate-400"
            type="text"
          />
        </div>
      </section>
    </footer>
  );
};

export default Footer;

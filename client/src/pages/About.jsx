import { Link } from "react-router-dom";

export default function About() {
  return (
    <div className="container mx-auto px-4 md:px-8 pb-20">
      <div className="flex flex-col justify-center items-center py-10 md:py-18">
        <h1 className="text-4xl font-bold text-center text-gray-800 md:text-5xl">
          <span className="text-zinc-500">Estate</span>
          <span className="text-zinc-800">Pulse</span>
        </h1>
        <p className="text-base text-gray-600 text-center mt-4 md:text-lg font-style: italic">
          Empowering dreams, brick by brick. We help you find your perfect home
          or sell your property with integrity and expertise.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
        <div className="space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Our Story</h2>
          <p className="text-base text-gray-600">
            In 2020, fueled by a vision of disrupting the traditional real
            estate landscape, we launched with a mission to make buying and
            selling homes faster, easier, and more transparent. We leverage
            cutting-edge technology and data analytics to streamline the
            process, empower informed decision-making, and provide unparalleled
            client service. Today, we're proud to be a trusted partner for
            tech-savvy buyers and sellers navigating the modern market.
          </p>
          <p className="text-base text-gray-600">
            We understand that buying or selling a property is a major life
            decision. That's why we hold ourselves to the highest standards of
            integrity and transparency. Every action we take is guided by our
            commitment to earning your trust and exceeding your expectations
          </p>
        </div>
        <div className="hidden md:block">
          <img
            src="EstatePulse-logo.jpeg"
            alt="Company image"
            className="rounded-lg object-cover h-80 w-full"
          />
        </div>
      </div>

      <div className="mt-20">
        <h2 className="text-2xl font-bold text-gray-800">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          "As a first-time homebuyer, I felt overwhelmed. Maria patiently guided
          me through each step, explaining everything clearly and answering all
          my questions. Finding my dream home wouldn't have been possible
          without her!" - David Lee, Seattle
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          "We initially listed our property on our own, but struggled to get any
          traction. Hiring Emily changed everything. Her marketing strategy got
          us multiple offers, and we closed above asking price! Thank you,
          Emily!" - The Miller Family, Chicago
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
          "John helped us navigate a challenging market and sell our house
          within a week! His expertise and proactive communication made the
          process stress-free. We couldn't recommend him more!" - Sarah Jones,
          San Francisco
        </div>
      </div>

      <div className="text-center mt-20">
        <Link
          to={"/search"}
          className="inline-block px-4 py-2 rounded-md bg-gray-600 text-white font-bold hover:bg-gray-700"
        >
          Let's Search Your Real Estate Needs
        </Link>
      </div>
    </div>
  );
}

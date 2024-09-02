import Left from "../images/Left.png";
import Right from "../images/Right.png";

function Terms() {
  return (
    <div className="w-full px-0 ">
      <div
        className="w-full min-h-screen bg-[#FBFBFB] flex justify-center items-center"
        style={{
          backgroundImage: `url(${Left.src}), url(${Right.src})`,
          backgroundPosition: "left top, right top",
          backgroundRepeat: "no-repeat, no-repeat",
          backgroundSize: "auto, auto",
        }}
      >
        <div className="w-full py-[60px] px-0 flex flex-col items-center">
          <h1 className="font-semibold leading-[57.8px] text-center text-[34px] mt-[5%]">
            Privacy Policy
          </h1>
          <div className="w-full max-w-[1200px] px-[20px] py-0">
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4 text-[24px] leading-[40.8px] pt-[30px]">
                Who we are
              </h2>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px]">
                Sala is a product of SALATECH PTE. LTD company. We created Sala
                with a <span className="mx-[20px]"> </span> simple vision in
                mind; <span className="mx-[20px]"> </span> Enrich students'
                journey. Over 50,000 <span className="mx-[20px]"> </span>{" "}
                graduated high school students annually seek the best fit major
                and college for their future professional path.
              </p>
            </section>
            <section className="mb-8">
              <h2 className="text-2xl font-semibold mb-4">
                What personal data we receive or collect from you
              </h2>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px]">
                Lorem ipsum dolor sit amet consectetur. Lacus praesent vulputate
                tincidunt quis. Ac netus fringilla at nisl odio. Tristique sed
                tincidunt mauris sed nibh augue mattis fermentum. Morbi
                pellentesque augue at eleifend integer. Diam non feugiat feugiat
                risus. Aenean sagittis odio arcu vestibulum maecenas. Tristique
                ante imperdiet amet pellentesque. Hac pellentesque ac nec velit.
                Sit auctor congue accumsan est dui tempus. Aliquam ut amet
                vulputate integer laoreet eget. Rhoncus donec amet rutrum in
                etiam turpis nulla. Risus nisi purus eu dolor nisl eget. Quam
                pulvinar mi mattis tincidunt id tortor. Tellus a mi volutpat
                arcu ullamcorper ac. Mauris varius massa aliquam gravida odio
                varius. Scelerisque pharetra in suspendisse tellus consequat.
                Orci tellus tincidunt diam malesuada. Felis eu vitae blandit
                semper sed lectus ut diam. Nunc vel aliquam facilisis nibh eget
                maecenas ipsum consequat. At mi posuere.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="font-bold text-[16px] leading-[25.6px]">
                Profile Information
              </h3>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
                After you create an account, you may choose to provide
                additional
                <span className="mx-[20px]"> </span>
                information on your Student Profile.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="font-bold text-[16px] leading-[25.6px]">
                Comments
              </h3>
              <p className=" font-medium text-[16px] leading-[25.6px] mt-[30px]">
                When users signed up on the site we collect the data shown in
                the <span className="mx-[20px]"> </span> comments form, and also
                the visitor's IP address and browser user{" "}
                <span className="mx-[20px]"> </span> agent string to help spam
                detection. When users signed up on the site{" "}
                <span className="mx-[20px]"> </span> we collect the data shown
                in the comments form, and also the visitor's{" "}
                <span className="mx-[20px]"> </span> IP address and browser user
                agent string to help spam detection.
              </p>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] ml-[50px]">
                {" "}
                After approval of your comment, your profile picture is visible
                to the <span className="mx-[20px]"> </span> public in the
                context of your comment.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px]">
                Cookies
              </h3>
              <p className=" font-medium text-[16px] leading-[25.6px] mt-[30px]">
                If you leave a comment on our site you may opt-in to save your
                name,
                <span className="mx-[20px]"> </span>
                email address and website in cookies. These are for your
                convenience
                <span className="mx-[20px]"> </span>
                so that you do not have to fill in your details again when you
                leave
                <span className="mx-[20px]"> </span>
                another comment. These cookies will last for one year.{" "}
              </p>

              <p className=" font-medium text-[16px] leading-[25.6px] ml-[50px] ">
                If you have an account and you log in to this site, we will set
                a<span className="mx-[20px]"> </span>
                temporary cookie to determine if your browser accepts cookies.
                This cookie{" "}
              </p>
              <p className=" font-medium text-[16px] leading-[25.6px] ">
                contains no personal data and is discarded when you close your
                <span className="mx-[20px]"> </span>
                browser.
              </p>
              <p className=" font-medium text-[16px] leading-[25.6px] ml-[50px] ">
                When you log in, we will also set up several cookies to save
                your
                <span className="mx-[20px]"> </span>
                login information and your screen display choices. Login cookies
                last for two{" "}
              </p>
              <p className=" font-medium text-[16px] leading-[25.6px] ">
                days, and screen options cookies last for a year. If you{" "}
                <span className="mx-[20px]"> </span>
                select "Remember Me", your login will persist for two weeks.
                <span className="mx-[20px]"> </span>
                If you log out of your account, the login cookies will be
                removed.{" "}
              </p>
            </section>
            <section className="mb-8">
              <h3 className="text-xl mb-2 text-[16px] font-bold leading-[25.6px] ">
                How we use the information we receive or collect
              </h3>
              <p className="mb-4 font-medium text-[16px] leading-[25.6px] mt-[30px]">
                In general, SALA Enrollment may use your Registration Data
                and/or
                <span className="mx-[20px]"> </span>
                other information or data we receive or collect, as well as data
                we
                <span className="mx-[20px]"> </span>
                derive or infer from combinations of the foregoing, for a
                variety of <span className="mx-[20px]"> </span> purposes such
                as:
              </p>
              <section className="mb-8 mt-[30px]">
                <ul className="mb-4 font-medium text-[16px] leading-[25.6px] pl-[20px] list-disc">
                  <li>
                    To facilitate the creation of and secure your account on the
                    SALA
                    <span className="mx-[20px]"> </span>
                    Enrollment service.
                  </li>
                  <li>
                    To measure and analyze service usage and enhance the
                    listener
                    <span className="mx-[20px]"> </span>
                    experience on our service. We use tracking information to
                    determine <span className="mx-[20px]"> </span>
                    how well each page and station performs overall, based on
                    aggregate
                    <span className="mx-[20px]"> </span>
                    listener demographics and traffic patterns to those pages
                    and <span className="mx-[20px]"> </span>
                    stations. This helps us continue to build a better service
                    for you.
                  </li>
                  <li>To send you information that you agreed to receive.</li>
                  <li>
                    To alert you to the latest developments and features on our
                    service
                    <span className="mx-[20px]"> </span>
                    and to notify you of administrative information, such as
                    security or <span className="mx-[20px]"> </span>
                    support and maintenance advisories.
                  </li>
                </ul>
              </section>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Terms;

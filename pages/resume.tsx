import Bar from "../components/Bar";
import Head from "next/head";
import { languages, tools } from "../data";

const Resume = () => {
  return (
    <div className="px-6 py-2">
      <Head>
        <title>Front-End Developer | Resume | Darren Wayn</title>
      </Head>
      {/* //! Education & Experience */}
      <div className="grid gap-6 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Education</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">
              Web Programming
            </h5>
            <p className="font-semibold">Dumet School (2017-2019)</p>
            <p className="my-3">
              I had experience learning full stack web development using HTML, CSS, Bootstrap & PHP with Codeignitor Framework
            </p>
          </div>
        </div>
        <div>
          <h5 className="my-3 text-2xl font-bold">Experience</h5>
          <div className="">
            <h5 className="my-2 text-xl font-bold">Digital Marketing Specialist</h5>
            <p className="font-semibold">Habitat for Humanity Indonesia</p>
            <p className="my-3">

            </p>
          </div>
        </div>
      </div>

      {/*Languages & Tools */}
      <div className="grid gap-9 md:grid-cols-2">
        <div>
          <h5 className="my-3 text-2xl font-bold">Language & Framework</h5>
          <div className="my-2">
            {languages.map((language, i) => (
              <Bar value={language} key={i} />
            ))}
          </div>
        </div>

        <div>
          <h5 className="my-3 text-2xl font-bold">Tools & Softwares</h5>
          <div className="my-2">
            {tools.map((tool, i) => (
              <Bar value={tool} key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
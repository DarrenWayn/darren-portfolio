import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticProps,
  GetStaticPropsContext,
  NextPage
} from "next";
import ServiceCard from "../components/ServiceCard";
import { services } from "../data";
// import { Service } from "../types";

import Head from 'next/head'

const About: NextPage = () => {
  // console.log(services);

  return (
    <div className="flex flex-col flex-grow px-6 pt-1 ">

      <Head>
        <title>Front-End Developer | Portfolio | Darren Wayn</title>
      </Head>

      <h6 className="my-3 text-base font-medium">
        Hi, My name is Darren and I’m a 23 years old Front-End Developer who loves to build stuff. My experience are range from using HTML & CSS to React/NextJS libraries like Material UI, Ant Design & TailwindCSS. 
        <br 
          style={{
                    marginTop: '5px',
                    marginBottom: '5px',
                }}
         />
        I also use API to fetch data into the site If you choose to work with me there will be a constant line of communication. 
        I believe that’s very important to deliver and and understand the project better.
        <br 
          style={{
                    marginTop: '5px',
                    marginBottom: '5px',
                }}
         />
        Let's talk! we'll better know if we're a good fit.
      </h6>
      <div
        className="flex-grow p-4 mt-5 bg-gray-400 dark:bg-dark-100 "
        style={{ marginLeft: "-1.5rem", marginRight: "-1.5rem" }}
      >
        <h4 className="my-3 text-xl font-semibold tracking-wide">
          What I am currently doing
        </h4>

        <div className="grid gap-6 my-3 md:grid-cols-2">
          {/* children's initial and animate property should be same as the parent during a stagger effect  */}
          {services.map((service) => (
            <div
              className="col-span-2 p-2 bg-gray-200 rounded-lg dark:bg-dark-200 md:col-span-1 "
              key={service.title}
            >
              <ServiceCard service={service} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// //!called every time the page refreshed
// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch(`${process.env.VERCEL_URL}/api/services`)
//    const data = await res.json()
//   //  console.log(data)
//    return { props: { services: data.service } }
// }

// export const getServerSideProps: GetServerSideProps = async (
//    context: GetServerSidePropsContext
// ) => {
//    const res = await fetch('http://localhost:3000/api/services')
//    const data = await res.json()
//    console.log(data)
//    return { props: { services: data.services } }
// }

// !called only during the build of the project
//? make sure the server(localhost:3000)[this will receive the request during build] is running on a terminal during the build
//? also need to change the localhost during the deployment | see the todo
// https://aude53.medium.com/set-environment-variables-with-next-js-and-vercel-e544c0460a48

// export const getStaticProps: GetStaticProps = async (
//    context: GetStaticPropsContext
// ) => {
//     console.log(context);
//     const server = process.env.SERVER;
//     const res = await fetch(`${server}/api/services`)
//     const { services } = await res.json()
//     //  console.log({ services })
//     return { props: { services: services } }
// }

export default About;

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.scss'
import Header from '@/components/header'
import Footer from '@/components/footer'
import axios from 'axios'
import { useSession, signIn, signOut } from "next-auth/react"


export default function Home({ country }) {
  const { data: session } = useSession()
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header country={country} />
      {session ?
        <>
          Signed in as {session.user.email} <br />
          <button onClick={() => signOut()}>Sign out</button>
        </>
        :
        <>
          Not signed in <br />
          <button onClick={() => signIn()}>Sign in</button>
        </>
      }
      <Footer />
    </>
  )
}

export async function getServerSideProps() {
  let data = await axios
    .get("https://api.ipregistry.co/?key=r208izz0q0icseks")
    .then((res) => {
      return res.data.location.country;
    })
    .catch((err) => {
      console.log(err);
    });
  return {
    props: {
      country: { name: data.name, flag: data.flag.emojitwo },
    },
  };
}
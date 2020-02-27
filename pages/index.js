import Head from 'next/head'
import SignUp from '../components/SignUp'

const Home = () => (
  <div className="container">
    <Head>
      <title>Yup!</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
    </Head>

    <SignUp />
   </div>
)

export default Home

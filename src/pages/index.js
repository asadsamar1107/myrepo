import Image from 'next/image'
import { Inter } from 'next/font/google'
import Layout from '../../Components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <Layout title="home page" >
      {/* <h1>Welcome in Home Page</h1> */}
    </Layout>
  )
}

import Head from "next/head";
import Link from "next/link"
import Image from 'next/image'

export default function MyHeader(props) {
    return(
        <>
            <Head>
                <title>{props.title}</title>
                <Link rel="icon" type="" href="/ico.png"></Link>   
            </Head>                 
        </>
    )
}
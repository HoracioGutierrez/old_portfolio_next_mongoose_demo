import Head from 'next/head'

const Landing = () => {
    return (
        <>
            <Head>
                <title>HG - Home</title>
            </Head>
            <p>Soy <strong>Horacio Gutierrez</strong>, tengo 31 años y vivo en Argentina. Me gusta mucho programar en Javascript, tocar la bateria en mi imaginacion mientras golpeo los dedos contra algo y jugar Valorant.</p>
            <br />    
            <p> Esta página la hice a modo de tener un portfolio online por un lado, pero por el otro también como playground personal para probar distintas cosas y ver como quedan en producción.</p>
            <br />
            <p>Podes ver en la sección de "Demos" cada funcionalidad que voy probando pero no prometo que todas sean buenas o realmente útiles.</p>
            <br />
            <p>La página en si puede ser tomada a modo de demo. La misma fue hecha usando <strong>React v17</strong>, <strong>Next.js</strong>, <strong>Redux</strong>, <strong>Mongoose</strong> y <strong>Vercel</strong> para probar los deploy. El servidor Back End es el integrado en Next.js, pero si te preguntás, <strong>si</strong>, se usar <strong>Express</strong> también.</p>
        </>
    )
}
 
export default Landing
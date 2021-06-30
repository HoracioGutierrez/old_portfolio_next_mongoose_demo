import dynamic from 'next/dynamic'
import { useRouter } from 'next/router';

const map = {
    "contador-simple" : "ContadorSimple"
}

const getComponent = (ns) =>  dynamic(()=>import(`../../components/playground/${ns}/index`),{ssr:false})

const PlaygroundMainContent = () => {

    const router = useRouter()
    const slug = router.query.slug
    const ns = map[slug]
    const DynamicComponent = getComponent(ns)

    return (
        <DynamicComponent/>
    );
}

export default PlaygroundMainContent;
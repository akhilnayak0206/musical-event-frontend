import {useRouter} from 'next/router'
import Layout from '@/components/Layout';

function EventPage() {

    const router = useRouter();

    console.log(router)
    return (
        <Layout>
            <h1>Single Event Page</h1>
        </Layout>
    )
}

export default EventPage
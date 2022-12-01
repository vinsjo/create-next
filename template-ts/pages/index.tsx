import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '@styles/Home.module.css';
import ClientRender from '@components/Utilities/ClientRender';
import Clock from '@components/Clock';

const Home: NextPage = () => {
    return (
        <div className={styles.container}>
            <Head>
                <title>@vinsjo/create-next-app ts template</title>
                <link rel="icon" href="/favicon.svg" />
            </Head>

            <main className={styles.main}>
                <ClientRender>
                    <h1>
                        <Clock />
                    </h1>
                </ClientRender>
            </main>
        </div>
    );
};

export default Home;

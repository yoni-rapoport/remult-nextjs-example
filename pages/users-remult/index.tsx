import Link from 'next/link'

import { User } from '../../common/User'
import Layout from '../../components/Layout'
import List from '../../components/List'
import { useEffect, useState } from 'react'
import { remult } from '../../utils/common'

const WithClientSizeDataFetching = () => {
    const [data, setData] = useState(null)
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true);
        remult.repo(User).find()
            .then((data) => {
                setData(data)
                setLoading(false)
            })
    }, [])

    if (isLoading) return <p>Loading...</p>
    if (!data) return <p>No users data</p>

    return (<Layout title="Users List | Next.js + TypeScript Example" >
        <h1>Users List </h1>
        <p>
            Example fetching data from client-side.
                </p>
        <p> You are currently on: /users/client-side</p>
        <List items={data} />
        <p>
            <Link href="/">
                <a>Go home </a>
            </Link>
        </p>
    </Layout>
    )
}


export default WithClientSizeDataFetching

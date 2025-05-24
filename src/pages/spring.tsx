import SpringMessageForm from 'components/SpringMessageForm'
import SpringMessageList from 'components/SpringMessageList'
import { NextPage } from 'next'
import { SpringMessagesProvider } from 'utils/useSpringMessages'
import Layout from '../components/Layout'


const IndexSpringPage: NextPage = () => {
  return (
    <SpringMessagesProvider>
      <Layout>
        <SpringMessageList />
        <div>
          <SpringMessageForm />
        </div>
      </Layout>
    </SpringMessagesProvider>
  )
}

export default IndexSpringPage

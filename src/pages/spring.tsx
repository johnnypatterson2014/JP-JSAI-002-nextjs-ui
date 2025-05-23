import SpringMessageForm from 'components/SpringMessageForm'
import MessagesList from 'components/MessageList'
import { NextPage } from 'next'
import { SpringMessagesProvider } from 'utils/useSpringMessages'
import Layout from '../components/Layout'

const IndexSpringPage: NextPage = () => {
  return (
    <SpringMessagesProvider>
      <Layout>
        <div>
          Hello world!
          <SpringMessageForm />
        </div>
        <MessagesList />
      </Layout>
    </SpringMessagesProvider>
  )
}

export default IndexSpringPage

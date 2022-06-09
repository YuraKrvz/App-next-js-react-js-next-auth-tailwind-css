import Head from 'next/head'

const MainLayout = (props) => {
  return (
    <>
      <Head>
        <meta keywords={'HTML, CSS, JavaScript, Next-js, next-auth, tailwind ' + props.keywords} />
        <title>{props.title || 'main page'}</title>
      </Head>
      {props.children}
    </>
  )
}
export default MainLayout

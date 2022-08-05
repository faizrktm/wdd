import type { GetServerSideProps } from 'next';


export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    redirect: {
      permanent: false,
      destination: "/full"
    }
  }
}

import { GetServerSideProps } from "next";

type DashboardPageProps = {
  username: string | undefined;
};

const DashboardPage = ({ username }: DashboardPageProps) => {
  return <div>Dashboard</div>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const data: DashboardPageProps = { username: context.req.cookies.name };
  return { props: data };
};

export default DashboardPage;

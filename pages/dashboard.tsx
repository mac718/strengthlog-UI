import { GetServerSideProps } from "next";

type DashboardPageProps = {
  username: string | undefined;
};

const DashboardPage = ({ username }: DashboardPageProps) => {
  console.log(username);
  return (
    <div>
      Dashboard<div>Hi, {username}!</div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps<{
  data: DashboardPageProps;
}> = async (context) => {
  console.log(context);
  const data: DashboardPageProps = { username: context.req.cookies.name };
  return { props: data };
};

export default DashboardPage;

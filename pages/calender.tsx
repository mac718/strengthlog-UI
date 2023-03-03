import Calender from "@component/components/Calender";
import { GetServerSideProps } from "next";

type CalenderPageProps = {
  username: string | undefined;
};

const CalenderPage = ({ username }: CalenderPageProps) => {
  return <Calender />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  console.log(context);
  const data: CalenderPageProps = { username: context.req.cookies.name };
  return { props: data };
};

export default CalenderPage;

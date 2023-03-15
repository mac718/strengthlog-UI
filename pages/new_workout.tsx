import NewWorkout from "@component/components/NewWorkout";
import axios from "axios";
import { GetServerSideProps } from "next";

const NewWorkoutPage = ({ movements }: any) => {
  return <NewWorkout movements={movements} />;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const token = context.req.cookies.token;
  const res = await axios("http://localhost:8080/api/v1/movements/", {
    headers: { Authorization: `Bearer ${token}` },
  });
  return { props: { movements: res.data } };
};

export default NewWorkoutPage;

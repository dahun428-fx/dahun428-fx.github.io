import { Layout } from "@/components/layouts/Layout";
import { GetLayout } from "@/pages/types";

export const Standard: GetLayout = (page) => {
  return <Layout>{page}</Layout>;
};

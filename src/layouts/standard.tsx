import { Layout } from "@/components/layouts/Layout";
import { GetLayout } from "@/types/types";

export const Standard: GetLayout = (page) => {
  return <Layout>{page}</Layout>;
};

import { RowProduct } from "@/components/Product";

export const ProjectContent = ({ data }: { data?: any }) => {
  return (
    <div className="container">
      <div className="py-10">
        <RowProduct data={data ?? []} />
      </div>
    </div>
  );
};

export const EmptySectionComponent: React.FC<{
  title: string;
}> = ({ title }) => {
  return (
    <section className="flex flex-col border border-gray-200 rounded-md items-center justify-center h-44 w-full">
      No {title} found
    </section>
  );
};

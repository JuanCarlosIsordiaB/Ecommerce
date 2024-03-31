import { titleFont } from "@/config/fonts";

interface Props {
  title: string;
  subTitle?: string;
  className?: string;
}

export const Title = ({ title, subTitle, className }: Props) => {
  return (
    <div className={`mt-3 ${className}`}>
      <h1
        className={`${titleFont.className} antialiased text-4xl font-semibold mt-10 mb-4`}
      >
        {title}
      </h1>
      {subTitle && <p className="text-xl font-light mb-5">{subTitle}</p>}
    </div>
  );
};

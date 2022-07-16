import { Header } from "../components/Header";

type Props = {
  children: JSX.Element;
};

export const HeaderOnly = ({ children }: Props) => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* container */}
      <div className="container">
        {/* content */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

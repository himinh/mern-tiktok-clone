import { Header } from "../components/Header";
import { Sidebar } from "./Sidebar";

type Props = {
  children: JSX.Element;
};

export const DefaultLayout = ({ children }: Props) => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* container */}
      <div className="container">
        {/* sidebar */}
        <Sidebar />

        {/* content */}
        <div className="content">{children}</div>
      </div>
    </div>
  );
};

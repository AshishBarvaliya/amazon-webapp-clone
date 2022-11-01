import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import "../styles/globals.css";

const MyApp = ({
  Component,
  pageProps,
}: {
  Component: React.FC;
  pageProps: any;
}) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;

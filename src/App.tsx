import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  Layout,
  ReadyPage,
  ErrorComponent,AuthPage
} from "@pankod/refine-antd";
import "@pankod/refine-antd/dist/styles.min.css";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import authProvider  from "auth-provider";
import { GoogleOutlined, GithubOutlined } from "@ant-design/icons";

function App() {
  return (
    <Refine
      notificationProvider={notificationProvider}
      authProvider={authProvider} 
      LoginPage={() => (
        <AuthPage
            providers={[
                {
                    name: "google",
                    label: "Sign in with Google",
                    icon: <GoogleOutlined style={{ fontSize: 24 }} />,
                },
                {
                    name: "github",
                    label: "Sign in with GitHub",
                    icon: <GithubOutlined style={{ fontSize: 24 }} />,
                },
            ]}
        />
    )}
      Layout={Layout}
      ReadyPage={ReadyPage}
      catchAll={<ErrorComponent />}
      routerProvider={routerProvider}
      dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
    />
  );
}

export default App;

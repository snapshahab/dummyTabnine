import "./App.css";
import { Layout, Menu, Breadcrumb } from "antd";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import { useState } from "react";

const { Header, Content, Footer } = Layout;

function App() {
  const [searchTags, setSearchTags] = useState([]);
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
          <div style={{ padding: "0 30px" }}>Dummy TabNine</div>
          <SearchBar setSearchTags={setSearchTags} searchTags={searchTags} />
        </Menu>
      </Header>
      <Content style={{ padding: "0 50px" }}>
        <HomePage searchTags={searchTags} />
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Created by{" "}
        <a href="https://github.com/snapshahab" alt="ext_url">
          Syed Shahab Uddin
        </a>
      </Footer>
    </Layout>
  );
}

export default App;

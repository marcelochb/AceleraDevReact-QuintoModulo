import React from "react";

import "./App.scss";
import { useGetData } from "./utils/hooks/useGetData";
import { Filters, Topbar, Contacts, Contact } from "./components";
import { Loading } from "./components/Loading";

const App = () => {
  const { data, loading } = useGetData();

  if (loading) return <Loading />;

  return (
    <React.Fragment>
      <Topbar />
      <Filters />
      <Contacts>
        <Contact />
        {data.map((contact) => (
          <Contact key={contact.id} {...contact} />
        ))}
      </Contacts>
    </React.Fragment>
  );
};
export default App;

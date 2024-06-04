import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { LibrarianList } from "./librarian/LibrarianList";
import { LibrarianCreate } from "./librarian/LibrarianCreate";
import { LibrarianEdit } from "./librarian/LibrarianEdit";
import { LibrarianShow } from "./librarian/LibrarianShow";
import { BookList } from "./book/BookList";
import { BookCreate } from "./book/BookCreate";
import { BookEdit } from "./book/BookEdit";
import { BookShow } from "./book/BookShow";
import { BorrowList } from "./borrow/BorrowList";
import { BorrowCreate } from "./borrow/BorrowCreate";
import { BorrowEdit } from "./borrow/BorrowEdit";
import { BorrowShow } from "./borrow/BorrowShow";
import { MemberList } from "./member/MemberList";
import { MemberCreate } from "./member/MemberCreate";
import { MemberEdit } from "./member/MemberEdit";
import { MemberShow } from "./member/MemberShow";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { httpAuthProvider } from "./auth-provider/ra-auth-http";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"LibraryBorrowSystem"}
        dataProvider={dataProvider}
        authProvider={httpAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="Librarian"
          list={LibrarianList}
          edit={LibrarianEdit}
          create={LibrarianCreate}
          show={LibrarianShow}
        />
        <Resource
          name="Book"
          list={BookList}
          edit={BookEdit}
          create={BookCreate}
          show={BookShow}
        />
        <Resource
          name="Borrow"
          list={BorrowList}
          edit={BorrowEdit}
          create={BorrowCreate}
          show={BorrowShow}
        />
        <Resource
          name="Member"
          list={MemberList}
          edit={MemberEdit}
          create={MemberCreate}
          show={MemberShow}
        />
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
      </Admin>
    </div>
  );
};

export default App;

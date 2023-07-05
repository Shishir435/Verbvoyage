

import { SessionProvider } from "next-auth/react";
  import { Session } from "next-auth";
const Provider = ({ children, session }) => (
  <SessionProvider session={session}>
    {children}
  </SessionProvider>
)

export default Provider;

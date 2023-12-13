import { AuthProvider } from "./logic/context/ctx_auth";
import RoutesPages from "./ui/routes/rt_Routes";

const App = () => {
  return (
    <AuthProvider>
      <RoutesPages />
    </AuthProvider>
  );
};

export default App;

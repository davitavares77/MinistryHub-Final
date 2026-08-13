import Disponibilidade from "../_components/disponibilidade";
import AuthGuard from "../_components/admin";

export default function Page() {
  return (
    <AuthGuard>
      <Disponibilidade />
    </AuthGuard>
  );
}
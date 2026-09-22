import { redirect } from "next/navigation";

export default function RentalRedirect() {
  redirect("/services?tab=rental");
}

import { redirect } from "next/navigation";

export default function SupplyRedirect() {
  redirect("/services?tab=supply");
}

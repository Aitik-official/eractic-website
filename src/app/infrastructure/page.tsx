import { redirect } from "next/navigation";

export default function InfrastructureRedirect() {
  redirect("/services?tab=infrastructure");
}

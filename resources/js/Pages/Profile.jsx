import DashboardLayout from "@/Layouts/DashboardLayout";
import { usePage } from "@inertiajs/react";
import React from "react";

export default function Profile() {
  const details = usePage().props.auth.user;

  return (
      <DashboardLayout page="Profile">
      </DashboardLayout>
  );
}
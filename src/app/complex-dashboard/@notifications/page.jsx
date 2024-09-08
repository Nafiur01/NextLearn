import React from "react";
import Card from "../../components/cards";
import Link from "next/link";

export default function Notifications() {
  return (
    <Card>
      <div>Notifications</div>
      <Link href="/complex-dashboard/archieved">Archieved</Link>
    </Card>
  );
}

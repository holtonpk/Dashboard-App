import React from "react";
import QuickView from "../components/QuickView/index";
import DateRange from "./DateRange";
import Accounts from "./Accounts";
import AccountStats from "./AccountStats";
import "../globals.css";
import Table from "./Table";
import PocketBase from "pocketbase";

// export const dynamic = "auto",
//   dynamicParams = true,
//   revalidate = 0,
//   fetchedCache = "auto",
//   runtime = "nodejs",
//   preferredRegion = "auto";

async function getTransactions() {
  const client = new PocketBase("http://127.0.0.1:8090");
  const adminAuthData = await client.admins.authViaEmail(
    "holtonpk@gmail.com",
    "Dcsd142662"
  );
  const data = await client.records.getList("transactions");

  client.authStore.clear();

  // fetch a paginated records list
  return data?.items as any[];
}

async function getAccounts() {
  const client = new PocketBase("http://127.0.0.1:8090");
  const adminAuthData = await client.admins.authViaEmail(
    "holtonpk@gmail.com",
    "Dcsd142662"
  );
  const data = await client.records.getList("savings_accounts");

  client.authStore.clear();

  // fetch a paginated records list
  return data?.items as any[];
}

export default async function DashboardPage() {
  const transactions = await getTransactions();
  // const accounts = await getAccounts();

  // const {amount, description, status, to_from} = transactions || {};

  return (
    <div className="flex flex-row">
      <div className="p-4 w-[80%] gap-4">
        <div className="flex flex-row items-center justify-between mb-4">
          <h1 className="text-3xl text-c11">Dashboard</h1>
          <DateRange />
          <button className="p-2 px-6 text-sm rounded-lg bg-c3 text-c11">
            Change Assets
          </button>
        </div>
        <AccountStats />
        {/* <Accounts accounts={accounts} /> */}

        <Table transactions={transactions} />
      </div>
      <QuickView />
    </div>
  );
}

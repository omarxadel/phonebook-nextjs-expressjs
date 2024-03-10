import useSWR from "swr";
import { API_URL } from "@/lib/config/constants";
import { getContacts } from "@/lib/data/controllers/contacts.controller";

export function useContacts() {
  const { data, error, isLoading } = useSWR("getContacts", (key) =>
    getContacts()
  );
  console.log({ data, error, isLoading });
  return {
    contacts: data,
    isLoading,
    isError: error,
  };
}

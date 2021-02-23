import useSWR from "swr";

const testName = "Ismael-Barajas";
const ratelimitURL = "https://api.github.com/rate_limit";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export function fetchPublicRepos() {
  const url = `https://api.github.com/users/${testName}/repos`;
  const { data, error } = useSWR(url, fetcher, {
    revalidateOnFocus: false,
  });

  return {
    data,
    isError: error,
    isLoading: !error && !data,
  };
}

export function rateLimit() {
  const { data, error } = useSWR(ratelimitURL, fetcher);
  return data;
}

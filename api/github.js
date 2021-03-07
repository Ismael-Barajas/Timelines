const ratelimitURL = "https://api.github.com/rate_limit";

export function rateLimit() {
  const { data, error } = useSWR(ratelimitURL, fetcher);
  return data;
}

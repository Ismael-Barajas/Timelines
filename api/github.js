import useSWR from "swr";
import axios from "axios";

const testurl = "https://api.github.com/users/Ismael-Barajas/repos";

const ratelimitURL = "https://api.github.com/rate_limit";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

export function fetchPublicRepos() {
  const { data, error } = useSWR(testurl, fetcher, {
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

// const fetchPublicReposSWR = () => {
//   let usernameUrl = testurl;
//   try {
//     const { data, error } = useSWR(usernameUrl, fetcher);
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };
//
// const fetchPublicRepos = async () => {
//   let usernameUrl = testurl;
//   try {
//     const data = await axios.get(usernameUrl);
//     console.log(data);
//     return data;
//   } catch (err) {
//     console.log(err);
//   }
// };

//export default fetchPublicRepos;

import useSWR from "swr";
import axios from "axios";

const testurl = "https://api.github.com/users/Ismael-Barajas/repos";

const fetcher = (...args) => fetch(...args).then((response) => response.json());

const fetchPublicReposSWR = () => {
  let usernameUrl = testurl;
  try {
    const { data, error } = useSWR(usernameUrl, fetcher);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

const fetchPublicRepos = async () => {
  let usernameUrl = testurl;
  try {
    const data = await axios.get(usernameUrl);
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
};

export default fetchPublicRepos;

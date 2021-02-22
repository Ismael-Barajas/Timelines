import fetchPublicRepos from "../api/github";

const getrepos = async () => {
  const data = await fetchPublicRepos();
  //const aData = Object.values(data);
  return data;
};

export default function Test() {
  const data = getrepos();
  console.log(data);
  //return <pre>{JSON.stringify(data, null, 2)}</pre>;
  return (
    <div>
      {/* {data.map((repos) => (
        <p>{repos.full_name}</p>
      ))} */}
    </div>
  );
}

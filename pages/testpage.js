import fetchPublicRepos from "../api/github";
import React from "react";

// const getrepos = async () => {
//   const data = await fetchPublicRepos();
//   //const aData = Object.values(data);
//   return data;
// };

// export default function Test() {
//   const data = getrepos();
//   console.log(data);
//   //return <pre>{JSON.stringify(data, null, 2)}</pre>;
//   return (
//     <div>
//       {/* {data.map((repos) => (
//         <p>{repos.full_name}</p>
//       ))} */}
//     </div>
//   );
// }

class TestR extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [],
    };
  }

  async componentDidMount() {
    const data = await fetchPublicRepos();
    console.log(data);
    this.setState({ data });
  }

  render() {
    return (
      <div>
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    );
  }
}

export default TestR;

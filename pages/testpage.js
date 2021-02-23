import fetchPublicRepos from "../api/github";
import React from "react";

export default function Test() {
  const { data, isError, isLoading } = fetchPublicRepos();
  console.log('1111111 ', data, isError, ' loading? ', isLoading);

    return (
        <div>
            {
                isLoading ?
                    <p>
                        Nothing to see here.
                    </p> :
                    data.map(item =>
                        <div>
                            <h2> { item.owner.login } </h2>
                            <p> { item.name } </p>
                            <p> { item.updated_at } </p>
                        </div>
                    )
            }
        </div>
    )

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

// class TestR extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       data: [],
//     };
//   }

//   async componentDidMount() {
//     const data = await fetchPublicRepos();
//     console.log(data);
//     this.setState({ data });
//   }

//   render() {
//     return (
//       <div>
//         <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
//       </div>
//     );
//   }
// }

// export default TestR;

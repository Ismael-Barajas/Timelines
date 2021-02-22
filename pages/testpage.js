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
}

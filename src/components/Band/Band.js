import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getBandMembers } from "../../fetchers/fetchers";

import * as styles from './Band.module.scss';

const Band = () => {
  const { data, isLoading}  = useQuery({
    queryKey: ['band'],
    queryFn: getBandMembers
  });

  return (
    <>
      <div className={styles.container}>
        <div className={styles.welcomeText}>
          <h3>Skład zespołu </h3>

          {!isLoading && data.data.members ? (
            <>
              {data.data.members.map((member) => {
                return (
                  <div key={member.id}>
                    {member.name} - {member.description}<br />
                  </div>
                );
              })}
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default Band;
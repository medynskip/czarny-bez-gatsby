import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getConcertDates } from "../../fetchers/fetchers";

import * as styles from './Concerts.module.scss';

const Concerts = () => {
  const { data, isLoading}  = useQuery({
    queryKey: ['concerts'],
    queryFn: getConcertDates
  });

  return (
    <div id="koncerty" className={styles.container}>
      <h3>Nadchodzące koncerty</h3>
      {!isLoading && data.data.concerts ? (
        <div>
          {data.data.concerts.map((concert, i) => {
            return (
              <div key={concert.id} className={styles.concertLine}>
                <div className={styles.dateLine}>Kiedy: <span className={styles.dateBox}>{concert.date}</span></div>
                <div>Gdzie: {concert.description}</div>
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Concerts;
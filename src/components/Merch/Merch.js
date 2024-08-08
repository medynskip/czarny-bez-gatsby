import { useQuery } from "@tanstack/react-query";
import React from "react";

import { getMerch } from "../../fetchers/fetchers";

import * as styles from './Merch.module.scss';

const Merch = () => {
  const { data, isLoading}  = useQuery({
    queryKey: ['merch'],
    queryFn: getMerch
  });

  return (
    <div id="merch" className={styles.container}>
      <h3>Merch</h3>
      <div className={styles.merch}>

        {!isLoading && data.data.merches ? (
          <>
            {data.data.merches.map((merch, i) => {
              return (
                <div key={merch.id} className={styles.merchCard}>
                  <div className={styles.merchImage}>
                    <img src={merch.image.url} alt={merch.name}/>
                  </div>
                  <div className={styles.merchName}>
                    {merch.name}
                  </div>
                </div>
              );
            })}
          </>
        ) : null}
      </div>
      <h4 className={styles.merchContact}>
        Zainteresowanych prosimy o kontakt <a href="mailto:czarnybez.merch@autograf.pl?subject=Zam%C3%B3wienie">czarnybez.merch@autograf.pl</a>
      </h4>
    </div>
  );
};

export default Merch;
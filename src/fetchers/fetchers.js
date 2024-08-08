
const URL = "https://api-eu-central-1.graphcms.com/v2/ckupsupti0dkf01w8e3cad8qy/master";

const fetchData = async (query) => {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ query }),
  };

  try {
    const response = await fetch(URL, options);

    const data = await response.json();

    return data;
  } catch (error) {
    console.log(error); 
    throw error;
  }
};

export const getMusicVideos = () => {
  const query =  
    `{
      videos {
        id
        title
        source
        lead
        description
      }
    }`;

  return fetchData(query);
};

export const getConcertDates = () => {
  const query =  
    `{
      concerts(orderBy: date_DESC) {
        id
        date
        description
      }
    }`;

  return fetchData(query);
};

export const getMerch = () => {
  const query =  
    `{
      merches {
        id
        name
        image {
          url
        }
      }
    }`;

  return fetchData(query);
};

export const getBandMembers = () => {
  const query =  
    `{
      members {
        id
        name
        description
      }
    }`;

  return fetchData(query);
};


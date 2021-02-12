import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "07660213ff5141c18fd4dbbf076588b6";

    useEffect(() => {
        axios
            .get(
                `http://newsapi.org/v2/top-headlines?language=en&pageSize=5&apiKey=${apiKey}`
                )
                .then((response) => setData(response.data))
                .catch((error) => console.log(error));
    }, [data])

    return(
        <NewsContext.Provider value={{data}}>
            {props.children}
        </NewsContext.Provider>
    );
};
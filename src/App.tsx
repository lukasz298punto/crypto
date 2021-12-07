import React from "react";
import { useQuery } from "react-query";
import { Message } from "rsuite";
import { apiClient } from "utility/api";
import { Loader } from "rsuite";

import "rsuite/dist/rsuite.min.css";

function App() {
    const { isLoading, data } = useQuery("query-tutorials", async () => {
        return await apiClient.get("/v1/assets/BTC");
    });

    if (isLoading) {
        return <Loader />;
    }

    return (
        <Message type="warning" showIcon>
            Aktualny kurs BTC:{` `}
            {Math.round(data?.data?.[0].price_usd) || 0} USD
        </Message>
    );
}

export default App;

import React from "react";
import Table from "terra-table";
const WeekdayLayout = () => {
  const [data, setData] = React.useState({});
  const requestOptions = {
    method: "GET",
  };

  React.useEffect(() => {
    fetch(
      "http://localhost:8000/api/weeklyCounts?username=test@gmail.com",
      requestOptions
    )
      .then((response) => response.text())
      .then((result) => {
        setData(JSON.parse(result));
      })
      .catch((error) => console.log("error", error));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Table
      summaryId="standard-table"
      summary="This table has standard padding."
      numberOfColumns={8}
      cellPaddingStyle="standard"
      dividerStyle="horizontal"
      headerData={{
        cells: [
          {
            id: "header-totalhours",
            key: "totalhours",
            children: "Total Hours",
          },
          { id: "header-sun", key: "sun", children: "Sun" },
          {
            id: "header-mon",
            key: "mon",
            children: "Mon",
          },
          {
            id: "header-tue",
            key: "tue",
            children: "Tue",
          },
          {
            id: "header-wed",
            key: "wed",
            children: "Wed",
          },
          {
            id: "header-thu",
            key: "thu",
            children: "Thu",
          },
          {
            id: "header-fri",
            key: "fri",
            children: "Fri",
          },
          {
            id: "header-sat",
            key: "sat",
            children: "Sat",
          },
        ],
      }}
      bodyData={[
        {
          rows: Object.keys(data).map((key, idx) => {
            let cells = data[key].map((val, idx) => {
              return {
                key: `cell-${idx + 1}`,
                children: val,
              };
            });
            cells = [{ key: "cell-0", children: key }].concat(cells);
            return {
              key: `row-${idx}`,
              cells: cells,
            };
          }),
        },
      ]}
    />
  );
};
export default WeekdayLayout;

import React from "react";
import Table from "terra-table";
const WeekdayLayout = () => (
  <Table
    summaryId="standard-table"
    summary="This table has standard padding."
    numberOfColumns={8}
    cellPaddingStyle="standard"
    dividerStyle="horizontal"
    headerData={{
      cells: [
        { id: "header-totalhours", key: "totalhours", children: "Total Hours" },
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
        rows: [
          {
            key: "row-0",
            cells: [
              { key: "cell-0", children: "19378847" },
              { key: "cell-1", children: "0" },
              { key: "cell-2", children: "0" },
              { key: "cell-3", children: "0" },
              { key: "cell-4", children: "0" },
              { key: "cell-5", children: "0" },
              { key: "cell-6", children: "0" },
              { key: "cell-7", children: "0" },
            ],
          },
          {
            key: "row-1",
            cells: [
              { key: "cell-0", children: "39572956" },
              { key: "cell-1", children: "0" },
              { key: "cell-2", children: "0" },
              { key: "cell-3", children: "0" },
              { key: "cell-4", children: "0" },
              { key: "cell-5", children: "0" },
              { key: "cell-6", children: "0" },
              { key: "cell-7", children: "0" },
            ],
          },
          {
            key: "row-2",
            cells: [
              { key: "cell-0", children: "82659301" },
              { key: "cell-1", children: "0" },
              { key: "cell-2", children: "0" },
              { key: "cell-3", children: "0" },
              { key: "cell-4", children: "0" },
              { key: "cell-5", children: "0" },
              { key: "cell-6", children: "0" },
              { key: "cell-7", children: "0" },
            ],
          },
        ],
      },
    ]}
  />
);
export default WeekdayLayout;

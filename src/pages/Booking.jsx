import BookingTable from "@/components/booking/BookingTable";
import useGetDatas from "@/hooks/useGetDatas";
import {
  TableContainer,
  Table,
  TableHeader,
  TableCell,
} from "@windmill/react-ui";
import React from "react";

const Booking = () => {
  const [data, isLoading] = useGetDatas("/booking", "booking");
  console.log(data);
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <h1 className="text-2xl mt-5 text-center mb-5">Booking List</h1>
      <div>
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{"Id"} </TableCell>
                <TableCell> {"DATE"}</TableCell>
                <TableCell> {"NAME"}</TableCell>
                <TableCell>{"PHONE"}</TableCell>
                <TableCell> {"EMAIL"}</TableCell>
                <TableCell>{"CITY"}</TableCell>
                <TableCell>{"PLACE"}</TableCell>
                <TableCell> {"EVENT_TYPE"}</TableCell>
                <TableCell> {"PEPOLE"}</TableCell>
                <TableCell>{"ADDRESS"}</TableCell>
                <TableCell>{"DESCRIPTION"}</TableCell>
                <TableCell>{"ACTION"}</TableCell>
              </tr>
            </TableHeader>
            <BookingTable BookingList={data} isLoading={isLoading} />
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default Booking;

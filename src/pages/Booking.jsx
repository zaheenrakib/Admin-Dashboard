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
                <TableCell> {"Name"}</TableCell>
                <TableCell> {"FIELD"}</TableCell>
                <TableCell>{"PLACEHOLDER"}</TableCell>
                <TableCell>{"CSS_CLASS"}</TableCell>
                <TableCell> {"Name"}</TableCell>
                <TableCell> {"FIELD"}</TableCell>
                <TableCell>{"PLACEHOLDER"}</TableCell>
                <TableCell>{"CSS_CLASS"}</TableCell>
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

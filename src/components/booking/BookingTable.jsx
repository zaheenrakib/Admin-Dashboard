import { TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React from "react";

const BookingTable = ({ BookingList, isLoading }) => {
  console.log("Booking List", BookingList);
  if (isLoading) {
    return (
      <>
        <h1>Loading...</h1>
      </>
    );
  }
  return (
    <div>
      <div>
        <TableBody>
          {BookingList?.map((booking) => (
            <TableRow key={booking?.id}>
                
              <TableCell className="font-semibold uppercase text-xs">
                {booking?.id}
              </TableCell>

              <TableCell className="font-semibold uppercase text-xs">
                {booking?.personName}
              </TableCell>
              
              <TableCell className="font-semibold uppercase text-xs">
                {booking?.email}
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </div>
    </div>
  );
};

export default BookingTable;

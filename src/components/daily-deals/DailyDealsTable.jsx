import { TableBody, TableCell, TableRow } from "@windmill/react-ui";
import React from "react";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import Status from "@/components/table/Status";

const DailyDealsTable = ({ dailyDealsData, isLoading }) => {
    if(isLoading){
        return <div>Loading...</div>
    }
  return (
    <TableBody>
      {dailyDealsData?.map((deal, i) => (
        <TableRow key={i + 1}>
          <TableCell>
            <span className="text-sm">{i + 1}</span>
          </TableCell>
          <TableCell>
            <span className="text-sm">{deal?.product.productName}</span>
          </TableCell>
          <TableCell>
            <span className="text-sm">{deal.price}</span>
          </TableCell>
          <TableCell>
            <span className="text-sm">{deal.quantity}</span>
          </TableCell>
          <TableCell>
            <span className="text-sm">{deal.startTime}</span>
          </TableCell>
          <TableCell>
            <span className="text-sm">{deal.endTime}</span>
          </TableCell>
          <TableCell>
            <div className="flex justify-center items-center space-x-4">
              <button className="p-2 cursor-pointer text-gray-400 hover:text-green-600">
                <FiEdit />
              </button>
              <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600">
                <FiTrash2 />
              </button>
            </div>
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default DailyDealsTable;
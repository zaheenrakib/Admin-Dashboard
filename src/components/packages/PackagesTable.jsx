import React from "react";
import EditDeleteButton from "../table/EditDeleteButton";
import { TableBody, TableCell, TableRow } from "@windmill/react-ui";

const PackagesTable = ({ PackagesData = [], isLoading }) => {
  console.log("Packages List", PackagesData); 

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <TableBody>
      {PackagesData.map((packages) => (
        <TableRow key={packages.id}>
          <TableCell className="font-semibold uppercase text-xs">
            {packages.id}
          </TableCell>

          <TableCell className="font-semibold uppercase text-xs">
            {packages.packageDays}
          </TableCell>

          <TableCell className="font-semibold uppercase text-xs">
            {packages.packageDescription}
          </TableCell>

          <TableCell className="font-semibold uppercase text-xs">
            {packages.packageStatus}
          </TableCell>

          <TableCell className="font-semibold uppercase text-xs">
            <EditDeleteButton id={packages.id} />
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

export default PackagesTable;

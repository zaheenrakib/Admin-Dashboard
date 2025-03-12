import AnimatedContent from "@/components/common/AnimatedContent";
import UploadMany from "@/components/common/UploadMany";
import PackagesTable from "@/components/packages/PackagesTable";
import PageTitle from "@/components/Typography/PageTitle";
import useGetDatas from "@/hooks/useGetDatas";
import { Button, Card, CardBody, Input, Table, TableCell, TableContainer, TableHeader } from "@windmill/react-ui";
import React, { useState } from "react";

const Packages = () => {
  const [ data = [], isLoading]  = useGetDatas("/package-details", "package-details");
  const [searchQuery, setSearchQuery] = useState("");
  console.log(data)
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  // Filtered data based on search query
  const filteredData = data?.filter((item) =>
    Object.values(item).some((value) =>
      value?.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <>
      <PageTitle>{"Packages List"}</PageTitle>
      <AnimatedContent>
        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody className="flex gap-96">
            {/* Upload Component */}
            <UploadMany title="Package" exportData={data} />
          </CardBody>
        </Card>

        <Card className="min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5">
          <CardBody className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
            <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <Input
                type="search"
                placeholder="Search Booking..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
              <div className="w-1/3">
                <Button
                  onClick={() => setSearchQuery("")}
                  type="submit"
                  className="h-12 w-full bg-emerald-700"
                >
                  Reset
                </Button>
              </div>
            </div>
          </CardBody>
        </Card>

        {/* Table Section */}
        <TableContainer>
          <Table>
            <TableHeader>
              <tr>
                <TableCell>{"Id"} </TableCell>
                <TableCell>{"DATE"}</TableCell>
                <TableCell>{"NAME"}</TableCell>
                <TableCell>{"PHONE"}</TableCell>
              </tr>
            </TableHeader>
            <PackagesTable PackagesData={filteredData} isLoading={isLoading} />
          </Table>
        </TableContainer>
      </AnimatedContent>
    </>
  );
};

export default Packages;

import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TablePagination,
  TableRow,
  Tooltip,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";

import { Store } from "../../types";
import { useEffect, useState } from "react";
import StoresTableHeader from "./StoresTableHeader";
import { getComparator, Order } from "../../utils/api/table-sort";

const StoresTable = ({
  stores,
  onStoreClicked,
  onDeleteStoreClicked,
  onEditStoreClicked,
  onViewMoreClicked,
}: {
  stores: Store[];
  onStoreClicked: Function;
  onDeleteStoreClicked: Function;
  onEditStoreClicked: Function;
  onViewMoreClicked: Function;
}) => {
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(0);
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof Store>("vanityName");

  const handlePageChange = (_event: any, newPage: any) => {
    setPage(newPage);
  };

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: keyof Store
  ) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleLimitChange = (event: any) => {
    setPage(0);
    setLimit(event.target.value);
  };

  useEffect(() => {
    // reset page everytime stores data changes
    setPage(0);
  }, [stores]);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table aria-label="simple table">
          <StoresTableHeader
            order={order}
            orderBy={orderBy}
            onRequestSort={handleRequestSort}
          />
          <TableBody>
            {[...stores]
              .sort(getComparator(order, orderBy))
              .slice(page * limit, page * limit + limit)

              .map((store) => (
                <TableRow
                  hover
                  key={store.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <div
                      className="text-link"
                      onClick={() => onStoreClicked(store.id)}
                    >
                      {store.vanityName}
                    </div>
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    {store.banner}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: { sm: "none", xs: "none", md: "table-cell" },
                    }}
                  >
                    {store.district}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: { sm: "none", xs: "none", md: "table-cell" },
                    }}
                  >
                    {store.division}
                  </TableCell>
                  <TableCell sx={{ display: { xs: "none", md: "table-cell" } }}>
                    {store.storeNumber}
                  </TableCell>
                  <TableCell
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      maxWidth: "120px",
                    }}
                  >
                    <Tooltip title="View more..." enterDelay={500}>
                      <VisibilityIcon
                        sx={{ cursor: "pointer", color: "#87a884" }}
                        onClick={() => onViewMoreClicked(store.id)}
                      />
                    </Tooltip>
                    <Tooltip title="Edit Store" enterDelay={500}>
                      <EditIcon
                        sx={{ cursor: "pointer", color: "#4471b7", mx: 1 }}
                        onClick={() => onEditStoreClicked(store.id)}
                      />
                    </Tooltip>

                    <Tooltip title="Delete Store" enterDelay={500}>
                      <DeleteIcon
                        sx={{ cursor: "pointer", color: "#d4d4d4" }}
                        onClick={() => onDeleteStoreClicked(store)}
                      />
                    </Tooltip>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
          <TableFooter>
            <TableRow>
              <TablePagination
                count={stores.length}
                onPageChange={handlePageChange}
                onRowsPerPageChange={handleLimitChange}
                page={page}
                rowsPerPage={limit}
                rowsPerPageOptions={[
                  5,
                  10,
                  20,
                  25,
                  { label: "Todos", value: -1 },
                ]}
              />
            </TableRow>
          </TableFooter>
        </Table>
      </TableContainer>
    </div>
  );
};

export default StoresTable;

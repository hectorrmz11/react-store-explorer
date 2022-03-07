import {
  Box,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
} from "@mui/material";
import { visuallyHidden } from "@mui/utils";
import { Store } from "../../types";
import { Order } from "../../utils/api/table-sort";

interface HeadCell {
  disablePadding: boolean;
  id: keyof Store;
  label: string;
  numeric: boolean;
  hiddenPoint?: "xs" | "sm" | "md";
}
interface EnhancedTableProps {
  onRequestSort: (
    event: React.MouseEvent<unknown>,
    property: keyof Store
  ) => void;

  order: Order;
  orderBy: string;
}

const StoresTableHeader = ({
  order,
  orderBy,
  onRequestSort,
}: EnhancedTableProps) => {
  const headCells: readonly HeadCell[] = [
    {
      id: "vanityName",
      numeric: false,
      disablePadding: true,
      label: "Store Name",
    },
    {
      id: "banner",
      numeric: false,
      disablePadding: false,
      label: "Banner",
      hiddenPoint: "xs",
    },
    {
      id: "district",
      numeric: true,
      disablePadding: false,
      label: "District",
      hiddenPoint: "xs",
    },
    {
      id: "division",
      numeric: true,
      disablePadding: false,
      label: "Division",
      hiddenPoint: "xs",
    },
    {
      id: "storeNumber",
      numeric: true,
      disablePadding: false,
      label: "Store Number",
      hiddenPoint: "xs",
    },
  ];

  const createSortHandler =
    (property: keyof Store) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property);
    };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            sortDirection={orderBy === headCell.id ? order : false}
            sx={
              headCell.hiddenPoint
                ? {
                    display: {
                      [headCell.hiddenPoint]: "none",
                      md: "table-cell",
                    },
                  }
                : null
            }
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  );
};

export default StoresTableHeader;

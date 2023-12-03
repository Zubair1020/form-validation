import { styled } from "@mui/material/styles";
import {
  TableRow,
  Paper,
  Table,
  TableHead,
  TableBody,
  TableCell,
  tableCellClasses,
  TableContainer,
} from "@mui/material";
import { Fragment, useContext } from "react";
import { ProductContext } from "../../context/products/ProductsContext.jsx";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#04a4cc",
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function TableUIComponent() {
  const { products } = useContext(ProductContext);
  return (
    <TableContainer
      sx={{
        width: "50rem",
        borderRadius: "5px",
        marginInline: "auto",
        marginBlock: "5rem",
      }}
      component={Paper}
    >
      <Table aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Price</StyledTableCell>
            <StyledTableCell align="right">Quantity</StyledTableCell>
            <StyledTableCell align="right">ID</StyledTableCell>
            <StyledTableCell align="right">Color</StyledTableCell>
            <StyledTableCell align="right">Size</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <StyledTableRow>
            {products.length < 1 ? (
              <StyledTableCell
                colSpan={6}
                sx={{
                  textAlign: "center",
                  fontWeight: 400,
                  fontSize: "1.3rem !important",
                }}
              >
                No products are added
              </StyledTableCell>
            ) : (
              products.map(
                ({
                  productName,
                  productPrice,
                  productQuantity,
                  productId,
                  productColor,
                  productSize,
                }) => (
                  <Fragment key={productId}>
                    <StyledTableCell component="th" scope="row">
                      {productName.charAt(0).toUpperCase() +
                        productName.slice(1)}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {productPrice} $
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {productQuantity}
                    </StyledTableCell>
                    <StyledTableCell align="right">{productId}</StyledTableCell>
                    <StyledTableCell align="right">
                      {productColor}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {productSize}
                    </StyledTableCell>
                  </Fragment>
                ),
              )
            )}
          </StyledTableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

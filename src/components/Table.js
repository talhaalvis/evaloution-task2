import React, { useEffect, } from "react";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Container } from "@mui/system";
import {  CircularProgress, Paper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/productSlice";
import TabelSecond from "../components/TabelSecond";
// import img from "../Resources/Group_17937.png";
// import { makeStyles } from "@mui/styles";

const useStyles = (theme) => ({
  root: {
    marginTop: 4,
  },

  table: {
    minWidth: 700,
  },

  loaderWrapper: ({ height }) => ({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: height,
  }),
});
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    fontWeight: "bold",
    fontSize: "1rem",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));
const CoinTable = (props) => {
  const dispatch = useDispatch();
  const classes = useStyles(props);
  const { data: product, status } = useSelector((state) => state.product);
  console.log(status);

  useEffect(() => {
    dispatch(fetchProducts({ pageSize: 5 }));
  }, []);
  // function
  return (
    <Container
      sx={{
        marginTop: "100px",
        marginBottom: "20px",
        width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'},
      }}
      maxWidth="xl"
    >
      <Stack
        spacing={5}
        direction={{
          xl: "row",
          lg: "row",
          md: "row",
          sm: "column",
          // xs: "column",
        }}
      >
        <Box
          className="border"
          sx={{
            overflowX: "visible",
            marginTop: "10px",
            width: "100%",
          }}
        >
          <TableContainer
            component={Paper}
            // sx={{ border: "solid 1px rgba(205, 205, 205, 0.28)" }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            ></Box>

            <Table
              className="stb"
              sx={{
                minWidth: 400,
              }}
              aria-label="customized table"
            >
              {status === "error" ? (
                <TabelSecond />
              ) : (
                <TableHead
                // sx={{
                //   background: "linear-gradient(89deg, #5d2c72 2%, #b5142a 99%)",
                // }}
                >
                  <TableRow
                    sx={{ borderBottom: "1px solid rgba(224, 224, 224, 1)" }}
                  >
                    <StyledTableCell sx={{ textAlign: "center", opacity: 0.8 }}>
                      #
                    </StyledTableCell>
                    <StyledTableCell
                      style={{
                        color: "#000",
                        borderBottom: "none",
                        textAlign: { xs: "center" },
                      }}
                      sx={{
                        maxWidth: { xs: "71px", lg: "108px" },
                        minWidth: { xs: "280px", lg: "280px", xl: "432px" },
                        fontFamily: "Helvetica",
                        fontWeight: "normal",
                        fontStyle: "normal",
                        opacity: 0.8,
                      }}
                      width="15%"
                    >
                      Pair
                    </StyledTableCell>

                    <StyledTableCell
                      align="left"
                      sx={{
                        color: "#000",
                        fontSize: "18px",
                        borderBottom: "none",
                        textAlign: { xs: "center", lg: "left" },
                        minWidth: { xs: "110px", lg: "125px" },
                        fontFamily: "Helvetica",
                        fontWeight: "normal",
                        opacity: 0.8,
                      }}
                      width="12.5%"
                    >
                      Last Price
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{
                        color: "#000",
                        textAlign: { xs: "center" },
                        fontFamily: "Helvetica",
                      }}
                      sx={{
                        minWidth: { xs: "125px", lg: "125px" },
                        borderBottom: "none",
                        opacity: 0.8,
                        fontWeight: "normal",
                      }}
                      width="12.5%"
                    >
                      24h Change
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{ color: "#000", fontFamily: "Helvetica" }}
                      sx={{
                        minWidth: { xs: "150px", lg: "125px" },
                        borderBottom: "none",
                        opacity: 0.8,
                      }}
                      width="12.5%"
                    >
                      24h High
                    </StyledTableCell>
                    <StyledTableCell
                      align="left"
                      style={{ color: "#000", fontFamily: "Helvetica" }}
                      sx={{
                        minWidth: { xs: "103px", lg: "125px" },
                        borderBottom: "none",
                        opacity: 0.8,
                      }}
                      width="12.5%"
                    >
                      24h Low
                    </StyledTableCell>
                    <StyledTableCell
                      sx={{
                        color: "#000",
                        fontFamily: "Helvetica",
                        borderBottom: "none",
                        minWidth: "110px",
                        opacity: 0.8,
                      }}
                      align="left"
                      width="11.5%"
                    >
                      24h Volume
                    </StyledTableCell>
                  </TableRow>
                </TableHead>
              )}

              {status === "loading" ? (
                <StyledTableRow>
                  <StyledTableCell colSpan={9}>
                    <Box
                      height={400}
                      className={classes.loaderWrapper}
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <CircularProgress sx={{ color: " #28a0b0" }} />
                    </Box>
                  </StyledTableCell>
                </StyledTableRow>
              ) : (
                <>
                  {" "}
                  <TableBody>
                    {product?.map((row, index) => {
                      return (
                        <StyledTableRow sx={{ textAlign: "left" }}>
                          <StyledTableCell sx={{ textAlign: "center" }}>
                            {index}
                          </StyledTableCell>
                          <StyledTableCell component="td" scope="row">
                            <Box
                              sx={{
                                display: "flex",
                                alighnItems: "left",
                                gap: "4%",
                                maxWidth: "259px",
                              }}
                            >
                              <Box
                                sx={{
                                  display: "flex",
                                  justifySelf: "flex-start",
                                  justifyContent: "center",
                                  alignItems: "center",
                                }}
                              >
                                <img
                                  style={{
                                    width: "40px",
                                    height: "40px",
                                    borderRadius: "50%",
                                  }}
                                  src={row.imageURL}
                                  alt=""
                                />
                              </Box>
                              <Box
                                sx={{
                                  display: "flex",
                                  alighnItems: "center",
                                  // textAlign:"center",
                                  marginTop: "4%",
                                }}
                              >
                                {row.name}
                              </Box>
                            </Box>
                          </StyledTableCell>
                          {/* <StyledTableCell
                            align="left"
                            sx={{ minWidth: { xs: "80px" } }}
                          >
                            {row.symbol}
                          </StyledTableCell> */}
                          <StyledTableCell
                            align="left"
                            sx={{ minWidth: { xs: "80px" }, color: "#05b169" }}
                          >
                            +{row.price}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.remainingSupply}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.remainingSupply}
                          </StyledTableCell>
                          <StyledTableCell sx={{}} align="left">
                            {row.remainingSupply}
                          </StyledTableCell>
                          <StyledTableCell align="left">
                            {row.remainingSupply}
                          </StyledTableCell>
                        </StyledTableRow>
                      );
                    })}
                  </TableBody>
                </>
              )}
            </Table>
          </TableContainer>
        </Box>
      </Stack>
    </Container>
  );
};

export default CoinTable;

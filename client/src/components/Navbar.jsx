import React from "react";

// *** MUI
import { Badge } from "@mui/material";

// *** Icon
import { Search, ShoppingCart as ShoppingCartIcon } from "@mui/icons-material";

// *** Third Library
import styled from "styled-components";

// *** Components
import { mobile } from "../responsive";

// *** Styled Components
const Container = styled.div`
  height: 60px;
  ${mobile({
    height: "50px",
  })}
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${mobile({
    padding: "10px 0px",
  })}
`;

const Left = styled.div`
  ${"" /* width: 33.33%; */}
  flex:1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14;
  cursor: pointer;
  ${mobile({
    display: "none",
  })}
`;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
  ${mobile({
    width: "50px",
  })}
`;

const Center = styled.div`
  ${"" /* width: 33.33%; */}
  flex:1
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
  ${mobile({
    fontSize: "24px",
  })}
`;

const Right = styled.div`
  ${"" /* width: 33.33%; */}
  flex:1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  ${mobile({
    justifyContent: "center",
    flex: 2,
  })}
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
  ${mobile({
    fontSize: "12px",
    marginLeft: "10px",
  })}
`;

// *** End Styled Components

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input placeholder="Search" />
            <Search style={{ color: "gray", fontSize: 16 }} />
          </SearchContainer>
        </Left>
        <Center>
          <Logo>HANURI.</Logo>
        </Center>
        <Right>
          <MenuItem>REGISTER</MenuItem>
          <MenuItem>SIGN IN</MenuItem>
          <MenuItem>
            <Badge badgeContent={4} color="primary">
              <ShoppingCartIcon color="action" />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
